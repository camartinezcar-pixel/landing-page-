'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function CTA() {
  const [ref, controls] = useScrollReveal()

  return (
    <section id="cta" className="py-24 bg-teal/10 border-y border-teal/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={staggerContainer}>
          <motion.p variants={fadeUp} className="section-subtitle">¿Listo para empezar?</motion.p>
          <motion.h2 variants={fadeUp} className="section-title mb-6">
            Trabajemos <span className="text-tan">juntos</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/60 leading-relaxed mb-10">
            Si tienes un proyecto en mente o quieres explorar cómo puedo ayudarte a alcanzar tus objetivos, me encantaría escucharte.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary flex items-center justify-center gap-2">
              <Mail size={16} /> Enviar un mensaje
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center gap-6">
            {[
              { href: personalInfo.social.linkedin, Icon: Linkedin },
              { href: personalInfo.social.instagram, Icon: Instagram },
              { href: personalInfo.social.twitter, Icon: Twitter },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center text-cream/50 hover:border-tan hover:text-tan transition-all">
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
