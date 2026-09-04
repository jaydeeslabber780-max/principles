import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const NAVY = '#0E2233'
const NAVY_LIGHT = '#162d40'
const NAVY_DEEP = '#081520'
const GOLD = '#B08D4F'
const GOLD_DARK = '#8B6D35'
const GOLD_LIGHT = '#C9A96E'

export default function Hero3D() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(useMotionValue(-25), { stiffness: 40, damping: 20 })
  const rotateX = useSpring(useMotionValue(12), { stiffness: 40, damping: 20 })

  const tiltX = useTransform(mouseY, [-200, 200], [8, -8])
  const tiltY = useTransform(mouseX, [-200, 200], [-8, 8])

  // auto-rotate
  useEffect(() => {
    let frame
    let angle = -25
    const loop = () => {
      angle += 0.3
      rotateY.set(angle)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frame)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const W = 140
  const H = 120
  const D = 140

  const faces = [
    {
      // front
      style: { transform: `translateZ(${D / 2}px)`, width: W, height: H },
      bg: `linear-gradient(135deg, ${NAVY_LIGHT} 0%, ${NAVY} 100%)`,
      border: `1px solid rgba(176,141,79,0.25)`,
      content: (
        <div style={{ padding: 18 }}>
          <div style={{ width: 28, height: 2, background: GOLD, marginBottom: 12 }} />
          <div style={{ fontFamily: 'Fraunces, serif', color: '#F7F4EF', fontSize: 13, fontWeight: 300, lineHeight: 1.5, opacity: 0.9 }}>
            Financial<br />Advisory
          </div>
        </div>
      ),
    },
    {
      // back
      style: { transform: `rotateY(180deg) translateZ(${D / 2}px)`, width: W, height: H },
      bg: NAVY_DEEP,
      border: '1px solid rgba(176,141,79,0.1)',
      content: null,
    },
    {
      // right
      style: {
        transform: `rotateY(90deg) translateZ(${W / 2}px)`,
        width: D, height: H,
        left: -(D - W) / 2,
      },
      bg: `linear-gradient(180deg, ${GOLD_LIGHT} 0%, ${GOLD} 40%, ${GOLD_DARK} 100%)`,
      border: 'none',
      content: null,
    },
    {
      // left
      style: {
        transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
        width: D, height: H,
        left: -(D - W) / 2,
      },
      bg: `linear-gradient(180deg, ${GOLD_DARK} 0%, ${GOLD} 100%)`,
      border: 'none',
      content: null,
    },
    {
      // top
      style: {
        transform: `rotateX(90deg) translateZ(${H / 2}px)`,
        width: W, height: D,
        top: -(D - H) / 2,
      },
      bg: `linear-gradient(135deg, rgba(22,45,64,0.9) 0%, rgba(14,34,51,0.8) 100%)`,
      border: '1px solid rgba(176,141,79,0.2)',
      content: null,
    },
    {
      // bottom
      style: {
        transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
        width: W, height: D,
        top: -(D - H) / 2,
      },
      bg: NAVY_DEEP,
      border: 'none',
      content: null,
    },
  ]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        minHeight: 340,
        perspective: 1100,
        position: 'relative',
      }}
    >
      {/* Floating orbit rings */}
      <motion.div
        style={{
          position: 'absolute',
          width: 320, height: 320,
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
        }}
      >
        {[1, 0.72, 0.5].map((scale, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: 260 * scale, height: 260 * scale,
              marginLeft: -(260 * scale) / 2,
              marginTop: -(260 * scale) / 2,
              border: `1px solid rgba(176,141,79,${0.18 + i * 0.06})`,
              borderRadius: '50%',
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateZ: 360 * (i % 2 === 0 ? 1 : -1) }}
            transition={{ duration: 12 + i * 6, repeat: Infinity, ease: 'linear' }}
          >
            {/* dot on ring */}
            <div style={{
              position: 'absolute', top: -3, left: '50%', marginLeft: -3,
              width: 6, height: 6, borderRadius: '50%',
              background: GOLD, opacity: 0.7,
            }} />
          </motion.div>
        ))}
      </motion.div>

      {/* 3D Cube */}
      <motion.div
        style={{
          position: 'relative',
          width: W, height: H,
          transformStyle: 'preserve-3d',
          rotateY: rotateY,
          rotateX: rotateX,
        }}
        className="float-anim"
      >
        {faces.map((face, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: W, height: H,
              background: face.bg,
              border: face.border,
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              overflow: 'hidden',
              ...face.style,
            }}
          >
            {face.content}
          </div>
        ))}
      </motion.div>

      {/* Shadow */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 120,
        height: 20,
        background: 'radial-gradient(ellipse, rgba(14,34,51,0.35) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* Floating particles */}
      {[
        { x: '15%', y: '20%', size: 4, delay: 0 },
        { x: '75%', y: '65%', size: 3, delay: 1.2 },
        { x: '85%', y: '25%', size: 5, delay: 0.6 },
        { x: '20%', y: '70%', size: 3, delay: 1.8 },
        { x: '55%', y: '85%', size: 4, delay: 0.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: GOLD,
            opacity: 0.5,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.5 + i * 0.5, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
