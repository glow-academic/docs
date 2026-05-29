/**
 * Logo — navbar brand lockup: the Glow sparkle mark (same design as
 * app/icon.svg + the org avatar) next to the GLOW wordmark. Inline SVG
 * so it's crisp at any DPI and needs no asset path / basePath handling.
 */
export function Logo() {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="navGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#navGlowGradient)" />
        <g transform="translate(16,16) scale(0.667)">
          <path
            d="M0 -11L2.59 -2.59L11 0L2.59 2.59L0 11L-2.59 2.59L-11 0L-2.59 -2.59L0 -11Z"
            fill="#fff"
          />
        </g>
      </svg>
      <b>GLOW</b>
    </span>
  )
}
