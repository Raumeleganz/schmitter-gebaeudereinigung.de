'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-center px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-amber-500/30"
        >
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-semibold text-white">
            Zuverlässige Reinigung mit System
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-white">Sauberkeit</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            die überzeugt
          </span>
          <span className="block mt-2 text-white">jeden Tag</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Professionelle Gebäudereinigung für Unternehmen und Privat – zuverlässig, gründlich, diskret.
          <span className="block mt-2 font-semibold text-white">
            Klare Abläufe. Feste Ansprechpartner. Saubere Ergebnisse.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Angebot anfordern
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-lg"
          >
            Leistungen ansehen
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 mx-auto mb-2" />
          <span className="text-sm">Entdecken Sie unsere Leistungen</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
