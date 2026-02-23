import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-32 pb-20">
        <article
          className={[
            "max-w-none font-sans text-base leading-relaxed text-neutral-600",
            // h1
            "[&>h1]:font-display [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:tracking-tight [&>h1]:leading-[1.15] [&>h1]:text-navy-900 sm:[&>h1]:text-4xl",
            // Lead / date
            "[&>.lead]:text-sm [&>.lead]:font-medium [&>.lead]:text-neutral-400 [&>.lead]:mt-3 [&>.lead]:mb-12",
            // h2
            "[&>h2]:font-display [&>h2]:text-lg [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-navy-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-3 [&>h2]:border-b [&>h2]:border-navy-100 sm:[&>h2]:text-xl",
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
          ].join(" ")}
        >
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
