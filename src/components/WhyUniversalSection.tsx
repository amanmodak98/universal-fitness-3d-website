import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  { title: 'PREMIUM EQUIPMENT', desc: 'State-of-the-art machines and free weights for serious training', icon: '⚙️' },
  { title: 'SPORTS + FITNESS', desc: 'Gym and sports facilities under one roof', icon: '🏆' },
  { title: 'OPEN 24/7', desc: 'Train whenever it suits your schedule', icon: '🕐' },
  { title: 'EXPERT TRAINING', desc: 'Guidance from certified fitness professionals', icon: '🎯' },
  { title: 'MULTI-SPORT TURF', desc: 'Cricket, football, volleyball and more', icon: '🏟️' },
  { title: 'COMMUNITY EXPERIENCE', desc: 'Join a tribe of motivated individuals', icon: '🤝' },
]

const WhyUniversalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FFD700]/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#FFD700] tracking-[0.3em] text-sm mb-4">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
            WHY <span className="gradient-text">UNIVERSAL FITNESS</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="flex-shrink-0 w-[280px] md:w-auto snap-start glassmorphism rounded-2xl p-8 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <motion.span
                className="text-4xl mb-4 block"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {reason.icon}
              </motion.span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
              <div className="mt-4 w-8 h-0.5 bg-[#FFD700]/30 group-hover:w-full group-hover:bg-[#FFD700] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUniversalSection
