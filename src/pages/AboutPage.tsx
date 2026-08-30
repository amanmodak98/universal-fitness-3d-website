import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&fit=crop"
            alt="Modern premium gym interior"
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
            ABOUT US
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            REDEFINING <span className="gradient-text">FITNESS</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Raipur's premier destination for athletic excellence, cutting-edge facilities, and transformative training.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Universal Fitness facility exterior"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-3xl opacity-20 blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4 font-medium">OUR STORY</p>
              <h2 className="text-5xl md:text-6xl font-black font-display mb-8 leading-tight">
                WHERE <span className="gradient-text">CHAMPIONS</span> ARE MADE
              </h2>
              <p className="text-gray-300 text-xl mb-6 leading-relaxed">
                Founded with a vision to revolutionize fitness in Raipur, Universal Fitness & Sport Arena
                combines world-class equipment, expert training, and cutting-edge facilities.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We're not just a gym – we're a complete sports and entertainment ecosystem. From high-intensity
                training to competitive sports and recreational gaming, we've built where every athlete can thrive.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-5xl font-black gradient-text font-display mb-2">24/7</p>
                  <p className="text-gray-400 text-sm">Always Open</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-black gradient-text font-display mb-2">8+</p>
                  <p className="text-gray-400 text-sm">Facilities</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-black gradient-text font-display mb-2">500+</p>
                  <p className="text-gray-400 text-sm">Members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-[#ff3d2e]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00d9f0] tracking-[0.3em] text-sm mb-4 font-medium">OUR PURPOSE</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              MISSION & <span className="gradient-text">VISION</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glassmorphism p-12 rounded-3xl hover:border-[#ff3d2e]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-2xl flex items-center justify-center mb-8">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-4xl font-black font-display mb-6">OUR MISSION</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower individuals to achieve their fitness and athletic goals through world-class facilities,
                expert guidance, and a supportive community that inspires excellence in health and wellness.
              </p>
            </motion.div>

            <motion.div
              className="glassmorphism p-12 rounded-3xl hover:border-[#00d9f0]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00d9f0] to-[#00bcd4] rounded-2xl flex items-center justify-center mb-8">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-4xl font-black font-display mb-6">OUR VISION</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become India's most innovative fitness destination, setting new standards in athletic training,
                sports facilities, and holistic wellness while building a thriving community of champions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#b0f000] tracking-[0.3em] text-sm mb-4 font-medium">WHAT WE STAND FOR</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              OUR <span className="gradient-text">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💪', title: 'EXCELLENCE', desc: 'We demand the best and provide the best to our members.', color: 'from-[#ff3d2e]' },
              { icon: '🤝', title: 'COMMUNITY', desc: 'We build a supportive environment where everyone succeeds.', color: 'from-[#00d9f0]' },
              { icon: '⚡', title: 'INNOVATION', desc: 'We evolve with cutting-edge equipment and training.', color: 'from-[#b0f000]' },
              { icon: '🏆', title: 'INTEGRITY', desc: 'We operate with honesty and unwavering commitment.', color: 'from-[#ff3d2e]' },
              { icon: '❤️', title: 'PASSION', desc: 'We love fitness and it shows in everything we do.', color: 'from-[#00d9f0]' },
              { icon: '🌟', title: 'EMPOWERMENT', desc: 'We inspire confidence and unlock your potential.', color: 'from-[#b0f000]' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="glassmorphism p-8 rounded-3xl text-center hover:border-[#ff3d2e]/30 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-black font-display mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Images */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-[#0d0d15]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4 font-medium">MEET THE TEAM</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              EXPERT <span className="gradient-text">TRAINERS</span>
            </h2>
            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Our certified trainers bring years of experience and passion to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: 'Rajesh Kumar', role: 'Head Coach & Strength Specialist', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80' },
              { name: 'Priya Sharma', role: 'Fitness & Nutrition Expert', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80' },
              { name: 'Vikram Singh', role: 'Sports Performance Coach', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
            ].map((trainer, index) => (
              <motion.div
                key={trainer.name}
                className="glassmorphism rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent opacity-60" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-3xl font-black font-display mb-3">{trainer.name}</h3>
                  <p className="text-[#00d9f0] text-lg font-medium">{trainer.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black font-display mb-8 leading-none">
              START YOUR <span className="gradient-text">JOURNEY</span>
            </h2>
            <p className="text-gray-300 text-2xl mb-16 leading-relaxed">
              Join hundreds of athletes transforming their lives at Universal Fitness.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-16 py-6 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-white font-bold rounded-full text-xl hover:shadow-xl hover:shadow-[#ff3d2e]/30 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED TODAY
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
