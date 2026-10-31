import { motion } from 'motion/react'
import { ExternalLink, MessageSquare, Check, ArrowRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export default function Projects() {
  const { projects } = portfolioData

  const scrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="section-label">
              03 / FEATURED PROJECTS
            </span>
            <h2 className="section-heading">
              Real-world web & e-commerce builds.
            </h2>
          </div>
          <p className="section-subheading max-w-md md:mt-0">
            Grounded in actual development experience with WordPress themes, WooCommerce catalogs, payment flows, and responsive UI.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 lg:p-7 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Visual Preview Column - Left 50% on desktop */}
                <div className="w-full">
                  <div className="relative rounded-xl overflow-hidden border border-[#29292F] bg-[#0A0A0C] shadow-lg group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_20px_rgba(183,255,60,0.15)] transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                      className="w-full h-auto block object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Subtle glowing sheen on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B7FF3C]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content Column - Right 50% on desktop */}
                <div className="flex flex-col justify-center space-y-3.5 sm:space-y-4">
                  {/* Category & Index */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#B7FF3C] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#111115] border border-[#29292F] group-hover:border-[#B7FF3C]/40 transition-colors">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#71717A]">
                      0{idx + 1} / 0{projects.length}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors duration-250 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-0.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F5F5]">
                      Key Implementation Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA] leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#111115] border border-[#29292F] text-[11px] font-mono text-[#D4D4D8] hover:border-[#B7FF3C]/60 hover:text-[#B7FF3C] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-3 border-t border-[#29292F] flex flex-wrap items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-xs hover:bg-[#c9ff5c] shadow-md shadow-[#B7FF3C]/15 hover:shadow-lg hover:shadow-[#B7FF3C]/25 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111115] border border-[#29292F] text-[#F5F5F5] font-medium text-xs hover:text-[#B7FF3C] hover:border-[#B7FF3C]/60 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : null}

                    {/* Direct inquiry trigger */}
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] hover:text-[#B7FF3C] transition-colors duration-200 group/link"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#B7FF3C] group-hover/link:scale-110 transition-transform" />
                      <span>Inquire about this project</span>
                      <ArrowRight className="w-3 h-3 ml-0.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
