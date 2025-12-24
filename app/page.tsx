"use client";

import Image from 'next/image';
import ColorBends from './components/ColorBends';
import Spline from '@splinetool/react-spline';
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText';
import CurvedLoop from './components/CurvedLoop';
import ScrollVelocity from './components/ScrollVelocity';
import ASCIIText from './components/ASCIIText';

const projects = [
  {
    title: 'Nebula UI Kit',
    description: 'A modern, accessible component library built with TailwindCSS.',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    tag: 'Design System',
  },
  {
    title: 'Realtime Collab Board',
    description: 'Kanban-style task board with live presence and optimistic updates.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    tag: 'Fullstack',
  },
  {
    title: 'DevTrack Analytics',
    description: 'Developer productivity insights with clean, minimal dashboards.',
    image:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: '#',
    tag: 'Dashboard',
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen -mt-24">
      {/* Intro Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden -mx-4 md:-mx-8 lg:-mx-12">
        <div className="absolute inset-0 -z-10">
          <ColorBends
            colors={[]}
            rotation={-50}
            speed={0.3}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.00001}
            transparent
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="space-y-4 max-w-2xl relative px-4 sm:px-6 md:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-muted/80">Introduction</p>
          <BlurText
            text="Hi, I'm Yad, a developer and a pharmacist"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.4] justify-center"
          />
          <BlurText
            text="also interested in classical literature, art and philosophy"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-sm sm:text-base text-muted leading-relaxed justify-center"
          />
        </div>
      </section>

      {/* Curved marquee */}
      <section className="mt-4">
        <CurvedLoop
          marqueeText="Welcome ✦ to ✦ my ✦ portfolio ✦ and ✦ enjoy ✦"
          speed={2}
          curveAmount={400}
          direction="left"
          interactive={true}
        />
      </section>

      {/* Main Hero */}
      <section className="flex items-center py-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center w-full">
          <div className="space-y-8">
            <p className="text-sm tracking-[0.35em] uppercase text-muted/80">
              Portfolio · Analysis · Experiments
            </p>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
              I&apos;m{' '}
              <span className="font-medium text-foreground">Yad Qasim</span>
              {', '}
              <ShinyText
                text="I build fast, focused interfaces and share the work, experiments, and analysis on ideas that matter to me."
                speed={3}
              />
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-black/30 px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-black/60 hover:border-slate-400 transition-all duration-200"
              >
                View projects
                <span className="text-xs text-slate-400">· shipped & in-progress</span>
              </a>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-black/20 px-5 py-2.5 text-sm text-slate-300 hover:text-slate-100 hover:border-slate-400 hover:bg-black/50 transition-all duration-200"
              >
                Read analysis
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-4 text-xs text-slate-400">
              <span className="rounded-full border border-border/80 bg-black/40 px-3 py-1 text-slate-400">
                <ShinyText text="Next.js · React · TypeScript" speed={3} />
              </span>
              <span className="rounded-full border border-border/80 bg-black/40 px-3 py-1 text-slate-400">
                <ShinyText text="TailwindCSS · UI/UX" speed={3} />
              </span>
              <span className="rounded-full border border-border/80 bg-black/40 px-3 py-1 text-slate-400">
                <ShinyText text="Analysis on literature, philosophy & art" speed={3} />
              </span>
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[380px] md:h-[370px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <div className="relative h-full overflow-hidden rounded-3xl bg-neutral-950">
              <Spline
                scene="https://prod.spline.design/PmUY4GMrks9QXHMG/scene.splinecode"
                className=""
                style={{ border: 'none' }}
              />
              <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-40 bg-black/95 flex items-center justify-center px-2">
                <span className="text-[10px] text-muted text-center leading-snug">
                  Interactive space · hover to interact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll velocity text */}
      <section className="mt-2">
        <ScrollVelocity
          texts={["Yad Qasim", "portfolio"]}
          velocity={30}
          className="px-3 text-slate-300"
        />
      </section>

      {/* Stack & Preview */}
      <section className="mt-8 py-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center w-full">
          <div className="space-y-3 text-sm text-muted max-w-xl">
            <h3 className="text-base sm:text-lg font-medium text-foreground">
              About this portfolio & tech stack
            </h3>
            <p className="leading-relaxed">
              This portfolio is built with <span className="font-medium text-foreground">Next.js</span> and
              <span className="font-medium text-foreground"> TailwindCSS</span> on the frontend. I focus on
              smooth interactions, dark-first design and clear, readable layouts.
            </p>
            <p className="leading-relaxed">
              On the backend I usually work with <span className="font-medium text-foreground">Node.js</span>,
              <span className="font-medium text-foreground"> Express</span>,
              <span className="font-medium text-foreground"> MongoDB</span> and
              <span className="font-medium text-foreground"> Mongoose</span>, plus storage like
              <span className="font-medium text-foreground"> Backblaze B2</span>,
              <span className="font-medium text-foreground"> Supabase</span> and
              <span className="font-medium text-foreground"> Firebase</span> when a managed backend makes sense.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><defs><linearGradient id="SVGkw9x5bVJ" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><linearGradient id="SVGE3ljGbCT" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stopColor="#FFF"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/></linearGradient><circle id="SVGMFHNZdYm" cx="128" cy="128" r="128"/></defs><mask id="SVGalfYF1HT" fill="#fff"><use href="#SVGMFHNZdYm"/></mask><g mask="url(#SVGalfYF1HT)"><circle cx="128" cy="128" r="128"/><path fill="url(#SVGkw9x5bVJ)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#SVGE3ljGbCT)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>
                </div>
                <span className="text-muted">Next.js</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500/20">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"/></svg>
                </div>
                <span className="text-muted">React</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="#3178C6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"/><path fill="#FFF" d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"/></svg>
                </div>
                <span className="text-muted">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 154"><defs><linearGradient id="SVG80JqDb2a" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"><stop offset="0%" stopColor="#2298BD"/><stop offset="100%" stopColor="#0ED7B5"/></linearGradient></defs><path fill="url(#SVG80JqDb2a)" d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"/></svg>
                </div>
                <span className="text-muted">TailwindCSS</span>
              </div>
               <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20">
 <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/2074px-PostCSS_Logo.svg.png"
                    alt="PostCSS logo"
                    className="h-4 w-4 rounded object-contain"
                  />                </div>

                <span className="text-muted">PostCSS</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 292"><defs><linearGradient id="SVGn7WyXdQM" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873F"/><stop offset="32.88%" stopColor="#418B3D"/><stop offset="63.52%" stopColor="#419637"/><stop offset="93.19%" stopColor="#3FA92D"/><stop offset="100%" stopColor="#3FAE2A"/></linearGradient><linearGradient id="SVGYUHp3cUc" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873F"/><stop offset="40.32%" stopColor="#54A044"/><stop offset="71.36%" stopColor="#66B848"/><stop offset="90.81%" stopColor="#6CC04A"/></linearGradient><linearGradient id="SVGsgCB2mOc" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6CC04A"/><stop offset="28.64%" stopColor="#66B848"/><stop offset="59.68%" stopColor="#54A044"/><stop offset="86.24%" stopColor="#41873F"/></linearGradient><path id="SVGsibSecQa" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"/></defs><path fill="url(#SVGn7WyXdQM)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944z"/><mask id="SVGeWYJ7d8R" fill="#fff"><use href="#SVGsibSecQa"/></mask><path fill="url(#SVGYUHp3cUc)" d="M249.485 67.8L134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714" mask="url(#SVGeWYJ7d8R)"/><path fill="url(#SVGsgCB2mOc)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63z" mask="url(#SVGeWYJ7d8R)"/></svg>
                </div>
                <span className="text-muted">Node.js</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-500/20">
                  <img
                    src="https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png"
                    alt="Express.js logo"
                    className="h-12 w-12 rounded object-contain"
                  />
                </div>
                <span className="text-muted">Express.js</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 549" className="h-4 w-4"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677m-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223"/></svg>
                </div>
                <span className="text-muted">Mongodb</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-500/20">
                  <img
                    src="https://avatars.githubusercontent.com/u/7552965?s=80&v=4"
                    alt="Mongoose logo"
                    className="h-4 w-4 rounded object-contain"
                  />
                </div>
                <span className="text-muted">Mongoose</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/10">
                  <img
                    src="BLZE.svg"
                    alt="Backblaze B2 logo"
                    className="h-4 w-4 object-contain"
                  />
                </div>
                <span className="text-muted">Backblaze B2</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 263"><defs><linearGradient id="SVGvhlZesRv" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"/><stop offset="100%" stopColor="#3ECF8E"/></linearGradient><linearGradient id="SVGDD1qBdAT" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"/><stop offset="100%" stopOpacity="0"/></linearGradient></defs><path fill="url(#SVGvhlZesRv)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="url(#SVGDD1qBdAT)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"/></svg>
                </div>
                <span className="text-muted">Supabase</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-black/40 px-3 py-2 text-xs">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500/15">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 322"><path fill="#FF9100" d="M80.18 312.295c13.455 5.414 28.05 8.628 43.376 9.163a127.5 127.5 0 0 0 58.098-11.71c-21.145-8.307-40.294-20.455-56.638-35.56c-10.594 16.963-26.263 30.36-44.835 38.107"/><path fill="#FFC400" d="M125.013 274.193c-37.307-34.504-59.939-84.444-58.026-139.218c.062-1.78.156-3.557.266-5.334a96.63 96.63 0 0 0-50.456.528C6.838 147.614.828 167.63.079 189.069C-1.853 244.403 31.632 292.75 80.178 312.3c18.572-7.747 34.24-21.13 44.835-38.107"/><path fill="#FF9100" d="M125.015 274.191c8.674-13.88 13.933-30.154 14.545-47.687c1.61-46.12-29.394-85.794-72.306-96.865c-.11 1.777-.203 3.555-.265 5.334c-1.913 54.775 20.719 104.714 58.026 139.218"/><path fill="#DD2C00" d="M134.761 0c-24.44 19.58-43.738 45.396-55.414 75.136a180.5 180.5 0 0 0-12.113 54.515c42.912 11.07 73.917 50.745 72.306 96.865c-.612 17.532-5.887 33.79-14.545 47.687a180.7 180.7 0 0 0 56.637 35.56c42.441-19.618 72.553-61.833 74.297-111.764c1.129-32.351-11.3-61.184-28.864-85.521C208.517 86.738 134.76 0 134.76 0"/></svg>
                </div>
                <span className="text-muted">Firebase</span>
              </div>
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[300px] md:h-[320px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <div className="relative h-full overflow-hidden rounded-3xl bg-black">
              <ASCIIText text="Yad" enableWaves={true} asciiFontSize={8} planeBaseHeight={12} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6 mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Featured projects</h2>
            <p className="mt-1 text-sm text-muted">
              A snapshot of things I&apos;ve shipped or am actively exploring.
            </p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-border/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground hover:border-accent/60 hover:bg-black/40 transition-colors"
          >
            View all
          </a>
        </div>
        <div className="space-y-14 md:space-y-20">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className="group grid gap-6 md:grid-cols-2 md:gap-12 items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-3xl border border-border/80 bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[11px] text-slate-100">
                      {project.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                    <h3 className="font-medium text-base sm:text-lg text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted group-hover:text-foreground">
                      Open case study
                      <span>↗</span>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-3 text-sm order-2 md:order-1">
                    <h3 className="font-medium text-base sm:text-lg text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted group-hover:text-foreground">
                      Open case study
                      <span>↗</span>
                    </span>
                  </div>
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-3xl border border-border/80 bg-black order-1 md:order-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[11px] text-slate-100">
                      {project.tag}
                    </span>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Analysis */}
      <section id="blog" className="space-y-6 mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Latest analysis</h2>
            <p className="mt-1 text-sm text-muted">
              Long-form analysis on interfaces, systems, literature, philosophy and art.
            </p>
          </div>
          <a
            href="#"
            className="text-xs text-muted hover:text-foreground underline underline-offset-4"
          >
            View all analysis
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
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
                <h3 className="font-medium text-sm sm:text-base text-foreground">
                  {post.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed flex-1">
                  {post.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted group-hover:text-foreground">
                  Read analysis
                  <span>↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
