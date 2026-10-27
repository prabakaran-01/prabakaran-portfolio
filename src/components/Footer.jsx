import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const { personal, navLinks } = portfolioData

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0A0A0C] border-t border-[#29292F] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F5F5]">
              {personal.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
          </div>
          <span className="hidden sm:inline text-[#29292F]">|</span>
          <span className="text-xs text-[#A1A1AA]">{personal.role}</span>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="hover:text-[#B7FF3C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-[#71717A]">
          <span>© {currentYear} Prabakaran M. All rights reserved.</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 p-2 rounded-lg bg-[#121216] border border-[#29292F] text-[#A1A1AA] hover:text-[#B7FF3C] hover:border-[#3d3d46] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only text-[11px] font-medium">Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
