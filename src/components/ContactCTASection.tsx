import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useBooking } from '../context/BookingContext'

const ContactCTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const { openBooking } = useBooking()

  return (
    <section ref={sectionRef} className="py-20 md:py-40 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3d2e]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff3d2e]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff3d2e]/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            DON'T WAIT. START TODAY.
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6"
            
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            READY TO GET<br />
            <span className="gradient-text">STRONGER?</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl mb-12 tracking-wider"
            
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            TRAIN. PLAY. COMPETE. REPEAT.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="tel:+916269673000"
              className="px-10 py-4 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#ff3d2e]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN NOW
            </motion.a>
            <motion.button
              onClick={openBooking}
              className="px-10 py-4 border-2 border-[#ff3d2e] text-[#ff3d2e] font-bold rounded-full text-lg hover:bg-[#ff3d2e] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK TURF
            </motion.button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
          >
            <a href="tel:+916269673000" className="flex items-center space-x-2 hover:text-[#ff3d2e] transition-colors">
              <span>📞</span>
              <span>+91 62696 73000</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:universalfitness321@gmail.com" className="flex items-center space-x-2 hover:text-[#ff3d2e] transition-colors">
              <span>✉️</span>
              <span>universalfitness321@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTASection
