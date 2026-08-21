import AboutSection from '../components/AboutSection'
import FitnessJourneySection from '../components/FitnessJourneySection'
import LocationSection from '../components/LocationSection'

export default function AboutPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-[#0a0a0a] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">About Universal Fitness</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our story, mission, and the journey behind Universal Fitness
        </p>
      </section>
      <AboutSection />
      <FitnessJourneySection />
      <LocationSection />
    </main>
  )
}
