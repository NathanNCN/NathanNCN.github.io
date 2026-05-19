export const site = {
  firstName: 'Nathan',
  fullName: 'Nathan Chau-Nguyen',
  email: 'hello@example.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
}

/** Hero: short line under name */
export const heroOneLiner =
  'Kitchener-based, usually sweaty, rarely bored.'

/** Tags shown as chips under the one-liner */
export const heroTags = [
  'Wrestler',
  'Software engineer',
  'Always at the gym',
  'Kitchener ON',
] as const

/** Homepage grid — entry points to each route */
export const homeSectionCards = [
  {
    to: '/projects',
    title: 'Projects',
    description: 'Things I’ve built — write-ups and links when I’m ready.',
  },
  {
    to: '/learning',
    title: 'Learning log',
    description: 'Monthly notes, playlists, stuff I’m chewing on.',
  },
  {
    to: '/interview-prep',
    title: 'Interview prep',
    description: 'Whiteboard takes and problem-solving videos.',
  },
  {
    to: '/gym',
    title: 'Gym timeline',
    description: 'Training over time — boring consistency, honest captions.',
  },
  {
    to: '/about',
    title: 'About',
    description: 'Who I am when I’m not staring at a screen.',
  },
  {
    to: '/contact',
    title: 'Contact',
    description: 'Email, socials, or just saying hi.',
  },
] as const
