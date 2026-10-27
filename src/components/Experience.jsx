import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#0E0E12]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
            04 / WORK EXPERIENCE
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Professional background.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA]">
            1+ year of hands-on experience building WordPress and WooCommerce web solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#29292F] space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Neon Lime Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7FF3C] opacity-40" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#B7FF3C] ring-4 ring-[#0E0E12]" />
                </span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#121216] border border-[#29292F] text-[#B7FF3C]">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#F5F5F5] font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-[#B7FF3C]" />
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

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-4 border-t border-[#29292F]/60">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B7FF3C] shrink-0 mt-0.5" />
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
