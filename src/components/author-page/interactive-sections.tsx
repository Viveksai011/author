'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from './reveal'
import { FAQ_CONTENT, TESTIMONIALS_CONTENT } from '@/utils/constants'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const notes = TESTIMONIALS_CONTENT.items
  const move = (step: number) => setActive((active + step + notes.length) % notes.length)

  return (
    <section
      id="reviews"
      className="bg-[#fff0e9] px-6 py-24 transition-colors duration-300 dark:bg-slate-900/60 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal direction="up" className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff5c37]">
            {TESTIMONIALS_CONTENT.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#17212c] dark:text-slate-100 sm:text-4xl lg:text-5xl">
            {TESTIMONIALS_CONTENT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#17212c]/65 dark:text-slate-300">
            {TESTIMONIALS_CONTENT.description}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 h-[520px] max-w-[1280px] overflow-hidden">
          {notes.map((item, index) => {
            const offset = (index - active + notes.length) % notes.length
            const position = offset > 2 ? offset - notes.length : offset
            const center = position === 0

            return (
              <motion.article
                key={item.name}
                onClick={() => setActive(index)}
                animate={{
                  x: `calc(-50% + ${position * 230}px)`,
                  y: center ? 10 : position % 2 ? 40 : -5,
                  rotate: center ? 0 : position % 2 ? 3 : -3,
                  scale: center ? 1 : 0.88,
                  opacity: Math.abs(position) > 2 ? 0 : center ? 1 : 0.82,
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                className={`absolute left-1/2 top-4 h-[350px] w-[290px] cursor-pointer rounded-[26px] border p-7 shadow-sm transition-colors sm:h-[370px] sm:w-[360px] ${
                  center
                    ? 'z-10 border-[#ff5c37] bg-[#17212c] text-white shadow-[8px_10px_0_#ff5c37] dark:bg-slate-950 dark:shadow-[8px_10px_0_#ff5c37]'
                    : 'z-0 border-[#17212c]/10 bg-white text-[#17212c] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      center
                        ? 'bg-[#ff5c37] text-white'
                        : 'bg-[#fff0e9] text-[#ff5c37] dark:bg-slate-800 dark:text-[#ff5c37]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <div className="flex gap-0.5 text-[#ff8a45]">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>

                <Quote size={24} className="mt-5 text-[#ff5c37]" />
                <p className="mt-3 text-base leading-6 sm:text-lg sm:leading-7">“{item.quote}”</p>
                <p
                  className={`absolute bottom-6 left-7 text-sm font-bold ${center ? 'text-white/80' : 'text-[#17212c]/70 dark:text-slate-300'}`}
                >
                  — {item.name}
                </p>
              </motion.article>
            )
          })}

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#17212c]/15 bg-white text-[#17212c] transition-colors hover:bg-[#ff5c37] hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#ff5c37]"
            >
              <ChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#17212c]/15 bg-white text-[#17212c] transition-colors hover:bg-[#ff5c37] hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#ff5c37]"
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  const faqs = FAQ_CONTENT.items

  return (
    <section id="faq" className="mx-auto max-w-[880px] px-6 py-24">
      <Reveal direction="up" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff5c37]">
          {FAQ_CONTENT.badge}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#17212c] dark:text-slate-100 sm:text-4xl">
          {FAQ_CONTENT.title}
        </h2>
      </Reveal>

      <Reveal direction="up" delay={0.1} className="mt-10">
        <div className="rounded-2xl bg-[#ff5c37] p-6 text-sm text-white shadow-md">
          <strong>{FAQ_CONTENT.bannerTitle}</strong>
          <p className="mt-1.5 text-white/90">{FAQ_CONTENT.bannerDescription}</p>
        </div>

        <div className="mt-6 divide-y divide-[#17212c]/10 border-y border-[#17212c]/10 dark:divide-slate-800 dark:border-slate-800">
          {faqs.map((item, index) => (
            <div key={item.question}>
              <button
                className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-[#17212c] dark:text-slate-100"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="text-2xl font-light text-[#ff5c37]">
                  {open === index ? '−' : '+'}
                </span>
              </button>
              {open === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pb-5 pr-8 text-sm leading-6 text-[#17212c]/70 dark:text-slate-300"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
