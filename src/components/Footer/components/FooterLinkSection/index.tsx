import Link from 'next/link'
import { IFooterLinkSectionProps } from './types'

export const FooterLinkSection = ({
  title,
  links,
}: IFooterLinkSectionProps) => {
  return (
    <div>
      <h6 className="font-medium text-gray-700">{title}</h6>
      <ul className="mt-2 flex flex-col gap-y-1">
        {links.map((link) => (
          <li key={link.link} className="text-gray-500">
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
