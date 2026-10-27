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
        return <Layout className="w-5 h-5 text-[#B7FF3C]" />
      case 'Server':
        return <Server className="w-5 h-5 text-[#B7FF3C]" />
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#B7FF3C]" />
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-[#B7FF3C]" />
    }
  }

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#0E0E12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
            02 / TECHNICAL SKILLS
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] max-w-2xl">
            A practical toolkit focused on real-world web delivery.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] max-w-xl">
            Core technologies, platforms, and methodologies applied across client websites and e-commerce stores.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#121216] border border-[#29292F]">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-[#71717A] tracking-wider uppercase">
                    Group 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F5F5] mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges / Chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#29292F]/60">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121216] border border-[#29292F] text-xs font-medium text-[#F5F5F5] hover:border-[#B7FF3C]/50 hover:text-[#B7FF3C] transition-colors"
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
