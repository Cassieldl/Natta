import { useState } from 'react'
import { LandingPage } from './components/LandingPage'
import { DashboardPage } from './components/DashboardPage'

export default function App() {
  const [view, setView] = useState('landing')

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[2000] h-[42px] flex items-center justify-center gap-1 px-6 border-b border-white/[0.08]"
        style={{ background: 'rgba(15,37,24,0.97)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-center gap-2.5 mr-6">
          <div className="w-[26px] h-[26px] bg-[#3d8b68] rounded-[7px] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="14" rx="6" ry="5" fill="rgba(255,255,255,0.88)"/>
              <path d="M10 6h4v6h-4z" fill="rgba(255,255,255,0.52)"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontWeight: 700, color: '#fff' }}>Natta</span>
        </div>
        <button
          onClick={() => setView('landing')}
          className={`text-[12px] font-semibold px-4 py-[5px] rounded-[16px] transition-all cursor-pointer border-0 ${
            view === 'landing' ? 'bg-[#3d8b68] text-white' : 'text-white/45 bg-transparent'
          }`}
        >
          Landing Page
        </button>
        <button
          onClick={() => setView('dashboard')}
          className={`text-[12px] font-semibold px-4 py-[5px] rounded-[16px] transition-all cursor-pointer border-0 ${
            view === 'dashboard' ? 'bg-[#3d8b68] text-white' : 'text-white/45 bg-transparent'
          }`}
        >
          Dashboard
        </button>
      </div>

      <div className="mt-[42px]">
        {view === 'landing'
          ? <LandingPage onStartClick={() => setView('dashboard')} />
          : <DashboardPage />
        }
      </div>
    </>
  )
}
