"use client";

import { Clock, ArrowRight, Tag } from "lucide-react";
import { useGetBlogPostsQuery } from "@/lib/features/portfolioApi";

const categoryColors: Record<string, string> = {
  Backend:  "text-green-600 dark:text-green-400 bg-green-400/10 border-green-400/20",
  Mobile:   "text-purple-600 dark:text-purple-400 bg-purple-400/10 border-purple-400/20",
  Frontend: "text-blue-600 dark:text-blue-400 bg-blue-400/10 border-blue-400/20",
  DevOps:   "text-orange-600 dark:text-orange-400 bg-orange-400/10 border-orange-400/20",
};

export default function BlogPage() {
  const { data: posts } = useGetBlogPostsQuery();

  return (
    <div className="py-10 max-w-3xl">
      <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-2">Thoughts & Learnings</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Blog</h1>

      <div className="space-y-5">
        {(posts ?? []).map((post) => (
          <article
            key={post.id}
            className="group p-6 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600/60 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[post.category] ?? "text-blue-500 dark:text-blue-400 bg-blue-400/10 border-blue-400/20"}`}>
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-slate-500 text-xs shrink-0">
                <Clock size={11} /> {post.readTime}
              </div>
            </div>

            <h2 className="text-slate-900 dark:text-white font-semibold text-base mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-slate-500 text-xs">
                    <Tag size={9} /> {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-blue-500 dark:text-blue-400 text-xs group-hover:gap-2 transition-all">
                Read more <ArrowRight size={12} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
