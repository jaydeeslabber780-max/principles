import { motion } from 'framer-motion'
import Button from './Button'

export default function CtaBand({
  eyebrow = 'Ready to begin?',
  title = "Let’s build your financial future together.",
  subtitle = 'Speak with one of our accredited advisors — no obligation, just clarity.',
  ctaLabel = 'Get in touch',
  ctaTo = '/contact',
}) {
  return (
    <section
      style={{ backgroundColor: '#0E2233', position: 'relative', overflow: 'hidden' }}
      className="py-24 md:py-32"
    >
      {/* decorative gold line */}
      <div
        style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(176,141,79,0.3), transparent)',
        }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: '#B08D4F' }}>
            {eyebrow}
          </span>
          <h2
            className="font-display font-light leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#F7F4EF', letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>
          <p className="font-sans leading-relaxed max-w-lg" style={{ color: 'rgba(247,244,239,0.65)', fontSize: '1.0625rem' }}>
            {subtitle}
          </p>
          <Button to={ctaTo} variant="primary" size="lg" className="mt-2">
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
