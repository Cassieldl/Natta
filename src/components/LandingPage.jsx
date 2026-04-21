import { LandingNav } from './landing/LandingNav'
import { HeroSection } from './landing/HeroSection'
import {
  TrustStrip, BridgeQuote, PainSection,
  HowSection, WhatsAppSection, TransformSection,
  FeaturesSection, TestimonialSection, CtaSection, LandingFooter
} from './landing/sections'

export function LandingPage({ onStartClick }) {
  return (
    <div>
      <LandingNav onStartClick={onStartClick} />
      <HeroSection onStartClick={onStartClick} />
      <TrustStrip />
      <BridgeQuote
        text={
          <>
            <em style={{ fontStyle: 'italic', color: '#2d6a4f' }}>Pra quem vive da fazenda, não de planilha.</em>
            <br />Veja como funciona na prática ↓
          </>
        }
      />
      <HowSection />
      <TestimonialSection />
      <PainSection />
      <TransformSection />
      <WhatsAppSection />
      <FeaturesSection />
      <CtaSection onStartClick={onStartClick} />
      <LandingFooter />
    </div>
  )
}
