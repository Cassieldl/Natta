export function NattaLogo({ size = 32, textColor = '#1a3a2a', textSize = 20 }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-[9px] bg-[#2d6a4f] flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="14" rx="6" ry="5" fill="rgba(255,255,255,0.88)" />
          <path d="M10 6h4v6h-4z" fill="rgba(255,255,255,0.52)" />
        </svg>
      </div>
      <span
        style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: textSize,
          fontWeight: 700,
          color: textColor,
          letterSpacing: '-0.01em',
        }}
      >
        Natta
      </span>
    </div>
  )
}
