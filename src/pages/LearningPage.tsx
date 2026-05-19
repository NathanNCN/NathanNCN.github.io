import { LearningTopicList } from '../components/LearningTopicList'
import { PageShell } from '../components/PageShell'

export function LearningPage() {
  return (
    <PageShell title="What I’ve been studying" wide>
      <p className="mt-4 max-w-2xl font-sans text-[1.0625rem] leading-relaxed text-muted">
        Short revision bullets per source — scope in the line under the title,
        detail in the list.
      </p>
      <LearningTopicList />
    </PageShell>
  )
}
