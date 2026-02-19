import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600">
              <span className="text-xs font-bold text-white font-heading">S</span>
            </div>
            <span className="text-base font-bold font-heading text-text-primary">
              {siteConfig.name}
            </span>
          </div>

          <nav className="flex gap-6 text-sm text-text-secondary">
            <a
              href={siteConfig.links.app}
              className="transition-colors hover:text-text-primary"
            >
              Logga in
            </a>
            <a href="#faq" className="transition-colors hover:text-text-primary">
              Vanliga frågor
            </a>
            <a href="#priser" className="transition-colors hover:text-text-primary">
              Priser
            </a>
          </nav>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Skattio AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
