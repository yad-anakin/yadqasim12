import Image from 'next/image';

const projects = [
  {
    title: 'Nebula UI Kit',
    description: 'A modern, accessible component library built with TailwindCSS.',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Design System',
  },
  {
    title: 'Realtime Collab Board',
    description: 'Kanban-style task board with live presence and optimistic updates.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Fullstack',
  },
  {
    title: 'DevTrack Analytics',
    description: 'Developer productivity insights with clean, minimal dashboards.',
    image:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Dashboard',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted/80">Projects</p>
        <h1 className="text-3xl sm:text-4xl font-semibold">Selected work</h1>
        <p className="max-w-2xl text-sm text-muted">
          A mix of shipped products, internal tools, and experiments that explore
          performance, interaction and dark-first design systems.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-slate-950/60 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] text-slate-100">
                {project.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h2 className="font-medium text-sm sm:text-base text-foreground">
                {project.title}
              </h2>
              <p className="text-xs text-muted leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
