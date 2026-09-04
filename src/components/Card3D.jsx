import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function Card3D({ children, className = '', style = {} }) {
  const ref = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-120, 120], [10, -10]), { stiffness: 60, damping: 18 })
  const rotateY = useSpring(useTransform(rawX, [-120, 120], [-10, 10]), { stiffness: 60, damping: 18 })
  const glareX = useTransform(rawX, [-120, 120], [0, 100])
  const glareY = useTransform(rawY, [-120, 120], [0, 100])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set(e.clientX - rect.left - rect.width / 2)
    rawY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div ref={ref} style={{ perspective: 900 }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative', ...style }}
        className={className}
      >
        {children}
        {/* Glare overlay */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
            ),
            pointerEvents: 'none',
            borderRadius: 'inherit',
          }}
        />
      </motion.div>
    </div>
  )
}
