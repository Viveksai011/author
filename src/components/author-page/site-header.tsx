'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { HERO_CONTENT, NAV_LINKS, SITE_CONFIG } from '@/utils/constants'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Framer motion scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  // Theme initialization
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-[#ff5c37] via-[#ff8a45] to-[#ff5c37] shadow-[0_0_12px_rgba(255,92,55,0.6)]"
      />

      <header className="sticky top-0 z-40 w-full border-b border-[#17212c]/5 bg-[#f8f7f4]/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-[#17212c] transition-colors dark:text-slate-100"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-[#17212c] text-white shadow-md transition-all dark:bg-[#ff5c37]">
              <Sparkles size={15} />
            </span>
            {SITE_CONFIG.brandName}
          </a>

          {/* Desktop Nav */}
          <nav
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } absolute left-6 right-6 top-20 flex-col gap-5 rounded-2xl border border-[#17212c]/10 bg-white/95 p-6 text-sm shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors hover:text-[#ff5c37] dark:text-slate-200 dark:hover:text-[#ff5c37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="grid size-9 place-items-center rounded-full border border-[#17212c]/15 bg-white/80 text-[#17212c] shadow-xs transition-colors hover:border-[#ff5c37] hover:text-[#ff5c37] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#ff5c37] dark:hover:text-[#ff5c37]"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'backOut' }}
                >
                  {theme === 'dark' ? (
                    <Sun size={17} className="text-amber-400" />
                  ) : (
                    <Moon size={17} />
                  )}
                </motion.div>
              </motion.button>
            )}

            <Button
              asChild
              className="hidden rounded-full bg-[#17212c] px-5 text-xs hover:bg-[#ff5c37] dark:bg-[#ff5c37] dark:hover:bg-[#d94425] md:flex"
            >
              <a href="#contact">{HERO_CONTENT.buttonText}</a>
            </Button>

            <button
              className="rounded-full border border-[#17212c]/15 p-2 text-[#17212c] transition-colors dark:border-slate-700 dark:text-slate-200 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
