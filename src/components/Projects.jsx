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
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
              03 / FEATURED PROJECTS
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5]">
              Real-world web & e-commerce builds.
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md">
            Grounded in actual development experience with WordPress themes, WooCommerce catalogs, payment flows, and responsive UI.
          </p>
        </div>

        {/* Project Cards Stack / Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Preview / Screenshot Column */}
                <div className="lg:col-span-6 bg-[#121216] border-b lg:border-b-0 lg:border-r border-[#29292F] p-4 sm:p-6 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#29292F] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="text-[11px] text-[#71717A] mt-3 font-mono">
                    Editable asset: {project.image}
                  </span>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category & Index */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold text-[#B7FF3C] tracking-wide uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-[#71717A]">
                        0{idx + 1} / 0{projects.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
                        Key Implementation Highlights:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                            <Check className="w-3.5 h-3.5 text-[#B7FF3C] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#121216] border border-[#29292F] text-[11px] font-mono text-[#F5F5F5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-4 border-t border-[#29292F] flex flex-wrap items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-xs hover:bg-[#c9ff5c] transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121216] border border-[#29292F] text-[#F5F5F5] font-medium text-xs hover:text-[#B7FF3C] hover:border-[#3d3d46] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : null}

                    {/* Direct discussion trigger for verified projects */}
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#B7FF3C] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire about this project</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
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
