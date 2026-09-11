import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(heroProgress, [0, 1], ['0%', '30%'])

  const { scrollYProgress: teamProgress } = useScroll({
    target: teamRef,
    offset: ['start end', 'end start'],
  })
  const teamParallaxY = useSpring(useTransform(teamProgress, [0, 1], [80, -80]), {
    stiffness: 100,
    damping: 30,
  })

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      desc: 'Olympic-grade standards in equipment, coaching and programming — built for athletes who refuse to settle.',
      color: 'from-[#ef4444]/30',
    },
    {
      icon: '🤝',
      title: 'Community',
      desc: 'A tribe of athletes, weekend warriors and first-timers who lift each other up every single rep.',
      color: 'from-[#00d9f0]/30',
    },
    {
      icon: '⚡',
      title: 'Innovation',
      desc: 'Performance tracking, recovery tech and smart programming that evolves with the science of training.',
      color: 'from-[#f59e0b]/30',
    },
    {
      icon: '🛡️',
      title: 'Integrity',
      desc: 'No gimmicks, no shortcuts. Just honest coaching and a facility that does what it says on the wall.',
      color: 'from-[#ef4444]/30',
    },
    {
      icon: '❤️',
      title: 'Passion',
      desc: 'Every coach here lives and breathes sport. That energy is contagious — and it shows in every session.',
      color: 'from-[#00d9f0]/30',
    },
    {
      icon: '🚀',
      title: 'Empowerment',
      desc: 'We don\'t build athletes. We unlock the champion that was already in you, waiting to be unleashed.',
      color: 'from-[#f59e0b]/30',
    },
  ]

  const trainers = [
    {
      name: 'Rajesh Kumar',
      role: 'Head Strength Coach',
      speciality: 'Powerlifting • Olympic Lifting',
      bio: 'NSCA-CSCS certified with 12+ years coaching state-level athletes and competitive powerlifters across India.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80&auto=format&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'Performance Nutritionist',
      speciality: 'Body Composition • Sport Nutrition',
      bio: 'ISAK-certified nutritionist who has guided 200+ transformations and built fueling protocols for endurance athletes.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80&auto=format&fit=crop',
    },
    {
      name: 'Vikram Singh',
      role: 'Sport Performance Coach',
      speciality: 'Cricket • Football • Speed',
      bio: 'Former Ranji Trophy physio with a master\'s in Sports Science. Specialist in agility, plyometrics and return-to-play.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop',
    },
    {
      name: 'Aisha Verma',
      role: 'Yoga & Mobility Lead',
      speciality: 'Vinyasa • Recovery • Breathwork',
      bio: 'E-RYT 500 instructor blending modern mobility science with classical yoga to keep athletes moving pain-free.',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80&auto=format&fit=crop',
    },
    {
      name: 'Arjun Mehta',
      role: 'HIIT & Conditioning Coach',
      speciality: 'MetCon • Fat Loss • Endurance',
      bio: 'CrossFit L3 trainer who has programmed for national-level boxers and marathon runners.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&auto=format&fit=crop',
    },
    {
      name: 'Neha Reddy',
      role: 'Pilates & Core Specialist',
      speciality: 'Reformer Pilates • Pre/Postnatal',
      bio: 'BASI-trained Pilates instructor focused on building resilient cores and bulletproof posture.',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop',
    },
  ]

  return (
    <main id="main-content" className="bg-gradient-mesh">
      {/* Hero with parallax background */}
      <section
        ref={heroRef}
        className="relative h-[75vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{ y: heroBgY }}
        >
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80&auto=format&fit=crop"
            alt="Aerial view of athletes training inside the Universal Fitness strength floor"
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
            Our Story & Team
          </motion.p>
          <motion.h1
            id="about-hero-heading"
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Redefining <span className="gradient-text">Fitness</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto italic-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Raipur's premier destination for athletic excellence — where world-class
            equipment meets uncompromising coaching and a community that trains like champions.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-4" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&auto=format&fit=crop"
                alt="Trainers guiding athletes through a strength session on the gym floor"
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-3xl opacity-25 blur-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#ef4444] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
                Our Story
              </p>
              <h2 id="story-heading" className="text-4xl md:text-6xl font-black font-display mb-6 leading-tight">
                Where <span className="gradient-text">Champions</span> Are Made
              </h2>
              <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                Founded in 2019 by competitive athletes and certified coaches, Universal Fitness
                & Sport Arena was built to solve a simple problem: Raipur deserved a world-class
                facility that took both training and recovery as seriously as competition itself.
              </p>
              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Five years and 500+ members later, we operate a complete sport and performance
                ecosystem — strength floor, cricket box, football arena, recovery studio,
                gaming lounge and cafeteria — under a single roof, open 24/7 for the relentless.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center glassmorphism p-5 rounded-2xl">
                  <p className="text-4xl md:text-5xl font-black gradient-text font-display mb-1 tabular-nums">2019</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Founded</p>
                </div>
                <div className="text-center glassmorphism p-5 rounded-2xl">
                  <p className="text-4xl md:text-5xl font-black gradient-text font-display mb-1 tabular-nums">30K</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Sq Ft Arena</p>
                </div>
                <div className="text-center glassmorphism p-5 rounded-2xl">
                  <p className="text-4xl md:text-5xl font-black gradient-text font-display mb-1 tabular-nums">4.9★</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Rated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 px-4 relative" aria-labelledby="mission-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#ef4444]/5 rounded-full blur-3xl"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            {...fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#00d9f0] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Our Purpose
            </p>
            <h2 id="mission-heading" className="text-4xl md:text-7xl font-black font-display">
              Mission & <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.article
              className="glassmorphism p-10 md:p-12 rounded-3xl hover:border-[#ef4444]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-2xl flex items-center justify-center mb-8 glow-fire">
                <span className="text-4xl" aria-hidden="true">🎯</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black font-display mb-5">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower every athlete — from first-day beginner to seasoned competitor —
                to unlock peak performance through world-class facilities, evidence-led coaching
                and a community that refuses to accept average.
              </p>
            </motion.article>

            <motion.article
              className="glassmorphism p-10 md:p-12 rounded-3xl hover:border-[#00d9f0]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.15, duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00d9f0] to-[#0891b2] rounded-2xl flex items-center justify-center mb-8 glow-electric">
                <span className="text-4xl" aria-hidden="true">🚀</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black font-display mb-5">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become India's most innovative fitness destination — setting the national
                benchmark for athletic training, sport facility design and holistic recovery,
                while building a thriving community of champions who inspire the next generation.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-4" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#f59e0b] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              What We Stand For
            </p>
            <h2 id="values-heading" className="text-4xl md:text-7xl font-black font-display">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                className="glassmorphism p-8 rounded-3xl text-center hover:border-[#ef4444]/30 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div
                  className={`text-6xl mb-6 inline-flex group-hover:scale-110 transition-transform bg-gradient-to-br ${value.color} to-transparent rounded-2xl p-4`}
                  aria-hidden="true"
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black font-display mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers with parallax */}
      <section
        ref={teamRef}
        className="py-24 md:py-32 px-4 bg-gradient-to-b from-transparent to-[#0d0d15]"
        aria-labelledby="trainers-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[#ef4444] tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Meet the Team
            </p>
            <h2 id="trainers-heading" className="text-4xl md:text-7xl font-black font-display">
              Expert <span className="gradient-text">Coaches</span>
            </h2>
            <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
              15+ nationally certified coaches across strength, sport science, nutrition and
              recovery — each obsessed with helping you perform at your personal best.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ y: teamParallaxY }}
          >
            {trainers.map((trainer, index) => (
              <motion.article
                key={trainer.name}
                className="glassmorphism rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={trainer.image}
                    alt={`Portrait of ${trainer.name}, ${trainer.role} at Universal Fitness`}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/55 to-transparent opacity-70" />
                </div>
                <div className="p-7 text-center">
                  <h3 className="text-2xl font-black font-display mb-1">{trainer.name}</h3>
                  <p className="text-[#00d9f0] text-base font-semibold mb-2">{trainer.role}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                    {trainer.speciality}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{trainer.bio}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-4" aria-labelledby="about-cta-heading">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="about-cta-heading"
              className="text-5xl md:text-8xl font-black font-display mb-6 leading-none"
            >
              Start your <span className="gradient-text">journey</span>
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Book a free trial session, meet our coaches, and see the facility that has
              transformed 500+ athletes across Chhattisgarh.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-bold rounded-full text-lg md:text-xl hover:shadow-2xl hover:shadow-[#ef4444]/30 transition-all duration-300"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              Book Free Trial
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}