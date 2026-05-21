import { GithubIcon } from "@/components/sections/github-icon";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-[300] text-muted-foreground/50">
          © {new Date().getFullYear()} 人民公仆 / Publieople
        </p>
        <a
          href="https://github.com/publieople"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
        >
            <GithubIcon className="size-4" />
        </a>
      </div>
    </footer>
  );
}
