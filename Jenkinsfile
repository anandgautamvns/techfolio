// ──────────────────────────────────────────────────────────────────────────────
// TechPortfolio — Jenkins CI/CD Pipeline
//
// Triggers automatically on every push / merge to the `main` branch.
//
// Prerequisites on the Jenkins server:
//   • Docker installed and the Jenkins user added to the "docker" group
//   • "GitHub" plugin  →  Configure webhook in GitHub:
//       Payload URL : http://<jenkins-host>/github-webhook/
//       Content type: application/json
//       Events      : Pushes  (or "Just the push event")
//   • NodeJS plugin (optional — only needed if you run lint outside Docker)
// ──────────────────────────────────────────────────────────────────────────────

pipeline {

    agent any

    // ── Only run this pipeline for the main branch ───────────────────────────
    // Remove the when{} block below if you want it to run on all branches.

    options {
        disableConcurrentBuilds()                          // no parallel runs
        buildDiscarder(logRotator(numToKeepStr: '10'))     // keep last 10 builds
        timeout(time: 30, unit: 'MINUTES')
    }

    triggers {
        // Fires when GitHub delivers a push webhook (requires the GitHub plugin)
        githubPush()
    }

    environment {
        APP_NAME       = 'techfolio'
        // Each build gets a unique tag; "latest" always points to the newest build
        IMAGE_TAG      = "${APP_NAME}:${BUILD_NUMBER}"
        IMAGE_LATEST   = "${APP_NAME}:latest"
        IMAGE_PREV     = "${APP_NAME}:prev"   // kept for one-step rollback
        CONTAINER_NAME = "${APP_NAME}-prod"
        HOST_PORT      = '3000'
        CONTAINER_PORT = '3000'
    }

    stages {

        // ── 1. Checkout ───────────────────────────────────────────────────────
        stage('Checkout') {
            when {
                branch 'main'
            }
            steps {
                checkout scm
                script {
                    env.GIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                }
                echo "Branch: ${env.BRANCH_NAME} | Commit: ${env.GIT_SHORT} | Build: #${BUILD_NUMBER}"
            }
        }

        // ── 2. Lint ───────────────────────────────────────────────────────────
        stage('Lint') {
            when {
                branch 'main'
            }
            steps {
                // Run lint inside a temporary container so no Node on the host is needed
                sh '''
                    docker run --rm \
                        -v "$PWD":/app \
                        -w /app \
                        node:20-alpine \
                        sh -c "npm ci --silent && npm run lint"
                '''
            }
        }

        // ── 3. Build Docker image ─────────────────────────────────────────────
        stage('Build Image') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Preserve the current "latest" as "prev" before overwriting it
                    sh '''
                        docker tag ${IMAGE_LATEST} ${IMAGE_PREV} 2>/dev/null || true
                    '''

                    sh """
                        docker build \
                            --tag ${IMAGE_TAG} \
                            --tag ${IMAGE_LATEST} \
                            --label "app=${APP_NAME}" \
                            --label "git-commit=${env.GIT_SHORT}" \
                            --label "build-number=${BUILD_NUMBER}" \
                            .
                    """
                }
                echo "Image built: ${IMAGE_TAG}"
            }
        }

        // ── 4. Smoke-test the image ───────────────────────────────────────────
        stage('Smoke Test') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    CID=$(docker run -d --rm -p 3099:3000 ${IMAGE_LATEST})
                    sleep 6
                    HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3099/)
                    docker stop "$CID" || true
                    if [ "$HTTP" != "200" ]; then
                        echo "Smoke test FAILED — HTTP $HTTP"
                        exit 1
                    fi
                    echo "Smoke test PASSED — HTTP $HTTP"
                '''
            }
        }

        // ── 5. Deploy ─────────────────────────────────────────────────────────
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                    # Gracefully stop & remove the running container (ignore errors if not found)
                    docker stop  ${CONTAINER_NAME} 2>/dev/null || true
                    docker rm    ${CONTAINER_NAME} 2>/dev/null || true

                    # Start new container from the just-built image
                    docker run -d \
                        --name        ${CONTAINER_NAME} \
                        --restart     unless-stopped \
                        -p            ${HOST_PORT}:${CONTAINER_PORT} \
                        --env         NODE_ENV=production \
                        --env         NEXT_TELEMETRY_DISABLED=1 \
                        --label       "app=${APP_NAME}" \
                        ${IMAGE_LATEST}

                    echo "Container ${CONTAINER_NAME} started"
                '''
            }
        }

        // ── 6. Health check ───────────────────────────────────────────────────
        stage('Health Check') {
            when {
                branch 'main'
            }
            steps {
                retry(3) {
                    sh '''
                        sleep 5
                        HTTP=$(curl -sf -o /dev/null -w "%{http_code}" http://localhost:${HOST_PORT}/)
                        if [ "$HTTP" != "200" ]; then
                            echo "Health check FAILED — HTTP $HTTP"
                            exit 1
                        fi
                        echo "Health check PASSED — HTTP $HTTP"
                    '''
                }
            }
        }

        // ── 7. Prune old images ───────────────────────────────────────────────
        stage('Cleanup') {
            when {
                branch 'main'
            }
            steps {
                // Remove dangling/untagged images to free disk space
                sh 'docker image prune -f || true'
                // Remove build images older than the last two (keep :latest and :prev)
                sh '''
                    docker images --format "{{.Repository}}:{{.Tag}} {{.ID}}" \
                        | grep "^${APP_NAME}:" \
                        | grep -v ":latest" \
                        | grep -v ":prev" \
                        | awk "{print \\$2}" \
                        | xargs -r docker rmi -f || true
                '''
            }
        }
    }

    // ── Post actions ──────────────────────────────────────────────────────────
    post {

        success {
            echo """
            ✅  Deployment successful!
                App    : http://<your-server>:${HOST_PORT}
                Image  : ${IMAGE_LATEST}
                Commit : ${env.GIT_SHORT}
                Build  : #${BUILD_NUMBER}
            """
        }

        failure {
            echo "❌  Pipeline failed — attempting rollback to :prev image..."
            sh '''
                docker stop ${CONTAINER_NAME} 2>/dev/null || true
                docker rm   ${CONTAINER_NAME} 2>/dev/null || true

                # Roll back to the previously running image if it exists
                if docker image inspect ${IMAGE_PREV} > /dev/null 2>&1; then
                    docker run -d \
                        --name    ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        -p        ${HOST_PORT}:${CONTAINER_PORT} \
                        --env     NODE_ENV=production \
                        ${IMAGE_PREV}
                    echo "Rolled back to ${IMAGE_PREV}"
                else
                    echo "No previous image found — container is down"
                fi
            '''
        }

        always {
            // Clean the Jenkins workspace to save disk space
            cleanWs()
        }
    }
}
