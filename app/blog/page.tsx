import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    title: 'Designing for Dark Mode First',
    description: 'Thoughts on building interfaces that feel native in dark environments.',
    image:
      'https://images.pexels.com/photos/886743/pexels-photo-886743.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Dec 10, 2025',
    slug: 'designing-for-dark-mode-first',
  },
  {
    title: 'Modern React & Next.js Patterns',
    description: 'How I structure apps with the App Router, Server Components, and more.',
    image:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Nov 28, 2025',
    slug: 'modern-react-and-nextjs-patterns',
  },
  {
    title: 'Making Performance Feel Effortless',
    description: 'Micro-interactions, loading states, and perceived performance tricks.',
    image:
      'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: 'Nov 2, 2025',
    slug: 'making-performance-feel-effortless',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted/80">Analysis</p>
        <h1 className="text-3xl sm:text-4xl font-semibold">Analysis & notes</h1>
        <p className="max-w-2xl text-sm text-muted">
          Longer-form analysis on products, interfaces, systems and the classical
          literature, philosophy and art that influence them.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-slate-950/60 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200">
                <span className="rounded-full bg-black/75 px-3 py-1 font-medium">
                  {post.date}
                </span>
                <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px]">
                  Analysis
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h2 className="font-medium text-sm sm:text-base text-foreground">
                {post.title}
              </h2>
              <p className="text-xs text-muted leading-relaxed flex-1">
                {post.description}
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted group-hover:text-foreground">
                Read analysis
                <span>↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
