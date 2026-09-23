'use client'

import { useState } from 'react'
import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="relative z-40 mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-6 lg:px-10"><a href="#top" className="flex items-center gap-2 text-xs font-bold tracking-[0.18em]"><span className="grid size-8 place-items-center rounded-lg bg-[#17212c] text-white"><Sparkles size={15} /></span>READ BOOST</a><nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-6 right-6 top-20 flex-col gap-5 rounded-2xl bg-white p-6 text-sm shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}><a href="#story" className="hover:text-[#ff5c37]">About Author</a><a href="#reviews" className="hover:text-[#ff5c37]">Reviews</a><a href="#faq" className="hover:text-[#ff5c37]">FAQ</a><a href="#contact" className="hover:text-[#ff5c37]">Contact</a></nav><Button asChild className="hidden rounded-full bg-[#17212c] px-5 text-xs hover:bg-[#ff5c37] md:flex"><a href="#download">Download Now</a></Button><button className="rounded-full border border-[#17212c]/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={18} /></button></header>
}
