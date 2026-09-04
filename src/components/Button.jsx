import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({ children, href, to, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 cursor-pointer'

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-dark shadow-sm hover:shadow-md',
    secondary: 'border border-navy text-navy hover:bg-navy hover:text-paper',
    ghost: 'text-gold border-b border-gold hover:border-gold-dark hover:text-gold-dark pb-0.5',
    outline_light: 'border border-paper text-paper hover:bg-paper hover:text-navy',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const MotionComp = motion.button

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={cls} {...props}>{children}</Link>
      </motion.div>
    )
  }
  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={cls} {...props}>{children}</a>
      </motion.div>
    )
  }
  return (
    <MotionComp whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={cls} {...props}>
      {children}
    </MotionComp>
  )
}
