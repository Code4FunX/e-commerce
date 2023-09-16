import { forwardRef } from 'react'
import { useMobileDrawerController } from './useMobileDrawerController'
import { MdFavorite, MdHome, MdMenu } from 'react-icons/md'
import { BsBox2 } from 'react-icons/bs'

export const MobileDrawer = forwardRef(function MobileDrawer(_, ref) {
  const { isOpen, onCloseHandler } = useMobileDrawerController(ref)

  return isOpen ? (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full">
      <div className="h-full w-4/5 overflow-y-auto bg-white pb-8">
        <header className="flex flex-col gap-y-2 bg-gray-100 px-4 py-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
            Avatar
          </div>
          <div className="flex items-center gap-x-1">
            <button>Login</button>
            <span>|</span>
            <button>Register</button>
          </div>
        </header>
        <main className="mt-8 flex flex-col gap-y-6 px-6">
          <ul className="flex flex-col gap-y-6 border-b pb-6">
            <li className="flex items-center gap-x-4">
              <MdHome className="text-2xl text-gray-500" />
              <span className="text-gray-500">Home</span>
            </li>
            <li className="flex items-center gap-x-4">
              <MdMenu className="text-2xl text-gray-500" />
              <span className="text-gray-500">Categories</span>
            </li>
            <li className="flex items-center gap-x-4">
              <MdFavorite className="text-2xl text-gray-500" />
              <span className="text-gray-500">Favorites</span>
            </li>
            <li className="flex items-center gap-x-4">
              <BsBox2 className="text-2xl text-gray-500" />
              <span className="text-gray-500">My orders</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-6 border-b pb-6">
            <li className="flex items-center gap-x-4">
              <MdHome className="text-2xl text-gray-500" />
              <span className="text-gray-500">English | USD</span>
            </li>
            <li className="flex items-center gap-x-4">
              <MdMenu className="text-2xl text-gray-500" />
              <span className="text-gray-500">Contact us</span>
            </li>
            <li className="flex items-center gap-x-4">
              <MdFavorite className="text-2xl text-gray-500" />
              <span className="text-gray-500">About</span>
            </li>
          </ul>
          <div className="flex justify-center">
            <ul className="flex flex-col gap-y-4">
              <li className="flex items-center gap-x-4">
                <span>User agreement</span>
              </li>
              <li className="flex items-center gap-x-4">
                <span>Partnership</span>
              </li>
              <li className="flex items-center gap-x-4">
                <span>Privacy policy</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <button
        className="flex-1 bg-gray-600 bg-opacity-80"
        onClick={onCloseHandler}
      />
    </div>
  ) : null
})
