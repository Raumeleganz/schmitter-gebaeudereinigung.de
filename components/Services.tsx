'use client'

import { motion } from 'framer-motion'
import { Building2, SprayCan, GlassWater, ArrowRight } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Unterhaltsreinigung',
      description: 'Regelmäßige Reinigung von Büros, Praxen und Treppenhäusern – planbar, zuverlässig, gründlich.',
      color: '#D4AF37',
    },
    {
      icon: SprayCan,
      title: 'Grund- & Sonderreinigung',
      description: 'Intensive Reinigung bei Bedarf: hartnäckige Verschmutzungen, Pflegefilme, Detailarbeiten.',
      color: '#8B7355',
    },
    {
      icon: GlassWater,
      title: 'Glasreinigung',
      description: 'Streifenfreie Fenster- und Glasflächen – inklusive Rahmen und Falzen, auf Wunsch terminiert.',
      color: '#9CAF88',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Unsere Premium-
            <span className="block bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Leistungen
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sauberkeit, die man sieht – Service, auf den man sich verlassen kann
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}CC 100%)`,
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href="/leistungen"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:text-amber-700 transition-colors"
                >
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Hover Border Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
