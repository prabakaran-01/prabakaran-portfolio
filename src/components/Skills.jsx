import { motion } from 'motion/react'
import {
  Layout,
  Server,
  ShoppingBag,
  Wrench,
  CheckCircle2,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  const { skills } = portfolioData

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#B7FF3C]" />
      case 'Server':
        return <Server className="w-4 h-4 text-[#B7FF3C]" />
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4 text-[#B7FF3C]" />
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4 text-[#B7FF3C]" />
    }
  }

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#111115]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">
            02 / TECHNICAL SKILLS
          </span>
          <h2 className="section-heading max-w-2xl">
            A practical toolkit focused on real-world web delivery.
          </h2>
          <p className="section-subheading">
            Core technologies, platforms, domain/server setups, and methodologies applied across client websites and e-commerce stores.
          </p>
        </div>

        {/* Categories Grid - Balanced 2-column layout with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-6 sm:p-7 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#B7FF3C] outline-none"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_14px_rgba(183,255,60,0.25)] transition-all duration-300 shadow-sm">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-[#71717A] group-hover:text-[#D4D4D8] group-hover:border-[#B7FF3C]/40 tracking-wider uppercase px-2 py-0.5 rounded bg-[#111115] border border-[#29292F] transition-colors">
                    Group 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors duration-250 mb-1.5">
                  {cat.category}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges / Chips */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#29292F]/70">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111115] border border-[#29292F] text-xs font-medium text-[#F5F5F5] hover:border-[#B7FF3C] hover:text-[#B7FF3C] hover:bg-[#17171C] hover:shadow-[0_0_12px_rgba(183,255,60,0.2)] hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#B7FF3C] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
