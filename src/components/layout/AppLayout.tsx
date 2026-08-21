import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FloatingButtons from '../FloatingButtons'

interface AppLayoutProps {
  onBookTurf: () => void
}

export default function AppLayout({ onBookTurf }: AppLayoutProps) {
  const location = useLocation()
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar onBookTurf={onBookTurf} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet context={{ onBookTurf }} />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
