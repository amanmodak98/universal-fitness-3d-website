const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Turf', href: '#turf' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = ['Gym', 'Turf', 'Sports', 'Gaming', 'Snooker', 'Cafeteria']

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff3d2e] to-[#e62414] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg font-display" >UF</span>
              </div>
              <div>
                <h3 className="text-white font-bold font-display" >UNIVERSAL FITNESS</h3>
                <p className="text-[#ff3d2e] text-xs tracking-wider">& SPORT ARENA TURF</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              {services.join(' • ')}
            </p>
            <p className="text-gray-600 text-xs mt-4">
              Raipur's premium destination for fitness, sports and entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display" >QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#ff3d2e] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display" >CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+916269673000" className="text-gray-400 hover:text-[#ff3d2e] transition-colors text-sm flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 62696 73000</span>
                </a>
              </li>
              <li>
                <a href="mailto:universalfitness321@gmail.com" className="text-gray-400 hover:text-[#ff3d2e] transition-colors text-sm flex items-center space-x-2">
                  <span>✉️</span>
                  <span>universalfitness321@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-start space-x-2">
                  <span>📍</span>
                  <span>Jarway Alias Hirapur, Raipur, Chhattisgarh</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white font-bold mb-4 font-display" >OPEN HOURS</h4>
            <p className="text-[#ff3d2e] font-bold text-lg mb-2">24/7</p>
            <p className="text-gray-400 text-sm mb-6">Always open. 7 days a week.</p>
            
            <h4 className="text-white font-bold mb-3 font-display" >FOLLOW US</h4>
            <div className="flex space-x-3">
              {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:border-[#ff3d2e]/30 border border-white/10 cursor-pointer transition-all duration-300 hover:scale-110"
                  title={social}
                >
                  <span className="text-xs text-gray-400">{social[0]}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-3">Social links coming soon</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} Universal Fitness & Sport Arena Turf. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">Designed &amp; Developed by <a href="https://www.infirexa.tech" target="_blank" rel="noopener noreferrer">Infirexa</a></p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">
            Demo website for client presentation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
