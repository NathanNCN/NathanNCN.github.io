import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About', hint: 'the longer version' },
  { to: '/projects', label: 'Projects', hint: 'things I’ve shipped' },
  { to: '/learning', label: 'Learning', hint: 'monthly notes' },
  { to: '/interview-prep', label: 'Interview prep', hint: 'whiteboard sessions' },
  { to: '/gym', label: 'Gym', hint: 'training arc' },
  { to: '/contact', label: 'Contact', hint: 'say hi' },
] as const

function navClassName(isActive: boolean) {
  return isActive ? 'text-accent' : 'text-ink group-hover:text-accent'
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <NavLink
          to="/"
          className="font-serif text-lg font-medium text-ink hover:text-accent transition-colors"
          end
        >
          Nathan
        </NavLink>

        <nav
          className="hidden items-end justify-end gap-x-6 lg:flex xl:gap-x-8"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `group flex flex-col gap-0.5 transition-colors ${navClassName(isActive)}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="font-sans text-[0.8125rem] font-medium">
                    {l.label}
                  </span>
                  <span
                    className={`max-w-[7.5rem] font-sans text-[0.6875rem] leading-tight ${isActive ? 'text-accent/80' : 'text-muted'}`}
                  >
                    {l.hint}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border bg-surface lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav
          className="flex max-h-[min(70vh,28rem)] flex-col overflow-y-auto px-5 py-3"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex flex-col gap-0.5 rounded-md px-3 py-3 hover:bg-surface-alt ${isActive ? 'bg-accent-soft/50' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-base ${isActive ? 'font-medium text-accent' : 'text-ink'}`}
                  >
                    {l.label}
                  </span>
                  <span className="text-xs text-muted">{l.hint}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
