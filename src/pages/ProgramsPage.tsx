import FacilitiesSection from '../components/FacilitiesSection'
import TurfBookingSection from '../components/TurfBookingSection'
import { useBooking } from '../context/BookingContext'

export default function ProgramsPage() {
  const { openBooking } = useBooking()
  return (
    <main>
      <section className="pt-24 pb-12 bg-[#0a0a0a] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Programs & Classes</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our world-class facilities and book your spot today
        </p>
      </section>
      <FacilitiesSection />
      <TurfBookingSection onBook={openBooking} />
    </main>
  )
}
