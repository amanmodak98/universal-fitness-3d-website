# Universal Fitness & Sport Arena - Premium 3D Website

A premium, modern, highly interactive 3D animated fitness website demo for **Universal Fitness & Sport Arena Turf** in Raipur, Chhattisgarh.

![Premium Fitness Website](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19.2.8-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.185.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3.3-blue)

## 🏋️ Business Information

**Universal Fitness & Sport Arena Turf**  
📍 Guru Gobind Singh Marg, Nandvan Road, Jarway Alias Hirapur, Raipur, Chhattisgarh – 492099  
📞 +91 62696 73000  
✉️ universalfitness321@gmail.com  
🕐 Open 24/7  

## ✨ Features

### 🎨 Design & Aesthetics
- **Dark luxury sports aesthetic** with black/charcoal backgrounds
- **Premium gold/yellow accents** throughout
- **Glassmorphism cards** with subtle transparency
- **High contrast typography** with Oswald and Inter fonts
- **Cinematic sections** with large visuals
- **Premium gradients** and soft shadows

### 🎮 3D Interactive Elements
- **Full-screen 3D hero section** with animated gym environment
- **Interactive 3D gym equipment** (dumbbells, barbells, weight plates, kettlebells)
- **Floating particles** and dust effects
- **Mouse-follow camera movement** for immersive experience
- **3D turf booking section** with stadium atmosphere
- **Smooth animations** and transitions

### 🚀 Animations & Interactions
- **GSAP-powered scroll animations**
- **Framer Motion micro-interactions**
- **Scroll-triggered reveals**
- **Parallax effects**
- **3D card tilt on hover**
- **Animated counters**
- **Magnetic buttons**
- **Text reveal animations**
- **Image zoom effects**

### 📱 Responsive Design
- **Fully responsive** across all devices
- **Mobile-optimized 3D** performance
- **Touch-friendly** interactions
- **Single-column layout** on mobile
- **Sticky navigation** with blur effect
- **Mobile hamburger menu**

## 🏗️ Technology Stack

### Frontend Framework
- **React 19.2.8** - UI library
- **TypeScript 7.0.2** - Type safety
- **Vite 8.2.1** - Build tool and dev server

### Styling
- **Tailwind CSS 4.3.3** - Utility-first CSS
- **Custom CSS** - Animations and special effects

### 3D & Animation
- **Three.js 0.185.1** - 3D graphics library
- **React Three Fiber 9.7.0** - React renderer for Three.js
- **React Three Drei 10.7.8** - Useful helpers for R3F
- **GSAP 3.15.0** - Professional animation library
- **Framer Motion 13.0.0** - Animation library for React

## 📄 Pages & Sections

### 1. Hero Section
- Full-screen 3D animated gym environment
- Cinematic headline: "TRAIN HARD. PLAY HARDER."
- Two CTA buttons: "JOIN THE GYM" and "BOOK TURF"
- Scroll indicator animation

### 2. About Section
- Split-screen layout with animated visual
- Business description
- Feature list with checkmarks
- Animated statistics counters (24/7, 4.9★, 67+ reviews, Multi-sports)

### 3. 3D Gym Experience
- Interactive 3D gym scene
- Equipment labels with descriptions
- Scroll-triggered animations
- Categories: Strength, Cardio, Functional Training, Weight Training

### 4. Facilities Section
- 8 facility cards in responsive grid
- 3D hover effects with card tilt
- Animated numbers
- Glassmorphism overlays
- Facilities: Gym, Cricket Turf, Football, Volleyball, Pickleball, Gaming Zone, Snooker, Cafeteria

### 5. Turf Booking Section
- Premium sports turf visual
- Pricing cards:
  - Weekdays (Mon-Fri): ₹800/hour
  - Weekends (Sat-Sun): ₹1000/hour
- Interactive booking modal with form
- Form fields: Name, Mobile, Date, Time, Sport, Players
- Success confirmation message

