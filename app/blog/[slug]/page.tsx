import { notFound } from 'next/navigation';

const posts = [
  {
    slug: 'designing-for-dark-mode-first',
    title: 'Designing for Dark Mode First',
    date: 'Dec 10, 2025',
    summary: 'Thoughts on building interfaces that feel native in dark environments.',
    body: `Dark mode is not just flipping a switch on your color palette.

It changes hierarchy, the way contrast feels, how motion draws the eye,
 and how your UI blends into the user\'s environment.

In this post, I talk about:

- why I design dark-first instead of light-first,
- how to keep contrast comfortable for long sessions,
- and how subtle glows / gradients can replace harsh borders.`,
  },
  {
    slug: 'modern-react-and-nextjs-patterns',
    title: 'Modern React & Next.js Patterns',
    date: 'Nov 28, 2025',
    summary: 'How I structure apps with the App Router, Server Components, and more.',
    body: `The React and Next.js ecosystem has shifted quickly.

Server Components, nested layouts, and streaming all influence how I
structure projects, from routing to data fetching and UI boundaries.`,
  },
  {
    slug: 'making-performance-feel-effortless',
    title: 'Making Performance Feel Effortless',
    date: 'Nov 2, 2025',
    summary: 'Micro-interactions, loading states, and perceived performance tricks.',
    body: `Real performance is important, but perceived performance is what your
 users actually experience.

Skeletons, optimistic UI, and tiny interaction details can make an
interface feel instant even when the network is not.`,
  },
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted/80">Analysis</p>
        <h1 className="text-3xl sm:text-4xl font-semibold">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
          <span className="rounded-full bg-black/50 border border-border/80 px-3 py-1">
            {post.date}
          </span>
          <span className="rounded-full bg-accent-soft/80 border border-accent/60 px-3 py-1 text-accent/90">
            Case study
          </span>
        </div>
        <p className="max-w-2xl text-sm text-muted">{post.summary}</p>
      </header>

      <div className="prose prose-invert max-w-none text-sm leading-relaxed prose-p:text-slate-200 prose-li:text-slate-200">
        {post.body.split('\n\n').map((block, idx) => (
          <p key={idx}>{block}</p>
        ))}
      </div>
    </article>
  );
}
