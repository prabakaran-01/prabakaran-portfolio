import { motion } from 'motion/react'
import { ArrowDown, Download, Code2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const { personal } = portfolioData

  const scrollToProjects = (e) => {
    e.preventDefault()
    const target = document.querySelector('#projects')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle radial ambient gradient in the background - restrained, dark */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B7FF3C]/[0.035] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#29292F_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_45%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Label & Availability Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121216] border border-[#29292F] text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase">
              <Code2 className="w-3.5 h-3.5 text-[#B7FF3C]" />
              <span>{personal.heroKicker}</span>
            </div>

            {/* Editable Availability Indicator */}
            {personal.availability?.isAvailable && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17171C] border border-[#29292F] text-xs text-[#A1A1AA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7FF3C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7FF3C]" />
                </span>
                <span>{personal.availability.status}</span>
              </div>
            )}
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-['Space_Grotesk'] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F5F5] leading-[1.1] max-w-3xl mb-6"
          >
            {personal.heroHeadline.part1}{' '}
            <span className="text-[#B7FF3C] underline decoration-[#B7FF3C]/30 decoration-2 underline-offset-8">
              {personal.heroHeadline.highlight}
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl font-normal leading-relaxed mb-10"
          >
            {personal.heroSubtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Explore Work Button */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-sm transition-all duration-200 hover:bg-[#c9ff5c] active:scale-[0.98] shadow-md shadow-[#B7FF3C]/10"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            {/* Download Resume Button */}
            <a
              href={personal.resumeUrl}
              download="Prabakaran_M_Resume.pdf"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#121216] border border-[#29292F] text-[#F5F5F5] font-medium text-sm transition-all duration-200 hover:bg-[#17171C] hover:border-[#3d3d46] hover:text-[#B7FF3C] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#B7FF3C] transition-colors" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Quick Metrics / Key Focus Pill Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-[#29292F]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#A1A1AA]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span>WordPress & WooCommerce</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span>Custom Themes & Plugins</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span>Payment Gateways</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span>Performance & SEO</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
