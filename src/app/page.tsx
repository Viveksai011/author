import { SiteHeader } from '@/components/author-page/site-header'
import { Author, Footer, Hero, Story } from '@/components/author-page/static-sections'
import { FAQ, Testimonials } from '@/components/author-page/interactive-sections'

export default function Page() {
  return <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-[#17212c] selection:bg-[#ff5c37] selection:text-white"><SiteHeader /><Hero /><Story /><Author /><Testimonials /><FAQ /><section id="download" className="bg-[#882c30] px-6 py-24 text-center text-white"><h2 className="mx-auto max-w-2xl text-4xl font-semibold sm:text-5xl">Begin your journey toward self-love today</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/70">A story about healing, courage, and finding home within yourself.</p><a href="#top" className="mt-8 inline-flex rounded-full bg-[#ff5c37] px-7 py-3 text-sm font-semibold hover:bg-white hover:text-[#882c30]">Get the free e-book</a></section><Footer /></main>
}
