import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const alignClass = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {eyebrow && (
        <span
          className="text-xs font-sans font-semibold tracking-[0.18em] uppercase"
          style={{ color: '#B08D4F' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-display leading-tight"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 300,
          color: light ? '#F7F4EF' : '#0E2233',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="font-sans leading-relaxed max-w-2xl"
          style={{
            fontSize: '1.0625rem',
            color: light ? 'rgba(247,244,239,0.75)' : '#6B6B6B',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
