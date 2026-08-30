import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff3d2e]/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4">VISIT US</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display" >
            FIND YOUR <span className="gradient-text">ARENA</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Map / Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="glassmorphism rounded-2xl p-8 md:p-10 h-full border border-white/10">
              <h3 className="text-2xl font-bold text-[#ff3d2e] mb-6 font-display" >
                Universal Fitness & Sport Arena Turf
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-[#ff3d2e] mt-1">📍</span>
                  <div>
                    <p className="text-white font-medium">Guru Gobind Singh Marg,</p>
                    <p className="text-gray-300">Nandvan Road,</p>
                    <p className="text-gray-300">Jarway Alias Hirapur,</p>
                    <p className="text-gray-300">Raipur, Chhattisgarh – 492099</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-[#ff3d2e]">📞</span>
                  <a href="tel:+916269673000" className="text-white hover:text-[#ff3d2e] transition-colors">
                    +91 62696 73000
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-[#ff3d2e]">✉️</span>
                  <a href="mailto:universalfitness321@gmail.com" className="text-white hover:text-[#ff3d2e] transition-colors text-sm">
                    universalfitness321@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#ff3d2e]">🕐</span>
                  <div>
                    <p className="text-white font-medium">OPEN 24 HOURS</p>
                    <p className="text-green-400 text-sm">Always open • 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://www.google.com/maps/dir//Guru+Gobind+Singh+Marg,+Nandvan+Road,+Jarway+Alias+Hirapur,+Raipur,+Chhattisgarh+492099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full text-sm hover:shadow-lg hover:shadow-[#ff3d2e]/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET DIRECTIONS
                </motion.a>
                <motion.a
                  href="tel:+916269673000"
                  className="px-6 py-3 border border-white/20 text-white font-bold rounded-full text-sm hover:border-[#ff3d2e]/50 hover:text-[#ff3d2e] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CALL NOW
                </motion.a>
                <motion.a
                  href="https://wa.me/916269673000?text=Hi%2C%20I%27m%20interested%20in%20Universal%20Fitness%20%26%20Sport%20Arena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-green-500/50 text-green-400 font-bold rounded-full text-sm hover:bg-green-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WHATSAPP
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.6!3d21.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAwLjAiTiA4McKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Universal Fitness Location"
            />
            {/* Overlay for map styling */}
            <div className="absolute inset-0 pointer-events-none border border-[#ff3d2e]/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
