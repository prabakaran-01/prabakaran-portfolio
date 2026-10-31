import { motion } from 'motion/react'
import {
  Code,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Layers,
  GraduationCap,
  MapPin,
  Clock,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-label">01 / ABOUT ME</span>
          <h2 className="section-heading max-w-3xl">
            Bridging clean code with reliable WordPress & WooCommerce solutions.
          </h2>
        </div>

        {/* 2-Column Balanced Grid: Left Narrative + Right Prominent Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & 4 Balanced Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed"
          >
            <p className="text-[#F5F5F5] font-medium text-base sm:text-lg leading-relaxed">
              Hello! I'm <span className="text-[#B7FF3C] font-semibold">{personal.name}</span>, a
              Web Developer with 1+ year of professional experience specializing in WordPress
              development and e-commerce solutions.
            </p>

            <p>
              My work centers on developing responsive, user-friendly websites and robust
              WooCommerce stores. From structuring complex product catalogs and shopping cart flows
              to integrating secure payment gateways, I focus on building digital storefronts that
              operate reliably under real-world conditions.
            </p>

            <p>
              I specialize in customizing WordPress themes and plugins, tailoring layouts with HTML5,
              CSS3, JavaScript, and PHP to meet specific client objectives. Additionally, I prioritize
              foundational web health — ensuring cross-browser responsiveness, ongoing website
              security updates, bug troubleshooting, domain/server setups, and speed optimization.
            </p>

            {/* Core Pillars: Balanced 2x2 Grid with uniform heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group p-4 sm:p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#F5F5F5] font-semibold mb-2 text-xs sm:text-sm">
                    <div className="p-2 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-[#B7FF3C] transition-colors duration-250">E-Commerce Focus</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
                    End-to-end WooCommerce setups, payment integrations, cart management, and order flows.
                  </p>
                </div>
              </div>

              <div className="group p-4 sm:p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#F5F5F5] font-semibold mb-2 text-xs sm:text-sm">
                    <div className="p-2 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-[#B7FF3C] transition-colors duration-250">Theme & Plugin Customization</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
                    Custom page templates, PHP hooks, responsive CSS, and specialized feature tweaks.
                  </p>
                </div>
              </div>

              <div className="group p-4 sm:p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#F5F5F5] font-semibold mb-2 text-xs sm:text-sm">
                    <div className="p-2 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-[#B7FF3C] transition-colors duration-250">Security & Maintenance</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
                    WordPress core updates, vulnerability monitoring, plugin maintenance, and bug fixes.
                  </p>
                </div>
              </div>

              <div className="group p-4 sm:p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#F5F5F5] font-semibold mb-2 text-xs sm:text-sm">
                    <div className="p-2 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-[#B7FF3C] transition-colors duration-250">Performance & SEO</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
                    Cross-device performance tuning, clean markup structure, and on-page SEO best practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Significantly Larger Profile Photo + Verified Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 w-full max-w-[480px] lg:max-w-none mx-auto"
          >
            {/* Prominent Profile Photo Frame with Professional Portrait Aspect Ratio */}
            <div className="relative group overflow-hidden rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.2)] hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-black/60 aspect-[4/5] w-full">
              {/* Full Headshot: Hair, forehead, eyes, chin, and shoulders fully visible */}
              <img
                src="/images/profile/praba.jpeg"
                alt="Prabakaran M — Professional Web & WordPress Developer Portrait"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />

              {/* Gentle dark gradient overlay at the base for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-[#0A0A0C]/15 to-transparent pointer-events-none" />

              {/* Subtle ambient accent glow on hover */}
              <div
                className="absolute inset-0 bg-[#B7FF3C]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom profile info strip overlapping the bottom of photo */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#111115]/90 backdrop-blur-md border border-[#29292F] flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF3C] shadow-[0_0_8px_#B7FF3C]" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#F5F5F5] block leading-tight">
                      {personal.name}
                    </span>
                    <span className="text-[11px] text-[#A1A1AA]">
                      WordPress & Web Developer
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#17171C] border border-[#29292F] text-[#B7FF3C]">
                  Verified
                </span>
              </div>
            </div>

            {/* Verified Summary Card directly below the profile photo */}
            <div className="group p-4 sm:p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B7FF3C] flex items-center gap-2 mb-3.5">
                <span>Verified Summary</span>
                <span className="h-[1px] flex-1 bg-[#29292F] group-hover:bg-[#B7FF3C]/40 transition-colors" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#111115] border border-[#29292F]/60 hover:border-[#B7FF3C]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#17171C] border border-[#29292F] text-[#B7FF3C] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">Experience</span>
                    <span className="text-[#F5F5F5] font-medium text-xs truncate block">1+ Year Web Dev</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#111115] border border-[#29292F]/60 hover:border-[#B7FF3C]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#17171C] border border-[#29292F] text-[#B7FF3C] shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">Specialization</span>
                    <span className="text-[#F5F5F5] font-medium text-xs truncate block">WordPress & WC</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#111115] border border-[#29292F]/60 hover:border-[#B7FF3C]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#17171C] border border-[#29292F] text-[#B7FF3C] shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">Education</span>
                    <span className="text-[#F5F5F5] font-medium text-xs truncate block">M.Sc. CS (2025)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#111115] border border-[#29292F]/60 hover:border-[#B7FF3C]/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#17171C] border border-[#29292F] text-[#B7FF3C] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">Location</span>
                    <span className="text-[#F5F5F5] font-medium text-xs truncate block" title={personal.location}>
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
