import { useState } from 'react'
import {
  learningTabs,
  learningTopicsInCategory,
  type LearningCategory,
  youtubeThumbnailUrl,
} from '../data/learningTopics'

function VideoThumb({ videoUrl, title }: { videoUrl: string; title: string }) {
  const src = youtubeThumbnailUrl(videoUrl)
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noreferrer"
      className="group/thumb relative block h-[5.25rem] w-[5.25rem] shrink-0 overflow-hidden rounded-xl border border-border bg-surface-alt ring-1 ring-ink/[0.04] transition hover:border-accent/35 hover:ring-accent/15 sm:h-[5.75rem] sm:w-[5.75rem]"
      aria-label={`Open video: ${title}`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover/thumb:scale-[1.03]"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-sans text-[10px] text-muted">
          No thumb
        </span>
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover/thumb:bg-ink/10">
        <span className="rounded-full bg-surface/95 px-2 py-0.5 font-sans text-[10px] font-medium text-ink opacity-0 shadow-sm transition group-hover/thumb:opacity-100">
          Play
        </span>
      </span>
    </a>
  )
}

function TabEmpty() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface-alt/40 px-6 py-14 text-center sm:px-10 sm:py-16">
      <p className="font-serif text-lg text-ink/90">Nothing in this tab yet.</p>
      <p className="mx-auto mt-3 max-w-md font-sans text-[0.9375rem] leading-relaxed text-muted">
        No entries for this category yet.
      </p>
    </div>
  )
}

export function LearningTopicList() {
  const [active, setActive] = useState<LearningCategory>('System design')
  const topics = learningTopicsInCategory(active)

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Learning categories"
        className="-mx-1 flex gap-1 overflow-x-auto border-b border-border px-1 pb-px"
      >
        {learningTabs.map((tab) => {
          const count = learningTopicsInCategory(tab.id).length
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              id={`tab-${slug(tab.id)}`}
              aria-controls={`panel-${slug(tab.id)}`}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-2.5 font-sans text-sm font-medium transition sm:px-4 ${
                isActive
                  ? 'border-accent text-ink'
                  : 'border-transparent text-muted hover:border-border hover:text-ink'
              }`}
            >
              {tab.label}
              {count > 0 ? (
                <span
                  className={`ml-1.5 tabular-nums text-xs ${isActive ? 'text-muted' : 'text-muted/80'}`}
                >
                  {count}
                </span>
              ) : null}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${slug(active)}`}
        aria-labelledby={`tab-${slug(active)}`}
        className="mt-8"
      >
        {topics.length === 0 ? (
          <TabEmpty />
        ) : (
          <ul className="space-y-5">
            {topics.map((topic) => (
              <li key={topic.videoUrl}>
                <article className="rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_0_rgba(44,40,37,0.04)] sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                    <VideoThumb videoUrl={topic.videoUrl} title={topic.title} />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div>
                          <p className="font-sans text-[11px] font-medium uppercase tracking-wide text-muted">
                            Video
                          </p>
                          <h3 className="mt-1 font-serif text-lg font-medium leading-snug text-ink sm:text-xl">
                            {topic.title}
                          </h3>
                          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                            {topic.description}
                          </p>
                        </div>
                        <a
                          href={topic.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border bg-canvas px-3.5 py-2 font-sans text-xs font-medium text-accent transition hover:border-accent/40 hover:bg-accent-soft/50 sm:mt-6"
                        >
                          Open
                          <span aria-hidden>↗</span>
                        </a>
                      </div>

                      {topic.tags.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {topic.tags.map((tag) => (
                            <li key={tag}>
                              <span className="inline-flex rounded-full border border-border bg-surface-alt/80 px-2.5 py-1 font-sans text-xs text-muted">
                                {tag}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <ul className="mt-4 space-y-2 border-t border-border/70 pt-4 font-sans text-[0.9375rem] leading-snug text-ink/90">
                        {topic.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
