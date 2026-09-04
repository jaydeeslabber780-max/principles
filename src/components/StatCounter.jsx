import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

function Counter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    })
    const unsub = count.on('change', v => setDisplay(Math.round(v)))
    return () => { controls.stop(); unsub() }
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 45, suffix: '+', label: 'Years combined experience' },
  { value: 40, suffix: '+', label: 'Retirement funds advised' },
  { value: 5000, suffix: '+', label: 'Members (medical & retirement)' },
  { value: 10, suffix: '', label: 'Employer groups on medical aid' },
  { value: 8, suffix: '', label: 'SA languages catered for' },
]

export default function StatStrip() {
  return (
    <section style={{ backgroundColor: '#0E2233' }} className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2 text-center md:text-left"
            >
              <div
                className="font-display font-light leading-none"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 3.6rem)', color: '#B08D4F' }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="font-sans text-sm leading-snug" style={{ color: 'rgba(247,244,239,0.65)' }}>
                {s.label}
              </p>
              <div style={{ width: 32, height: 1, backgroundColor: '#B08D4F', margin: '0 auto', opacity: 0.5 }} className="md:mx-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
