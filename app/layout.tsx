import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import GradualBlur from './components/GradualBlur';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Yad Qasim | Portfolio',
  description: 'Modern dark portfolio for projects, analysis and writing by Yad Qasim.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-black text-foreground antialiased`}
      >
        <div className="min-h-screen bg-black text-foreground">
          <div className="relative z-10 pb-24 pt-0 flex min-h-screen flex-col">
            <header className="fixed top-4 left-1/2 z-20 flex -translate-x-1/2 justify-center">
              <div className="flex w-[88vw] max-w-2xl md:max-w-3xl items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2.5">
                <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft/80 border border-accent/70 text-[12px] font-semibold text-accent/90">
                    Y
                  </span>
                  <span className="text-[13px] text-foreground/90">Yad</span>
                </Link>
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                  <Link
                    href="/projects"
                    className="rounded-full px-3 py-1.5 hover:bg-accent-soft/60 hover:text-foreground hover:border-accent/60 border border-transparent transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/analysis"
                    className="rounded-full px-3 py-1.5 hover:bg-accent-soft/60 hover:text-foreground hover:border-accent/60 border border-transparent transition-colors"
                  >
                    Analysis
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1 px-4 md:px-8 lg:px-12 pt-24">{children}</main>
            <footer className="mt-8 pb-6 pt-6 text-[11px] text-muted flex items-center justify-center border-t border-border/70">
              <span>© 2026 Yad Qasim</span>
            </footer>
          </div>
        </div>
        <GradualBlur preset="page-header" animated={false} responsive opacity={1} />
        <GradualBlur preset="page-footer" animated={false} responsive opacity={1} />
      </body>
    </html>
  );
}
