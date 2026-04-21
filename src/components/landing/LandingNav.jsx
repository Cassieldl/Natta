import { NattaLogo } from '../ui/NattaLogo'

export function LandingNav({ onStartClick }) {
  return (
    <nav className="sticky top-[42px] z-[900] bg-[rgba(254,254,254,0.95)] backdrop-blur-xl border-b border-black/[0.06] px-[52px] flex items-center justify-between h-[62px]">
      <NattaLogo size={32} textColor="#1a3a2a" textSize={20} />

      <div className="hidden md:flex gap-8">
        {['Como funciona', 'WhatsApp', 'Planos'].map(l => (
          <a key={l} href="#" className="text-[14px] font-medium text-[#7a7870] hover:text-[#2d6a4f] transition-colors">
            {l}
          </a>
        ))}
      </div>

      <div className="flex gap-2.5 items-center">
        <button 
        onClick={onStartClick}
        className="text-[14px] font-medium px-[18px] py-2 rounded-lg border-[1.5px] border-[#d8d6d0] text-[#7a7870] hover:border-[#84c9a4] hover:text-[#2d6a4f] transition-all">
          Ver como funciona
        </button>
        <button
          className="text-[14px] font-semibold px-5 py-[9px] rounded-lg bg-[#2d6a4f] text-white hover:bg-[#234d37] transition-colors tracking-[0.01em]"
        >
          Começar grátis →
        </button>
      </div>
    </nav>
  )
}
