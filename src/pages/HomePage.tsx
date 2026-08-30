import HeroSection from '../components/HeroSection'
import FacilitiesSection from '../components/FacilitiesSection'
import WhyUniversalSection from '../components/WhyUniversalSection'
import ReviewsSection from '../components/ReviewsSection'
import ContactCTASection from '../components/ContactCTASection'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Active Members' },
              { number: '8+', label: 'Facilities' },
              { number: '24/7', label: 'Always Open' },
              { number: '4.9★', label: 'Rating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glassmorphism p-8 rounded-3xl hover:border-[#ff3d2e]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <p className="text-5xl md:text-6xl font-black gradient-text font-display mb-3">{stat.number}</p>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FacilitiesSection />
      <WhyUniversalSection />

      {/* Image Gallery Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00d9f0] tracking-[0.3em] text-sm mb-4 font-medium">OUR SPACE</p>
            <h2 className="text-5xl md:text-7xl font-black font-display">
              EXPLORE THE <span className="gradient-text">FACILITY</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', title: 'Premium Gym' },
              { image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80', title: 'Modern Equipment' },
              { image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80', title: 'Training Area' },
              { image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80', title: 'Turf Ground' },
              { image: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=600&q=80', title: 'Sports Zone' },
              { image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80', title: 'Cardio Section' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative overflow-hidden rounded-3xl group cursor-pointer aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black font-display text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ContactCTASection />
    </main>
  )
}
