import { ArrowDown, ArrowUpRight, Camera, Play, Sparkles, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:pb-32 lg:pt-20">
      <div>
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">
            ✦ Get free ebook <span className="text-[#17212c]/40">Exclusive e-book download</span>
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-[76px]">
            Download for free
            <br />
            e-book <em className="font-serif font-normal">the</em> hideway
            <br />
            love yourself
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#17212c]/65">
            “Love Yourself” by <strong className="text-[#17212c]">Rosara Margarette S.M</strong> is a touching novel about healing, rediscovering strength, and finding love from within.
          </p>
          <form className="mt-8 flex max-w-md flex-col gap-3">
            <label className="text-sm font-semibold">Fill out the form to get e-book:</label>
            <input className="h-12 rounded-xl border border-[#17212c]/10 bg-white px-4 text-sm" placeholder="Name" />
            <input type="email" className="h-12 rounded-xl border border-[#17212c]/10 bg-white px-4 text-sm" placeholder="Your Email Address" />
            <Button className="h-12 rounded-xl bg-[#ff5c37] hover:bg-[#d94425]">
              Get My E-Book <ArrowUpRight data-icon="inline-end" />
            </Button>
            <p className="text-center text-xs italic text-[#17212c]/55">Your free E-Book will be sent directly to your email.</p>
          </form>
        </Reveal>
      </div>
      <Reveal className="relative min-h-[460px] sm:min-h-[600px]">
        <div className="absolute inset-x-8 top-0 h-[88%] overflow-hidden rounded-[28px] bg-[#cad0c9]">
          <img src="/rosara-author.png" alt="Author Rosara Margarette beside her book" className="h-full w-full object-cover object-[63%_50%]" />
        </div>
        <div className="absolute left-0 top-[22%] w-[55%] max-w-[310px] overflow-hidden rounded-sm shadow-2xl">
          <img src="/love-yourself-book.png" alt="Love Yourself book cover" className="aspect-[.78] w-full object-cover object-[30%_36%]" />
        </div>
      </Reveal>
    </section>
  )
}

export function Story() {
  return (
    <section id="story" className="bg-[#fff0e9] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[980px]">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">✦ Inside the story</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">A glimpse into the journey of self-discovery</h2>
        </Reveal>
        <Reveal className="mt-14 grid items-center gap-10 rounded-[28px] bg-white p-8 md:grid-cols-2 md:p-14">
          <div>
            <h3 className="text-2xl font-semibold">
              Every chapter carries a piece of the heart from pain to peace, from longing to acceptance.
            </h3>
            <p className="mt-6 leading-7 text-[#17212c]/60">
              Step inside the pages of Love Yourself and follow a heartfelt journey through love, loss, and rediscovery.
            </p>
            <Button className="mt-8 rounded-full bg-[#17212c] hover:bg-[#ff5c37]">
              Sign Up to Download <ArrowDown data-icon="inline-end" />
            </Button>
          </div>
          <img src="/love-yourself-book.png" alt="Love Yourself book cover" className="mx-auto max-w-[290px] rounded-[20px] shadow-xl" />
        </Reveal>
      </div>
    </section>
  )
}

export function Author() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-24 lg:px-10">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ff5c37]">✦ About author</p>
        <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Words that make space for healing.</h2>
      </Reveal>
      <div className="mt-14 grid items-center gap-12 md:grid-cols-[.9fr_1.1fr]">
        <img src="/rosara-author.png" alt="Rosara Margarette writing at her desk" className="aspect-[.86] w-full rounded-[26px] object-cover object-[74%_76%]" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-[#ff5c37]">✦ Rosara Margarette S.M</p>
          <h3 className="mt-5 text-4xl font-semibold">A storyteller for the tender, brave parts of us.</h3>
          <p className="mt-6 max-w-xl leading-7 text-[#17212c]/60">
            Rosara writes with warmth and honesty about the little crossroads that change us.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() { return <footer id="contact" className="mx-auto grid max-w-[1180px] gap-10 px-6 py-12 text-sm lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10"><div><a href="#top" className="flex items-center gap-2 font-bold tracking-[.16em]"><span className="grid size-8 place-items-center rounded-lg bg-[#17212c] text-white"><Sparkles size={15} /></span>READ BOOST</a><p className="mt-5 text-[#17212c]/55">Read deeply. Feel fully. Begin again.</p></div><div><strong>Quick links</strong><div className="mt-4 flex flex-col gap-3 text-[#17212c]/55"><a href="#story">About author</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></div></div><div><strong>Contact</strong><p className="mt-4 leading-6 text-[#17212c]/55">hello@loveyourselfbook.com<br />+01 812-3456-7890<br />San Francisco, CA</p></div><div><strong>Follow along</strong><div className="mt-4 flex gap-3"><a aria-label="Instagram" href="#contact"><Camera /></a><a aria-label="Youtube" href="#contact"><Video /></a><a aria-label="Listen" href="#contact"><Play /></a></div></div></footer> }
