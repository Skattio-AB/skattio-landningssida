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
        <article className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-navy-900 prose-p:text-neutral-600 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-navy-900 prose-li:text-neutral-600">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
