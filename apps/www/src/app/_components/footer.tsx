import { Github } from "lucide-react";
import Image from "next/image";
import {
  GITHUB_BOARD_URL,
  GITHUB_PROJECT_URL,
  GITHUB_RELEASES_URL,
  GITHUB_WIKI_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 lg:mt-24 py-12 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="col-span-1 max-w-sm">
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                alt="Loci logo"
                src="/logo.svg"
                width={18}
                height={18}
                className="dark:invert"
              />
              <span className="text-xl">Loci</span>
            </a>
            <p className="mt-3 text-muted-foreground">
              Your external brain for instant capture and smart retrieval. Open
              source, built in public, and designed for the way you think.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={GITHUB_PROJECT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_BOARD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_WIKI_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Wiki
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Loci. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              aria-label="GitHub"
              href="https://github.com/emiliosheinz/loci"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
