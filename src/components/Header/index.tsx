'use client'

import LogoWithName from '@/assets/logo-with-name.svg'
import Image from 'next/image'
import Link from 'next/link'
import { GoChevronDown } from 'react-icons/go'
import { MobileDrawer } from './components/MobileDrawer'
import { SubHeader } from './components/SubHeader'
import { menuItems } from './menuItems'
import { useHeaderController } from './useHeaderController'

export const Header = () => {
  const { ref } = useHeaderController()

  return (
    <>
      <header className="flex w-full justify-center border-b bg-white py-4 ">
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
          <button onClick={() => ref?.current?.open()}>open</button>
          <div className="hidden items-center justify-center gap-x-5 md:flex">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.name} href={menuItem.link}>
                <div className="flex flex-col items-center gap-y-0.5">
                  {menuItem.icon}
                  <span className="text-gray-500">{menuItem.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </header>
      <SubHeader />
      <MobileDrawer ref={ref} />
    </>
  )
}
