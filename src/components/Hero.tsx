import { Link } from 'react-router-dom'
import { heroOneLiner, heroTags, site } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center border-b border-border/80 bg-canvas pt-[4.75rem] pb-12 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-accent-soft/40 blur-3xl" />
        <div className="absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-wash blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_minmax(260px,380px)] lg:gap-16 lg:py-12">
        <div className="flex flex-col justify-center lg:min-h-[min(70vh,36rem)]">
          <h1 className="hero-anim hero-anim-d1 font-serif text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.15] tracking-tight text-ink">
            {site.fullName}
          </h1>

          <p className="hero-anim hero-anim-d2 mt-5 max-w-md text-lg leading-relaxed text-muted sm:text-xl">
            {heroOneLiner}
          </p>

          <ul className="hero-anim hero-anim-d3 mt-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-full border border-border bg-surface/90 px-3 py-1.5 font-sans text-xs text-muted shadow-sm">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="hero-anim hero-anim-d4 mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 font-sans text-[0.9375rem] font-medium text-white transition hover:bg-accent-hover"
            >
              See my work
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-2.5 font-sans text-[0.9375rem] font-medium text-ink transition hover:border-accent/35 hover:text-accent"
            >
              My story
            </Link>
          </div>
        </div>

        <div className="hero-anim hero-anim-d2 relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[320px] sm:max-w-[360px]"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div
              className="rounded-[1.75rem] border border-border bg-surface-alt/90 p-2 shadow-[0_20px_50px_-20px_rgba(44,40,37,0.18)] ring-1 ring-ink/[0.04]"
              style={{ transform: 'translate(8px, 0)' }}
            >
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-canvas/80 px-6 text-center">
                <span className="font-sans text-xs font-medium uppercase tracking-wide text-muted/90">
                  Photo coming soon
                </span>
                <span className="max-w-[12rem] font-sans text-sm leading-snug text-muted">
                  Drop a candid here when you have one you like.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
