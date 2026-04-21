import { Eyebrow, SectionH } from '../ui'

/* ── TRUST STRIP ── */
export function TrustStrip() {
  const items = [
    { icon: '🐄', label: 'Controle total de seu rebanho.' },
    { icon: '🔔', label: 'Receba alertas automáticos do rebanho' },
    { icon: '📊', label: 'Histórico e relatórios automáticos' },
  ]
  return (
    <div className="bg-[#f3fbf5] border-y border-[#d8f3dc] py-5 px-[52px] max-md:px-7">
      <div className="max-w-[1140px] mx-auto flex items-center justify-center gap-14 flex-wrap">
        {items.map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-[9px]">
            <div className="w-9 h-9 bg-[#e8f7ed] rounded-[8px] flex items-center justify-center text-[17px] flex-shrink-0">{icon}</div>
            <span className="text-[14px] font-semibold text-[#1a3a2a]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── BRIDGE QUOTE ── */
export function BridgeQuote({ text, sub }) {
  return (
    <div className="py-[60px] px-[52px] text-center bg-[#fefefe] max-md:px-7">
      <div className="max-w-[680px] mx-auto">
        <p
          className="text-[32px] font-bold text-[#0f2518] leading-[1.35] tracking-[-0.02em]"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          {text}
        </p>
        {sub && <p className="mt-3 text-[16px] text-[#5c5a54] italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>{sub}</p>}
        <div className="w-12 h-[3px] bg-[#52b788] rounded-full mx-auto mt-5" />
      </div>
    </div>
  )
}

/* ── PAIN SECTION ── */
export function PainSection() {
  const cards = [
    { icon: '📋', title: 'Você anota, mas nunca soma', text: 'Anotar à mão cansa, some e não traz número. Você perde o controle sem perceber.' },
    { icon: '🐄', title: 'Vaca doente vira prejuízo silencioso', text: 'Quando você percebe que a produção caiu, já perdeu dias. Alerta cedo vale dinheiro.' },
    { icon: '💸', title: 'Custo que some sem deixar rastro', text: 'Ração, remédio, descarte. Tudo sai sem você ver o impacto real no lucro do mês.' },
  ]
  return (
    <div className="border-y border-[#e8e4d8] py-[72px] px-[52px] max-md:px-7">
      <div className="max-w-[1140px] mx-auto">
        <Eyebrow>O problema real</Eyebrow>
        <SectionH>Você trabalha muito.<br />Mas sabe quanto está perdendo?</SectionH>
        <p className="text-[16px] text-[#7a7870] max-w-[480px] leading-[1.7] mb-12">
          A maioria dos produtores não sabe o custo por litro, nem qual vaca está dando prejuízo.
        </p>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {cards.map(({ icon, title, text }) => (
            <div
              key={title}
              className="bg-white border border-black/[0.07] rounded-2xl p-7 transition-all hover:border-[#b7e4c7] hover:shadow-[0_4px_20px_rgba(45,106,79,0.07)] hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 bg-[#f3fbf5] border border-[#d8f3dc] rounded-[11px] flex items-center justify-center text-[20px] mb-4">{icon}</div>
              <h3 className="text-[17px] font-bold text-[#0f2518] mb-2 leading-[1.35]" style={{ fontFamily: "'Lora', Georgia, serif" }}>{title}</h3>
              <p className="text-[14px] text-[#7a7870] leading-[1.7]">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-11 text-[20px] font-medium italic text-[#2d6a4f]"
          style={{ fontFamily: "'Lora', Georgia, serif" }}>
          "O sábio valoriza o fruto do seu trabalho, no controle de seus desejos e no uso do que realmente precisa"
        </p>
      </div>
    </div>
  )
}

/* ── HOW IT WORKS ── */
export function HowSection() {
  const steps = [
    { n: '1', title: 'Manda uma mensagem', text: '"Produzi 180L hoje" ou "vaca 7 com febre". Só isso. A Natta entende o resto.', badge: 'WhatsApp' },
    { n: '2', title: 'A Natta organiza tudo', text: 'Registro, histórico e alertas automáticos. Sem clique, sem formulário, sem esforço.', badge: 'Automático' },
    { n: '3', title: 'Você vê onde ganhar mais', text: 'Painel simples com litros, lucro e sugestão do que fazer pra melhorar.', badge: 'Dashboard' },
  ]
  return (
    <div className="py-[72px] px-[52px] bg-[#fefefe] max-md:px-7">
      <div className="max-w-[1140px] mx-auto">
        <Eyebrow>Como funciona</Eyebrow>
        <SectionH>Simples como mandar<br />uma mensagem</SectionH>
        <p className="text-[16px] text-[#7a7870] max-w-[480px] leading-[1.7]">
          Sem sistema novo pra aprender. Você usa o WhatsApp que já conhece.
        </p>
        <div className="grid grid-cols-3 gap-12 mt-[50px] max-md:grid-cols-1">
          {steps.map(({ n, title, text, badge }) => (
            <div key={n}>
              <div className="w-[50px] h-[50px] rounded-full border-2 border-[#d8f3dc] bg-[#f3fbf5] flex items-center justify-center text-[19px] font-bold text-[#2d6a4f] mb-[18px]"
                style={{ fontFamily: "'Lora', Georgia, serif" }}>{n}</div>
              <h3 className="text-[18px] font-bold text-[#0f2518] mb-[9px] leading-[1.3]" style={{ fontFamily: "'Lora', Georgia, serif" }}>{title}</h3>
              <p className="text-[14px] text-[#7a7870] leading-[1.75]">{text}</p>
              <span className="inline-block mt-3 text-[11px] font-semibold px-3 py-[3px] rounded-[10px] bg-[#f3fbf5] text-[#2d6a4f] border border-[#d8f3dc]">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── TESTIMONIAL ── */
export function TestimonialSection() {
  return (
    <div className="bg-[#f3fbf5] border-y border-[#d8f3dc] py-[80px] px-[52px] max-md:px-7">
      <div className="max-w-[700px] mx-auto text-center">
        <div className="text-[18px] text-[#d4a017] tracking-[3px] mb-5">★★★★★</div>
        <p className="text-[24px] font-medium italic text-[#0f2518] leading-[1.55] mb-7"
          style={{ fontFamily: "'Lora', Georgia, serif" }}>
          "Nunca pensei que ia controlar minha fazenda por mensagem. Agora sei exatamente quanto ganho por litro. Em um mês já paguei o sistema."
        </p>
        <div className="flex items-center justify-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-[#e8e4d8] flex items-center justify-center text-[20px]">🧑‍🌾</div>
          <div className="text-left">
            <h4 className="text-[14px] font-semibold text-[#0f2518]">José Renato Alves</h4>
            <p className="text-[12px] text-[#9b9990]">Produtor leiteiro · Minas Gerais · 42 vacas</p>
          </div>
        </div>
        <p className="mt-8 text-[14px] font-semibold text-[#2d6a4f] tracking-[0.03em]">
          A propriedade de seu José aumentou o lucro por litro em 20% no primeiro mês usando a Natta.
        </p>
      </div>
    </div>
  )
}

/* ── WA HIGHLIGHT (dark) ── */
export function WhatsAppSection() {
  const features = [
    { icon: '💬', title: 'Fala, a Natta entende', text: 'Fale da sua maneira, apenas mais uma conversa, mas que traz resultados.' },
    { icon: '📊', title: 'A informação que você precisa', text: 'Litros, lucro, custo. Tudo visível numa tela só.' },
    { icon: '📈', title: 'Sempre um passo a frente', text: 'Recomendações pra aumentar sua produção.' },
  ]
  return (
    <div className="bg-[#0f2518] py-[72px] px-[52px] relative overflow-hidden max-md:px-7">
      <svg className="absolute right-[-60px] top-[-30px] opacity-[0.07] pointer-events-none" width="400" height="360" viewBox="0 0 400 360">
        <path d="M310 30C370 90 410 170 385 250C360 330 270 360 190 342C110 324 30 268 14 190C-2 112 58 28 140 8C222-12 250-30 310 30Z" fill="#fff"/>
      </svg>
      <div className="max-w-[1140px] mx-auto relative z-10 grid grid-cols-2 gap-[72px] items-center max-md:grid-cols-1">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#52b788] mb-2">Diferencial</p>
          <h2 className="text-[32px] font-bold text-white leading-[1.25] mb-3 tracking-[-0.015em]"
            style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Tudo dentro da sua 
            <br/> 
            rotina
          </h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-7">
            Você já sabe usar o WhatsApp. Isso é tudo que precisa.
          </p>
          <div className="flex flex-col gap-4">
            {features.map(({ icon, title, text }) => (
              <div key={title} className="flex items-start gap-3.5">
                <div className="w-[38px] h-[38px] bg-white/[0.08] rounded-[9px] flex items-center justify-center text-[17px] flex-shrink-0 mt-[1px]">{icon}</div>
                <div>
                  <h4 className="text-[14px] font-semibold text-white mb-[3px]">{title}</h4>
                  <p className="text-[13px] text-white/55 leading-[1.6]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-[38px] font-bold italic text-white leading-[1.3] mb-5 tracking-[-0.02em]"
            style={{ fontFamily: "'Lora', Georgia, serif" }}>
            "Mais dinheiro e menos
            <br/>
            dor de cabeça.
            <br/>
            <em className="text-[#52b788]">Na palma da mão.</em>"
          </p>
          <div className="w-12 h-[3px] bg-[#3d8b68] rounded-full mx-auto mb-5" />
          <p className="text-[15px] text-white/50 italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Fale. A Natta organiza.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── TRANSFORM ── */
export function TransformSection() {
  const before = ['Custo que você não consegue calcular.', 'Prejuízo que aparece tarde demais', 'Decisão no chute, sem número']
  const after  = ['Custo e lucro visíveis em tempo real, com aumento mínimo de 10%', 'Alerta antes do problema piorar', 'Sugestão clara de onde ganhar mais']
  return (
    <div className="bg-[#faf9f5] border-y border-[#e8e4d8] py-[72px] px-[52px] max-md:px-7">
      <div className="max-w-[1140px] mx-auto">
        <Eyebrow>A diferença na prática</Eyebrow>
        <SectionH>Antes e depois da Natta</SectionH>
        <div className="grid grid-cols-2 gap-6 mt-12 max-md:grid-cols-1">
          <div className="bg-[#faf8f3] border border-[#e8e4d8] rounded-[18px] p-8">
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#9b9990] mb-5 flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-[#e8e4d8] flex items-center justify-center text-[23px] text-[#9b9990]">😕</span>
              Sem a Natta
            </p>
            {before.map(t => (
              <div key={t} className="flex items-start gap-2.5 text-[14px] text-[#7a7870] mb-3 leading-[1.5]">
                <span className="w-[22px] h-[22px] rounded-full bg-[#e8e4d8] flex items-center justify-center text-[10px] font-bold text-[#9b9990] flex-shrink-0 mt-[2px]">✕</span>
                {t}
              </div>
            ))}
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#9b9990] mb-5 flex items-center gap-2">
              De acordo com estudos, produtores perdem em média 15% do lucro por não ter controle real da fazenda.
            </p>
          </div>
          <div className="bg-[#f3fbf5] border border-[#d8f3dc] rounded-[18px] p-8">
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#2d6a4f] mb-5 flex items-center gap-2">
              <span className="w-[25px] h-[25px] rounded-full bg-[#d8f3dc] flex items-center justify-center text-[23px] text-[#2d6a4f]">🤠</span>
              Com a Natta
            </p>
            {after.map(t => (
              <div key={t} className="flex items-start gap-2.5 text-[14px] text-[#1a3a2a] mb-3 leading-[1.5]">
                <span className="w-[22px] h-[22px] rounded-full bg-[#d8f3dc] flex items-center justify-center text-[10px] font-bold text-[#2d6a4f] flex-shrink-0 mt-[2px]">✓</span>
                {t}
              </div>
            ))}
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#2d6a4f] mb-5 flex items-center gap-2">
              Além de evitar perdas, de acordo com nossos usuários, o lucro aumenta em média 18% já no primeiro mês usando a Natta.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── FEATURES ── */
export function FeaturesSection() {
  const feats = [
    { icon: '🛜', title: 'Sistema offline', text: 'A Natta funciona mesmo sem internet. Os dados ficam salvos para você acessar quando quiser.' },
      { icon: '📉', title: 'Análise de desempenho', text: 'Identifique vacas que estão abaixo do esperado e tome ações para melhorar a produção.' },
      { icon: '🔔', title: 'Alertas personalizados', text: 'Receba notificações sobre eventos importantes, como quedas de produção ou problemas de saúde.' },
        { icon: '📈', title: 'Relatórios detalhados', text: 'Gere relatórios completos sobre a produção, saúde e desempenho do seu rebanho.' },
  ]
  return (
    <div className="py-[72px] px-[52px] bg-[#fefefe] max-md:px-7">
      <div className="max-w-[1140px] mx-auto">
        <Eyebrow>Outras funcionalidades</Eyebrow>
        <SectionH>Foque apenas no que precisa
        <br/>
         e no que faz a diferença.</SectionH>
        <div className="grid grid-cols-2 gap-[18px] mt-[46px] max-md:grid-cols-1">
          {feats.map(({ icon, title, text }) => (
            <div
              key={title}
              className="border border-[#edecea] rounded-[15px] p-[26px] flex gap-[17px] transition-all hover:border-[#b7e4c7] hover:shadow-[0_4px_18px_rgba(45,106,79,0.07)] hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 bg-[#f3fbf5] border border-[#d8f3dc] rounded-[10px] flex items-center justify-center text-[20px] flex-shrink-0">{icon}</div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#0f2518] mb-1.5">{title}</h3>
                <p className="text-[13px] text-[#7a7870] leading-[1.65]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── CTA ── */
export function CtaSection({ onStartClick }) {
  return (
    <div className="bg-[#1a3a2a] py-[90px] px-[52px] text-center relative overflow-hidden max-md:px-7">
      <svg className="absolute top-[-40px] right-[-60px] opacity-[0.06] pointer-events-none" width="380" height="340" viewBox="0 0 380 340">
        <path d="M305 35C365 95 405 175 378 255C351 335 260 362 180 344C100 326 22 268 8 188C-6 108 56 26 140 6C224-14 245-25 305 35Z" fill="#fff"/>
      </svg>
      <div className="relative z-10 max-w-[560px] mx-auto">
        <h2 className="text-[40px] font-bold text-white leading-[1.25] mb-3 tracking-[-0.02em]"
          style={{ fontFamily: "'Lora', Georgia, serif" }}>
          Você tem tudo que precisa<br />Comece agora
        </h2>
        <p className="text-[16px] text-white/60 mb-9 leading-[1.7]">
          Teste hoje e veja o lucro da semana que vem. Sem cartão, sem compromisso, sem dor de cabeça.
        </p>
        <button
          onClick={onStartClick}
          className="inline-flex items-center gap-2.5 text-[16px] font-semibold px-9 py-4 rounded-[11px] bg-white text-[#0f2518] hover:bg-[#f3fbf5] transition-colors tracking-[0.01em]"
        >
          Começar grátis
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {['Sem cartão', 'Suporte em português', 'Cancele quando quiser'].map(t => (
            <span key={t} className="text-[12px] font-semibold text-white/40 flex items-center gap-1">
              <span className="text-[#52b788]">✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── FOOTER ── */
export function LandingFooter() {
  return (
    <footer className="bg-[#0f2518] border-t border-white/[0.06] px-[52px] py-7 flex items-center justify-between flex-wrap gap-4 max-md:px-7">
      <div className="flex items-center gap-2.5">
        <div className="w-[26px] h-[26px] bg-[#2d6a4f] rounded-[7px] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="14" rx="6" ry="5" fill="rgba(255,255,255,0.85)"/><path d="M10 6h4v6h-4z" fill="rgba(255,255,255,0.5)"/></svg>
        </div>
        <span className="text-white text-[17px] font-bold" style={{ fontFamily: "'Lora', Georgia, serif" }}>Natta</span>
      </div>
      <p className="text-[12px] text-white/30">© 2026 Natta · Cresce com você, litro por litro.</p>
      <div className="flex gap-5">
        {['Termos', 'Privacidade', 'Contato'].map(l => (
          <a key={l} href="#" className="text-[12px] text-white/30 hover:text-white/70 transition-colors">{l}</a>
        ))}
      </div>
    </footer>
  )
}
