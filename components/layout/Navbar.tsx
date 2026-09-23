"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-gold-500/15 bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors",
                  active ? "text-gold-400" : "text-ivory-300 hover:text-gold-400"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/calculators" variant="primary" className="px-5 py-2.5 text-xs">
            Open Calculators
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-ivory-100 md:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-gold-500/15 bg-navy-950 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ivory-200 hover:bg-navy-800 hover:text-gold-400"
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
