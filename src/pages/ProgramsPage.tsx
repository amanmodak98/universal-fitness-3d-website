import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { useBooking } from '../context/BookingContext'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

type BillingCycle = 'monthly' | 'quarterly' | 'annual'

export default function ProgramsPage() {
  const { openBooking } = useBooking()
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  const heroRef = useRef<HTMLDivElement | null>(null)
  const scheduleRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(heroProgress, [0, 1], ['0%', '25%'])

  const { scrollYProgress: scheduleProgress } = useScroll({
    target: scheduleRef,
    offset: ['start end', 'end start'],
  })
  const scheduleParallaxY = useSpring(
    useTransform(scheduleProgress, [0, 1], [60, -60]),
    { stiffness: 100, damping: 30 }
  )

  const classes = [
    {
      title: 'Strength Lab',
      category: 'Strength',
      description:
        'Periodized barbell training built on the conjugate method — squat, bench, deadlift and accessories programmed in 8-week blocks.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80&auto=format&fit=crop',
      features: ['NSCA Programming', '1RM Tracking', 'Conjugate Method', 'Powerlifting Rules'],
      color: 'from-[#ef4444]',
    },
    {
      title: 'HIIT Inferno',
      category: 'Conditioning',
      description:
        '45-minute metabolic fire — row, ski-erg, assault bike and sled work designed to spike heart rate and torch calories.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80&auto=format&fit=crop',
      features: ['Tabata Intervals', 'EMOM Finishers', 'HR Zones 4-5', 'Sled & Prowler'],
      color: 'from-[#00d9f0]',
    },
    {
      title: 'Functional CrossFit',
      category: 'CrossFit',
      description:
        'Constantly varied, high-intensity functional movements — gymnastics, Olympic lifts and endurance work programmed daily.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80&auto=format&fit=crop',
      features: ['WOD Daily', 'Skill Work', 'Open Gym', 'Scaling for All Levels'],
      color: 'from-[#f59e0b]',
    },
    {
      title: 'Cricket Academy',
      category: 'Sport Specific',
      description:
        'Box-cricket skills, throw-down drills and game-sense scenarios with video analysis and match simulation on turf.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80&auto=format&fit=crop',
      features: ['Batting Drills', 'Bowl Analysis', 'Match Sim', 'Video Review'],
      color: 'from-[#ef4444]',
    },
    {
      title: 'Yoga & Recovery',
      category: 'Recovery',
      description:
        'Vinyasa flow, hatha fundamentals and guided breathwork to balance training load and accelerate recovery.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop',
      features: ['Vinyasa Flow', 'Hatha Basics', 'Breathwork', 'Foam Rolling'],
      color: 'from-[#00d9f0]',
    },
    {
      title: 'Boxing Skills',
      category: 'Combat',
      description:
        'Boxing fundamentals — stance, footwork, defense and combinations — with bag rounds, mitt work and light sparring.',
      image: 'https://images.unsplash.com/photo-1549824506-83f0a2c0a05e?w=800&q=80&auto=format&fit=crop',
      features: ['Footwork', 'Heavy Bag', 'Mitt Work', 'Light Sparring'],
      color: 'from-[#f59e0b]',
    },
  ]

  type Plan = {
    name: string
    monthly: number
    quarterly: number
    annual: number
    badge?: string
    description: string
    features: string[]
    highlight: 'red' | 'cyan' | 'neutral'
    popular?: boolean
  }

  const plans: Plan[] = [
    {
      name: 'Starter',
      monthly: 2999,
      quarterly: 2599,
      annual: 2199,
      description: 'Essential access for the disciplined self-starter.',
      features: [
        'Gym access 6am – 10pm',
        'All strength & cardio equipment',
        'Locker room & hot showers',
        'Free WiFi & app access',
        '1 guest pass / month',
      ],
      highlight: 'neutral',
    },
    {
      name: 'Premium',
      monthly: 4999,
      quarterly: 4499,
      annual: 3999,
      badge: 'Most Popular',
      description: 'Round-the-clock training with classes and recovery.',
      features: [
        '24/7 unlimited facility access',
        'All equipment + turf + courts',
        'Unlimited group classes',
        'Personal locker & towel service',
        '4 guest passes / month',
        'Quarterly nutrition consult',
      ],
      highlight: 'red',
      popular: true,
    },
    {
      name: 'Elite',
      monthly: 7999,
      quarterly: 7299,
      annual: 6499,
      description: 'Coached, programmed and held accountable.',
      features: [
        '24/7 VIP facility access',
        '8 personal training sessions / month',
        'Unlimited classes + open gym',
        'Dedicated locker & gear storage',
        'Unlimited guest passes',
        'Custom nutrition + meal plans',
        'Priority turf & court booking',
        'Universal Fitness merchandise kit',
      ],
      highlight: 'cyan',
    },
  ]

  const schedule = [
    { day: 'Monday',    time: '6:00 AM',  class: 'Morning HIIT',           trainer: 'Arjun',     level: 'Intermediate' },
    { day: 'Monday',    time: '7:00 PM',  class: 'Strength Lab',           trainer: 'Rajesh',    level: 'All Levels' },
    { day: 'Tuesday',   time: '6:30 AM',  class: 'Yoga Flow',              trainer: 'Aisha',     level: 'Beginner' },
    { day: 'Tuesday',   time: '7:30 PM',  class: 'Boxing Skills',          trainer: 'Vikram',    level: 'Intermediate' },
    { day: 'Wednesday', time: '6:00 AM',  class: 'Cricket Skills',         trainer: 'Vikram',    level: 'All Levels' },
    { day: 'Wednesday', time: '6:00 PM',  class: 'CrossFit WOD',           trainer: 'Arjun',     level: 'Intermediate' },
    { day: 'Thursday',  time: '6:30 AM',  class: 'Pilates Core',           trainer: 'Neha',      level: 'Beginner' },
    { day: 'Thursday',  time: '7:30 PM',  class: 'Strength Lab',           trainer: 'Rajesh',    level: 'Advanced' },
    { day: 'Friday',    time: '7:00 AM',  class: 'Spin & Burn',            trainer: 'Priya',     level: 'All Levels' },
    { day: 'Friday',    time: '7:30 PM',  class: 'Boxing Conditioning',    trainer: 'Vikram',    level: 'Intermediate' },
    { day: 'Saturday',  time: '8:00 AM',  class: 'Weekend Warrior HIIT',   trainer: 'Arjun',     level: 'All Levels' },
    { day: 'Saturday',  time: '10:00 AM', class: 'Open Gym + Skills',      trainer: 'All Staff', level: 'All Levels' },
  ]

  const billingLabel: Record<BillingCycle, string> = {
    monthly: '/ month',
    quarterly: '/ month (billed quarterly)',
    annual: '/ month (billed annually)',
  }

  const highlightClasses: Record<Plan['highlight'], string> = {
    red: 'border-[#ef4444] hover:border-[#ef4444]/60',
    cyan: 'border-[#00d9f0] hover:border-[#00d9f0]/60',
    neutral: 'border-white/10 hover:border-white/30',
  }

  const getPrice = (plan: Plan): number => {
    if (billing === 'monthly') return plan.monthly
    if (billing === 'quarterly') return plan.quarterly
    return plan.annual
  }

  const formatRupees = (value: number): string =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

  return (
    <main id="main-content" className="bg-gradient-mesh">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[75vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="programs-hero-heading"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{ y: heroBgY }}
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
            alt="Athletes working through a high-intensity class inside Universal Fitness"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#050508]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            className="text-[#00d9f0] tracking-[0.3em] uppercase text-sm mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Classes & Pricing
          </motion.p>
          <motion.h1
            id="programs-hero-heading"
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Train smart. <span className="gradient-text">Pay less.</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto italic-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            30+ group classes every week, sport-specific academies, and flexible membership
            plans built around the way you actually train.
          </motion.p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-24 md:py-32 px-4" aria-labelledby="classes-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#ef4444] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Class Library
            </p>
            <h2 id="classes-heading" className="text-4xl md:text-7xl font-black font-display">
              Choose your <span className="gradient-text">training</span>
            </h2>
            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
              Six signature class styles — each programmed by certified coaches and scaled
              for beginners through competitive athletes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((program, index) => (
              <motion.article
                key={program.title}
                className="glassmorphism rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={`${program.title} class in session at Universal Fitness`}
                    width={800}
                    height={560}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t ${program.color}/85 to-transparent opacity-70`}
                  />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white">
                    {program.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black font-display mb-3">{program.title}</h3>
                  <p className="text-gray-400 mb-5 leading-relaxed text-sm">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-[#ef4444] rounded-full mr-3 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership / Pricing */}
      <section
        className="py-24 md:py-32 px-4 bg-gradient-to-b from-transparent to-[#0d0d15]"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-[#00d9f0] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Membership Plans
            </p>
            <h2 id="pricing-heading" className="text-4xl md:text-7xl font-black font-display">
              Choose your <span className="gradient-text">plan</span>
            </h2>
            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
              Transparent pricing, no hidden fees. Lock in your rate with a longer commitment
              and save up to 30%.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <div
            role="radiogroup"
            aria-label="Select billing cycle"
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 mx-auto w-fit glassmorphism rounded-full p-2"
          >
            {(['monthly', 'quarterly', 'annual'] as BillingCycle[]).map((cycle) => {
              const active = billing === cycle
              const label =
                cycle === 'monthly' ? 'Monthly' : cycle === 'quarterly' ? 'Quarterly' : 'Annual'
              const tag =
                cycle === 'quarterly' ? 'Save 10%' : cycle === 'annual' ? 'Save 30%' : ''
              return (
                <motion.button
                  key={cycle}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setBilling(cycle)}
                  className={`relative px-5 md:px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white glow-fire'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {label}
                  {tag && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider font-bold text-[#00d9f0]">
                      {tag}
                    </span>
                  )}
                </motion.button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                className={`glassmorphism p-9 rounded-3xl transition-all duration-300 border-2 ${highlightClasses[plan.highlight]} ${
                  plan.popular ? 'relative scale-[1.03] md:scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                whileHover={{ y: -8, scale: plan.popular ? 1.07 : 1.04 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white text-xs uppercase tracking-widest font-bold px-5 py-1.5 rounded-full glow-fire">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-3xl font-black font-display mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-7 leading-relaxed">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-black gradient-text font-display tabular-nums">
                    {formatRupees(getPrice(plan))}
                  </span>
                  <p className="text-gray-400 text-sm mt-1">{billingLabel[billing]}</p>
                </div>

                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300 text-sm">
                      <span className="text-[#00d9f0] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => openBooking()}
                  className={`w-full py-4 rounded-full font-bold text-base transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white hover:shadow-2xl hover:shadow-[#ef4444]/30'
                      : 'border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  aria-label={`Join ${plan.name} plan`}
                >
                  Join {plan.name}
                </motion.button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section
        ref={scheduleRef}
        className="py-24 md:py-32 px-4"
        aria-labelledby="schedule-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-[#f59e0b] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Weekly Schedule
            </p>
            <h2 id="schedule-heading" className="text-4xl md:text-7xl font-black font-display">
              Class <span className="gradient-text">timetable</span>
            </h2>
            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
              Reserve your spot up to 7 days in advance through the Universal Fitness app.
              Walk-ins welcome subject to capacity.
            </p>
          </motion.div>

          <motion.div
            className="glassmorphism rounded-3xl p-6 md:p-10"
            style={{ y: scheduleParallaxY }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {schedule.map((item, index) => (
                <motion.div
                  key={`${item.day}-${item.time}-${index}`}
                  className="border border-white/10 rounded-2xl p-5 hover:border-[#ef4444]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#00d9f0] font-bold text-sm uppercase tracking-wider">
                      {item.day}
                    </p>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-2xl font-black font-display mb-2 tabular-nums">{item.time}</p>
                  <p className="text-base text-gray-200 mb-1">{item.class}</p>
                  <p className="text-xs text-gray-500 italic-accent">with {item.trainer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 px-4" aria-labelledby="programs-cta-heading">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="programs-cta-heading"
              className="text-5xl md:text-8xl font-black font-display mb-6 leading-none"
            >
              Ready to <span className="gradient-text">level up?</span>
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl mb-10">
              Your first week is on us. Walk in, try every class, meet the coaches.
            </p>
            <motion.button
              onClick={() => openBooking()}
              className="px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full text-lg md:text-xl hover:shadow-2xl hover:shadow-[#ef4444]/30 transition-all duration-300"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}