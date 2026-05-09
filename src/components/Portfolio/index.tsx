'use client'
import { motion } from 'framer-motion'
import { portfolio } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { ArrowUpRight } from 'lucide-react'

const categoryColors: Record<string, string> = {
  'Estrategia Digital': 'bg-teal/20 text-teal',
  'Consultoría': 'bg-olive/20 text-olive',
  'Liderazgo': 'bg-crimson/20 text-red-300',
  'Innovación': 'bg-tan/20 text-tan',
}

export default function Portfolio() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="portfolio" className="py-24 bg-charcoal/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={staggerContainer}>
          <motion.p variants={fadeUp} className="section-subtitle text-center">Mi trabajo</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-center mb-16">
            Proyectos <span className="text-tan">destacados</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group relative bg-navy border border-teal/20 rounded-xl p-8 hover:border-tan/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-tan to-olive opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[p.category] || 'bg-teal/20 text-teal'}`}>
                    {p.category}
                  </span>
                  <ArrowUpRight size={18} className="text-cream/30 group-hover:text-tan transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">{p.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tan" />
                  <span className="text-tan font-semibold text-sm">{p.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
