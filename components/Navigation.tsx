'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-amber-600">
          <Sparkles className="w-7 h-7 text-amber-600" />
          <span style={{ fontFamily: 'Playfair Display, serif' }}>Gebäudereinigung</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'Leistungen', href: '/leistungen' },
            { name: 'Galerie', href: '/galerie' },
            { name: 'Über Uns', href: '/ueber-uns' },
            { name: 'Kontakt', href: '/kontakt' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-700 text-lg hover:text-amber-600 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 bg-amber-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Angebot anfordern
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 pt-20"
          >
            {[
              { name: 'Home', href: '/' },
              { name: 'Leistungen', href: '/leistungen' },
              { name: 'Galerie', href: '/galerie' },
              { name: 'Über Uns', href: '/ueber-uns' },
              { name: 'Kontakt', href: '/kontakt' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-800 text-3xl font-bold hover:text-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-lg shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Angebot anfordern
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
