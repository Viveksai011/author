import { SiteHeader } from '@/components/author-page/site-header'
import {
  About,
  BookSection,
  Footer,
  Hero,
  Services,
} from '@/components/author-page/static-sections'
import { FAQ, Testimonials } from '@/components/author-page/interactive-sections'
import { CustomCursor } from '@/components/author-page/custom-cursor'
import { FINAL_CTA_CONTENT } from '@/utils/constants'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-[#17212c] transition-colors duration-300 selection:bg-[#ff5c37] selection:text-white dark:bg-slate-950 dark:text-slate-100">
      <CustomCursor />
      <SiteHeader />
      <Hero />
      <Services />
      <About />
      <BookSection />
      <Testimonials />
      <FAQ />

      {/* Final Call to Action Section */}
      <section
        id="download"
        className="bg-[#17212c] px-6 py-24 text-center text-white transition-colors duration-300 dark:bg-slate-900"
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {FINAL_CTA_CONTENT.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
          {FINAL_CTA_CONTENT.subheading}
        </p>
        <a
          href={FINAL_CTA_CONTENT.buttonHref}
          className="mt-8 inline-flex rounded-full bg-[#ff5c37] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#17212c] dark:hover:bg-slate-100 dark:hover:text-slate-900"
        >
          {FINAL_CTA_CONTENT.buttonText}
        </a>
      </section>

      <Footer />
    </main>
  )
}
