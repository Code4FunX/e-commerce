import Image from 'next/image'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { GoChevronDown } from 'react-icons/go'

export const Header = () => {
  return (
    <header className="flex justify-center w-full py-4">
      <div className="w-full xl:container flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-2">
          <Image src="/brand.png" alt="logo" width={56} height={56} />
          <span className="text-3xl text-blue-500 font-bold">Brand</span>
        </div>
        <div className="flex-1 flex px-24 h-10">
          <input
            className="border-2 border-blue-600 rounded-s-md w-full"
            type="text"
          />
          <div className="flex justify-center items-center h-auto gap-x-3 px-2 border-y-2 border-e-2 border-blue-600">
            <span className="text-base">Categorias</span>
            <GoChevronDown className="text-xl text-gray-500" />
          </div>
          <button className="px-4 bg-blue-600 text-white rounded-e-md">
            Pesquisar
          </button>
        </div>
        <div className="flex justify-center items-center gap-x-5">
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
