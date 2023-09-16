import Image from 'next/image'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { GoChevronDown } from 'react-icons/go'
import AleFlag from '@/assets/contry-flags/ale-flag.svg'

export const SubHeader = () => {
  return (
    <div className="hidden w-full justify-center border-b bg-white lg:flex">
      <div className="custom-container flex w-full items-center justify-between py-3">
        <div className="flex gap-x-6">
          <Link href="/">
            <div className="flex items-center justify-center gap-x-1">
              <BiMenu className="text-2xl text-black" />
              <span>All category</span>
            </div>
          </Link>
          <Link href="/">
            <span>Hot offers</span>
          </Link>
          <Link href="/">
            <span>Gift boxes</span>
          </Link>
          <Link href="/">
            <span>Projects</span>
          </Link>
          <Link href="/">
            <span>Menu item</span>
          </Link>
          <Link href="/">
            <div className="flex items-center justify-center gap-x-1">
              <span>Help</span>
              <GoChevronDown className="text-xl text-gray-500" />
            </div>
          </Link>
        </div>
        <div className="flex gap-x-6">
          <Link href="/">
            <div className="flex items-center justify-center gap-x-1">
              <span>English, USD</span>
              <GoChevronDown className="text-xl text-gray-500" />
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center justify-center gap-x-2">
              <div className="flex items-center justify-center gap-x-1.5">
                <span>Ship to</span>
                <Image src={AleFlag} alt="logo" width={22} />
              </div>
              <GoChevronDown className="text-xl text-gray-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
