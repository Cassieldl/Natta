import { AddButton, KpiCard } from '../ui'
import { BarChart } from '../ui/BarChart'
import { PRODUCTION_HISTORY, PROFIT_CHART, TIMELINE, ALERTS, EXPENSES } from '../../data'
import { useState } from 'react'

/* ══ PRODUÇÃO ══ */
export function ProducaoTab({ onRegisterClick }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Produção</h2>
        <AddButton onClick={onRegisterClick}>+ Registrar hoje</AddButton>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <KpiCard label="Hoje">
          <div className="font-['Lora',Georgia,serif] text-[44px] font-bold text-[#0f2518] leading-none mb-1.5">
            230 <span className="text-[24px] font-medium text-[#bfbcb4]">L</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#9b9990]">
            <Chip up>+8%</Chip> vs ontem (212L)
          </div>
        </KpiCard>
        <KpiCard label="Média — 7 dias">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#2e2c28] leading-none mb-1.5">212 L</div>
          <div className="text-[11px] text-[#9b9990] mt-1">Melhor: 238L na quinta</div>
        </KpiCard>
        <KpiCard label="Mês atual">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#2d6a4f] leading-none mb-1.5">4.840 L</div>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#9b9990]">
            <Chip up>+6%</Chip> vs mês passado
          </div>
        </KpiCard>
      </div>

      <div className="bg-white rounded-2xl border border-[#edecea] p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-semibold text-[#2e2c28]">Histórico recente</h3>
          <span className="text-[12px] text-[#9b9990]">Meta: 220L/dia</span>
        </div>
        {PRODUCTION_HISTORY.map(({ day, liters, ref }) => {
          const pct = Math.round((liters / Math.max(...PRODUCTION_HISTORY.map(r => r.liters)) / 1.08) * 100)
          const delta = liters - ref
          const up = delta > 0, dn = delta < 0
          return (
            <div key={day} className="flex items-center gap-3 py-2.5 border-b border-[#f7f6f2] last:border-b-0">
              <span className="min-w-[64px] text-[12px] font-semibold text-[#9b9990]">{day}</span>
              <div className="flex-1 bg-[#f7f6f2] rounded-[6px] h-2 overflow-hidden">
                <div className="h-full bg-[#52b788] rounded-[6px]" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-[13px] font-bold text-[#0f2518] min-w-[46px] text-right">{liters}L</span>
              <span className={`text-[11px] font-semibold min-w-[44px] text-right ${up ? 'text-[#1a6038]' : dn ? 'text-[#b03030]' : 'text-[#9b9990]'}`}>
                {delta > 0 ? '+' : ''}{delta}L
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ══ HISTÓRICO ══ */
export function HistoricoTab() {
  const dotColor = { g: 'border-[#3d8b68] bg-[#d8f3dc]', a: 'border-[#c08010] bg-[#fef8e7]', r: 'border-[#b03030] bg-[#fdeaea]' }
  const tagColor  = { g: 'bg-[#f3fbf5] text-[#2d6a4f]', a: 'bg-[#fef8e7] text-[#7a4f0a]', r: 'bg-[#fdeaea] text-[#b03030]' }
  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Histórico</h2>
      </div>
      <div className="bg-white rounded-2xl border border-[#edecea] p-6">
        {TIMELINE.map(({ date, type, title, desc, tag }, i) => (
          <div key={i} className="flex gap-4 mb-5">
            <div className="flex flex-col items-center w-[38px] flex-shrink-0">
              <div className={`w-[13px] h-[13px] rounded-full border-[2.5px] bg-white ${dotColor[type]}`} />
              <div className="text-[9px] font-semibold text-[#9b9990] text-center mt-[3px] whitespace-nowrap">{date}</div>
              {i < TIMELINE.length - 1 && <div className="flex-1 w-[2px] bg-[#edecea] mt-1" />}
            </div>
            <div className="flex-1 bg-white border border-[#edecea] rounded-xl px-4 py-3.5">
              <h4 className="text-[13px] font-semibold text-[#2e2c28] mb-1">{title}</h4>
              <p className="text-[12px] text-[#9b9990] leading-[1.55]">{desc}</p>
              <span className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-[2px] rounded-[7px] ${tagColor[type]}`}>{tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══ LUCRO ══ */
export function LucroTab() {
  const [period, setPeriod] = useState('Este mês')
  const periods = ['Este mês', 'Mês anterior', '3 meses']

  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Lucro</h2>
        <div className="flex gap-[3px] bg-[#f7f6f2] border border-[#edecea] rounded-[9px] p-[3px]">
          {periods.map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`text-[12px] font-semibold px-3.5 py-[5px] rounded-[6px] transition-all ${
                period === p ? 'bg-white text-[#2d6a4f] shadow-sm' : 'text-[#7a7870] bg-transparent'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <KpiCard label="Lucro líquido">
          <div className="font-['Lora',Georgia,serif] text-[34px] font-bold text-[#2d6a4f] leading-none mb-1.5">R$ 4.280</div>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#9b9990]"><Chip up>↑ R$1.840</Chip> vs mês anterior</div>
        </KpiCard>
        <KpiCard label="Receita bruta">
          <div className="font-['Lora',Georgia,serif] text-[26px] font-bold text-[#2e2c28] leading-none mb-1.5">R$ 11.858</div>
          <div className="text-[11px] text-[#9b9990] mt-1">4.840L × R$2,45/L</div>
        </KpiCard>
        <KpiCard label="Custo total">
          <div className="font-['Lora',Georgia,serif] text-[26px] font-bold text-[#5c5a54] leading-none mb-1.5">R$ 7.578</div>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#9b9990]"><Chip warn>↑ 4%</Chip> vs mês anterior</div>
        </KpiCard>
      </div>

      <div className="bg-white rounded-2xl border border-[#edecea] p-5 mb-3.5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-semibold text-[#2e2c28]">Lucro mensal — últimos 6 meses</h3>
        </div>
        <BarChart
          data={PROFIT_CHART}
          height={172}
          targetPct={38}
          labelKey="month"
          valueKey="value"
          formatVal={v => `R$${Math.round(v / 1000)}k`}
          colorFn={(v, i) => i === PROFIT_CHART.length - 1 ? '#52b788' : '#d8f3dc'}
        />
      </div>

      <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
        <BkCard title="Receita" rows={[
          { label: 'Venda de leite', value: 'R$ 11.858', green: true },
          { label: 'Bezerros',       value: 'R$ 600',    green: true },
          { label: 'Total',          value: 'R$ 12.458', green: true, bold: true, big: true },
        ]} />
        <BkCard title="Custos" rows={[
          { label: 'Ração e volumoso',      value: 'R$ 4.200', red: true },
          { label: 'Veterinário',           value: 'R$ 1.800', red: true },
          { label: 'Mão de obra',           value: 'R$ 1.578', red: true },
          { label: 'Total',                 value: 'R$ 7.578', red: true, bold: true, big: true },
        ]} />
      </div>
    </div>
  )
}

function BkCard({ title, rows }) {
  return (
    <div className="bg-white rounded-2xl border border-[#edecea] p-5">
      <h3 className="text-[13px] font-semibold text-[#2e2c28] mb-3.5">{title}</h3>
      {rows.map(({ label, value, green, red, bold, big }) => (
        <div key={label} className={`flex items-center justify-between mb-2 ${bold ? 'border-t border-[#edecea] pt-2.5 mt-1 mb-0' : ''}`}>
          <span className={`text-[12px] text-[#7a7870] ${bold ? 'font-semibold' : ''}`}>{label}</span>
          <span className={`font-bold ${big ? 'text-[16px]' : 'text-[13px]'} ${green ? 'text-[#2d6a4f]' : red ? 'text-[#b03030]' : 'text-[#0f2518]'}`}>{value}</span>
        </div>
      ))}
    </div>
  )
}

/* ══ CUSTOS ══ */
export function CustosTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Custos</h2>
        <AddButton>+ Lançar gasto</AddButton>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <KpiCard label="Total do mês">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#5c5a54] leading-none mb-1.5">R$ 7.578</div>
          <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#9b9990]"><Chip warn>↑ 4%</Chip> vs mês passado</div>
        </KpiCard>
        <KpiCard label="Custo por litro">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#2e2c28] leading-none mb-1.5">R$ 1,57</div>
          <div className="text-[11px] text-[#9b9990] mt-1">Margem: R$0,88/litro</div>
        </KpiCard>
        <KpiCard label="Maior gasto">
          <div className="font-['Lora',Georgia,serif] text-[22px] font-bold text-[#b03030] leading-none mt-1 mb-1.5">Ração</div>
          <div className="text-[11px] text-[#9b9990] mt-1">55% do custo total</div>
        </KpiCard>
      </div>

      <div className="bg-white rounded-2xl border border-[#edecea] overflow-hidden">
        <div className="px-[18px] py-3.5 border-b border-[#edecea] flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-[#2e2c28]">Lançamentos — Abril 2025</h3>
          <span className="text-[12px] text-[#9b9990]">R$7.578 total</span>
        </div>
        {EXPENSES.map(({ icon, bg, name, desc, value, pct, pctLabel }) => (
          <div key={name} className="flex items-center gap-3.5 px-[18px] py-3.5 border-b border-[#f7f6f2] last:border-b-0">
            <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center text-[16px] flex-shrink-0" style={{ background: bg }}>{icon}</div>
            <div className="flex-1">
              <h4 className="text-[13px] font-semibold text-[#2e2c28]">{name}</h4>
              <p className="text-[11px] text-[#9b9990]">{desc}</p>
            </div>
            <div className="text-right">
              <strong className="text-[14px] font-bold text-[#2e2c28] block">{value}</strong>
              <div className="flex items-center gap-1.5 mt-[3px]">
                <div className="w-[72px] h-1 bg-[#edecea] rounded">
                  <div className="h-full bg-[#52b788] rounded" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-[10px] text-[#9b9990]">{pctLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══ ALERTAS ══ */
export function AlertasTab() {
  const borderMap  = { r: 'border-l-[#b03030]', a: 'border-l-[#c08010]', g: 'border-l-[#3d8b68]' }
  const icoMap     = { r: 'bg-[#fdeaea]', a: 'bg-[#fef8e7]', g: 'bg-[#f3fbf5]' }

  return (
    <div>
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-['Lora',Georgia,serif] text-[21px] font-bold text-[#0f2518]">Alertas</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-[18px] max-md:grid-cols-1">
        {[
          { label: 'Alertas ativos', value: 2, color: '#b03030' },
          { label: 'Em atenção',     value: 3, color: '#c08010' },
          { label: 'Resolvidos este mês', value: 7, color: '#2d6a4f' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-[#edecea] px-[18px] py-4">
            <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#9b9990] mb-1.5">{label}</div>
            <div className="font-['Lora',Georgia,serif] text-[26px] font-bold" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        {ALERTS.map(({ type, icon, title, desc, action, time }) => (
          <div
            key={title}
            className={`bg-white rounded-xl border-l-4 border border-[#edecea] px-[17px] py-4 flex gap-3.5 items-start ${borderMap[type]}`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-[16px] flex-shrink-0 ${icoMap[type]}`}>{icon}</div>
            <div className="flex-1">
              <h4 className="text-[13px] font-semibold text-[#2e2c28] mb-1">{title}</h4>
              <p className="text-[12px] text-[#7a7870] leading-[1.55]">{desc}</p>
              <button className="inline-block mt-2 text-[12px] font-semibold text-[#2d6a4f] bg-[#f3fbf5] border border-[#d8f3dc] rounded-[7px] px-3 py-[4px] cursor-pointer hover:bg-[#e8f7ed] transition-colors">
                {action}
              </button>
            </div>
            <span className="text-[11px] text-[#9b9990] whitespace-nowrap flex-shrink-0 mt-0.5">{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* shared chips */
function Chip({ up, warn, children }) {
  const cls = up ? 'bg-[#ddf5e8] text-[#1a6038]' : warn ? 'bg-[#fef8e7] text-[#7a4f0a]' : 'bg-[#fdeaea] text-[#b03030]'
  return <span className={`text-[11px] font-semibold px-2 py-[2px] rounded-lg ${cls}`}>{children}</span>
}
