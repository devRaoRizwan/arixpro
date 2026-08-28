export type RoadmapStep = {
  index: string
  title: string
  body: string
  tags: string[]
}

export const roadmap: RoadmapStep[] = [
  {
    index: '01',
    title: 'Computer & Programming Fundamentals',
    body: 'How a computer executes instructions, what a program really is, and the mental model everything after this depends on.',
    tags: ['Logic', 'Terminal', 'Setup'],
  },
  {
    index: '02',
    title: 'Python Fundamentals',
    body: 'Syntax, control flow, functions and data structures, practised until writing code stops feeling like translation.',
    tags: ['Python', 'Functions', 'Data structures'],
  },
  {
    index: '03',
    title: 'Problem Solving',
    body: 'Breaking a problem into steps, choosing the right structure, and debugging methodically instead of guessing.',
    tags: ['Algorithms', 'Debugging'],
  },
  {
    index: '04',
    title: 'Git & GitHub',
    body: 'Version control the way teams use it: branches, commits with intent, pull requests and a public profile that grows.',
    tags: ['Git', 'GitHub', 'Workflow'],
  },
  {
    index: '05',
    title: 'APIs & Databases',
    body: 'How software talks to other software and where the data lives. HTTP, REST, SQL and schema design.',
    tags: ['REST', 'SQL', 'PostgreSQL'],
  },
  {
    index: '06',
    title: 'Backend / Frontend',
    body: 'Pick a direction and go deep. FastAPI services on one side, React interfaces on the other, or both.',
    tags: ['FastAPI', 'React'],
  },
  {
    index: '07',
    title: 'Real-World Projects',
    body: 'Full applications built end to end, with auth, data, deployment and the messy parts tutorials leave out.',
    tags: ['Projects', 'Deployment'],
  },
  {
    index: '08',
    title: 'Job / Freelance Ready',
    body: 'A portfolio that proves the work, a readable GitHub, and the ability to explain every decision you made.',
    tags: ['Portfolio', 'Interviews'],
  },
]
