import { motion } from 'motion/react'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
            05 / ACADEMIC BACKGROUND
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Education & credentials.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA]">
            Solid academic foundation in computer science and software applications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#121216] border border-[#29292F]">
                    <GraduationCap className="w-5 h-5 text-[#B7FF3C]" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#B7FF3C] bg-[#121216] border border-[#29292F] px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase block mb-1">
                  {item.level}
                </span>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F5F5] mb-3">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-[#F5F5F5] mb-2 leading-relaxed">
                  {item.institution}
                </p>

                <p className="text-xs text-[#A1A1AA] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0" />
                  <span>{item.affiliation}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#29292F]/60 flex items-center justify-between text-[11px] text-[#71717A]">
                <span>Verified Qualification</span>
                <span className="text-[#B7FF3C]">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
