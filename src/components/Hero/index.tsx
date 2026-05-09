'use client'
import { motion } from 'framer-motion'
import { personalInfo, stats } from '@/data'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-crimson/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 w-px h-32 bg-tan/20" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="section-subtitle">
          Estrategia y Resultados con Propósito
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
          En Guardia <span className="text-tan">Business</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-teal text-lg md:text-xl font-medium mb-4 tracking-wide">
          Por <span className="text-tan/80 italic">{personalInfo.name}</span>
        </motion.p>
        <motion.p variants={fadeUp} className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {personalInfo.tagline}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="btn-primary">Ver servicios</a>
          <a href="#about" className="btn-outline">Conocer más</a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-tan">{s.value}</p>
              <p className="text-cream/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/30 hover:text-tan transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
