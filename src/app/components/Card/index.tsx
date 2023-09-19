import { HTMLAttributes } from 'react'

interface ICard {
  title: string
  style: string
  text_style: string
}

export const Card = ({ title, style, text_style }: ICard) => {
  return (
    <div className={style}>
      {title && <span className={text_style}>{title}</span>}
    </div>
  )
}
