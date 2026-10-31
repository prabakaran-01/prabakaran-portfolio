import { motion } from 'motion/react'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">
            05 / ACADEMIC BACKGROUND
          </span>
          <h2 className="section-heading max-w-2xl">
            Education & credentials.
          </h2>
          <p className="section-subheading">
            Solid academic foundation in computer science and software applications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 sm:p-7 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                    <GraduationCap className="w-5 h-5 text-[#B7FF3C]" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#B7FF3C] bg-[#111115] border border-[#29292F] group-hover:border-[#B7FF3C]/50 px-3 py-1 rounded-full transition-colors">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase block mb-1">
                  {item.level}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors duration-250 mb-2 leading-snug">
                  {item.degree}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#F5F5F5] mb-2 leading-relaxed">
                  {item.institution}
                </p>

                <p className="text-xs text-[#A1A1AA] flex items-center gap-1.5 leading-relaxed">
                  <Award className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0" />
                  <span>{item.affiliation}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#29292F]/70 flex items-center justify-between text-[11px] text-[#71717A]">
                <span>Verified Qualification</span>
                <span className="text-[#B7FF3C] font-semibold">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
