import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className, id }: Props) {
  return (
    <section id={id} className={clsx('py-24', className)}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}
