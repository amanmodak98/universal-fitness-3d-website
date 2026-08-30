import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    name: 'Member Review',
    text: 'Excellent gym with top-notch equipment. The 24/7 access is a game changer for my schedule. Highly recommend Universal Fitness for anyone serious about their training.',
    rating: 5,
  },
  {
    name: 'Customer Review',
    text: 'The turf is well-maintained and perfect for cricket and football. Great atmosphere and friendly staff. Best sports facility in Raipur.',
    rating: 5,
  },
  {
    name: 'Member Review',
    text: 'Love the variety — gym, turf, gaming, snooker, cafeteria all in one place. Perfect for spending quality time while staying active.',
    rating: 5,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          className="text-[#ff3d2e] text-lg"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="reviews" ref={sectionRef} className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff3d2e]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[#ff3d2e] tracking-[0.3em] text-sm mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display" >
            WHAT OUR <span className="gradient-text">MEMBERS SAY</span>
          </h2>
          
          {/* Rating summary */}
          <motion.div
            className="mt-8 inline-flex items-center space-x-4 glassmorphism rounded-full px-8 py-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="text-4xl md:text-5xl font-black gradient-text font-display" >4.9</span>
            <div className="text-left">
              <div className="flex space-x-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[#ff3d2e]">★</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Based on 67 reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#ff3d2e]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-300 mt-4 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">UF</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">Verified Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          Reviews are placeholder demos until official reviews are provided.
        </motion.p>
      </div>
    </section>
  )
}

export default ReviewsSection
