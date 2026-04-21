import { useState } from 'react'
import { KpiCard } from '../ui'
import { BarChart } from '../ui/BarChart'
import { CHART_DATA, CATTLE } from '../../data'

export function PainelTab({ todayLiters, onTabChange }) {
  const [alertVisible, setAlertVisible] = useState(true)

  return (
    <div>
      {/* Alert bar */}
      {alertVisible && (
        <div className="bg-[#fef8e7] border border-[#f5d87a] rounded-xl px-4 py-3.5 flex items-center gap-3 mb-[18px]">
          <div className="w-[34px] h-[34px] bg-[#f5d87a] rounded-lg flex items-center justify-center text-[15px] flex-shrink-0">⚠️</div>
          <p className="text-[13px] text-[#6b4209] leading-[1.5]">
            <strong className="font-semibold text-[#5a3507]">Mimosa (vaca 12)</strong> está mancando há 2 dias. Produção caiu 18%.{' '}
            <strong className="font-semibold text-[#5a3507]">Veterinário na quinta, 14h.</strong>
          </p>
          <button
            onClick={() => setAlertVisible(false)}
            className="ml-auto text-[12px] font-semibold text-[#a06020] bg-transparent border-none cursor-pointer px-2 py-1 rounded hover:bg-black/5 transition-colors whitespace-nowrap"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Main KPIs */}
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-3.5 mb-3.5 max-md:grid-cols-1">
        <KpiCard label="Produção de hoje" emoji="🥛">
          <div className="font-['Lora',Georgia,serif] text-[52px] font-bold text-[#0f2518] leading-none mb-1.5">
            {todayLiters} <span className="text-[26px] font-medium text-[#bfbcb4]">L</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-[#9b9990] flex-wrap mt-1.5">
            <span className="text-[11px] font-semibold px-2 py-[2px] rounded-lg bg-[#ddf5e8] text-[#1a6038]">↑ 8%</span>
            vs média dos últimos 7 dias (212L)
          </div>
        </KpiCard>

        <KpiCard label="Lucro estimado — mês" emoji="💰">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#c08010] leading-none mb-1.5">R$ 4.280</div>
          <div className="flex items-center gap-1.5 text-[12px] text-[#9b9990] flex-wrap mt-1">
            <span className="text-[11px] font-semibold px-2 py-[2px] rounded-lg bg-[#ddf5e8] text-[#1a6038]">↑ R$1.840</span>
            vs mês anterior
          </div>
        </KpiCard>

        <KpiCard label="Custo do mês" emoji="📦">
          <div className="font-['Lora',Georgia,serif] text-[30px] font-bold text-[#5c5a54] leading-none mb-1.5">R$ 2.940</div>
          <div className="flex items-center gap-1.5 text-[12px] text-[#9b9990] flex-wrap mt-1">
            <span className="text-[11px] font-semibold px-2 py-[2px] rounded-lg bg-[#fef8e7] text-[#7a4f0a]">↑ 4%</span>
            ração subiu esta semana
          </div>
        </KpiCard>
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <KpiCard label="Preço por litro">
          <div className="font-['Lora',Georgia,serif] text-[24px] font-bold text-[#2e2c28] leading-none mb-1.5">R$ 2,45</div>
          <div className="text-[11px] text-[#9b9990] mt-1">Cooperativa Sul</div>
        </KpiCard>
        <KpiCard label="Qualidade do leite">
          <div className="font-['Lora',Georgia,serif] text-[24px] font-bold text-[#2d6a4f] leading-none mb-1.5">Boa</div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[11px] font-semibold px-2 py-[2px] rounded-lg bg-[#ddf5e8] text-[#1a6038]">CCS baixa</span>
            <span className="text-[12px] text-[#9b9990]">sem penalidade</span>
          </div>
        </KpiCard>
        <KpiCard label="Vacas em alerta">
          <div className="font-['Lora',Georgia,serif] text-[36px] font-bold text-[#b03030] leading-none mb-1.5">2</div>
          <div className="text-[11px] text-[#9b9990] mt-1">Mimosa · Estrela</div>
        </KpiCard>
      </div>

      {/* Chart + Mini cattle */}
      <div className="grid grid-cols-[2fr_1fr] gap-3.5 mb-3.5 max-md:grid-cols-1">
        {/* Chart */}
        <div className="bg-white rounded-2xl border border-[#edecea] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-semibold text-[#2e2c28]">Produção — últimos 7 dias</h3>
            <div className="flex gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-[#7a7870]">
                <span className="w-2 h-2 rounded-full bg-[#52b788]" />Real
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#7a7870]">
                <span className="w-2 h-2 rounded-full bg-[#c08010] opacity-60" />Meta 220L
              </span>
            </div>
          </div>
          <BarChart
            data={CHART_DATA}
            height={148}
            targetPct={62}
            labelKey="day"
            valueKey="liters"
            formatVal={v => `${v}L`}
            colorFn={v => v >= 220 ? '#52b788' : '#c08010'}
          />
        </div>

        {/* Mini cattle */}
        <div className="bg-white rounded-2xl border border-[#edecea] p-[18px]">
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-[14px] font-semibold text-[#2e2c28]">Rebanho</h3>
            <button
              onClick={() => onTabChange('rebanho')}
              className="text-[12px] font-semibold text-[#2d6a4f] bg-[#f3fbf5] px-2.5 py-1 rounded-lg border border-[#d8f3dc] hover:bg-[#e8f7ed] transition-colors"
            >
              Ver todas →
            </button>
          </div>
          {CATTLE.slice(0, 4).map(c => (
            <div key={c.id} className="flex items-center gap-2.5 py-2 border-b border-[#f7f6f2] last:border-b-0">
              <div className="w-[30px] h-[30px] bg-[#f7f6f2] rounded-[7px] flex items-center justify-center text-[11px] font-bold text-[#7a7870] flex-shrink-0">{c.id}</div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold text-[#2e2c28]">{c.name}</div>
                <div className="text-[11px] text-[#9b9990]">{c.liters}L{c.note ? ` · ${c.note}` : ''}</div>
              </div>
              <StatusBadge status={c.status} />
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white rounded-2xl border border-[#edecea] p-5">
        <h3 className="text-[14px] font-semibold text-[#2e2c28] mb-3.5">💡 Oportunidades pra você</h3>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {SUGGESTIONS.map(({ icon, title, text, tag, tagClass }) => (
            <div
              key={title}
              className="bg-[#f7f6f2] rounded-[11px] p-4 border border-[#edecea] cursor-pointer transition-all hover:border-[#b7e4c7] hover:bg-[#f3fbf5]"
            >
              <div className="text-[19px] mb-2">{icon}</div>
              <h4 className="text-[12px] font-semibold text-[#2e2c28] mb-1">{title}</h4>
              <p className="text-[11px] text-[#9b9990] leading-[1.55]">{text}</p>
              <span className={`inline-block mt-2 text-[10px] font-semibold px-2 py-[2px] rounded-[7px] ${tagClass}`}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const map = {
    ok:    'bg-[#ddf5e8] text-[#1a6038]',
    warn:  'bg-[#fef8e7] text-[#7a4f0a]',
    alert: 'bg-[#fdeaea] text-[#b03030]',
  }
  const labels = { ok: 'Boa', warn: 'Atenção', alert: 'Alerta' }
  return <span className={`text-[10px] font-bold px-[9px] py-[3px] rounded-lg ${map[status]}`}>{labels[status]}</span>
}

const SUGGESTIONS = [
  { icon: '🌿', title: 'Ajuste na alimentação', text: 'Aumentar volumoso 10% pode render +15L/dia nas top produtoras.', tag: '+R$400/mês estimado', tagClass: 'bg-[#f3fbf5] text-[#2d6a4f] border border-[#d8f3dc]' },
  { icon: '🐮', title: 'Observar a Estrela', text: 'Queda de 22% em 5 dias. Pode ser início de mastite ou estresse.', tag: 'Verificar esta semana', tagClass: 'bg-[#fef8e7] text-[#7a4f0a]' },
  { icon: '📈', title: 'Negociar preço do litro', text: 'CCS baixa + produção crescendo = momento ideal pra negociar.', tag: '+R$230/mês estimado', tagClass: 'bg-[#f3fbf5] text-[#2d6a4f] border border-[#d8f3dc]' },
]
