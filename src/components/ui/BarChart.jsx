export function BarChart({ data, height = 148, targetPct = null, colorFn, labelKey, valueKey, formatVal }) {
  const max = Math.max(...data.map(d => d[valueKey])) * 1.2

  return (
    <div>
      <div className="relative flex items-end gap-[7px]" style={{ height }}>
        {targetPct !== null && (
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-[#c08010] opacity-50 pointer-events-none"
            style={{ bottom: `${targetPct}%` }}
          />
        )}
        {data.map((d, i) => {
          const pct = Math.round((d[valueKey] / max) * 100)
          const color = colorFn(d[valueKey], i)
          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-[3px]">
              <span className="text-[9px] font-semibold text-[#7a7870]">{formatVal(d[valueKey])}</span>
              <div
                className="bar-rect w-full rounded-t-[5px] min-h-[3px] transition-opacity cursor-pointer"
                style={{ background: color, height: `${pct}%` }}
              />
            </div>
          )
        })}
      </div>
      <div className="flex gap-[7px] mt-0">
        {data.map((d, i) => (
          <div key={i} className="flex-1 text-center pt-1 text-[9px] font-semibold text-[#9b9990]">
            {d[labelKey]}
          </div>
        ))}
      </div>
    </div>
  )
}
