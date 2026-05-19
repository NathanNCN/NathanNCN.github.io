/**
 * Learning rows: `description` = scope; `bullets` = tight revision notes.
 * Set `category` to a `learningTabs` id.
 */
export const learningTabs = [
  { id: 'System design', label: 'System design' },
  { id: 'Low level design', label: 'Low level design' },
  { id: 'Languages', label: 'Languages' },
  { id: 'Miscellaneous', label: 'Miscellaneous' },
] as const

export type LearningCategory = (typeof learningTabs)[number]['id']

export type LearningTopic = {
  /** Which tab this row appears under */
  category: LearningCategory
  title: string
  description: string
  /** Optional extra labels (not the main category) */
  tags: string[]
  bullets: string[]
  videoUrl: string
}

/** Pull `v=` from a watch URL for thumbnails */
export function youtubeVideoIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v')
      if (v) return v
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0]
      return id || null
    }
  } catch {
    return null
  }
  return null
}

export function youtubeThumbnailUrl(videoUrl: string): string | null {
  const id = youtubeVideoIdFromUrl(videoUrl)
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : null
}

export const learningTopics: LearningTopic[] = [
  {
    category: 'System design',
    title: 'Kafka vs RabbitMQ',
    description:
      'Throughput, ordering, replay model, and ops fit: Kafka vs RabbitMQ.',
    tags: ['Messaging', 'Compare'],
    bullets: [
      'Log-structured replay vs routing-centric delivery.',
      'Ordering: state product requirement, not broker default.',
      'Kafka: topics/partitions, consumer groups; Rabbit: exchanges, queues, bindings.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=1HOVtQ-_fcE&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2',
  },
  {
    category: 'System design',
    title: 'Message queues in interviews',
    description:
      'Queues in design interviews: async handoff, retries, backpressure.',
    tags: ['Queues', 'Interviews'],
    bullets: [
      'Model synchronous vs asynchronous dependencies explicitly.',
      'DLQ and retry policy as part of the contract.',
      'Backpressure: slow producer, drop policy, or bounded queue — state the choice.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=1ISRd0bS714&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=2',
  },
  {
    category: 'System design',
    title: 'Caching',
    description:
      'Cache layers, invalidation, stale reads, stampede risk.',
    tags: ['Caching', 'Reads'],
    bullets: [
      'TTL vs explicit invalidation; stale window as a stated assumption.',
      'CDN vs application cache vs DB buffer — different consistency surfaces.',
      'Thundering herd: brief spike mitigation (singleflight, jitter, etc.).',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=1NngTUYPdpI&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=3',
  },
  {
    category: 'System design',
    title: 'Sharding',
    description:
      'Shard key choice, hot partitions, resharding, secondary indexes.',
    tags: ['Databases', 'Scale'],
    bullets: [
      'Hot shard: skewed key space; fix at key design or routing layer.',
      'Resharding: planned copy + cutover; prefer incremental moves.',
      'Global vs local secondary indexes: query flexibility vs write cost.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=L521gizea4s&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=4',
  },
  {
    category: 'System design',
    title: 'Data modeling',
    description:
      'Entities, access paths, normalization vs denorm, indexes in the story.',
    tags: ['Schema', 'Access patterns'],
    bullets: [
      'Start from dominant read/write paths, then shape tables or documents.',
      'Denormalize when join cost or latency dominates; state the tradeoff.',
      'Indexes listed with the schema, not bolted on at the end.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=TUcPS6dsWx4&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=5',
  },
  {
    category: 'System design',
    title: 'API design',
    description:
      'Write idempotency, pagination shapes, errors, versioning.',
    tags: ['APIs', 'Writes'],
    bullets: [
      'Idempotency keys on retried POSTs / unsafe operations.',
      'Cursor pagination for large unstable sets; offset when totals and stable pages matter.',
      'Stable error shape and explicit API versioning in the contract.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=DQ57zYedMdQ&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=6',
  },
  {
    category: 'System design',
    title: 'Object storage',
    description:
      'Large blobs, metadata store, presigned uploads, durability language.',
    tags: ['Storage', 'Blobs'],
    bullets: [
      'Presigned PUT to object store; validate metadata in app after upload.',
      'Metadata in DB or doc store; bytes in object store only.',
      'Durability: cross-domain replication; cite RPO/RTO when relevant.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=RvaMHMxHjp4&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=7',
  },
  {
    category: 'System design',
    title: 'Consistent hashing',
    description:
      'Hash ring, virtual nodes, remapping when nodes join or leave.',
    tags: ['Hashing', 'Distribution'],
    bullets: [
      'Keys mapped on a ring; neighbors own ranges.',
      'Virtual nodes smooth skew when physical machines are few.',
      'Add/remove node: only adjacent ranges move; ties to cache / partition routing.',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=vccwdhfqIrI&list=PL5q3E8eRUieVFeK1oLahJ8KONkAxDpqk2&index=9',
  },
  {
    category: 'Low level design',
    title: 'Design an elevator',
    description:
      'Controller API, cab state, request handling, scheduling policy, concurrency.',
    tags: ['OOD', 'Concurrency'],
    bullets: [
      'State: floor, direction, door open/closed; transitions explicit.',
      'External + internal requests; unify into a dispatch queue or per-direction set.',
      'SCAN / LOOK-style sweep vs FCFS — name policy and edge cases (idle, peak).',
    ],
    videoUrl:
      'https://www.youtube.com/watch?v=fODT0ldeBiU&list=PL5q3E8eRUieUQCl6CAF4AlOZnmICKmAec',
  },
  {
    category: 'Low level design',
    title: 'LLD resource',
    description:
      'Additional walkthrough for object-oriented low-level design interview prep.',
    tags: ['OOD', 'Video'],
    bullets: [
      'Clarify entities, behaviors, and ownership before sketching classes.',
      'Call out extension points (strategy, factory) only when the prompt needs them.',
      'Walk through one happy path and one edge case in the API you expose.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=OhCp6ppX6bg',
  },
  {
    category: 'Low level design',
    title: 'LLD connections',
    description:
      'How objects, interfaces, and dependencies connect in interview-style OOD.',
    tags: ['OOD', 'Dependencies'],
    bullets: [
      'Draw who talks to whom before naming classes; edges are contracts.',
      'Prefer narrow interfaces at connection points to limit ripple changes.',
      'When requirements shift, trace impact along those links, not file-by-file.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=9UI4ikKP3Ws',
  },
  {
    category: 'Miscellaneous',
    title: 'Additional topics',
    description:
      'Extra interview prep or tooling notes that do not fit the other tabs.',
    tags: ['Video'],
    bullets: [
      'Use as a bookmark for breadth topics outside system or object design.',
      'Pull out 2–3 takeaways into your own notes after watching.',
      'Tag ideas by theme (ops, culture, tooling) so they stay searchable.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=jdJ5jg0XSmU',
  },
  {
    category: 'Miscellaneous',
    title: 'Further topics',
    description:
      'Another misc bookmark for breadth outside the core design tracks.',
    tags: ['Video'],
    bullets: [
      'Pair with the other misc entry when you want a wider prep pass.',
      'After watching, add one concrete example to your interview story bank.',
      'If it overlaps SD or LLD, move the distilled notes into those tabs.',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=6XrL5jXmTwM',
  },
]

export function learningTopicsInCategory(
  category: LearningCategory,
): LearningTopic[] {
  return learningTopics.filter((t) => t.category === category)
}
