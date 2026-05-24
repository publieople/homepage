"use client";

const sections = [
  { id: "hero", label: "首页" },
  { id: "about", label: "关于" },
  { id: "projects", label: "项目" },
  { id: "blog", label: "文章" },
  { id: "resume", label: "简历" },
  { id: "contact", label: "联系" },
];

export function SectionNav() {
  // Uses native <a href="#id"> for guaranteed scroll-to-anchor behavior
  // Active state tracking via IntersectionObserver (client-side only)
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex-col items-center gap-3 md:flex">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group relative flex items-center justify-center"
          aria-label={`跳转到 ${label}`}
        >
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-muted/90 backdrop-blur px-2 py-1 text-[10px] font-[400] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            {label}
          </span>
          <span className="block h-2 w-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/60 transition-colors" />
        </a>
      ))}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent -z-10" />
    </nav>
  );
}
