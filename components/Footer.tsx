'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Sparkles } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Über Uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-amber-500">
            <Sparkles className="w-8 h-8" />
            <span style={{ fontFamily: 'Playfair Display, serif' }}>Gebäudereinigung</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Professionelle Gebäudereinigung – zuverlässig, gründlich und flexibel für NRW und Umgebung.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Kontakt
          </h3>
          <div className="space-y-4 text-gray-400 text-base">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>Musterstraße 123, 40213 Düsseldorf</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <a href="tel:+4920189083050" className="hover:text-amber-500 transition-colors duration-300">
                0201-89083050
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <a href="mailto:info@gebaeudereinigung.de" className="hover:text-amber-500 transition-colors duration-300">
                info@gebaeudereinigung.de
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Folgen Sie Uns
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gebäudereinigung. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}
