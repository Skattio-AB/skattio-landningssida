import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-32 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
