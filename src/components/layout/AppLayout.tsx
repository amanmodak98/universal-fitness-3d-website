import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FloatingButtons from '../FloatingButtons'

export default function AppLayout() {
  const location = useLocation()
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
