import { AlertCircle, FolderX, Layers, Link2Off } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Friction in capture",
    description:
      'Existing tools ask "where does this go?" before you can even write. That costs ideas and time.',
  },
  {
    icon: FolderX,
    title: "Lost knowledge",
    description:
      "Information gets buried in folders, notebooks, or endless scrolls, never to be found again.",
  },
  {
    icon: Layers,
    title: "Rigid organization",
    description:
      "Forced to fit thoughts into structures that don't match your mental model.",
  },
  {
    icon: Link2Off,
    title: "Disconnected insights",
    description:
      "Notes stay siloed, so related ideas never surface together when you need them.",
  },
];

export function Problems() {
  return (
    <section id="problem" className="scroll-mt-20 py-16 lg:py-24 px-5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            The problem with traditional note-taking
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Most tools force you to organize before you capture. By the time you
            decide where something goes, the thought is already gone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-lg border border-border bg-card/30 p-6 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/30 p-3 group-hover:bg-accent transition-colors">
                  <problem.icon className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
