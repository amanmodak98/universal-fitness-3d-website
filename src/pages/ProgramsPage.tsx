import { motion } from 'framer-motion'
import { useBooking } from '../context/BookingContext'

export default function ProgramsPage() {
  const { openBooking } = useBooking()

  const programs = [
    {
      title: 'STRENGTH TRAINING',
      description: 'Build muscle, increase power, and transform your physique with our comprehensive strength programs.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
      features: ['Personal Training', 'Group Classes', 'Custom Plans', 'Progress Tracking'],
      color: 'from-[#ff3d2e]',
    },
    {
      title: 'CARDIO & ENDURANCE',
      description: 'Boost stamina, burn fat, and improve cardiovascular health with high-intensity cardio workouts.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
      features: ['HIIT Classes', 'Running Programs', 'Cycling', 'Rowing'],
      color: 'from-[#00d9f0]',
    },
    {
      title: 'FUNCTIONAL FITNESS',
      description: 'Enhance everyday movement, flexibility, and mobility with functional training techniques.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      features: ['CrossFit Style', 'Mobility Work', 'Core Training', 'Balance'],
      color: 'from-[#b0f000]',
    },
    {
      title: 'SPORTS TRAINING',
      description: 'Sport-specific training for cricket, football, and other athletes looking to gain an edge.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      features: ['Agility Training', 'Speed Work', 'Sport Conditioning', 'Team Programs'],
      color: 'from-[#ff3d2e]',
    },
    {
      title: 'YOGA & RECOVERY',
      description: 'Balance intensity with recovery through yoga, stretching, and mindfulness practices.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      features: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Foam Rolling'],
      color: 'from-[#00d9f0]',
    },
    {
      title: 'NUTRITION COACHING',
      description: 'Personalized nutrition plans to fuel your workouts and achieve your body composition goals.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
      features: ['Meal Planning', 'Macro Tracking', 'Supplements', 'Lifestyle Coaching'],
      color: 'from-[#b0f000]',
    },
  ]

  const membershipPlans = [
    {
      name: 'STARTER',
      price: '₹2,999',
      period: '/month',
      features: [
        'Gym Access (6am-10pm)',
        'Basic Equipment',
        'Locker Access',
        'Free WiFi',
        '1 Guest Pass/Month',
      ],
      color: 'border-white/10',
      popular: false,
    },
    {
      name: 'PREMIUM',
      price: '₹4,999',
      period: '/month',
      features: [
        '24/7 Gym Access',
        'All Equipment & Facilities',
        'Group Classes Included',
        'Personal Locker',
        '4 Guest Passes/Month',
        'Nutrition Consultation',
      ],
      color: 'border-[#ff3d2e]',
      popular: true,
    },
    {
      name: 'ELITE',
      price: '₹7,999',
      period: '/month',
      features: [
        '24/7 Premium Access',
        'Personal Training Sessions',
        'Unlimited Classes',
        'Dedicated Locker',
        'Unlimited Guest Passes',
        'Nutrition & Meal Plans',
        'Priority Booking',
        'Free Merchandise',
      ],
      color: 'border-[#00d9f0]',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Fitness programs and training"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050508]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            className="text-[#00d9f0] tracking-[0.3em] text-sm mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            PROGRAMS & TRAINING
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            TRANSFORM YOUR <span className="gradient-text">BODY</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            World-class training programs designed for every fitness level and goal.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4 font-medium">TRAINING PROGRAMS</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              CHOOSE YOUR <span className="gradient-text">PATH</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                className="glassmorphism rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color}/80 to-transparent opacity-60`} />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black font-display mb-4">{program.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-[#ff3d2e] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-[#0d0d15]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00d9f0] tracking-[0.3em] text-sm mb-4 font-medium">MEMBERSHIP</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              CHOOSE YOUR <span className="gradient-text">PLAN</span>
            </h2>
            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Flexible membership options to fit your lifestyle and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`glassmorphism p-10 rounded-3xl hover:border-[#ff3d2e]/30 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-[#ff3d2e] scale-105' : 'border ' + plan.color
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: plan.popular ? 1.08 : 1.05 }}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-3xl font-black font-display mb-2">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-6xl font-black gradient-text font-display">{plan.price}</span>
                  <span className="text-gray-400 text-xl">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300">
                      <span className="text-[#00d9f0] mr-3 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => openBooking()}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-white hover:shadow-xl hover:shadow-[#ff3d2e]/30'
                      : 'border-2 border-[#ff3d2e] text-[#ff3d2e] hover:bg-[#ff3d2e] hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN NOW
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Preview */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#b0f000] tracking-[0.3em] text-sm mb-4 font-medium">SCHEDULE</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              WEEKLY <span className="gradient-text">CLASSES</span>
            </h2>
          </motion.div>

          <div className="glassmorphism rounded-3xl p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { day: 'MONDAY', time: '6:00 AM', class: 'Morning HIIT', trainer: 'Rajesh' },
                { day: 'MONDAY', time: '7:00 PM', class: 'Strength Training', trainer: 'Vikram' },
                { day: 'WEDNESDAY', time: '6:30 AM', class: 'Yoga Flow', trainer: 'Priya' },
                { day: 'WEDNESDAY', time: '6:00 PM', class: 'CrossFit', trainer: 'Rajesh' },
                { day: 'FRIDAY', time: '7:00 AM', class: 'Spin Class', trainer: 'Priya' },
                { day: 'FRIDAY', time: '7:30 PM', class: 'Boxing Workout', trainer: 'Vikram' },
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 hover:border-[#ff3d2e]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-[#00d9f0] font-bold mb-2">{schedule.day}</p>
                  <p className="text-3xl font-black font-display mb-3">{schedule.time}</p>
                  <p className="text-xl text-gray-300 mb-2">{schedule.class}</p>
                  <p className="text-sm text-gray-500">with {schedule.trainer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black font-display mb-8 leading-none">
              READY TO <span className="gradient-text">LEVEL UP?</span>
            </h2>
            <p className="text-gray-300 text-2xl mb-16">
              Start your transformation journey today.
            </p>
            <motion.button
              onClick={() => openBooking()}
              className="px-16 py-6 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-white font-bold rounded-full text-xl hover:shadow-xl hover:shadow-[#ff3d2e]/30 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              START FREE TRIAL
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
