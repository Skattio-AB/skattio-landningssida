import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: "Blogg — Guider om skatt och deklaration",
  description:
    "Läs våra guider om svensk skatt, deklaration, avdrag och sparande. Praktiska tips som hjälper dig förstå din skatt.",
};

export default function BlogPage() {
  return (
    <>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
        Skatteguider
      </h1>
      <p className="mt-3 text-base leading-relaxed text-neutral-500">
        Praktiska guider om svensk skatt, deklaration och avdrag.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogg/${post.slug}`}
            className="group rounded-2xl border border-neutral-200 p-6 transition-all duration-200 hover:border-neutral-400 hover:shadow-sm"
          >
            <span className="text-xs font-medium text-neutral-400">
              {post.category}
            </span>
            <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-navy-900 group-hover:text-accent-600 transition-colors duration-200">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 line-clamp-2">
              {post.description}
            </p>
            <time className="mt-4 block text-xs text-neutral-400">
              {new Date(post.publishedAt).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </Link>
        ))}
      </div>
    </>
  );
}