### 6. Fitness Journey Section
- Animated progression steps: START → TRAIN → IMPROVE → TRANSFORM
- Timeline visualization
- CTA button

### 7. Why Universal Fitness
- 6 feature cards
- Horizontal scroll on mobile
- Grid layout on desktop
- Hover animations

### 8. Reviews Section
- Rating summary: 4.9/5 stars
- 67 reviews count
- 3 review cards (demo placeholders)
- Star rating animations

### 9. Location Section
- Full address display
- Google Maps embed
- Action buttons: Get Directions, Call Now, WhatsApp
- Contact information

### 10. Contact CTA Section
- Large cinematic call-to-action
- "READY TO GET STRONGER?" headline
- Join Now and Book Turf buttons
- Contact details

### 11. Footer
- Business branding
- Quick links
- Contact information
- Open hours (24/7)
- Social media placeholders
- Copyright notice

## 🎯 Interactive Features

### Navigation
- **Transparent navbar** initially
- **Blurred/dark navbar** on scroll
- **Smooth scroll** to sections
- **Mobile hamburger menu** with animations
- **"BOOK TURF" CTA** button

### Floating Buttons
- **WhatsApp button** - Direct chat link
- **Call button** - Tap to call
- **Hover tooltips** on buttons

### Booking Modal
- **Glassmorphism design**
- **Form validation**
- **Success state** with confirmation message
- **Smooth animations**
- **Close on backdrop click**

### 3D Interactions
- **Mouse-follow camera** in hero section
- **3D card tilt** on facility cards
- **Floating particles** throughout
- **Equipment rotation** animations

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd universal-fitness-3d-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Development

```bash
# Run development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Build production version
npm run build
```

## 📱 Performance Optimization

- **Lazy loading** for 3D scenes
- **Optimized 3D geometries** for mobile
- **Compressed assets**
- **DPR limiting** for 3D rendering
- **Suspense fallbacks** for better UX
- **Efficient animations** using requestAnimationFrame

## 🎨 Design Tokens

### Colors
```css
Primary Gold: #FFD700
Secondary Orange: #FFA500
Dark Background: #0a0a0a
Charcoal: #1a1a1a
White: #ffffff
Gray Text: #a0a0a0
```

### Typography
```css
Headings: Oswald (400, 500, 600, 700)
Body: Inter (300, 400, 500, 600, 700, 800, 900)
```

### Spacing
```css
Section padding: 5rem (mobile), 8rem (desktop)
Max width: 1280px
Grid gaps: 1rem - 2rem
```

## 🔧 Configuration

### Vite Config
- Host: 0.0.0.0 (allows network access)
- Port: 5173
- Allowed hosts: All (for preview environments)

### TypeScript Config
- Strict mode enabled
- ES2020 target
- React JSX support
- Module resolution: bundler

### Tailwind Config
- Custom colors (primary gold, dark, charcoal)
- Custom animations (float, glow)
- Custom keyframes
- Extended theme

## 📝 Notes

- This is a **demo website** for client presentation
- Booking form is **frontend-only** (no backend integration)
- Reviews are **placeholder demos** until real reviews are provided
- Social media links are **placeholders** until official accounts are created
- Map embed uses **approximate coordinates** - update with exact location
- 3D scenes are **optimized for performance** but may be heavy on older devices

## 🎯 Future Enhancements

- Backend integration for booking system
- Payment gateway integration
- Real-time turf availability
- Member login/dashboard
- Trainer profiles
- Class schedule
- Progress tracking
- Social media integration
- Blog/news section
- Gallery/portfolio section

## 📄 License

This is a demo project created for Universal Fitness & Sport Arena Turf.

## 🤝 Support

For questions or support, contact:
- **Phone:** +91 62696 73000
- **Email:** universalfitness321@gmail.com

---

**Built with ❤️ for Universal Fitness & Sport Arena Turf, Raipur**

*Premium Fitness • Sports • Entertainment • 24/7*
