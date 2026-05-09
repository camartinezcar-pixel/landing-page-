'use client'
import { motion } from 'framer-motion'
import { services } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = { Target, TrendingUp, Users, Lightbulb }

export default function Services() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="services" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={staggerContainer}>
          <motion.p variants={fadeUp} className="section-subtitle text-center">Lo que hago</motion.p>
          <motion.h2 variants={fadeUp} className="section-title text-center mb-16">
            Servicios <span className="text-tan">especializados</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="group bg-teal/10 border border-teal/20 rounded-xl p-6 hover:border-tan/40 hover:bg-teal/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-tan/10 flex items-center justify-center mb-5 group-hover:bg-tan/20 transition-colors">
                    {Icon && <Icon size={22} className="text-tan" />}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-3">{s.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{s.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
