import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, type FormEvent, type ChangeEvent } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const subjects = [
  { value: '',                    label: 'Select a topic' },
  { value: 'membership',         label: 'Membership inquiry' },
  { value: 'personal-training',  label: 'Personal training' },
  { value: 'turf-booking',       label: 'Turf & court booking' },
  { value: 'group-classes',      label: 'Group class booking' },
  { value: 'corporate',          label: 'Corporate & team packages' },
  { value: 'feedback',           label: 'Feedback or testimonial' },
  { value: 'other',              label: 'Something else' },
]

const validate = (data: FormState): FormErrors => {
  const errors: FormErrors = {}
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (min 2 characters).'
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[+\d\s()-]{7,15}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!data.subject) {
    errors.subject = 'Please pick a topic so we can route your message.'
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Tell us a bit more — at least 10 characters.'
  }
  return errors
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(heroProgress, [0, 1], ['0%', '30%'])

  const [formData, setFormData] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormState]) {
      const next = validate({ ...formData, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: next[name as keyof FormState] }))
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const next = validate(formData)
    setErrors((prev) => ({ ...prev, [name]: next[name as keyof FormState] }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate(formData)
    setErrors(next)
    setTouched({
      name: true, email: true, phone: true, subject: true, message: true,
    })
    if (Object.keys(next).length > 0) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Simulate submission — replace with real endpoint when wiring backend
    setTimeout(() => {
      setStatus('success')
      setFormData(initialState)
      setTouched({})
      setErrors({})
    }, 900)
  }

  const inputClasses = (field: keyof FormState): string =>
    `w-full px-6 py-4 bg-white/5 border rounded-xl text-white placeholder:text-gray-500 focus:outline-none transition-colors ${
      errors[field] && touched[field]
        ? 'border-[#ef4444]/70 focus:border-[#ef4444]'
        : 'border-white/10 focus:border-[#00d9f0]/60'
    }`

  return (
    <main id="main-content" className="bg-gradient-mesh">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[65vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{ y: heroBgY }}
        >
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80&auto=format&fit=crop"
            alt="Reception and coaching staff at Universal Fitness ready to help members"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#050508]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            className="text-[#00d9f0] tracking-[0.3em] uppercase text-sm mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Get in touch
          </motion.p>
          <motion.h1
            id="contact-hero-heading"
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's <span className="gradient-text">connect</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto italic-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Book a free trial, reserve turf time, or ask our team anything. We reply to
            every message within 24 hours — usually a lot faster.
          </motion.p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 md:py-32 px-4" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <h2
                id="contact-form-heading"
                className="text-3xl md:text-5xl font-black font-display mb-4"
              >
                Send us a <span className="gradient-text">message</span>
              </h2>
              <p className="text-gray-400 text-base mb-8">
                All fields marked with <span className="text-[#ef4444]">*</span> are required.
                We typically respond in under 4 business hours.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm mb-2 block font-medium">
                    Full name <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.name && touched.name)}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    className={inputClasses('name')}
                    placeholder="Aarav Singh"
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="text-[#ef4444] text-xs mt-2">{errors.name}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-gray-300 text-sm mb-2 block font-medium">
                      Email <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.email && touched.email)}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      className={inputClasses('email')}
                      placeholder="you@example.com"
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="text-[#ef4444] text-xs mt-2">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-gray-300 text-sm mb-2 block font-medium">
                      Phone <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(errors.phone && touched.phone)}
                      aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      className={inputClasses('phone')}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && touched.phone && (
                      <p id="phone-error" className="text-[#ef4444] text-xs mt-2">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-gray-300 text-sm mb-2 block font-medium">
                    Topic <span className="text-[#ef4444]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(errors.subject && touched.subject)}
                    aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                    className={`${inputClasses('subject')} bg-[#0d0d15] cursor-pointer`}
                  >
                    {subjects.map((opt) => (
                      <option key={opt.value || 'placeholder'} value={opt.value} className="bg-gray-900">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && touched.subject && (
                    <p id="subject-error" className="text-[#ef4444] text-xs mt-2">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-300 text-sm mb-2 block font-medium">
                    Message <span className="text-[#ef4444]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Tell us how we can help — your goals, schedule, or any questions about Universal Fitness."
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" className="text-[#ef4444] text-xs mt-2">{errors.message}</p>
                  )}
                </div>

                {/* Status — live region announces success / failure to screen readers */}
                <div aria-live="polite" aria-atomic="true" className="min-h-[1.5rem]">
                  {status === 'success' && (
                    <p className="text-[#00d9f0] text-sm font-medium">
                      Thanks! Your message is on its way — we&apos;ll be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && Object.keys(errors).length > 0 && (
                    <p className="text-[#ef4444] text-sm font-medium">
                      Please fix the highlighted fields and try again.
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-[#ef4444]/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'submitting'
                    ? 'Sending…'
                    : status === 'success'
                      ? '✓ Message Sent'
                      : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-4xl font-black font-display mb-6">
                  Reach us <span className="gradient-text">directly</span>
                </h3>
              </div>

              {[
                {
                  title: 'Visit the arena',
                  lines: [
                    'Universal Fitness & Sport Arena',
                    'Guru Gobind Singh Marg, Nandvan Road',
                    'Jarway Alias Hirapur, Raipur',
                    'Chhattisgarh 492099, India',
                  ],
                  href: 'https://maps.google.com/?q=Universal+Fitness+Sport+Arena+Raipur',
                  icon: '📍',
                  color: 'from-[#ef4444] to-[#b91c1c]',
                  aria: 'Get directions to Universal Fitness on Google Maps',
                },
                {
                  title: 'Call our front desk',
                  lines: ['+91 62696 73000', 'Reception • 24/7'],
                  href: 'tel:+916269673000',
                  icon: '📞',
                  color: 'from-[#00d9f0] to-[#0891b2]',
                  aria: 'Call Universal Fitness reception at +91 62696 73000',
                },
                {
                  title: 'Email the team',
                  lines: ['universalfitness321@gmail.com', 'Replies within 24 hours'],
                  href: 'mailto:universalfitness321@gmail.com',
                  icon: '✉️',
                  color: 'from-[#f59e0b] to-[#b45309]',
                  aria: 'Email Universal Fitness at universalfitness321@gmail.com',
                },
                {
                  title: 'Opening hours',
                  lines: ['Open 24 hours • 7 days a week', 'Tours: 9 AM — 9 PM daily'],
                  href: undefined,
                  icon: '🕐',
                  color: 'from-[#ef4444] to-[#b91c1c]',
                  aria: undefined,
                },
              ].map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href || undefined}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block glassmorphism p-7 rounded-2xl hover:border-[#ef4444]/30 transition-all duration-300 ${!info.href ? 'cursor-default' : ''}`}
                  whileHover={info.href ? { x: 8 } : {}}
                  aria-label={info.aria}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      aria-hidden="true"
                    >
                      <span className="text-2xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2">{info.title}</h4>
                      {info.lines.map((line, i) => (
                        <p key={i} className={i === 0 ? 'text-gray-200' : 'text-gray-400 text-sm'}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social */}
              <div className="glassmorphism p-7 rounded-2xl">
                <h4 className="text-xl font-bold font-display mb-4">Follow our training</h4>
                <p className="text-gray-400 text-sm mb-5 italic-accent">
                  Daily workout clips, transformation stories and event highlights.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Instagram', href: 'https://instagram.com/universalfitness', label: 'Follow Universal Fitness on Instagram' },
                    { name: 'Facebook',  href: 'https://facebook.com/universalfitness',  label: 'Follow Universal Fitness on Facebook' },
                    { name: 'YouTube',   href: 'https://youtube.com/@universalfitness', label: 'Subscribe to Universal Fitness on YouTube' },
                    { name: 'Twitter',   href: 'https://twitter.com/universalfitness',  label: 'Follow Universal Fitness on Twitter' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center border border-white/10 hover:border-[#ef4444]/40"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <span className="text-xs font-bold text-gray-300">{social.name[0]}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-12 px-4" aria-labelledby="map-heading">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            id="map-heading"
            {...fadeUp}
            className="text-3xl md:text-5xl font-black font-display mb-8 text-center"
          >
            Find us on the <span className="gradient-text">map</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-3xl overflow-hidden"
          >
            <iframe
              title="Universal Fitness & Sport Arena location map"
              src="https://www.google.com/maps?q=Universal+Fitness+Sport+Arena+Raipur&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="py-20 md:py-28 px-4" aria-labelledby="quick-actions-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="quick-actions-heading" className="sr-only">
            Quick ways to reach Universal Fitness
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: 'tel:+916269673000',
                icon: '📞',
                title: 'Call reception',
                desc: 'Speak with our front desk team',
                color: 'hover:border-[#ef4444]/40',
                label: 'Call Universal Fitness reception at +91 62696 73000',
              },
              {
                href: 'https://wa.me/916269673000',
                icon: '💬',
                title: 'WhatsApp us',
                desc: 'Chat instantly, book a trial',
                color: 'hover:border-[#00d9f0]/40',
                label: 'Open WhatsApp chat with Universal Fitness',
              },
              {
                href: 'mailto:universalfitness321@gmail.com',
                icon: '✉️',
                title: 'Email us',
                desc: 'Send us your questions',
                color: 'hover:border-[#f59e0b]/40',
                label: 'Email Universal Fitness at universalfitness321@gmail.com',
              },
            ].map((action, i) => (
              <motion.a
                key={action.title}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={action.label}
                className={`glassmorphism p-9 rounded-3xl text-center transition-all duration-300 group border-2 border-transparent ${action.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.04 }}
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform" aria-hidden="true">
                  {action.icon}
                </div>
                <h3 className="text-xl font-black font-display mb-2">{action.title}</h3>
                <p className="text-gray-400 text-sm">{action.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}