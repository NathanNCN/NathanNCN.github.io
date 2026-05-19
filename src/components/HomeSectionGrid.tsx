import { Link } from 'react-router-dom'
import { homeSectionCards } from '../data/content'

export function HomeSectionGrid() {
  return (
    <section
      aria-label="Sections"
      className="border-t border-border/80 bg-surface-alt/25"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-sans text-sm text-muted">
          Pick a room. Each one’s its own page — no endless scrolling.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeSectionCards.map((card) => (
            <li key={card.to}>
              <Link
                to={card.to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(44,40,37,0.04)] transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_16px_48px_-28px_rgba(44,40,37,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-serif text-lg font-medium text-ink transition group-hover:text-accent">
                    {card.title}
                  </h2>
                  <span
                    className="mt-1 font-sans text-accent opacity-70 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                  {card.description}
                </p>
                <span className="mt-6 font-sans text-xs font-medium text-muted/90 transition group-hover:text-accent">
                  Open
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
