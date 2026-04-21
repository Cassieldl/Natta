const TAB_TITLES = {
  painel:    'Bom dia — aqui está sua fazenda hoje',
  rebanho:   'Rebanho',
  producao:  'Produção',
  historico: 'Histórico',
  lucro:     'Lucro',
  custos:    'Custos',
  alertas:   'Alertas',
}

export function DashboardTopbar({ activeTab, onRegisterClick }) {
  return (
    <header className="bg-white border-b border-[#edecea] px-7 h-14 flex items-center justify-between sticky z-[100] flex-shrink-0">
      <div>
        <h2 className="text-[15px] font-semibold text-[#2e2c28]">{TAB_TITLES[activeTab]}</h2>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="text-[12px] font-semibold text-[#9b9990] bg-[#f7f6f2] border border-[#edecea] rounded-[7px] px-3 py-[5px]">
          Ter, 21 abr 2026
        </div>
        <button
          onClick={onRegisterClick}
          className="flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg bg-[#2d6a4f] text-white hover:bg-[#234d37] transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          Registrar produção
        </button>
      </div>
    </header>
  )
}
