import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const Navbar = () => {
  const { openBooking } = useBooking()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home',      path: '/' },
    { name: 'About',     path: '/about' },
    { name: 'Programs',  path: '/programs' },
    { name: 'Contact',   path: '/contact' },
  ]

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <motion.nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center space-x-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-lg flex items-center justify-center glow-fire">
                <span className="text-white font-bold text-lg font-display">UF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-base leading-none font-display tracking-tight">
                  Universal Fitness
                </h1>
                <p className="text-[#ef4444] text-xs tracking-widest mt-0.5">& Sport Arena</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    active ? 'text-[#ef4444]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3 right-3 -bottom-1 h-0.5 bg-gradient-to-r from-[#ef4444] to-[#00d9f0] origin-left transition-transform duration-500 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <motion.button
              onClick={openBooking}
              className="px-6 py-3 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#ef4444]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Trial
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <motion.button
            type="button"
            className="lg:hidden text-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4444] rounded-md"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                aria-hidden="true"
                className="w-full h-0.5 bg-white origin-left"
                animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                aria-hidden="true"
                className="w-full h-0.5 bg-white"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                aria-hidden="true"
                className="w-full h-0.5 bg-white origin-left"
                animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.path)
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      aria-current={active ? 'page' : undefined}
                      className={`block px-4 py-3 text-lg font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                        active
                          ? 'text-[#ef4444] bg-white/5'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.button
                onClick={() => {
                  openBooking()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                Book Free Trial
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar