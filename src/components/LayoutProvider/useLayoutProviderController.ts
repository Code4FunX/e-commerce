import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const useLayoutProviderController = () => {
  const [showNewsLetter, setShowNewsLetter] = useState(true)
  const currentPath = usePathname()

  const handleOnChangeCurrentPath = (path: string) => {
    if (path !== '/' && path !== '/products') {
      setShowNewsLetter(false)
      return
    }
    setShowNewsLetter(true)
  }

  useEffect(() => {
    handleOnChangeCurrentPath(currentPath)
  }, [currentPath])

  return { showNewsLetter }
}
