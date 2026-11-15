// Illustrations SVG originales : aucune image externe, donc aucun lien cassé.
const GOLD = '#C6A15B'
const BURG = '#541C2B'

export function Mask({ className = '', strokeWidth = 1.5 }) {
  return (
    <svg viewBox="0 0 200 250" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="maskFill" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2a1a1f" />
          <stop offset="100%" stopColor="#101010" />
        </radialGradient>
      </defs>
      <path
        d="M100 8C152 8 184 48 184 112c0 70-36 128-84 128S16 182 16 112C16 48 48 8 100 8Z"
        fill="url(#maskFill)"
        stroke={GOLD}
        strokeWidth={strokeWidth}
      />
      <path d="M36 82q30-26 58 2" stroke={GOLD} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M164 82q-30-26-58 2" stroke={GOLD} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M42 106q26-22 48 4q-22 14-48-4Z" fill={GOLD} fillOpacity="0.14" stroke={GOLD} strokeWidth={strokeWidth} />
      <path d="M158 106q-26-22-48 4q22 14 48-4Z" fill={GOLD} fillOpacity="0.14" stroke={GOLD} strokeWidth={strokeWidth} />
      <path d="M100 112v44" stroke={GOLD} strokeOpacity="0.5" strokeWidth={strokeWidth} />
      <path d="M92 158q8 5 16 0" stroke={GOLD} strokeOpacity="0.6" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M62 196q38-40 76 0q-38-16-76 0Z" fill={BURG} stroke={GOLD} strokeWidth={strokeWidth} />
      <path d="M30 150q6 24 18 38M170 150q-6 24-18 38" stroke={GOLD} strokeOpacity="0.35" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export function Columns({ className = '', count = 6 }) {
  const w = 1200
  const gap = w / count
  return (
    <svg viewBox={`0 0 ${w} 420`} className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="colFill" x1="0" x2="1">
          <stop offset="0" stopColor="#0c0c0c" />
          <stop offset="0.45" stopColor="#2b2523" />
          <stop offset="1" stopColor="#0c0c0c" />
        </linearGradient>
      </defs>
      {Array.from({ length: count }).map((_, i) => {
        const cx = gap * i + gap / 2
        return (
          <g key={i}>
            <rect x={cx - 34} y="40" width="68" height="14" fill="#1b1716" stroke={GOLD} strokeOpacity="0.35" />
            <rect x={cx - 26} y="54" width="52" height="320" fill="url(#colFill)" />
            {[-14, -5, 5, 14].map((dx) => (
              <line key={dx} x1={cx + dx} x2={cx + dx} y1="58" y2="372" stroke="#000" strokeOpacity="0.35" />
            ))}
            <rect x={cx - 36} y="374" width="72" height="16" fill="#1b1716" stroke={GOLD} strokeOpacity="0.35" />
          </g>
        )
      })}
      <rect x="0" y="22" width={w} height="18" fill="#1b1716" stroke={GOLD} strokeOpacity="0.4" />
      <rect x="0" y="390" width={w} height="30" fill="#0a0a0a" />
    </svg>
  )
}

export function Laurel({ className = '' }) {
  const leaves = Array.from({ length: 7 })
  return (
    <svg viewBox="0 0 160 40" className={className} fill="none" aria-hidden="true">
      <path d="M4 20h152" stroke={GOLD} strokeOpacity="0.5" />
      {leaves.map((_, i) => (
        <g key={i}>
          <path d={`M${20 + i * 20} 20q4-14 10-16q-1 12-10 16Z`} fill={GOLD} fillOpacity="0.5" />
          <path d={`M${20 + i * 20} 20q4 14 10 16q-1-12-10-16Z`} fill={GOLD} fillOpacity="0.3" />
        </g>
      ))}
    </svg>
  )
}

function Figure({ x, y, s = 1, crown = false, fill = '#1a1517', stroke = GOLD }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="-58" r="9" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M-14 0q0-38 14-44q14 6 14 44Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
      {crown && <path d="M-8-70l3-8 5 6 5-6 3 8Z" fill={stroke} />}
    </g>
  )
}

const frame = (children, id) => (
  <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3a1220" />
        <stop offset="1" stopColor="#101010" />
      </linearGradient>
      <clipPath id={`arch-${id}`}>
        <path d="M60 300V120a140 140 0 0 1 280 0v180Z" />
      </clipPath>
    </defs>
    <path d="M60 300V120a140 140 0 0 1 280 0v180Z" fill={`url(#sky-${id})`} />
    <g clipPath={`url(#arch-${id})`}>{children}</g>
    <path d="M60 300V120a140 140 0 0 1 280 0v180" fill="none" stroke={GOLD} strokeWidth="1.4" />
    <path d="M48 300V120a152 152 0 0 1 304 0v180" fill="none" stroke={GOLD} strokeOpacity="0.35" />
  </svg>
)

export function SceneArt({ kind }) {
  switch (kind) {
    case 'palace':
      return frame(
        <>
          <circle cx="200" cy="90" r="30" fill={GOLD} fillOpacity="0.18" />
          <path d="M110 130h180l-90-34Z" fill="#1b1716" stroke={GOLD} strokeOpacity="0.6" />
          {[125, 165, 205, 245].map((x) => (
            <rect key={x} x={x} y="134" width="16" height="120" fill="#2b2523" stroke={GOLD} strokeOpacity="0.3" />
          ))}
          <rect x="100" y="254" width="200" height="14" fill="#1b1716" stroke={GOLD} strokeOpacity="0.4" />
          <rect x="90" y="268" width="220" height="32" fill="#0a0a0a" />
        </>,
        'palace',
      )
    case 'burial':
      return frame(
        <>
          <circle cx="290" cy="150" r="26" fill={GOLD} fillOpacity="0.35" />
          <path d="M0 230q100-30 200-6t200-14v90H0Z" fill="#1a1112" />
          <rect x="130" y="228" width="120" height="22" rx="11" fill="#e9dfcb" fillOpacity="0.85" transform="rotate(-6 190 240)" />
          <path d="M120 236q-14 10-30 6M262 224q18-6 34 2" stroke={GOLD} strokeOpacity="0.6" fill="none" />
          <Figure x={110} y={232} s={0.8} />
        </>,
        'burial',
      )
    case 'decision':
      return frame(
        <>
          <path d="M200 300V210l-80-60M200 210l80-60" stroke={GOLD} strokeWidth="2" fill="none" strokeOpacity="0.7" />
          <path d="M200 300V210" stroke={GOLD} strokeWidth="10" strokeOpacity="0.12" />
          <rect x="262" y="104" width="36" height="52" fill="#0a0a0a" stroke={GOLD} strokeOpacity="0.5" />
          <Figure x={200} y={252} s={1.05} />
        </>,
        'decision',
      )
    case 'duel':
      return frame(
        <>
          <line x1="200" y1="70" x2="200" y2="300" stroke={GOLD} strokeOpacity="0.55" strokeDasharray="2 6" />
          <Figure x={140} y={260} s={1.15} />
          <Figure x={262} y={260} s={1.3} crown />
          <path d="M162 200l26 0M238 196l-26 0" stroke={GOLD} strokeOpacity="0.5" />
        </>,
        'duel',
      )
    case 'tomb':
    default:
      return frame(
        <>
          <path d="M140 300V170a60 60 0 0 1 120 0v130Z" fill="#050505" stroke={GOLD} strokeOpacity="0.6" />
          {[0, 1, 2, 3, 4].map((r) => (
            <g key={r}>
              <rect x="142" y={270 - r * 22} width="56" height="20" fill="#2b2523" stroke="#000" strokeOpacity="0.5" />
              <rect x="200" y={270 - r * 22} width="56" height="20" fill="#2b2523" stroke="#000" strokeOpacity="0.5" />
            </g>
          ))}
          <circle cx="200" cy="80" r="3" fill={GOLD} />
        </>,
        'tomb',
      )
  }
}

export function Balance({ tilt = 0 }) {
  return (
    <svg viewBox="0 0 300 190" className="h-full w-full" aria-hidden="true">
      <path d="M150 170V40" stroke={GOLD} strokeWidth="2" />
      <path d="M118 176h64" stroke={GOLD} strokeWidth="2" />
      <circle cx="150" cy="38" r="6" fill={GOLD} />
      <g style={{ transformOrigin: '150px 38px', transform: `rotate(${tilt}deg)`, transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)' }}>
        <path d="M30 38h240" stroke={GOLD} strokeWidth="2" />
        <path d="M30 38l-18 70h36ZM270 38l-18 70h36Z" fill="none" stroke={GOLD} strokeOpacity="0.6" />
        <path d="M6 108q24 22 48 0Z" fill={BURG} stroke={GOLD} />
        <path d="M246 108q24 22 48 0Z" fill="#1b1716" stroke={GOLD} />
      </g>
    </svg>
  )
}
