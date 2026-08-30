import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const facilities = [
  {
    number: '01',
    title: 'GYM',
    desc: 'Train with premium equipment and a powerful atmosphere.',
    icon: '🏋️',
    gradient: 'from-[#ff3d2e]/20 to-[#e62414]/10',
  },
  {
    number: '02',
    title: 'CRICKET TURF',
    desc: 'Book your turf and bring your team together.',
    icon: '🏏',
    gradient: 'from-green-500/20 to-green-800/10',
  },
  {
    number: '03',
    title: 'FOOTBALL',
    desc: 'Play, compete and enjoy the game.',
    icon: '⚽',
    gradient: 'from-green-500/20 to-emerald-800/10',
  },
  {
    number: '04',
    title: 'VOLLEYBALL',
    desc: 'High-energy sports experience.',
    icon: '🏐',
    gradient: 'from-blue-500/20 to-blue-800/10',
  },
  {
    number: '05',
    title: 'PICKLEBALL',
    desc: 'Fast, fun and competitive.',
    icon: '🏓',
    gradient: 'from-purple-500/20 to-purple-800/10',
  },
  {
    number: '06',
    title: 'GAMING ZONE',
    desc: 'Relax and compete beyond the gym.',
    icon: '🎮',
    gradient: 'from-red-500/20 to-red-800/10',
  },
  {
    number: '07',
    title: 'SNOOKER',
    desc: 'Challenge your friends.',
    icon: '🎱',
    gradient: 'from-green-600/20 to-green-900/10',
  },
  {
    number: '08',
    title: 'CAFETERIA',
    desc: 'Refresh and recharge.',
    icon: '☕',
    gradient: 'from-amber-500/20 to-amber-800/10',
  },
]

const FacilityCard = ({ facility, index }: { facility: typeof facilities[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#ff3d2e]/30 hover:shadow-xl hover:shadow-[#ff3d2e]/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{ transition: 'transform 0.2s ease-out, border-color 0.3s, box-shadow 0.3s' }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative p-6 md:p-8 h-full">
        {/* Number */}
        <span className="text-5xl md:text-6xl font-black text-white/5 absolute top-4 right-6 group-hover:text-[#ff3d2e]/10 transition-colors duration-500 font-display" >
          {facility.number}
        </span>
        
        {/* Icon */}
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {facility.icon}
        </motion.div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff3d2e] transition-colors duration-300 font-display" >
          {facility.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 mt-2 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {facility.desc}
        </p>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

const FacilitiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="facilities" ref={sectionRef} className="py-20 md:py-32 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3d2e]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display" >
            WORLD-CLASS <span className="gradient-text">FACILITIES</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Everything you need for fitness, sports and entertainment under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.number} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
