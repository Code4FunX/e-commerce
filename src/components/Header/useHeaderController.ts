import { useRef } from 'react'

export const useHeaderController = () => {
  const ref = useRef<any>(null)

  return { ref }
}
