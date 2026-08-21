import { useOutletContext } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import GymExperience3D from '../components/GymExperience3D'
import FacilitiesSection from '../components/FacilitiesSection'
import WhyUniversalSection from '../components/WhyUniversalSection'
import ReviewsSection from '../components/ReviewsSection'

interface OutletContext {
  onBookTurf: () => void
}

export default function HomePage() {
  const { onBookTurf } = useOutletContext<OutletContext>()
  return (
    <main>
      <HeroSection onBookTurf={onBookTurf} />
      <GymExperience3D />
      <FacilitiesSection />
      <WhyUniversalSection />
      <ReviewsSection />
    </main>
  )
}
