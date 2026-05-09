'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer, slideInLeft } from '@/animations/variants'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function About() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-charcoal/20">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Visual side */}
        <motion.div variants={slideInLeft} className="relative w-full max-w-sm mx-auto">
          <div 
            style={{ height: '520px' }}
            className="w-full rounded-3xl overflow-hidden relative shadow-2xl group"
          >
            <Image 
              src="/images/carlos-traje.jpg" 
              alt={personalInfo.name}
              fill
              className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-crimson rounded-xl p-6 shadow-xl">
            <p className="font-serif text-3xl font-bold text-cream">8+</p>
            <p className="text-cream/70 text-xs">Años de<br/>experiencia</p>
          </div>
        </motion.div>

        {/* Text side */}
        <div>
          <motion.p variants={fadeUp} className="section-subtitle">En Guardia Business</motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Estrategia con propósito,<br/>
            <span className="text-tan">resultados reales</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/70 leading-relaxed mb-8">
            {personalInfo.bio}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-cream/60 text-sm">
              <MapPin size={16} className="text-tan" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-3 text-cream/60 text-sm">
              <Mail size={16} className="text-tan" />
              {personalInfo.email}
            </div>
            <div className="flex items-center gap-3 text-cream/60 text-sm">
              <Phone size={16} className="text-tan" />
              {personalInfo.phone}
            </div>
          </motion.div>
          <motion.a variants={fadeUp} href="#cta" className="btn-primary inline-block">
            Hablemos
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
