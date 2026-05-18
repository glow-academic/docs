// Sidebar config — organized by API/CLI taxonomy so a developer
// calling /persona/search or ``glow attempts dashboard`` lands in the
// same group they'd find the docs under. The client sidebar is a
// product-facing organization (Learner / Analytics / etc.); this
// docs site is dev-facing (api-reference + cli-reference dominate),
// so the API/CLI shape is the right mental model here.
//
// Final group is "Platform" (cross-cutting artifacts: auths,
// departments, evals, rubrics). The client's equivalent group will
// rename System → Platform to match (avoids collision with the system
// artifact / system-namespace ops).
export default {
  // ── Getting started ─────────────────────────────────────────
  index: 'Introduction',
  start: 'Start',
  'how-it-works': 'How It Works',
  tutorial: 'Design Your First Simulation',
  patterns: 'Patterns & Best Practices',
  'annotated-example': 'Annotated Example',
  authentication: 'Authentication',
  realtime: 'Realtime',
  settings: 'Settings',

  // ── Attempt artifact — chat namespace + view ops ────────────
  '---attempt': { type: 'separator', title: 'Attempt' },
  chat: 'Chat',
  home: 'Home',
  practice: 'Practice',
  dashboard: 'Dashboard',
  reports: 'Reports',
  leaderboard: 'Leaderboard',

  // ── Test artifact — invocation namespace + view ops ─────────
  '---test': { type: 'separator', title: 'Test' },
  benchmark: 'Benchmark',
  invocation: 'Invocation',

  // ── System artifact — flat namespace of cross-artifact ops ──
  '---system': { type: 'separator', title: 'System' },
  activity: 'Activity',
  health: 'Health',
  pricing: 'Pricing',
  session: 'Session',
  group: 'Group',

  // ── Training artifacts ──────────────────────────────────────
  '---training': { type: 'separator', title: 'Training' },
  cohorts: 'Cohorts',
  personas: 'Personas',
  scenarios: 'Scenarios',
  simulations: 'Simulations',

  // ── Management artifacts ────────────────────────────────────
  '---management': { type: 'separator', title: 'Management' },
  documents: 'Documents',
  fields: 'Fields',
  parameters: 'Parameters',
  profiles: 'Profiles',

  // ── Intelligence artifacts ──────────────────────────────────
  '---intelligence': { type: 'separator', title: 'Intelligence' },
  agents: 'Agents',
  models: 'Models',
  providers: 'Providers',
  tools: 'Tools',

  // ── Platform artifacts (cross-cutting) ──────────────────────
  '---platform': { type: 'separator', title: 'Platform' },
  auths: 'Auths',
  departments: 'Departments',
  evals: 'Evals',
  rubrics: 'Rubrics',

  // ── Reference (auto-generated) ──────────────────────────────
  '---ref': { type: 'separator', title: 'Reference' },
  'api-reference': 'API Reference',
  'cli-reference': 'CLI Reference',
}
