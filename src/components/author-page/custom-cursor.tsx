'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Smooth springs for cursor positioning
  const cursorX = useSpring(0, { damping: 28, stiffness: 250 })
  const cursorY = useSpring(0, { damping: 28, stiffness: 250 })

  const dotX = useSpring(0, { damping: 40, stiffness: 400 })
  const dotY = useSpring(0, { damping: 40, stiffness: 400 })

  useEffect(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)

      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)

      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, dotX, dotY, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#ff5c37' : 'rgba(255, 92, 55, 0.45)',
          backgroundColor: isHovered ? 'rgba(255, 92, 55, 0.12)' : 'rgba(255, 92, 55, 0)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="pointer-events-none fixed left-0 top-0 z-50 size-8 rounded-full border border-[#ff5c37]/50 backdrop-blur-[1px]"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-50 size-2 rounded-full bg-[#ff5c37]"
      />
    </>
  )
}
