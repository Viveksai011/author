'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  duration?: number
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  duration = 0.7,
}: RevealProps) {
  const getVariants = () => {
    switch (direction) {
      case 'down':
        return { initial: { opacity: 0, y: -35 }, animate: { opacity: 1, y: 0 } }
      case 'left':
        return { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } }
      case 'right':
        return { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } }
      case 'scale':
        return { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } }
      case 'up':
      default:
        return { initial: { opacity: 0, y: 35 }, animate: { opacity: 1, y: 0 } }
    }
  }

  const { initial, animate } = getVariants()

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleHover({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
