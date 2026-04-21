import { clsx as cx } from 'clsx'

// Status badge
export function StatusBadge({ status }) {
  const map = {
    ok:    'bg-[#ddf5e8] text-[#1a6038]',
    warn:  'bg-[#fef8e7] text-[#7a4f0a]',
    alert: 'bg-[#fdeaea] text-[#b03030]',
  }
  const labels = { ok: 'Boa', warn: 'Atenção', alert: 'Alerta' }
  return (
    <span className={cx('text-[10px] font-bold px-[9px] py-[3px] rounded-[8px]', map[status])}>
      {labels[status]}
    </span>
  )
}

// Delta chip
export function DeltaChip({ value }) {
  if (!value || value === '—') return <span className="text-[11px] font-semibold px-2 py-[2px] rounded-[8px] bg-[#f7f6f2] text-[#7a7870]">—</span>
  const up = value.startsWith('+')
  const dn = value.startsWith('-')
  const cls = up
    ? 'bg-[#ddf5e8] text-[#1a6038]'
    : dn
    ? 'bg-[#fdeaea] text-[#b03030]'
    : 'bg-[#fef8e7] text-[#7a4f0a]'
  return (
    <span className={cx('text-[11px] font-semibold px-2 py-[2px] rounded-[8px]', cls)}>{value}</span>
  )
}

// KPI Card
export function KpiCard({ label, children, emoji, className = '' }) {
  return (
    <div className={cx('bg-white rounded-2xl border border-[#edecea] p-5 relative overflow-hidden transition-shadow hover:shadow-md', className)}>
      <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#9b9990] mb-2">{label}</div>
      {children}
      {emoji && (
        <div className="absolute right-[-4px] bottom-[-8px] text-[54px] opacity-[0.055] pointer-events-none select-none">
          {emoji}
        </div>
      )}
    </div>
  )
}

// Section eyebrow
export function Eyebrow({ children }) {
  return <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#3d8b68] mb-2">{children}</p>
}

// Section heading
export function SectionH({ children, className = '' }) {
  return (
    <h2 className={cx('font-[family-name:var(--font-display,Lora,Georgia,serif)] text-[36px] font-bold text-[#0f2518] leading-[1.25] tracking-[-0.015em] mb-3', className)}
      style={{ fontFamily: "'Lora', Georgia, serif" }}>
      {children}
    </h2>
  )
}

// Add button
export function AddButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-[#2d6a4f] text-white transition-colors hover:bg-[#234d37]"
    >
      {children}
    </button>
  )
}
