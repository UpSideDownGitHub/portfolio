import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
    bg-gradient-to-r from-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2">
      {children}
    </h1>
  )
}
