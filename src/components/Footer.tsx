import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Image
            src="/images/logo_white.svg"
            alt={siteConfig.name}
            width={120}
            height={32}
          />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-300">
            <a
              href={siteConfig.links.app}
              className="transition-colors duration-200 hover:text-white"
            >
              Logga in
            </a>
            <a href="#faq" className="transition-colors duration-200 hover:text-white">
              Vanliga frågor
            </a>
            <a href="#priser" className="transition-colors duration-200 hover:text-white">
              Priser
            </a>
          </nav>
        </div>

        <div className="my-8 h-px bg-navy-800" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-navy-400">
            &copy; {new Date().getFullYear()} Skattio AB. Alla rättigheter förbehållna.
          </p>

          {/* Policy links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-navy-500">
            <a href="#" className="transition-colors duration-200 hover:text-navy-300">
              Användarvillkor
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-navy-300">
              Integritetspolicy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-navy-300">
              Cookies
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-navy-300">
              GDPR
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
