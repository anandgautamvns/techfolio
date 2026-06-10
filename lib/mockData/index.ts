export const developerProfile = {
  name: "Anand Gautam",
  role: "Senior Software Developer",
  tagline: "Full Stack Web & Mobile Developer",
  bio: "I build scalable, performant, and user-centric applications for the web and mobile. With 8+ years of experience, I turn ideas into impactful digital solutions.",
  available: true,
  email: "anand@techfolio.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  cvUrl: "/cv.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

export const stats = [
  { id: 1, value: "8+", label: "Years Experience", icon: "calendar" },
  { id: 2, value: "40+", label: "Projects Completed", icon: "briefcase" },
  { id: 3, value: "30+", label: "Happy Clients", icon: "smile" },
  { id: 4, value: "100%", label: "Commitment", icon: "rocket" },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive and high-performance web applications.",
    icon: "code2",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Cross-platform mobile apps for Android & iOS using Flutter & React Native.",
    icon: "smartphone",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    id: 3,
    title: "API Development",
    description: "RESTful & GraphQL APIs that are secure, scalable and well-documented.",
    icon: "cloud",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Clean, intuitive and user-friendly design that enhances experience.",
    icon: "pen-tool",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export const techLove = [
  { id: 1, name: "React", icon: "⚛️" },
  { id: 2, name: "Next.js", icon: "N" },
  { id: 3, name: "Node.js", icon: "🟢" },
  { id: 4, name: "TypeScript", icon: "TS" },
  { id: 5, name: "Flutter", icon: "🐦" },
];

export const techStack = [
  { id: 1, category: "Frontend", techs: "React, Next.js, TypeScript, Tailwind CSS", color: "text-blue-400", icon: "monitor" },
  { id: 2, category: "Backend", techs: "Node.js, Express.js, NestJS, GraphQL", color: "text-green-400", icon: "server" },
  { id: 3, category: "Database", techs: "MongoDB, PostgreSQL, Firebase, Redis", color: "text-yellow-400", icon: "database" },
  { id: 4, category: "Mobile", techs: "Flutter, React Native, Dart", color: "text-cyan-400", icon: "smartphone" },
  { id: 5, category: "DevOps & Tools", techs: "AWS, Docker, GitHub Actions, CI/CD", color: "text-orange-400", icon: "settings" },
];

export const skills = [
  { id: 1, name: "React / Next.js", level: 95, category: "Frontend" },
  { id: 2, name: "TypeScript", level: 92, category: "Frontend" },
  { id: 3, name: "Tailwind CSS", level: 90, category: "Frontend" },
  { id: 4, name: "Node.js", level: 88, category: "Backend" },
  { id: 5, name: "NestJS", level: 82, category: "Backend" },
  { id: 6, name: "GraphQL", level: 80, category: "Backend" },
  { id: 7, name: "Flutter", level: 85, category: "Mobile" },
  { id: 8, name: "MongoDB", level: 78, category: "Database" },
  { id: 9, name: "PostgreSQL", level: 80, category: "Database" },
  { id: 10, name: "AWS", level: 75, category: "DevOps" },
  { id: 11, name: "Docker", level: 78, category: "DevOps" },
  { id: 12, name: "CI/CD", level: 76, category: "DevOps" },
];

export const experience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2021 – Present",
    type: "Full-time",
    description: "Led a team of 6 engineers to build a SaaS platform serving 50K+ users. Architected micro-services with Node.js and deployed on AWS.",
    achievements: [
      "Reduced API response time by 40% via Redis caching",
      "Shipped mobile app (Flutter) with 4.8★ rating on App Store",
      "Mentored 3 junior developers",
    ],
    tech: ["React", "Node.js", "AWS", "Flutter", "MongoDB"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2019 – 2021",
    type: "Full-time",
    description: "Built and maintained multiple client-facing web apps using React and Express, delivering features ahead of schedule.",
    achievements: [
      "Increased test coverage from 30% to 85%",
      "Migrated legacy jQuery codebase to React",
      "Integrated third-party payment and auth systems",
    ],
    tech: ["React", "Express.js", "PostgreSQL", "TypeScript"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    period: "2017 – 2019",
    type: "Full-time",
    description: "Designed and implemented pixel-perfect UIs for 15+ client projects in industries ranging from e-commerce to healthcare.",
    achievements: [
      "Delivered 15+ projects on time",
      "Improved Lighthouse score from 55 to 95",
      "Built reusable component library used across 8 projects",
    ],
    tech: ["React", "SCSS", "JavaScript", "Figma"],
  },
];

export const projects = [
  {
    id: 1,
    title: "SaaS Dashboard Platform",
    description: "A multi-tenant SaaS dashboard with real-time analytics, role-based access, and custom reporting.",
    image: "/projects/saas.png",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    category: "Web",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Full-featured Flutter app with cart, payments via Stripe, push notifications, and offline support.",
    image: "/projects/ecommerce.png",
    tech: ["Flutter", "Dart", "Firebase", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    category: "Mobile",
  },
  {
    id: 3,
    title: "GraphQL API Gateway",
    description: "Federated GraphQL gateway that aggregates 5 microservices with caching, auth, and rate limiting.",
    image: "/projects/api.png",
    tech: ["Node.js", "GraphQL", "Apollo", "Docker", "AWS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
    category: "Backend",
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description: "WebSocket-based chat application with rooms, file sharing, and message encryption.",
    image: "/projects/chat.png",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    category: "Web",
  },
  {
    id: 5,
    title: "DevOps CI/CD Pipeline",
    description: "Automated pipeline with GitHub Actions, Docker, and AWS ECS deployment with zero downtime.",
    image: "/projects/devops.png",
    tech: ["GitHub Actions", "Docker", "AWS ECS", "Terraform"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    category: "DevOps",
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "LLM-powered tool for generating and editing blog posts, social captions, and ad copy.",
    image: "/projects/ai.png",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false,
    category: "AI",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with NestJS and GraphQL",
    excerpt: "A deep dive into architecting production-grade APIs using NestJS modules, guards, and GraphQL federation.",
    date: "2026-05-15",
    readTime: "8 min read",
    category: "Backend",
    tags: ["NestJS", "GraphQL", "Node.js"],
    slug: "building-scalable-apis-nestjs-graphql",
  },
  {
    id: 2,
    title: "Flutter State Management: Riverpod vs Bloc in 2026",
    excerpt: "An honest comparison of the two most popular Flutter state management approaches for large-scale apps.",
    date: "2026-04-22",
    readTime: "6 min read",
    category: "Mobile",
    tags: ["Flutter", "Riverpod", "Bloc"],
    slug: "flutter-state-management-riverpod-vs-bloc",
  },
  {
    id: 3,
    title: "Next.js 16 App Router: What's New and How to Migrate",
    excerpt: "Exploring the breaking changes in Next.js 16, new conventions, and a step-by-step migration guide.",
    date: "2026-03-10",
    readTime: "10 min read",
    category: "Frontend",
    tags: ["Next.js", "React", "Migration"],
    slug: "nextjs-16-app-router-whats-new",
  },
  {
    id: 4,
    title: "Zero-Downtime Deployments with Docker and AWS ECS",
    excerpt: "How we achieved zero-downtime blue/green deployments using Docker Compose, ECS, and ALB target groups.",
    date: "2026-02-05",
    readTime: "7 min read",
    category: "DevOps",
    tags: ["Docker", "AWS", "CI/CD"],
    slug: "zero-downtime-deployments-docker-aws",
  },
];

export const aboutMe = {
  story: "I'm a passionate Full Stack Developer with 8+ years of experience building products that users love. I started my journey as a frontend developer and gradually expanded into backend, mobile, and DevOps — which gives me a rare end-to-end perspective on software delivery.",
  mission: "I believe great software is the intersection of clean code, thoughtful UX, and reliable infrastructure. My mission is to help startups and businesses ship faster without sacrificing quality.",
  funFacts: [
    "☕ Coffee-driven developer",
    "🌍 Worked with clients across 12 countries",
    "📚 Maintaining an open-source component library",
    "🎮 Occasional game developer on weekends",
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of California, Berkeley",
      year: "2017",
    },
  ],
};
