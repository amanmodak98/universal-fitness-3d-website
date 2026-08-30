import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingModalProps {
  onClose: () => void
}

const BookingModal = ({ onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    time: '',
    sport: '',
    players: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo submission - no backend
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg glassmorphism rounded-2xl border border-white/20 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="text-white text-lg">×</span>
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <p className="text-[#ff3d2e] text-sm tracking-wider mb-2">TURF BOOKING</p>
                <h3 className="text-2xl md:text-3xl font-black text-white font-display" >
                  BOOK YOUR SLOT
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Fill in the details below and our team will confirm your booking.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-1 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-1 block">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-1 block">Time *</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">Sport *</label>
                  <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select a sport</option>
                    <option value="cricket" className="bg-gray-900">Cricket</option>
                    <option value="football" className="bg-gray-900">Football</option>
                    <option value="volleyball" className="bg-gray-900">Volleyball</option>
                    <option value="pickleball" className="bg-gray-900">Pickleball</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">Number of Players</label>
                  <input
                    type="number"
                    name="players"
                    value={formData.players}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff3d2e]/50 focus:outline-none transition-colors"
                    placeholder="Approx. number of players"
                  />
                </div>

                {/* Pricing info */}
                <div className="glassmorphism rounded-xl p-4 border border-[#ff3d2e]/10">
                  <p className="text-sm text-gray-400">
                    <span className="text-[#ff3d2e] font-medium">Pricing:</span> Mon–Fri: ₹800/hr | Sat–Sun: ₹1000/hr
                  </p>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full text-lg hover:shadow-xl hover:shadow-[#ff3d2e]/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  REQUEST BOOKING
                </motion.button>

                <p className="text-gray-500 text-xs text-center">
                  This is a demo booking form. Our team will contact you to confirm.
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <span className="text-4xl">✓</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display" >
                BOOKING REQUEST RECEIVED
              </h3>
              <p className="text-gray-300 mb-6">
                Thank you! Our team will contact you shortly to confirm your booking.
              </p>
              <motion.button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#ff3d2e] to-[#e62414] text-black font-bold rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CLOSE
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BookingModal
