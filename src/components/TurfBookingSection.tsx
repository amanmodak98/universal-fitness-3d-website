import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TurfBookingSectionProps {
  onBook: () => void
}

const TurfBookingSection = ({ onBook }: TurfBookingSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="turf" ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4">PREMIUM SPORTS TURF</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display" >
            YOUR GAME. <span className="gradient-text">YOUR TURF.</span>
          </h2>
        </motion.div>

        {/* Turf visual */}
        <motion.div
          className="relative mb-16 rounded-3xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="aspect-[21/9] md:aspect-[21/7] relative bg-gradient-to-br from-green-900/40 to-green-800/20">
            {/* Turf pattern */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="absolute w-px h-full bg-green-500/20" style={{ left: `${i * 5}%` }} />
              ))}
            </div>
            
            {/* Turf markings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-60 md:h-60 border-2 border-white/20 rounded-full" />
              <div className="absolute w-px h-full bg-white/20 left-1/2" />
            </div>
            
            {/* Goal posts */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-2 h-24 md:h-40 border-2 border-white/30 border-r-0" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-24 md:h-40 border-2 border-white/30 border-l-0" />
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center glassmorphism rounded-2xl px-8 py-6">
                <p className="text-[#ff3d2e] text-sm tracking-widest mb-2">CRICKET • FOOTBALL • MORE</p>
                <p className="text-3xl md:text-5xl font-black text-white font-display" >
                  PREMIUM TURF
                </p>
                <p className="text-gray-400 mt-2">Professional-grade artificial turf</p>
              </div>
            </div>
            
            {/* Stadium lights effect */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Weekday */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glassmorphism rounded-2xl p-8 md:p-10 border border-white/10 hover:border-[#ff3d2e]/30 transition-all duration-500 h-full">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff3d2e]/10 to-transparent w-1/2 h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <p className="text-[#ff3d2e] tracking-[0.2em] text-sm font-medium">WEEKDAYS</p>
                <p className="text-white/60 mt-2">MONDAY – FRIDAY</p>
                
                <div className="my-8">
                  <span className="text-6xl md:text-7xl font-black gradient-text font-display" >₹800</span>
                  <span className="text-gray-400 block mt-2">PER HOUR</span>
                </div>
                
                <motion.button
                  onClick={onBook}
                  className="w-full py-4 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#ff3d2e]/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK WEEKDAY TURF
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Weekend */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glassmorphism rounded-2xl p-8 md:p-10 border border-[#ff3d2e]/20 hover:border-[#ff3d2e]/50 transition-all duration-500 h-full relative overflow-hidden">
              {/* Premium badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#ff3d2e] text-black text-xs font-bold rounded-full">
                POPULAR
              </div>
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff3d2e]/20 to-transparent w-1/2 h-full rounded-2xl" />
              
              <div className="relative">
                <p className="text-[#ff3d2e] tracking-[0.2em] text-sm font-medium">WEEKENDS</p>
                <p className="text-white/60 mt-2">SATURDAY – SUNDAY</p>
                
                <div className="my-8">
                  <span className="text-6xl md:text-7xl font-black gradient-text font-display" >₹1000</span>
                  <span className="text-gray-400 block mt-2">PER HOUR</span>
                </div>
                
                <motion.button
                  onClick={onBook}
                  className="w-full py-4 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full hover:shadow-xl hover:shadow-[#ff3d2e]/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK WEEKEND TURF
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 mb-4">For team bookings and tournaments, call us directly</p>
          <motion.a
            href="tel:+916269673000"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#ff3d2e] text-[#ff3d2e] font-bold rounded-full hover:bg-[#ff3d2e] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📞</span>
            <span>CALL +91 62696 73000</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default TurfBookingSection
