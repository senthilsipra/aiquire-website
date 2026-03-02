import Link from "next/link";
import navigation from "@/content/navigation.json";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigation.footer.navigate.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {navigation.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={navigation.cta.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {navigation.cta.label}
                </Link>
              </li>
              <li>
                <a
                  href={navigation.external.siprahub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {navigation.external.siprahub.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-lg">
              Don&apos;t Just Adopt AI. AIQUIRE It.
            </p>
            <p className="text-sm text-white/50 mt-1">
              AIQUIRE &mdash; An AI Division of{" "}
              <a
                href={navigation.external.siprahub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/80 transition-colors"
              >
                Siprahub
              </a>
            </p>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} AIQUIRE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
