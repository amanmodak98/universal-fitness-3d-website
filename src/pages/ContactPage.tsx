import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Contact Universal Fitness"
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
            GET IN TOUCH
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            LET'S <span className="gradient-text">CONNECT</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We're here to help you start your fitness journey. Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                SEND US A <span className="gradient-text">MESSAGE</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block font-medium">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block font-medium">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select a subject</option>
                    <option value="membership" className="bg-gray-900">Membership Inquiry</option>
                    <option value="personal-training" className="bg-gray-900">Personal Training</option>
                    <option value="turf-booking" className="bg-gray-900">Turf Booking</option>
                    <option value="facilities" className="bg-gray-900">Facilities Question</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#ff3d2e]/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? '✓ MESSAGE SENT!' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-black font-display mb-8">
                  CONTACT <span className="gradient-text">INFO</span>
                </h3>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <motion.div
                  className="glassmorphism p-8 rounded-2xl hover:border-[#ff3d2e]/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2">LOCATION</h4>
                      <p className="text-gray-400 leading-relaxed">
                        Guru Gobind Singh Marg, Nandvan Road<br />
                        Jarway Alias Hirapur<br />
                        Raipur, Chhattisgarh – 492099
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glassmorphism p-8 rounded-2xl hover:border-[#00d9f0]/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00d9f0] to-[#00bcd4] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2">PHONE</h4>
                      <a href="tel:+916269673000" className="text-gray-400 hover:text-[#00d9f0] transition-colors text-lg">
                        +91 62696 73000
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glassmorphism p-8 rounded-2xl hover:border-[#b0f000]/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#b0f000] to-[#9dd300] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2">EMAIL</h4>
                      <a href="mailto:universalfitness321@gmail.com" className="text-gray-400 hover:text-[#b0f000] transition-colors">
                        universalfitness321@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glassmorphism p-8 rounded-2xl hover:border-[#ff3d2e]/30 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🕐</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2">HOURS</h4>
                      <p className="text-[#ff3d2e] font-bold text-2xl mb-2">24/7</p>
                      <p className="text-gray-400">Open 24 hours, 7 days a week</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="glassmorphism p-8 rounded-2xl">
                <h4 className="text-xl font-bold font-display mb-6">FOLLOW US</h4>
                <div className="flex space-x-4">
                  {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((social) => (
                    <motion.div
                      key={social}
                      className="w-14 h-14 glassmorphism rounded-full flex items-center justify-center hover:border-[#ff3d2e]/30 cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm text-gray-400">{social[0]}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4">Coming soon...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5537!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzcnNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="tel:+916269673000"
              className="glassmorphism p-10 rounded-3xl text-center hover:border-[#ff3d2e]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-2xl font-black font-display mb-3">CALL US</h3>
              <p className="text-gray-400">Speak with our team</p>
            </motion.a>

            <motion.a
              href="https://wa.me/916269673000"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism p-10 rounded-3xl text-center hover:border-[#00d9f0]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="text-2xl font-black font-display mb-3">WHATSAPP</h3>
              <p className="text-gray-400">Chat instantly</p>
            </motion.a>

            <motion.a
              href="mailto:universalfitness321@gmail.com"
              className="glassmorphism p-10 rounded-3xl text-center hover:border-[#b0f000]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">✉️</div>
              <h3 className="text-2xl font-black font-display mb-3">EMAIL</h3>
              <p className="text-gray-400">Send us a message</p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
