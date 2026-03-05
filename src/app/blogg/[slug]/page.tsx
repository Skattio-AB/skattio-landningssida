import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      url: `${siteConfig.url}/blogg/${post.slug}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blogg/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article
        className={[
          "max-w-none font-sans text-base leading-relaxed text-neutral-600",
          // h1
          "[&>h1]:font-display [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:tracking-tight [&>h1]:leading-[1.15] [&>h1]:text-navy-900 sm:[&>h1]:text-4xl",
          // Meta
          "[&>.meta]:text-sm [&>.meta]:font-medium [&>.meta]:text-neutral-400 [&>.meta]:mt-3 [&>.meta]:mb-12",
          // h2
          "[&>h2]:font-display [&>h2]:text-lg [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-navy-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:border-navy-100 sm:[&>h2]:text-xl",
          // h3
          "[&>h3]:font-display [&>h3]:text-base [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-navy-900 [&>h3]:mt-8 [&>h3]:mb-3 sm:[&>h3]:text-lg",
          // Paragraphs
          "[&>p]:my-4 [&>p]:leading-relaxed",
          // Links
          "[&_a]:text-accent-600 [&_a]:font-medium [&_a]:no-underline hover:[&_a]:underline",
          // Strong
          "[&_strong]:text-navy-900 [&_strong]:font-semibold",
          // Lists
          "[&>ul]:my-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2",
          "[&_li]:leading-relaxed",
          "[&_li]:marker:text-navy-200",
          // Tables
          "[&>table]:my-6 [&>table]:w-full [&>table]:text-sm [&>table]:border-collapse",
          "[&_th]:text-left [&_th]:font-display [&_th]:font-semibold [&_th]:text-navy-900 [&_th]:px-4 [&_th]:py-3 [&_th]:border-b [&_th]:border-navy-100 [&_th]:bg-navy-50/50",
          "[&_td]:px-4 [&_td]:py-3 [&_td]:border-b [&_td]:border-neutral-100",
          // Blockquote
          "[&>blockquote]:my-6 [&>blockquote]:border-l-4 [&>blockquote]:border-accent-200 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-neutral-500",
        ].join(" ")}
      >
        {post.content()}
      </article>
    </>
  );
}
