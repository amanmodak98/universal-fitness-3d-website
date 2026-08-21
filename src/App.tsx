import { Suspense, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import GymExperience3D from './components/GymExperience3D'
import FacilitiesSection from './components/FacilitiesSection'
import TurfBookingSection from './components/TurfBookingSection'
import FitnessJourneySection from './components/FitnessJourneySection'
import WhyUniversalSection from './components/WhyUniversalSection'
import ReviewsSection from './components/ReviewsSection'
import LocationSection from './components/LocationSection'
import ContactCTASection from './components/ContactCTASection'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import FloatingButtons from './components/FloatingButtons'
import Preloader from './components/Preloader'
import { useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
  }, [isLoading])

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      {isLoading && <Preloader />}
      <Suspense fallback={null}>
        <Navbar onBookTurf={() => setIsBookingOpen(true)} />
        <HeroSection onBookTurf={() => setIsBookingOpen(true)} />
        <AboutSection />
        <GymExperience3D />
        <FacilitiesSection />
        <TurfBookingSection onBook={() => setIsBookingOpen(true)} />
        <FitnessJourneySection />
        <WhyUniversalSection />
        <ReviewsSection />
        <LocationSection />
        <ContactCTASection onBookTurf={() => setIsBookingOpen(true)} />
        <Footer />
        <FloatingButtons />
        {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
      </Suspense>
    </div>
  )
}

export default App
