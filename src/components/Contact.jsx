import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Info,
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

  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null) // null | 'success' | 'error' | 'unconfigured'

  // Read public EmailJS client configuration from Vite environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const isConfigured = Boolean(
    EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY &&
    !EMAILJS_SERVICE_ID.includes('your_') &&
    !EMAILJS_TEMPLATE_ID.includes('your_') &&
    !EMAILJS_PUBLIC_KEY.includes('your_')
  )

  const validate = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.'
    }

    const emailTrimmed = formData.email.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailTrimmed) {
      errors.email = 'Please enter your email address.'
    } else if (!emailRegex.test(emailTrimmed)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.'
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.'
    }

    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear individual field error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setSubmissionStatus(null)

    // If EmailJS credentials are not yet configured in .env
    if (!isConfigured) {
      setSubmissionStatus({
        type: 'unconfigured',
        message:
          'EmailJS is not configured yet. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
      })
      return
    }

    setIsSubmitting(true)

    // Template parameters configured for delivery to personal email
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      to_name: personal.name,
      to_email: personal.email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setSubmissionStatus({
        type: 'success',
        message:
          `Thank you, ${formData.name.trim()}! Your message has been sent successfully to ${personal.email}. I will respond shortly.`,
      })

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      console.error('EmailJS Submission Error:', err)
      const errorMsg =
        typeof err === 'object' && err?.text
          ? err.text
          : 'Unable to deliver message at this time. Please check your network connection or email directly.'
      setSubmissionStatus({
        type: 'error',
        message: `Failed to send email: ${errorMsg}`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMailtoFallback = () => {
    const subjectText = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Website Visitor'}`
    )
    const bodyText = encodeURIComponent(
      `Hello Prabakaran,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${personal.email}?subject=${subjectText}&body=${bodyText}`
  }

  // Filter only genuine, populated social links
  const availableSocials = Object.entries(personal.socialLinks || {}).filter(
    ([, url]) => Boolean(url && url.trim().length > 0)
  )

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#29292F] bg-[#111115]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">
            06 / GET IN TOUCH
          </span>
          <h2 className="section-heading max-w-2xl">
            Let's discuss your next website or e-commerce build.
          </h2>
          <p className="section-subheading">
            Open to developer roles, freelance WordPress projects, and WooCommerce store implementations.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Email Card - Clickable direct action without copy button */}
            <a
              href={`mailto:${personal.email}`}
              className="group p-5 sm:p-6 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 block focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111115] outline-none"
              aria-label={`Send email to ${personal.email}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#A1A1AA] group-hover:text-[#B7FF3C] transition-colors">
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
                Email Address
              </span>
              <p className="mt-1 text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors break-all">
                {personal.email}
              </p>
            </a>

            {/* Phone Card - Clickable direct action without copy button */}
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="group p-5 sm:p-6 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 block focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111115] outline-none"
              aria-label={`Call ${personal.phone}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#A1A1AA] group-hover:text-[#B7FF3C] transition-colors">
                  <span>Call Directly</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
                Direct Line
              </span>
              <p className="mt-1 text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors">
                {personal.phone}
              </p>
            </a>

            {/* Location Card */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300 outline-none">
              <div className="flex items-start sm:items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] text-[#B7FF3C] group-hover:scale-110 group-hover:border-[#B7FF3C]/60 group-hover:shadow-[0_0_12px_rgba(183,255,60,0.25)] transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-[#B7FF3C] transition-colors break-words">
                    {personal.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#A1A1AA] pt-2 border-t border-[#29292F]/60">
                Available for full-time roles, remote opportunities, and client projects.
              </p>
            </div>

            {/* Social Links (only rendered if URL is explicitly provided in portfolioData.js) */}
            {availableSocials.length > 0 && (
              <div className="group p-5 rounded-2xl bg-[#17171C] border border-[#29292F] hover:border-[#B7FF3C] hover:bg-[#1c1c23] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),0_0_24px_rgba(183,255,60,0.18)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-semibold tracking-wider text-[#A1A1AA] uppercase block mb-3">
                  Online Profiles
                </span>
                <div className="flex gap-2.5">
                  {availableSocials.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#111115] border border-[#29292F] text-[#F5F5F5] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#B7FF3C] outline-none"
                      aria-label={platform}
                    >
                      {platform === 'github' && <GithubIcon className="w-4 h-4" />}
                      {platform === 'linkedin' && <LinkedinIcon className="w-4 h-4" />}
                      {platform === 'twitter' && <TwitterIcon className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Configured EmailJS Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17171C] border border-[#29292F] shadow-xl shadow-black/30">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#29292F]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Direct delivery to {personal.email}.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#B7FF3C] bg-[#111115] border border-[#29292F] px-2.5 py-1 rounded-full">
                  EmailJS Delivery
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#D4D4D8] mb-1.5">
                      Your Name <span className="text-[#B7FF3C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Jane Doe"
                      className={`w-full h-11 px-4 rounded-xl bg-[#111115] border text-[#F5F5F5] placeholder-[#71717A] text-xs sm:text-sm outline-none transition-all ${
                        fieldErrors.name
                          ? 'border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#29292F] focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C]'
                      }`}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{fieldErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#D4D4D8] mb-1.5">
                      Your Email Address <span className="text-[#B7FF3C]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="jane@example.com"
                      className={`w-full h-11 px-4 rounded-xl bg-[#111115] border text-[#F5F5F5] placeholder-[#71717A] text-xs sm:text-sm outline-none transition-all ${
                        fieldErrors.email
                          ? 'border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-[#29292F] focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C]'
                      }`}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{fieldErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#D4D4D8] mb-1.5">
                    Subject <span className="text-[#B7FF3C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="WordPress Project / Job Opportunity"
                    className={`w-full h-11 px-4 rounded-xl bg-[#111115] border text-[#F5F5F5] placeholder-[#71717A] text-xs sm:text-sm outline-none transition-all ${
                      fieldErrors.subject
                        ? 'border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#29292F] focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C]'
                    }`}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                  />
                  {fieldErrors.subject && (
                    <p id="subject-error" className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{fieldErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#D4D4D8] mb-1.5">
                    Message <span className="text-[#B7FF3C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className={`w-full p-4 rounded-xl bg-[#111115] border text-[#F5F5F5] placeholder-[#71717A] text-xs sm:text-sm outline-none transition-all resize-none ${
                      fieldErrors.message
                        ? 'border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#29292F] focus:border-[#B7FF3C] focus:ring-1 focus:ring-[#B7FF3C]'
                    }`}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{fieldErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B7FF3C] text-[#0A0A0C] font-semibold text-xs sm:text-sm hover:bg-[#c9ff5c] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-[#B7FF3C]/15 hover:shadow-lg hover:shadow-[#B7FF3C]/25 focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17171C] outline-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Fallback button if service not configured yet */}
                  {submissionStatus?.type === 'unconfigured' && (
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111115] border border-[#29292F] text-xs text-[#D4D4D8] hover:text-[#B7FF3C] hover:border-[#B7FF3C]/50 transition-colors"
                    >
                      <span>Or Send via Mail App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Success Feedback Alert */}
                {submissionStatus?.type === 'success' && (
                  <div className="p-4 rounded-xl bg-[#111115] border border-[#B7FF3C]/50 text-[#F5F5F5] text-xs sm:text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B7FF3C] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{submissionStatus.message}</p>
                  </div>
                )}

                {/* Error Feedback Alert */}
                {submissionStatus?.type === 'error' && (
                  <div className="p-4 rounded-xl bg-[#1a1113] border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{submissionStatus.message}</p>
                  </div>
                )}

                {/* Unconfigured Service Notice */}
                {submissionStatus?.type === 'unconfigured' && (
                  <div className="p-4 rounded-xl bg-[#15151b] border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="leading-relaxed space-y-1">
                      <p className="font-semibold text-amber-300">EmailJS Setup Required</p>
                      <p className="text-xs text-amber-200/90">
                        {submissionStatus.message} See <code className="px-1.5 py-0.5 rounded bg-black/40 text-[#B7FF3C]">.env.example</code> for variable names.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
