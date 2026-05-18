// Sidebar config — mirrors the client's sidebar groupings so a user
// looking at the product UI can find the matching doc in the same
// group. Source of truth for product groupings:
//   /Users/.../glow-academic-client/lib/sidebar-config.ts
//
// Notable mappings:
//   * docs "System" (auths/departments/evals/rubrics) ==
//     client "System" (renamed from old docs "Platform")
//   * docs "Learner" (home/chat/practice/leaderboard) ==
//     client top-level leaves Home/Practice/Leaderboard (+ chat,
//     which has no client sidebar leaf but is the heart of the
//     attempt flow so keeps a top-spot in docs)
//   * docs "Analytics" (dashboard/reports/activity/pricing) ==
//     client "Analytics" group
//   * docs "Ops" (health/benchmark/invocation) ==
//     client top-level Health + Benchmark leaves; invocation joins
//     since it's the test-fanout sibling of benchmark
//   * docs "Internals" (session/group) — server-side concepts
//     with no client sidebar presence; surface here for API users.
export default {
  // ── Getting started ─────────────────────────────────────────
  index: 'Introduction',
  start: 'Start',
  'how-it-works': 'How It Works',
  tutorial: 'Design Your First Simulation',
  patterns: 'Patterns & Best Practices',
  'annotated-example': 'Annotated Example',
  authentication: 'Authentication',
  settings: 'Settings',

  // ── Learner-facing (client top-level leaves + chat) ─────────
  '---learner': { type: 'separator', title: 'Learner' },
  home: 'Home',
  chat: 'Chat',
  practice: 'Practice',
  leaderboard: 'Leaderboard',

  // ── Analytics (mirrors client "Analytics" group) ────────────
  '---analytics': { type: 'separator', title: 'Analytics' },
  dashboard: 'Dashboard',
  reports: 'Reports',
  activity: 'Activity',
  pricing: 'Pricing',

  // ── Training (mirrors client "Training" group) ──────────────
  '---training': { type: 'separator', title: 'Training' },
  cohorts: 'Cohorts',
  simulations: 'Simulations',
  scenarios: 'Scenarios',
  personas: 'Personas',

  // ── Management (mirrors client "Management" group) ──────────
  '---management': { type: 'separator', title: 'Management' },
  profiles: 'Profiles',
  documents: 'Documents',
  parameters: 'Parameters',
  fields: 'Fields',

  // ── Intelligence (mirrors client "Intelligence" group) ──────
  '---intelligence': { type: 'separator', title: 'Intelligence' },
  agents: 'Agents',
  models: 'Models',
  providers: 'Providers',
  tools: 'Tools',

  // ── System (renamed from "Platform" — matches client) ───────
  '---system': { type: 'separator', title: 'System' },
  auths: 'Auths',
  departments: 'Departments',
  evals: 'Evals',
  rubrics: 'Rubrics',

  // ── Ops (client's Health + Benchmark leaves, + invocation) ──
  '---ops': { type: 'separator', title: 'Ops' },
  health: 'Health',
  benchmark: 'Benchmark',
  invocation: 'Invocation',

  // ── Internals (server-side, no client sidebar presence) ─────
  '---internals': { type: 'separator', title: 'Internals' },
  session: 'Session',
  group: 'Group',

  // ── Reference (auto-generated) ──────────────────────────────
  '---ref': { type: 'separator', title: 'Reference' },
  'api-reference': 'API Reference',
  'cli-reference': 'CLI Reference',
}
