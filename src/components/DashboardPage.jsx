import { useState } from 'react'
import { DashboardSidebar } from './dashboard/DashboardSidebar'
import { DashboardTopbar } from './dashboard/DashboardTopbar'
import { PainelTab } from './dashboard/PainelTab'
import { RebanhoTab } from './dashboard/RebanhoTab'
import { ProducaoTab, HistoricoTab, LucroTab, CustosTab, AlertasTab } from './dashboard/DashTabs'
import { RegisterModal } from './ui/RegisterModal'

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('painel')
  const [modalOpen, setModalOpen]   = useState(false)
  const [todayLiters, setTodayLiters] = useState(230)

  const TABS = {
    painel:    <PainelTab todayLiters={todayLiters} onTabChange={setActiveTab} />,
    rebanho:   <RebanhoTab />,
    producao:  <ProducaoTab onRegisterClick={() => setModalOpen(true)} />,
    historico: <HistoricoTab />,
    lucro:     <LucroTab />,
    custos:    <CustosTab />,
    alertas:   <AlertasTab />,
  }

  return (
    <div className="flex min-h-[calc(100vh-42px)]">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 bg-[#f0f0eb] flex flex-col overflow-y-auto">
        <DashboardTopbar activeTab={activeTab} onRegisterClick={() => setModalOpen(true)} />
        <div className="p-[22px_26px] flex-1">
          {TABS[activeTab]}
        </div>
      </div>

      <RegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={l => setTodayLiters(Number(l))}
      />
    </div>
  )
}
