import { Inbox, Network, Search, Send, Tag, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Capture",
    description:
      "Capture from anywhere with global hotkeys, mobile share sheets, and browser extensions. Text, voice, images, files — all instantly.",
  },
  {
    icon: Inbox,
    title: "Universal Inbox",
    description:
      "Everything lands in one frictionless stream. No folders, no tags required. Just capture and move on.",
  },
  {
    icon: Search,
    title: "Smart Retrieval",
    description:
      "Natural language search across all your notes. OCR from images, transcribed audio, and contextual surfacing of related content.",
  },
  {
    icon: Network,
    title: "Automatic Connections",
    description:
      "Your notes form a dynamic knowledge graph that updates as you add more. Explore clusters and relationships visually.",
  },
  {
    icon: Tag,
    title: "Lightweight Organization",
    description:
      "Add tags and links later if you want. Smart suggestions and auto-clustering help organize without the overhead.",
  },
  {
    icon: Send,
    title: "Cross-Platform Sync",
    description:
      "Real-time sync across desktop, mobile, and web. Works offline and syncs when you're back online.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-16 lg:py-24 px-5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Built for speed, designed for connections
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Loci removes friction from every step — from capture to retrieval to
            discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border border-border bg-card/30 p-6 hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/30 p-3 group-hover:bg-accent transition-colors">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
