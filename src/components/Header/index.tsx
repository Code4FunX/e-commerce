import Image from 'next/image'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { GoChevronDown } from 'react-icons/go'

export const Header = () => {
  return (
    <header className="flex w-full justify-center py-4">
      <div className="custom-container flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-x-2">
          <Image src="/brand.png" alt="logo" width={56} height={56} />
          <span className="text-3xl font-bold text-blue-500">Brand</span>
        </div>
        <div className="flex h-10 flex-1 px-24">
          <input
            className="w-full rounded-s-md border-2 border-blue-600"
            type="text"
          />
          <div className="flex h-auto items-center justify-center gap-x-3 border-y-2 border-e-2 border-blue-600 px-2">
            <span className="text-base">Categorias</span>
            <GoChevronDown className="text-xl text-gray-500" />
          </div>
          <button className="rounded-e-md bg-blue-600 px-4 text-white">
            Pesquisar
          </button>
        </div>
        <div className="flex items-center justify-center gap-x-5">
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
