import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const { personal } = portfolioData

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subjectText = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Website Visitor'}`
    )
    const bodyText = encodeURIComponent(
      `Hello Prabakaran,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    const mailtoUrl = `mailto:${personal.email}?subject=${subjectText}&body=${bodyText}`
    window.location.href = mailtoUrl
    setIsSent(true)
    setTimeout(() => setIsSent(false), 5000)
  }

  const handleCopyFormMessage = () => {
    const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    navigator.clipboard.writeText(formatted)
    setCopiedMessage(true)
    setTimeout(() => setCopiedMessage(false), 2500)
  }

  // Filter only populated social links
  const availableSocials = Object.entries(personal.socialLinks || {}).filter(
    ([, url]) => Boolean(url && url.trim().length > 0)
  )

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#0E0E12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#B7FF3C] uppercase block mb-2">
            06 / GET IN TOUCH
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] max-w-2xl">
            Let's discuss your next website or e-commerce build.
          </h2>
          <p className="mt-3 text-base text-[#A1A1AA] max-w-xl">
            Open to developer roles, freelance WordPress projects, and WooCommerce store implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-colors">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-[#121216] border border-[#29292F] mb-3">
                  <Mail className="w-5 h-5 text-[#B7FF3C]" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121216] border border-[#29292F] text-xs text-[#A1A1AA] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7FF3C]" />
                      <span className="text-[#B7FF3C]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                Email Address
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="mt-1 font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-[#F5F5F5] hover:text-[#B7FF3C] transition-colors break-all flex items-center gap-1.5"
              >
                <span>{personal.email}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#3d3d46] transition-colors">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-[#121216] border border-[#29292F] mb-3">
                  <Phone className="w-5 h-5 text-[#B7FF3C]" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121216] border border-[#29292F] text-xs text-[#A1A1AA] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7FF3C]" />
                      <span className="text-[#B7FF3C]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                Direct Line
              </span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="mt-1 font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-[#F5F5F5] hover:text-[#B7FF3C] transition-colors flex items-center gap-1.5"
              >
                <span>{personal.phone}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#17171C] border border-[#29292F]">
              <div className="p-2.5 rounded-xl bg-[#121216] border border-[#29292F] mb-3 w-fit">
                <MapPin className="w-5 h-5 text-[#B7FF3C]" />
              </div>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                Location
              </span>
              <p className="mt-1 font-['Space_Grotesk'] text-base font-semibold text-[#F5F5F5]">
                {personal.location}
              </p>
              <span className="text-xs text-[#71717A] mt-1 block">
                Available for remote roles & local opportunities
              </span>
            </div>

            {/* Social Links (only rendered if URL is provided in portfolioData.js) */}
            {availableSocials.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#121216] border border-[#29292F]">
                <span className="text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase block mb-3">
                  Online Profiles
                </span>
                <div className="flex gap-3">
                  {availableSocials.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-[#17171C] border border-[#29292F] text-[#F5F5F5] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 transition-colors"
                      aria-label={platform}
                    >
                      {platform === 'github' && <GithubIcon className="w-5 h-5" />}
                      {platform === 'linkedin' && <LinkedinIcon className="w-5 h-5" />}
                      {platform === 'twitter' && <TwitterIcon className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Email Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17171C] border border-[#29292F]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#29292F]">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F5F5]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Opens your default email client with your message pre-filled.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#B7FF3C] bg-[#121216] border border-[#29292F] px-2.5 py-1 rounded-full">
                  Direct Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121216] border border-[#29292F] text-[#F5F5F5] placeholder-[#71717A] text-sm focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121216] border border-[#29292F] text-[#F5F5F5] placeholder-[#71717A] text-sm focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121216] border border-[#29292F] text-[#F5F5F5] placeholder-[#71717A] text-sm focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C] outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121216] border border-[#29292F] text-[#F5F5F5] placeholder-[#71717A] text-sm focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C] outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-sm hover:bg-[#c9ff5c] active:scale-[0.98] transition-all shadow-md shadow-[#B7FF3C]/10 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#121216] border border-[#29292F] text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#3d3d46] text-xs font-medium transition-all"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-4 h-4 text-[#B7FF3C]" />
                        <span className="text-[#B7FF3C]">Copied Draft</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Draft Text</span>
                      </>
                    )}
                  </button>
                </div>

                {isSent && (
                  <p className="text-xs text-[#B7FF3C] pt-2">
                    ✓ Opening your email client with your message drafted to {personal.email}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
