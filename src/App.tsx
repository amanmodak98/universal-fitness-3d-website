import { Suspense, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ContactPage from './pages/ContactPage'
import BookingModal from './components/BookingModal'
import Preloader from './components/Preloader'
import { BookingProvider, useBooking } from './context/BookingContext'

gsap.registerPlugin(ScrollTrigger)

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

// Inner component that can consume the BookingContext
function AppInner() {
  const { isBookingOpen, closeBooking } = useBooking()
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
    <>
      {isLoading && <Preloader />}
      <Suspense fallback={null}>
        <RouterProvider router={router} />
        {isBookingOpen && <BookingModal onClose={closeBooking} />}
      </Suspense>
    </>
  )
}

function App() {
  return (
    <BookingProvider>
      <AppInner />
    </BookingProvider>
  )
}

export default App
