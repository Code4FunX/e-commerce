'use client'

import { BreadCrumbs } from '../BreadCrumbs'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { useLayoutProviderController } from './useLayoutProviderController'

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { showNewsLetter } = useLayoutProviderController()

  return (
    <>
      <Header />
      <div className="custom-container my-5 hidden md:block">
        <BreadCrumbs />
      </div>
      {children}
      <Footer showNewsLetter={showNewsLetter} />
    </>
  )
}
