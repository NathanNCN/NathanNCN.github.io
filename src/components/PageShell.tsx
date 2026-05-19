import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageShellProps = {
  title: string
  children?: ReactNode
  /** Wider content column for dense lists (e.g. learning cards). */
  wide?: boolean
}

export function PageShell({ title, children, wide }: PageShellProps) {
  return (
    <main className="min-h-svh pb-24 pt-[4.75rem]">
      <div
        className={`mx-auto px-5 sm:px-8 ${wide ? 'max-w-4xl' : 'max-w-3xl'}`}
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-sans text-sm text-muted transition hover:text-ink"
        >
          <span
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden
          >
            ←
          </span>
          Back home
        </Link>

        <h1 className="mt-10 font-serif text-3xl font-medium tracking-tight text-ink sm:text-[2rem]">
          {title}
        </h1>

        {children}
      </div>
    </main>
  )
}
