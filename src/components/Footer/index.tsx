import { personalInfo } from '@/data'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Contacto', href: '#cta' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy border-t border-teal/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="font-serif text-2xl font-bold text-tan">
          CM<span className="text-cream">.</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-cream/50 hover:text-tan text-sm transition-colors">{l.label}</a>
          ))}
        </nav>
        <p className="text-cream/30 text-sm">
          © {year} {personalInfo.shortName}
        </p>
      </div>
    </footer>
  )
}
