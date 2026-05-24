"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "hero", label: "首页" },
  { id: "about", label: "关于" },
  { id: "projects", label: "项目" },
  { id: "blog", label: "文章" },
  { id: "resume", label: "简历" },
  { id: "contact", label: "联系" },
];

export function SectionNav() {
  const [active, setActive] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const visible: Record<string, boolean> = {};
    let pending: string | null = null;

    const update = () => {
      // Pick the topmost visible section
      for (const { id } of sections) {
        if (visible[id]) {
          if (pending !== id) {
            pending = id;
            setActive(id);
          }
          return;
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible[entry.target.id] = entry.isIntersecting;
        }
        update();
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex-col items-center gap-3 md:flex">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center justify-center"
          aria-label={`跳转到 ${label}`}
        >
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-muted/90 backdrop-blur px-2 py-1 text-[10px] font-[400] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "h-2.5 w-2.5 bg-primary shadow-[0_0_8px] shadow-primary/50"
                : "h-1.5 w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        </button>
      ))}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent -z-10" />
    </nav>
  );
}
