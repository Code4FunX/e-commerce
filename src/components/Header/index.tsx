import Image from 'next/image'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { GoChevronDown } from 'react-icons/go'
import LogoWithName from '@/assets/logo-with-name.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex w-full justify-center bg-white py-4">
      <div className="custom-container flex w-full items-center justify-between">
        <Link href="/">
          <Image src={LogoWithName} alt="logo" width={150} height={56} />
        </Link>
        <div className="hidden h-10 flex-1 px-24 md:flex">
          <input
            className="w-full rounded-s-md border-2 border-blue-600 px-3"
            type="text"
            placeholder="Search"
          />
          <div className="flex h-auto items-center justify-center gap-x-3 border-y-2 border-e-2 border-blue-600 px-2">
            <span className="text-base">Categorias</span>
            <GoChevronDown className="text-xl text-gray-500" />
          </div>
          <button className="rounded-e-md bg-blue-600 px-4 text-white">
            Pesquisar
          </button>
        </div>
        <div className="hidden items-center justify-center gap-x-5 md:flex">
          <div className="flex flex-col items-center gap-y-0.5">
            <FaUser className="text-xl text-gray-500" />
            <span className="text-gray-500">Perfil</span>
          </div>
          <div className="flex flex-col items-center gap-y-0.5">
            <MdMessage className="text-xl text-gray-500" />
            <span className="text-gray-500">Mensagem</span>
          </div>
          <div className="flex flex-col items-center gap-y-0.5">
            <FaHeart className="text-xl text-gray-500" />
            <span className="text-gray-500">Pedido</span>
          </div>
          <div className="flex flex-col items-center gap-y-0.5">
            <FaShoppingCart className="text-xl text-gray-500" />
            <span className="text-gray-500">Carrinho</span>
          </div>
        </div>
      </div>
    </header>
  )
}
