import ContactCTASection from '../components/ContactCTASection'
import LocationSection from '../components/LocationSection'

export default function ContactPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-[#0a0a0a] text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get in touch — we're here to help you on your fitness journey
        </p>
      </section>
      <ContactCTASection />
      <LocationSection />
    </main>
  )
}
