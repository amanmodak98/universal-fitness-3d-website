import { createContext, useContext, useState, type ReactNode } from 'react'

interface BookingContextType {
  isBookingOpen: boolean
  openBooking: () => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextType>({
  isBookingOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
})

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        openBooking: () => setIsBookingOpen(true),
        closeBooking: () => setIsBookingOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
