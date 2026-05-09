'use client'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/data'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl font-bold text-tan">
          CM<span className="text-cream">.</span>
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-cream/80 hover:text-tan transition-colors text-sm tracking-wide">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="hidden md:block btn-primary text-sm py-2 px-5">Trabajemos juntos</a>
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-navy border-t border-teal/20 px-6 py-4 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-cream/80 hover:text-tan transition-colors">{l.label}</a>
            ))}
            <a href="#cta" className="btn-primary text-center text-sm mt-2">Trabajemos juntos</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
