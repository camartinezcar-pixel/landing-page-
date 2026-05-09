'use client'
import { motion } from 'framer-motion'
import { testimonials } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={staggerContainer}>
          <motion.p variants={fadeUp} className="section-subtitle text-center">Clientes</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-center mb-16">
            Lo que dicen <span className="text-tan">de mí</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-teal/10 border border-teal/20 rounded-xl p-8 relative"
              >
                <Quote size={32} className="text-tan/20 absolute top-6 right-6" />
                <p className="text-cream/70 leading-relaxed mb-8 text-sm italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tan/20 flex items-center justify-center">
                    <span className="text-tan font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold text-sm">{t.name}</p>
                    <p className="text-cream/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
