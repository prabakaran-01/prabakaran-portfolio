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
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
            01 / ABOUT ME
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5]">
            Bridging clean code with reliable WordPress & WooCommerce solutions.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed"
          >
            <p className="text-[#F5F5F5] font-medium text-lg sm:text-xl">
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
              security updates, bug troubleshooting, and speed optimization.
            </p>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#121216] border border-[#29292F]">
                <div className="flex items-center gap-2.5 text-[#F5F5F5] font-medium mb-1 text-sm">
                  <ShoppingBag className="w-4 h-4 text-[#B7FF3C]" />
                  <span>E-Commerce Focus</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-normal">
                  End-to-end WooCommerce setups, payment integrations, cart management, and order
                  flows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121216] border border-[#29292F]">
                <div className="flex items-center gap-2.5 text-[#F5F5F5] font-medium mb-1 text-sm">
                  <Code className="w-4 h-4 text-[#B7FF3C]" />
                  <span>Theme & Plugin Customization</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-normal">
                  Custom page templates, PHP hooks, responsive CSS, and specialized feature tweaks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121216] border border-[#29292F]">
                <div className="flex items-center gap-2.5 text-[#F5F5F5] font-medium mb-1 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#B7FF3C]" />
                  <span>Security & Maintenance</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-normal">
                  WordPress core updates, vulnerability monitoring, plugin maintenance, and bug fixes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121216] border border-[#29292F]">
                <div className="flex items-center gap-2.5 text-[#F5F5F5] font-medium mb-1 text-sm">
                  <Zap className="w-4 h-4 text-[#B7FF3C]" />
                  <span>Performance & SEO</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-normal">
                  Cross-device performance tuning, clean markup structure, and on-page SEO best practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Graphic + Quick Facts Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Abstract Architecture Graphic */}
            <div className="p-5 rounded-2xl bg-[#121216] border border-[#29292F] relative overflow-hidden group">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#29292F] text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-2 font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 text-[#71717A]">wp-architecture.php</span>
                </div>
                <span className="text-[#B7FF3C] text-[11px] font-mono">active</span>
              </div>

              <pre className="font-mono text-xs text-[#A1A1AA] leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-[#71717A]">// Core WordPress Development Stack</span>{'\n'}
                  <span className="text-[#B7FF3C]">add_action</span>('woocommerce_init', <span className="text-[#F5F5F5]">function</span>() {'{'}{'\n'}
                  {'  '}<span className="text-[#A1A1AA]">$store</span> = <span className="text-[#B7FF3C]">new</span> WooCommerceEngine([
                  {'\n    '}<span className="text-[#c9ff5c]">'catalog'</span>   =&gt; <span className="text-[#F5F5F5]">'Optimized'</span>,
                  {'\n    '}<span className="text-[#c9ff5c]">'gateway'</span>   =&gt; <span className="text-[#F5F5F5]">'Integrated'</span>,
                  {'\n    '}<span className="text-[#c9ff5c]">'security'</span>  =&gt; <span className="text-[#F5F5F5]">'Hardened'</span>,
                  {'\n    '}<span className="text-[#c9ff5c]">'responsive'</span>=&gt; <span className="text-[#B7FF3C]">true</span>,
                  {'\n  '}]);{'\n'}
                  {'}'});
                </code>
              </pre>
            </div>

            {/* Quick Profile Overview Card */}
            <div className="p-6 rounded-2xl bg-[#17171C] border border-[#29292F] space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B7FF3C]">
                Verified Details
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#B7FF3C] shrink-0" />
                  <div>
                    <span className="text-xs text-[#71717A] block">Experience</span>
                    <span className="text-[#F5F5F5] font-medium">1+ Year in Web Development</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-[#B7FF3C] shrink-0" />
                  <div>
                    <span className="text-xs text-[#71717A] block">Primary Specialization</span>
                    <span className="text-[#F5F5F5] font-medium">WordPress & WooCommerce</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-[#B7FF3C] shrink-0" />
                  <div>
                    <span className="text-xs text-[#71717A] block">Higher Education</span>
                    <span className="text-[#F5F5F5] font-medium">M.Sc. Computer Science (2025)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#B7FF3C] shrink-0" />
                  <div>
                    <span className="text-xs text-[#71717A] block">Location</span>
                    <span className="text-[#F5F5F5] font-medium">{personal.location}</span>
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
