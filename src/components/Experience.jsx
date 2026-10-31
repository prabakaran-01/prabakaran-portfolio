import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#111115]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">
            04 / WORK EXPERIENCE
          </span>
          <h2 className="section-heading max-w-2xl">
            Professional background.
          </h2>
          <p className="section-subheading">
            1+ year of hands-on experience building WordPress and WooCommerce web solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl relative pl-6 sm:pl-8 border-l border-[#29292F] space-y-10 sm:space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Neon Lime Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7FF3C] opacity-40" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#B7FF3C] ring-4 ring-[#111115]" />
                </span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 outline-none">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors duration-250">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:border-[#B7FF3C]/50 transition-colors">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F5F5] font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-[#B7FF3C] group-hover:scale-110 transition-transform duration-250" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-col sm:items-end text-xs text-[#A1A1AA] gap-1 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B7FF3C]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#71717A]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities List */}
                <ul className="space-y-2 pt-4 border-t border-[#29292F]/70">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#A1A1AA] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
