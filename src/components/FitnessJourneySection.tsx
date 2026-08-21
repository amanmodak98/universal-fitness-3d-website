import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { title: 'START', desc: 'Begin your transformation journey', icon: '🚀' },
  { title: 'TRAIN', desc: 'Push your limits every single day', icon: '💪' },
  { title: 'IMPROVE', desc: 'See measurable progress and results', icon: '📈' },
  { title: 'TRANSFORM', desc: 'Become the best version of yourself', icon: '👑' },
]

const FitnessJourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/3 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#FFD700] tracking-[0.3em] text-sm mb-4">YOUR PATH</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black" style={{ fontFamily: 'Oswald, sans-serif' }}>
            YOUR FITNESS JOURNEY<br />
            <span className="gradient-text">STARTS HERE.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700] hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row gap-8 mb-12`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <motion.div
                      className="glassmorphism rounded-2xl p-6 md:p-8 inline-block"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(255, 215, 0, 0.3)' }}
                    >
                      <span className="text-4xl mb-3 block">{step.icon}</span>
                      <h3 className="text-2xl md:text-3xl font-black text-[#FFD700] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 flex-shrink-0">
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                  
                  {/* Empty space for other side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text and CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Build strength. Improve performance. Become your better self.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START YOUR JOURNEY
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FitnessJourneySection
