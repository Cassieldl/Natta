import { NattaLogo } from '../ui/NattaLogo'

const NAV_ITEMS = [
  {
    section: null,
    items: [{ id: 'painel', label: 'Painel geral', icon: PanelIcon }],
  },
  {
    section: 'Fazenda',
    items: [
      { id: 'rebanho',   label: 'Rebanho',   icon: CattleIcon },
      { id: 'producao',  label: 'Produção',  icon: ChartIcon },
      { id: 'historico', label: 'Histórico', icon: ClockIcon },
    ],
  },
  {
    section: 'Financeiro',
    items: [
      { id: 'lucro',  label: 'Lucro',  icon: MoneyIcon },
      { id: 'custos', label: 'Custos', icon: WalletIcon },
    ],
  },
  {
    section: 'Saúde',
    items: [{ id: 'alertas', label: 'Alertas', icon: AlertIcon, badge: '2' }],
  },
]

export function DashboardSidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-[220px] bg-[#f6fbf8] border-r border-[#e2f0e8] flex-shrink-0 flex flex-col h-[calc(100vh-42px)] sticky top-[42px]">
      {/* Logo */}
      <div className="px-4 pt-5 pb-4 border-b border-[#e2f0e8]">
        <NattaLogo size={30} textColor="#1a3a2a" textSize={18} />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2.5 py-3 overflow-y-auto">
        {NAV_ITEMS.map(({ section, items }) => (
          <div key={section ?? 'main'}>
            {section && (
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#7da48b] px-2.5 mt-3.5 mb-1">{section}</p>
            )}
            {items.map(({ id, label, icon: Icon, badge }) => {
              const active = activeTab === id
              return (
                <button
                  key={id}
                  onClick={() => onTabChange(id)}
                  className={`w-full flex items-center gap-[9px] px-3 py-[9px] rounded-[9px] text-[13px] font-medium transition-all mb-[1px] ${
                    active
                      ? 'bg-[#2d6a4f] text-white font-semibold'
                      : 'text-[#3d5c48] hover:bg-[#e8f7ed] hover:text-[#234d37]'
                  }`}
                >
                  <Icon active={active} />
                  <span className="flex-1 text-left">{label}</span>
                  {badge && (
                    <span className={`text-[10px] font-bold px-[6px] py-[2px] rounded-[7px] ${
                      active ? 'bg-white/30 text-white' : 'bg-[#b03030] text-white'
                    }`}>{badge}</span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Farm info */}
      <div className="px-2.5 py-3 border-t border-[#e2f0e8]">
        <div className="flex items-center gap-[9px] px-3 py-2 rounded-[9px] bg-[#e8f7ed] border border-[#d8f3dc]">
          <div className="w-8 h-8 bg-[#3d8b68] rounded-[7px] flex items-center justify-center text-[13px] flex-shrink-0">🌾</div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1a3a2a]">Fazenda Santa Fé</h4>
            <p className="text-[10px] text-[#7da48b]">47 vacas em lactação</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

/* Icons */
function PanelIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity=".4"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity=".4"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity=".4"/>
    </svg>
  )
}
function CattleIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <ellipse cx="12" cy="14" rx="5" ry="4" fill="currentColor" opacity=".35"/>
      <rect x="10" y="7" width="4" height="5" rx="1" fill="currentColor" opacity=".65"/>
    </svg>
  )
}
function ChartIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8 17V12M12 17V8M16 17v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function ClockIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
function MoneyIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
function WalletIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 3H8v4h8V3z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
function AlertIcon({ active }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={active ? 'opacity-100' : 'opacity-70'}>
      <path d="M12 2L3 20h18L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 10v4M12 16.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
