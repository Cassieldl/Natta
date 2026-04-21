export function HeroSection({ onStartClick }) {
  return (
    <div className="relative overflow-hidden bg-[#fefefe]">
      {/* Milk organic blob — top right */}
      <svg className="absolute top-[-40px] right-[-80px] opacity-45 pointer-events-none" width="540" height="480" viewBox="0 0 540 480" fill="none">
        <path d="M450 55C520 130 570 220 530 310C490 400 385 440 290 418C195 396 90 332 62 242C34 152 112 50 208 22C304-6 380-20 450 55Z" fill="#eeeae0"/>
        <path d="M400 110C455 168 480 238 455 302C430 366 358 392 290 375C222 358 148 314 138 250C128 186 183 116 250 94C317 72 345 52 400 110Z" fill="#f5f3ec"/>
        <ellipse cx="315" cy="405" rx="54" ry="15" fill="#eeeae0" opacity="0.6"/>
        <path d="M298 405 Q315 428 332 405" fill="#eeeae0" opacity="0.55"/>
      </svg>
      {/* Milk blob — bottom left */}
      <svg className="absolute bottom-[-10px] left-[-60px] opacity-40 pointer-events-none" width="360" height="330" viewBox="0 0 360 330" fill="none">
        <path d="M48 265C18 228 8 172 28 124C48 76 110 38 172 28C234 18 292 50 320 100C348 150 338 220 298 260C258 300 196 318 148 306C100 294 78 302 48 265Z" fill="#eeeae0"/>
      </svg>

      <div className="relative z-10 max-w-[1140px] mx-auto px-[52px] pt-[92px] pb-[80px] grid grid-cols-[1fr_400px] gap-[80px] items-center max-md:grid-cols-1 max-md:px-7">

        {/* COPY */}
        <div>
          <div className="inline-flex items-center gap-[7px] bg-[#f3fbf5] border border-[#d8f3dc] text-[#2d6a4f] text-[12px] font-semibold px-[13px] py-[5px] rounded-[20px] mb-6 tracking-[0.03em]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#52b788] flex-shrink-0" />
            Funciona 100% pelo WhatsApp
          </div>

          <h1
            className="text-[48px] font-bold leading-[1.16] text-[#0f2518] mb-[18px] tracking-[-0.02em]"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Você está{' '}
            <em className="italic text-[#2d6a4f]">perdendo dinheiro</em> na fazenda?
          </h1>

          <p
            className="text-[22px] font-medium text-[#5c5a54] leading-[1.5] mb-2.5 italic"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Controle sua fazenda só conversando no WhatsApp.
          </p>
          <p className="text-[15px] text-[#9b9990] mb-9 leading-[1.7]">
            Registre produção, saúde e lucro direto pelo WhatsApp <br />
            Se você sabe mandar mensagem, já sabe usar.
          </p>

          <div className="flex gap-3 flex-wrap mb-8">
            <button
              className="inline-flex items-center gap-2 text-[16px] font-semibold px-7 py-[14px] rounded-[10px] bg-[#2d6a4f] text-white transition-all hover:bg-[#234d37] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(45,106,79,0.22)] active:translate-y-0 tracking-[0.01em]"
            >
              Começar grátis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
            onClick={onStartClick} 
            className="inline-flex items-center gap-2 text-[15px] font-medium px-[22px] py-[14px] rounded-[10px] border-[1.5px] border-[#d8d6d0] text-[#7a7870] bg-transparent hover:border-[#84c9a4] hover:text-[#2d6a4f] transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M10 8.5l5 3.5-5 3.5V8.5z" fill="currentColor"/></svg>
              Ver como funciona
            </button>
          </div>

          <div className="flex gap-[18px] flex-wrap">
            {['Sem complicações', 'Processo rápido', 'Pronto para usar'].map(t => (
              <span key={t} className="text-[13px] font-medium text-[#9b9990] flex items-center gap-[5px]">
                <span className="text-[#52b788] font-bold">✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* WA MOCKUP */}
        <div>
          <WaMockup />
        </div>
      </div>
    </div>
  )
}

function WaMockup() {
  return (
    <div className="bg-white rounded-[22px] border border-[#edecea] shadow-[0_20px_60px_rgba(0,0,0,0.08),0_4px_14px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Header */}
      <div className="bg-[#234d37] px-[18px] py-[14px] flex items-center gap-3">
        <div className="w-[38px] h-[38px] rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0"
          style={{ fontFamily: "'Lora', Georgia, serif" }}>N</div>
        <div>
          <h4 className="text-white text-[14px] font-semibold h-[12px]">Natta</h4>
          <span className="text-[11px] text-white/65">
            <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#4ade80] mr-1 align-middle" />
            online agora
          </span>
        </div>
      </div>
      {/* Messages */}
      <div className="p-5 flex flex-col gap-[9px] min-h-[268px]" style={{ background: '#e5ddd5' }}>
        <div className="text-[10px] text-black/40 text-center my-0.5">hoje, 06h12</div>
        <WaBubble user>produzi 230L hoje</WaBubble>
        <WaBubble>
          <b>Anotado! ✅</b><br />
          Hoje: <WaChip>230L</WaChip>{' '}
          <WaChip green>+8% vs média</WaChip>
          <div className="text-[10px] opacity-65 mt-[3px]">Média 7 dias: 212L · Recorde: 238L</div>
          <WaChip>Lucro do mês: +R$1.840 💰</WaChip>
        </WaBubble>
        <WaBubble user>a Mimosa tá mancando</WaBubble>
        <WaBubble><b>Alerta criado! 🐄</b><br />Quer que eu marque o veterinário?</WaBubble>
        <WaBubble user>sim</WaBubble>
        <WaBubble>
          <b>Pronto.</b> Visita na quinta, às 14h.<br />
        </WaBubble>
      </div>
    </div>
  )
}

function WaBubble({ user = false, children }) {
  return (
    <div className={`wa-bubble max-w-[80%] px-[13px] py-[9px] text-[13px] leading-[1.55] ${
      user
        ? 'self-end bg-white text-[#2e2c28] rounded-[12px_3px_12px_12px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]'
        : 'self-start bg-[#2d6a4f] text-white rounded-[3px_12px_12px_12px]'
    }`}>
      {children}
    </div>
  )
}

function WaChip({ green = false, children }) {
  return (
    <span className={`inline-block rounded px-[7px] py-[1px] text-[11px] font-semibold ${
      green ? 'bg-white/[0.16] text-[#a8f0c4]' : 'bg-white/20'
    }`}>
      {children}
    </span>
  )
}
