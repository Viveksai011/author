'use client'

import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Reveal, ScaleHover } from './reveal'
import {
  ABOUT_CONTENT,
  BOOK_CONTENT,
  FOOTER_CONTENT,
  HERO_CONTENT,
  IMAGES,
  NAV_LINKS,
  SERVICES_CONTENT,
  SITE_CONFIG,
} from '@/utils/constants'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pb-28 lg:pt-16"
    >
      <div>
        <Reveal direction="up">
          <motion.p
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff5c37]/20 bg-[#ff5c37]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[.18em] text-[#ff5c37] dark:border-[#ff5c37]/30 dark:bg-[#ff5c37]/15"
          >
            {HERO_CONTENT.badge}
          </motion.p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-.04em] text-[#17212c] dark:text-slate-100 sm:text-5xl lg:text-[60px]">
            {HERO_CONTENT.title}
            <em className="font-serif font-normal text-[#ff5c37]">{HERO_CONTENT.titleHighlight}</em>
            {HERO_CONTENT.titleSuffix}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#17212c]/75 dark:text-slate-300 sm:text-lg">
            <strong className="text-[#17212c] dark:text-slate-100">{HERO_CONTENT.roleBold}</strong>{' '}
            {HERO_CONTENT.roleDescription}
          </p>

          <form className="mt-8 flex max-w-md flex-col gap-3.5 rounded-2xl border border-[#17212c]/10 bg-white p-5 shadow-lg shadow-[#17212c]/5 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <label className="text-sm font-semibold text-[#17212c] dark:text-slate-200">
              {HERO_CONTENT.formLabel}
            </label>
            <input
              type="text"
              className="h-12 rounded-xl border border-[#17212c]/15 bg-[#f8f7f4] px-4 text-sm text-[#17212c] outline-none transition-colors focus:border-[#ff5c37] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#ff5c37]"
              placeholder={HERO_CONTENT.namePlaceholder}
              required
            />
            <input
              type="email"
              className="h-12 rounded-xl border border-[#17212c]/15 bg-[#f8f7f4] px-4 text-sm text-[#17212c] outline-none transition-colors focus:border-[#ff5c37] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#ff5c37]"
              placeholder={HERO_CONTENT.emailPlaceholder}
              required
            />
            <Button className="h-12 rounded-xl bg-[#ff5c37] font-medium text-white hover:bg-[#d94425]">
              {HERO_CONTENT.buttonText} <ArrowUpRight data-icon="inline-end" />
            </Button>
            <p className="text-center text-xs italic text-[#17212c]/55 dark:text-slate-400">
              {HERO_CONTENT.formFooterText}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal direction="left" delay={0.15} className="relative min-h-[480px] sm:min-h-[560px]">
        {/* Main Author Portrait */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute inset-x-4 top-0 h-[90%] overflow-hidden rounded-[32px] border border-[#17212c]/10 bg-[#cad0c9] shadow-xl dark:border-slate-800"
        >
          <img
            src={IMAGES.heroPrimary}
            alt={SITE_CONFIG.authorName}
            className="h-full w-full object-cover object-[50%_25%]"
          />
        </motion.div>

        {/* Floating Overlapping Card */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-0 w-[65%] max-w-[310px] overflow-hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/90"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-[#ff5c37] text-white">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#17212c]/50 dark:text-slate-400">
                {HERO_CONTENT.experienceBadgeYears}
              </p>
              <p className="text-sm font-bold text-[#17212c] dark:text-slate-100">
                {HERO_CONTENT.experienceBadgeTitle}
              </p>
            </div>
          </div>
          <p className="mt-2.5 text-xs leading-relaxed text-[#17212c]/70 dark:text-slate-300">
            {HERO_CONTENT.experienceBadgeText}
          </p>
        </motion.div>
      </Reveal>
    </section>
  )
}

export function Services() {
  const { oneToOne, workshops } = SERVICES_CONTENT

  return (
    <section
      id="services"
      className="bg-[#fff0e9] px-6 py-24 transition-colors duration-300 dark:bg-slate-900/60 lg:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal direction="up" className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">
            {SERVICES_CONTENT.badge}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-[#17212c] dark:text-slate-100 sm:text-4xl lg:text-5xl">
            {SERVICES_CONTENT.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#17212c]/65 dark:text-slate-300">
            {SERVICES_CONTENT.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: One-to-One Coaching */}
          <Reveal direction="left" delay={0.1}>
            <ScaleHover className="flex h-full flex-col justify-between rounded-[28px] border border-[#17212c]/5 bg-white p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#ff5c37]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff5c37] dark:bg-[#ff5c37]/20">
                  <HeartHandshake size={16} /> {oneToOne.categoryBadge}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#17212c] dark:text-slate-100">
                  {oneToOne.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#17212c]/65 dark:text-slate-300">
                  {oneToOne.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {oneToOne.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-[#17212c] dark:text-slate-200"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#ff5c37]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl bg-[#f8f7f4] p-4 text-xs dark:bg-slate-800/80">
                  <p className="font-bold text-[#17212c] dark:text-slate-100">
                    {oneToOne.whatYouGetLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[#17212c]/75 dark:text-slate-300">
                    {oneToOne.whatYouGetTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-2.5 py-1 font-medium shadow-2xs dark:bg-slate-700 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="mt-8 w-full rounded-xl bg-[#17212c] py-6 hover:bg-[#ff5c37] dark:bg-[#ff5c37] dark:hover:bg-[#d94425]"
              >
                <a href={oneToOne.buttonHref}>{oneToOne.buttonText}</a>
              </Button>
            </ScaleHover>
          </Reveal>

          {/* Card 2: Group Trainings & Workshops */}
          <Reveal direction="right" delay={0.2}>
            <ScaleHover className="flex h-full flex-col justify-between rounded-[28px] border border-[#17212c]/5 bg-white p-8 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#17212c]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#17212c] dark:bg-slate-800 dark:text-slate-200">
                  <Users size={16} /> {workshops.categoryBadge}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#17212c] dark:text-slate-100">
                  {workshops.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#17212c]/65 dark:text-slate-300">
                  {workshops.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {workshops.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-[#17212c] dark:text-slate-200"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#17212c] dark:text-[#ff5c37]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-[#17212c]/10 bg-[#f8f7f4] dark:border-slate-800 dark:bg-slate-800">
                <img
                  src={IMAGES.serviceWorkshop}
                  alt={workshops.title}
                  className="h-32 w-full object-cover object-center"
                />
              </div>
            </ScaleHover>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-6 py-24 lg:px-10">
      <Reveal direction="up" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">
          {ABOUT_CONTENT.badge}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#17212c] dark:text-slate-100 sm:text-4xl lg:text-5xl">
          {ABOUT_CONTENT.heading}
        </h2>
      </Reveal>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal direction="right">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="overflow-hidden rounded-[32px] border border-[#17212c]/10 shadow-xl dark:border-slate-800"
          >
            <img
              src={IMAGES.aboutAuthor}
              alt={SITE_CONFIG.authorName}
              className="aspect-[.85] w-full object-cover object-[50%_20%]"
            />
          </motion.div>
        </Reveal>

        <div>
          <Reveal direction="left">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ff5c37]">
              {ABOUT_CONTENT.authorBadge}
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#17212c] dark:text-slate-100 sm:text-4xl">
              {ABOUT_CONTENT.roleTitle}
            </h3>
            <p className="mt-6 leading-7 text-[#17212c]/75 dark:text-slate-300">
              {ABOUT_CONTENT.bio}
            </p>
          </Reveal>

          <Reveal
            direction="up"
            delay={0.1}
            className="mt-8 rounded-2xl border border-[#ff5c37]/15 bg-[#fff0e9] p-6 dark:border-[#ff5c37]/30 dark:bg-slate-900/80"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#ff5c37]">
              {ABOUT_CONTENT.whyICoachTitle}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-[#17212c]/80 dark:text-slate-300">
              {ABOUT_CONTENT.whyICoachQuote}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#17212c] dark:text-slate-200">
              {ABOUT_CONTENT.approachTitle}
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ABOUT_CONTENT.approachItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#17212c]/10 bg-white p-3.5 text-xs font-medium text-[#17212c] shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function BookSection() {
  return (
    <section
      id="book"
      className="bg-[#17212c] px-6 py-24 text-white transition-colors duration-300 dark:bg-slate-950 lg:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">
              {BOOK_CONTENT.badge}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {BOOK_CONTENT.title}
            </h2>
            <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg">
              {BOOK_CONTENT.description}
            </p>
            <p className="mt-4 font-serif text-lg italic text-[#ff8a45]">{BOOK_CONTENT.quote}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-xl bg-[#ff5c37] px-8 text-sm font-semibold hover:bg-[#d94425]"
              >
                <a href={BOOK_CONTENT.buttonHref}>
                  {BOOK_CONTENT.buttonText} <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="relative min-h-[400px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl"
            >
              <img
                src={IMAGES.bookCover}
                alt={SITE_CONFIG.authorName}
                className="aspect-[.9] w-full object-cover object-[50%_20%]"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="border-t border-[#17212c]/10 bg-[#f8f7f4] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 text-sm lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <a
            href="#top"
            className="flex items-center gap-2 font-bold tracking-[.16em] text-[#17212c] dark:text-slate-100"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-[#17212c] text-white dark:bg-[#ff5c37]">
              <Sparkles size={15} />
            </span>
            {SITE_CONFIG.brandName}
          </a>
          <p className="mt-5 max-w-xs leading-6 text-[#17212c]/65 dark:text-slate-400">
            {FOOTER_CONTENT.tagline}
          </p>
          <p className="mt-4 text-xs text-[#17212c]/45 dark:text-slate-500">
            {SITE_CONFIG.copyright(currentYear)}
          </p>
        </div>

        <div>
          <strong className="text-[#17212c] dark:text-slate-200">{FOOTER_CONTENT.navTitle}</strong>
          <div className="mt-4 flex flex-col gap-3 text-[#17212c]/65 dark:text-slate-400">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#ff5c37] dark:hover:text-[#ff5c37]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <strong className="text-[#17212c] dark:text-slate-200">
            {FOOTER_CONTENT.contactTitle}
          </strong>
          <div className="mt-4 flex flex-col gap-3 text-[#17212c]/65 dark:text-slate-400">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-[#ff5c37]" /> {SITE_CONFIG.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#ff5c37]" /> {SITE_CONFIG.email}
            </p>
          </div>
        </div>

        <div>
          <strong className="text-[#17212c] dark:text-slate-200">
            {FOOTER_CONTENT.socialTitle}
          </strong>
          <p className="mt-4 text-xs leading-5 text-[#17212c]/60 dark:text-slate-400">
            {FOOTER_CONTENT.socialText}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              aria-label="LinkedIn"
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl bg-[#17212c] text-white transition-colors hover:bg-[#ff5c37] dark:bg-slate-800 dark:hover:bg-[#ff5c37]"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
