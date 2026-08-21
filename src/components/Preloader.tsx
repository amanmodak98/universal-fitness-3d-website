import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-[#FFD700] rounded-full"></div>
          <div className="absolute inset-4 border-4 border-transparent border-b-[#FFA500] rounded-full" style={{ animation: 'spin 1.5s linear infinite reverse' }}></div>
          <div className="absolute inset-8 border-4 border-transparent border-t-[#FFD700] rounded-full" style={{ animation: 'spin 1s linear infinite' }}></div>
        </motion.div>
        
        <motion.h1
          className="text-3xl md:text-4xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          UNIVERSAL FITNESS
        </motion.h1>
        <motion.p
          className="text-sm text-gray-400 mt-2 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          & SPORT ARENA
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Preloader
