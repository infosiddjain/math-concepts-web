import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { footerNav, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-crimson-500/15 bg-ink-950">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-400">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 text-steel-400 transition-colors hover:border-crimson-500/50 hover:text-crimson-400"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-crimson-400">
              Product
            </p>
            <ul className="mt-4 space-y-3">
              {footerNav.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-steel-400 transition-colors hover:text-crimson-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-crimson-400">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-steel-400 transition-colors hover:text-crimson-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-steel-400 transition-colors hover:text-crimson-400"
            >
              <Icon name="mail" className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-8 sm:flex-row">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} {site.name}. Crafted by{" "}
            <a
              href="https://portfolio-five-brown-mafnjkhjpf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-400 transition-colors hover:text-crimson-400"
            >
              {site.creator}
            </a>
            .
          </p>
          <p className="text-xs text-steel-500">
            Built for learning and everyday calculation — not a substitute for professional financial, engineering, or medical advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
