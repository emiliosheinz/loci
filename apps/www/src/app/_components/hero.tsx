import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_PROJECT_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="container relative min-h-[calc(100vh-4rem)] px-5 sm:px-20 py-16 lg:py-24 min-w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background [mask-image:radial-gradient(ellipse_at_center,transparent_25%,white_25%)]" />
      <div className="relative flex flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-foreground text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-2"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-2"></span>
          </span>
          Built in public, open source from day one
        </div>
        <div className="flex max-w-5xl flex-col items-center gap-6">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Capture anything, in any moment
          </h1>
          <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            A simple, frictionless app to capture text, links, images, audio,
            and files, allowing you to find them later with smart search and
            automatic connections of related topics.
          </p>
          <div className="flex flex-col items-center gap-4 pt-5 sm:flex-row">
            <Button asChild size="lg" variant="outline">
              <a
                href={GITHUB_PROJECT_URL}
                className="flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
