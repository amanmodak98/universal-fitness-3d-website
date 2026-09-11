import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import FacilitiesSection from '../components/FacilitiesSection'
import WhyUniversalSection from '../components/WhyUniversalSection'
import ReviewsSection from '../components/ReviewsSection'
import ContactCTASection from '../components/ContactCTASection'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ['start end', 'end start'],
  })
  const statsParallax = useTransform(statsProgress, [0, 1], [60, -60])

  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  })
  const galleryY = useSpring(useTransform(galleryProgress, [0, 1], [80, -80]), {
    stiffness: 100,
    damping: 30,
  })

  const stats = [
    { number: '500+', label: 'Active Athletes' },
    { number: '8+', label: 'Sport Facilities' },
    { number: '24/7', label: 'Always Open' },
    { number: '4.9★', label: 'Member Rating' },
  ]

  const galleryImages = [
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&auto=format&fit=crop',
      title: 'Premium Strength Floor',
      subtitle: 'Free weights, rigs & sleds',
      w: 900,
      h: 900,
    },
    {
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&auto=format&fit=crop',
      title: 'Performance Cardio Lab',
      subtitle: 'Heart-rate synced treadmills',
      w: 900,
      h: 900,
    },
    {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&auto=format&fit=crop',
      title: 'Functional Training Zone',
      subtitle: 'CrossFit-style rig & kettlebells',
      w: 900,
      h: 900,
    },
    {
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80&auto=format&fit=crop',
      title: 'Cricket Box Turf',
      subtitle: 'Match-grade artificial surface',
      w: 900,
      h: 900,
    },
    {
      image: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=900&q=80&auto=format&fit=crop',
      title: 'Football Arena',
      subtitle: '5-a-side floodlit pitch',
      w: 900,
      h: 900,
    },
    {
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&q=80&auto=format&fit=crop',
      title: 'Recovery & Mobility Studio',
      subtitle: 'Foam rolling, stretching & yoga',
      w: 900,
      h: 900,
    },
  ]

  return (
    <main id="main-content">
      <HeroSection />

      {/* Stats Section — parallax numerics */}
      <section
        ref={statsRef}
        className="py-20 md:py-28 px-4 relative overflow-hidden"
        aria-label="Universal Fitness by the numbers"
      >
        <motion.div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ef4444]/8 rounded-full blur-3xl pointer-events-none"
          style={{ y: statsParallax }}
        />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            {...fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#00d9f0] tracking-[0.3em] uppercase text-xs md:text-sm mb-3 font-medium">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-6xl font-black font-display">
              Built for <span className="gradient-text">athletes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glassmorphism p-8 rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <p className="text-5xl md:text-6xl font-black gradient-text font-display mb-3 tabular-nums">
                  {stat.number}
                </p>
                <p className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FacilitiesSection />
      <WhyUniversalSection />

      {/* Gallery — parallax */}
      <section
        ref={galleryRef}
        className="py-24 md:py-32 px-4 relative overflow-hidden"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#00d9f0] tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-medium">
              The Space
            </p>
            <h2 id="gallery-heading" className="text-4xl md:text-7xl font-black font-display">
              Explore the <span className="gradient-text">Facility</span>
            </h2>
            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
              30,000 sq ft of athletic performance infrastructure — purpose-built for
              strength, sport, recovery and play.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ y: galleryY }}
          >
            {galleryImages.map((item, index) => (
              <motion.figure
                key={item.title}
                className="relative overflow-hidden rounded-3xl group cursor-pointer aspect-square"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.07, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.subtitle}`}
                  width={item.w}
                  height={item.h}
                  loading={index < 1 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-black font-display text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm italic-accent">{item.subtitle}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <ReviewsSection />
      <ContactCTASection />
    </main>
  )
}