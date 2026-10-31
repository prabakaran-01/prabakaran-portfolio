import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import Logo from './Logo'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredSection, setHoveredSection] = useState(null)
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
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#29292F] py-3 shadow-lg shadow-black/50'
          : 'bg-[#0A0A0C]/75 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
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
          className="group focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] rounded-xl outline-none"
          aria-label="PRABAKARAN - Home"
        >
          <Logo iconSize="w-8 h-8 sm:w-9 sm:h-9" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-0.5 bg-[#111115]/90 border border-[#29292F] p-1.5 rounded-full shadow-inner shadow-black/30"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            const isHovered = hoveredSection === sectionId

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                onMouseEnter={() => setHoveredSection(sectionId)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium tracking-normal transition-colors duration-250 rounded-full focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] outline-none ${
                  isActive
                    ? 'text-[#B7FF3C] font-semibold'
                    : 'text-[#D4D4D8] hover:text-[#B7FF3C]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Section Background Highlight */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#17171C] border border-[#29292F] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Gentle Hover Background Highlight */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="hoverNavBackground"
                    className="absolute inset-0 bg-[#17171C]/70 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}

                {/* Subtle Animated Underline for Active Section */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#B7FF3C] rounded-full shadow-[0_0_6px_#B7FF3C]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span>{link.name}</span>
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
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#0A0A0C] bg-[#B7FF3C] hover:bg-[#c9ff5c] px-4 py-2 rounded-full transition-all duration-250 active:scale-95 shadow-sm shadow-[#B7FF3C]/15 hover:shadow-md hover:shadow-[#B7FF3C]/25 focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] outline-none cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-[#111115] border border-[#29292F] text-[#F5F5F5] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] outline-none transition-colors"
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
            className="md:hidden overflow-hidden bg-[#0A0A0C]/98 border-b border-[#29292F] px-4 pt-3 pb-6 shadow-2xl"
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
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B7FF3C] outline-none ${
                      isActive
                        ? 'bg-[#17171C] text-[#B7FF3C] border border-[#29292F] font-semibold'
                        : 'text-[#D4D4D8] hover:text-[#B7FF3C] hover:bg-[#111115]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#B7FF3C] shadow-[0_0_6px_#B7FF3C]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29292F]" />
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
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-sm hover:bg-[#c9ff5c] active:scale-[0.98] transition-all shadow-md shadow-[#B7FF3C]/10"
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
