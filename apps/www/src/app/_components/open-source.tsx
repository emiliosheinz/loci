import { Code2, CodeXml, Eye, Puzzle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GITHUB_CONTRIBUTING_URL } from "@/lib/constants";

const openSource = [
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Every commit, every decision, every feature — built in the open for everyone to see and contribute to.",
  },
  {
    icon: Code2,
    title: "API-First Design",
    description:
      "Every feature is exposed through public APIs. Build integrations, extensions, and tools on top of Loci.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Join developers and knowledge workers shaping the future of personal knowledge management.",
  },
  {
    icon: Puzzle,
    title: "Extensible by Design",
    description:
      "Integrate with Raycast, MCP servers, browser extensions, and more. Loci meets you where you work.",
  },
];

export function OpenSource() {
  return (
    <section id="open-source" className="scroll-mt-20 py-16 lg:py-24 px-5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance text-center lg:text-left">
                Open source, built in public
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center lg:text-left">
                Loci is completely transparent from day one. We believe the best
                tools are built with the community, not behind closed doors.
              </p>

              <div className="space-y-4 mb-8">
                {openSource.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="rounded-md bg-accent p-2 mt-1">
                      <item.icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="outline" className="self-center lg:self-start">
                <a
                  href={GITHUB_CONTRIBUTING_URL}
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeXml className="h-4 w-4" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-3xl rounded-full" />
              <div className="relative rounded-lg border border-border bg-card/80 backdrop-blur-sm p-6 shadow-2xl">
                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      loci-api.ts
                    </span>
                  </div>
                  <pre className="text-xs leading-relaxed">
                    <code className="text-muted-foreground">
                      <span className="text-purple-400">import</span> {"{"} loci{" "}
                      {"}"} <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">'@loci/sdk'</span>
                      {"\n\n"}
                      <span className="text-blue-400">const</span> client ={" "}
                      <span className="text-yellow-400">loci</span>({"{"}
                      {"\n  "}apiKey: process.env.
                      <span className="text-cyan-400">LOCI_API_KEY</span>
                      {"\n}"}){"\n\n"}
                      <span className="text-gray-500">
                        {/** biome-ignore lint/suspicious/noCommentText: comments in the codeblock */}
                        // Capture a thought instantly
                      </span>
                      {"\n"}
                      <span className="text-purple-400">await</span> client.
                      <span className="text-yellow-400">capture</span>({"{"}
                      {"\n  "}content:{" "}
                      <span className="text-green-400">"Build in public"</span>,
                      {"\n  "}type:{" "}
                      <span className="text-green-400">"text"</span>
                      {"\n}"}){"\n\n"}
                      <span className="text-gray-500">
                        {/** biome-ignore lint/suspicious/noCommentText: comments in the codeblock */}
                        // Search with natural language
                      </span>
                      {"\n"}
                      <span className="text-blue-400">const</span> results ={" "}
                      <span className="text-purple-400">await</span> client.
                      <span className="text-yellow-400">search</span>({"{"}
                      {"\n  "}query:{" "}
                      <span className="text-green-400">
                        "ideas about open source"
                      </span>
                      {"\n}"})
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
