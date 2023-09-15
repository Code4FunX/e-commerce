'use client'

import { IHelloWorldProps } from './types'
import { useHelloWorldController } from './useHelloWorldController'

export const HelloWorld = ({ message }: IHelloWorldProps) => {
  const { handleClick } = useHelloWorldController(message)

  return <button onClick={handleClick}>Hello world</button>
}
