import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'

export const menuItems = [
  {
    name: 'Profile',
    icon: <FaUser className="text-xl text-gray-500" />,
    link: '/',
  },
  {
    name: 'Message',
    icon: <MdMessage className="text-xl text-gray-500" />,
    link: '/',
  },
  {
    name: 'Orders',
    icon: <FaHeart className="text-xl text-gray-500" />,
    link: '/',
  },
  {
    name: 'My cart',
    icon: <FaShoppingCart className="text-xl text-gray-500" />,
    link: '/',
  },
]
