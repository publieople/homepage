"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "博客", href: "#blog" },
  { label: "简历", href: "#resume" },
  { label: "联系", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection();

  // Use framer-motion's useScroll instead of window.addEventListener("scroll")
  // Taste Skill Section 5.D: window.addEventListener("scroll") is banned
  const { scrollY } = useScroll();
  scrollY.on("change", (latest) => {
    const isScrolled = latest > 20;
    if (isScrolled !== scrolled) setScrolled(isScrolled);
  });

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      ref={scrollRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="flex w-full items-center justify-between px-4 sm:px-6 h-16">
        {/* Section indicator — frosted-glass pill, current page slug.
            Enter/exit both dissolve through a frosted-glass blur. */}
        <a
          href="#"
          className="font-mono text-[11px] tracking-[0.22em] uppercase text-foreground"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={active}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block leading-none"
            >
              /{active}
            </motion.span>
          </AnimatePresence>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="px-3 py-2 text-xs font-[400] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-1">
            <ModeToggle />
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
