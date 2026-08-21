import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroScene from './scenes/HeroScene'

interface HeroSectionProps {
  onBookTurf: () => void
}

const HeroSection = ({ onBookTurf }: HeroSectionProps) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-[#FFD700] text-sm md:text-base tracking-[0.3em] mb-4 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Raipur's Premium Fitness Destination
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-6"
          style={{ fontFamily: 'Oswald, sans-serif' }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block text-white">TRAIN HARD.</span>
          <span className="block gradient-text">PLAY HARDER.</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-sm md:text-lg max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Universal Fitness & Sport Arena — Raipur's premium destination for fitness, sports and entertainment.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN THE GYM
          </motion.a>
          <motion.button
            onClick={onBookTurf}
            className="px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-full text-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK TURF
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
