import { ForwardedRef, useCallback, useImperativeHandle, useState } from 'react'

export const useMobileDrawerController = (ref: ForwardedRef<any>) => {
  const [isOpen, setIsOpen] = useState(false)

  const onCloseHandler = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }, [setIsOpen])

  useImperativeHandle(
    ref,
    () => ({
      open() {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
      },
      close: onCloseHandler,
    }),
    [setIsOpen, onCloseHandler]
  )

  return { isOpen, onCloseHandler }
}
