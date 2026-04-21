import { AddButton } from '../ui'
import { CATTLE } from '../../data'

const STATS = [
  { label: 'Total de vacas', value: 47, color: '#0f2518' },
  { label: 'Em lactação',    value: 42, color: '#2d6a4f' },
  { label: 'Em atenção',     value: 3,  color: '#c08010' },
  { label: 'Em alerta',      value: 2,  color: '#b03030' },
]

export function RebanhoTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Rebanho</h2>
        <AddButton>+ Registrar ocorrência</AddButton>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-3 mb-[18px] max-md:grid-cols-2">
        {STATS.map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-[#edecea] px-[18px] py-4">
            <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#9b9990] mb-1.5">{label}</div>
            <div className="font-['Lora',Georgia,serif] text-[26px] font-bold" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#edecea] overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Nº', 'Nome', 'Hoje', 'Variação', 'Status', ''].map(h => (
                <th key={h} className="bg-[#f7f6f2] text-[10px] font-bold tracking-[0.08em] uppercase text-[#9b9990] px-4 py-2.5 text-left border-b border-[#edecea]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CATTLE.map(c => (
              <tr key={c.id} className="border-b border-[#f7f6f2] last:border-b-0 hover:bg-[#f7f6f2] transition-colors">
                <td className="px-4 py-3 text-[13px] font-bold text-[#2e2c28]">{c.id}</td>
                <td className="px-4 py-3">
                  <div className="text-[13px] font-semibold text-[#0f2518]">{c.name}</div>
                  <div className="text-[11px] text-[#9b9990] mt-[1px]">{c.lactation}</div>
                </td>
                <td className="px-4 py-3 text-[13px] font-bold text-[#2e2c28]">{c.liters}L</td>
                <td className="px-4 py-3"><DeltaChip value={c.delta} /></td>
                <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                <td className="px-4 py-3">
                  <button
                    className={`text-[11px] font-semibold px-[9px] py-[3px] rounded-[6px] border-none cursor-pointer transition-colors ${
                      c.status === 'alert'
                        ? 'text-[#b03030] bg-[#fdeaea] hover:bg-[#f5c2c2]'
                        : 'text-[#2d6a4f] bg-transparent hover:bg-[#f3fbf5]'
                    }`}
                  >
                    {c.status === 'alert' ? 'Registrar' : 'Ver histórico'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const map = { ok: 'bg-[#ddf5e8] text-[#1a6038]', warn: 'bg-[#fef8e7] text-[#7a4f0a]', alert: 'bg-[#fdeaea] text-[#b03030]' }
  const labels = { ok: 'Boa', warn: 'Atenção', alert: 'Alerta' }
  return <span className={`text-[10px] font-bold px-[9px] py-[3px] rounded-lg ${map[status]}`}>{labels[status]}</span>
}

function DeltaChip({ value }) {
  if (!value || value === '—') return <span className="text-[11px] font-semibold px-2 py-[2px] rounded-lg bg-[#f7f6f2] text-[#7a7870]">—</span>
  const up = value.startsWith('+'), dn = value.startsWith('-')
  const cls = up ? 'bg-[#ddf5e8] text-[#1a6038]' : dn ? 'bg-[#fdeaea] text-[#b03030]' : 'bg-[#fef8e7] text-[#7a4f0a]'
  return <span className={`text-[11px] font-semibold px-2 py-[2px] rounded-lg ${cls}`}>{value}</span>
}
