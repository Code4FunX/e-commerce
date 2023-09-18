import { IBreadCrumbsProps } from './types'

export const BreadCrumbs = ({ items = [] }: IBreadCrumbsProps) => (
  <ul className="text-gray-500">
    <span>{'Home > Clothing'}</span>
  </ul>
)
