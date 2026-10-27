import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { navLinks } = portfolioData

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollTo = (href) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#29292F] py-3.5 shadow-lg shadow-black/40'
          : 'bg-[#0A0A0C]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#home')
          }}
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Prabakaran M - Home"
        >
          <span className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
            PRABAKARAN
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#B7FF3C] group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#121216]/90 border border-[#29292F] px-3 py-1.5 rounded-full"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full focus:outline-none ${
                  isActive
                    ? 'text-[#0A0A0C] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F5]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#B7FF3C] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Right CTA / Contact shortcut */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#contact')
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A0A0C] bg-[#B7FF3C] hover:bg-[#c9ff5c] px-4 py-2 rounded-full transition-all duration-200 active:scale-95 shadow-sm shadow-[#B7FF3C]/10"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#121216] border border-[#29292F] text-[#F5F5F5] hover:text-[#B7FF3C] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0A0A0C]/98 border-b border-[#29292F] px-4 pt-4 pb-6"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1)
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#17171C] text-[#B7FF3C] border border-[#29292F]'
                        : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#121216]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
                    )}
                  </a>
                )
              })}

              <div className="pt-3 mt-2 border-t border-[#29292F] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('#contact')
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-sm hover:bg-[#c9ff5c] transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
