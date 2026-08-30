import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      gsap.fromTo(ref.current, { innerText: 0 }, {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        onUpdate: function() {
          if (ref.current) {
            ref.current.innerText = Math.round(parseFloat(ref.current.innerText)).toString()
          }
        }
      })
    }
  }, [isInView, target])

  return <span ref={ref}>0</span>
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const stats = [
    { value: 24, suffix: '/7', label: 'OPEN', display: '24/7' },
    { value: 4.9, suffix: '★', label: 'RATED', display: '4.9' },
    { value: 67, suffix: '+', label: 'REVIEWS', display: '67+' },
    { value: 0, suffix: '', label: 'MULTI SPORTS', display: 'MULTI' },
  ]

  const features = [
    'Modern gym environment',
    'Sports facilities',
    'Cricket & Football turf',
    'Gaming zone',
    'Snooker',
    'Cafeteria',
    'Expert fitness training',
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff3d2e]/5 to-transparent" />
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#ff3d2e]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract gym visual */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated rings */}
                    <motion.div
                      className="w-64 h-64 md:w-80 md:h-80 border-2 border-[#ff3d2e]/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute inset-4 w-56 h-56 md:w-72 md:h-72 border border-[#e62414]/20 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute inset-10 w-44 h-44 md:w-60 md:h-60 border border-white/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl md:text-8xl font-black gradient-text font-display" >UF</div>
                        <p className="text-[#ff3d2e] text-xs tracking-widest mt-2">EST. RAIPUR</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3d2e]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e62414]/50 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glassmorphism rounded-xl px-6 py-3"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-[#ff3d2e] font-bold text-lg">24/7</p>
                <p className="text-white/60 text-xs">ALWAYS OPEN</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight font-display" >
              MORE THAN<br />
              <span className="gradient-text">A GYM.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Universal Fitness & Sport Arena brings fitness, sports and entertainment together under one premium destination. A state-of-the-art facility designed for those who demand excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#ff3d2e] rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glassmorphism rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 215, 0, 0.3)' }}
                >
                  <p className="text-2xl md:text-3xl font-black gradient-text font-display" >
                    {stat.display === 'MULTI' ? 'MULTI' : (
                      <>
                        {stat.display === '4.9' ? '4.9' : stat.display === '24/7' ? '24/7' : stat.display === '67+' ? <><AnimatedCounter target={67} />+</> : <AnimatedCounter target={stat.value} />}
                      </>
                    )}
                  </p>
                  <p className="text-white/60 text-xs tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
