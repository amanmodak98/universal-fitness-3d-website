import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const quickLinks = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact',  path: '/contact' },
  ]

  const services = [
    { name: 'Strength Gym',     path: '/about' },
    { name: 'Cricket Turf',     path: '/programs' },
    { name: 'Football Arena',   path: '/programs' },
    { name: 'Volleyball Court', path: '/programs' },
    { name: 'Yoga & Recovery',  path: '/programs' },
    { name: 'Cafeteria',        path: '/about' },
  ]

  const socials = [
    { name: 'Instagram', href: 'https://instagram.com/universalfitness', label: 'Follow Universal Fitness on Instagram' },
    { name: 'Facebook',  href: 'https://facebook.com/universalfitness',  label: 'Follow Universal Fitness on Facebook' },
    { name: 'YouTube',   href: 'https://youtube.com/@universalfitness',  label: 'Subscribe to Universal Fitness on YouTube' },
    { name: 'Twitter',   href: 'https://twitter.com/universalfitness',  label: 'Follow Universal Fitness on Twitter' },
  ]

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Simulate subscription; wire to backend in production
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 700)
  }

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-[#050505]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Universal Fitness site footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center space-x-3 mb-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded-lg w-fit">
              <div className="w-11 h-11 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-lg flex items-center justify-center glow-fire">
                <span className="text-white font-bold text-lg font-display">UF</span>
              </div>
              <div>
                <h3 className="text-white font-bold font-display tracking-tight">Universal Fitness</h3>
                <p className="text-[#ef4444] text-xs tracking-widest">& Sport Arena</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Raipur&apos;s premium 24/7 destination for athletic training, sport, recovery and play —
              built for athletes who refuse to settle.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              aria-labelledby="newsletter-heading"
              noValidate
            >
              <h3 id="newsletter-heading" className="text-white font-bold font-display text-sm uppercase tracking-wider">
                Get training tips
              </h3>
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={status === 'error'}
                  aria-describedby="newsletter-status"
                  className="flex-1 min-w-0 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00d9f0]/60 transition-colors"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-5 py-3 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-[#ef4444]/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status === 'submitting' ? 'Joining…' : 'Subscribe'}
                </motion.button>
              </div>
              <div id="newsletter-status" aria-live="polite" aria-atomic="true" className="min-h-[1.25rem]">
                {status === 'success' && (
                  <p className="text-[#00d9f0] text-xs">
                    ✓ You&apos;re in. Watch your inbox for our weekly programming drop.
                  </p>
                )}
                {status === 'error' && error && (
                  <p className="text-[#ef4444] text-xs">{error}</p>
                )}
                {status === 'idle' && (
                  <p className="text-gray-500 text-xs">
                    Weekly workouts, nutrition tips and member-only offers.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links" className="lg:col-span-2">
            <h4 id="footer-quick-links" className="text-white font-bold mb-4 font-display text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ef4444] transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="lg:col-span-2">
            <h4 id="footer-services" className="text-white font-bold mb-4 font-display text-sm uppercase tracking-wider">
              Facilities
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.path}
                    className="text-gray-400 hover:text-[#ef4444] transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 font-display text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+916269673000"
                  aria-label="Call Universal Fitness reception at +91 62696 73000"
                  className="text-gray-400 hover:text-[#ef4444] transition-colors flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded"
                >
                  <span aria-hidden="true">📞</span>
                  <span>+91 62696 73000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:universalfitness321@gmail.com"
                  aria-label="Email Universal Fitness at universalfitness321@gmail.com"
                  className="text-gray-400 hover:text-[#ef4444] transition-colors flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded break-all"
                >
                  <span aria-hidden="true">✉️</span>
                  <span>universalfitness321@gmail.com</span>
                </a>
              </li>
              <li className="text-gray-400 flex items-start space-x-2">
                <span aria-hidden="true">📍</span>
                <span>Jarway Alias Hirapur, Raipur, Chhattisgarh 492099</span>
              </li>
              <li className="text-gray-400 flex items-start space-x-2">
                <span aria-hidden="true">🕐</span>
                <span>Open 24 hours, 7 days a week</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social row */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold font-display text-sm uppercase tracking-wider">
                Follow our training
              </span>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center border border-white/10 hover:border-[#ef4444]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444]"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs font-bold text-gray-300">{s.name[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-xs md:text-sm">
              © {currentYear} Universal Fitness & Sport Arena. All rights reserved.
            </p>
          </div>

          <p className="text-gray-600 text-xs mt-4 text-center md:text-left">
            Designed &amp; developed by{' '}
            <a
              href="https://www.infirexa.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ef4444] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded"
            >
              Infirexa
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer