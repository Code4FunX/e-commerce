import { FooterLinkSection } from './components/FooterLinkSection'
import Image from 'next/image'
import { aboutLinks, forUsersLinks, informationLinks } from './constants'
import LogoWithName from '@/assets/logo-with-name.svg'
import GooglePlayIcon from '@/assets/icons/google-play-icon.svg'
import AppleStoreIcon from '@/assets/icons/app-store-icon.svg'
import { socialMedias } from './socialMedias'
import { NewsLetter } from './components/NewsLetter'
import { IFooterProps } from './types'
import USFlag from '@/assets/contry-flags/us-flag.svg'
import { RiArrowDropUpLine } from 'react-icons/ri'
import Link from 'next/link'

export const Footer = ({ showNewsLetter = true }: IFooterProps) => {
  return (
    <footer>
      {showNewsLetter ? <NewsLetter /> : null}
      <div className="bg-white">
        <div className="custom-container grid gap-y-6 py-12 lg:grid-cols-7 lg:gap-x-10">
          <div className="flex flex-col gap-y-4 lg:col-span-2">
            <Image src={LogoWithName} alt="logo" width={150} height={56} />
            <p className="text-gray-600">
              Best information about the company goes here but now lorem ipsum
              is
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {socialMedias.map((socialMedia) => (
                <li key={socialMedia.component.key}>
                  <Link
                    href=""
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BDC4CD]"
                  >
                    {socialMedia.component}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <FooterLinkSection title="About" links={aboutLinks} />
          <FooterLinkSection title="Partnership" links={aboutLinks} />
          <FooterLinkSection title="Information" links={informationLinks} />
          <FooterLinkSection title="For users" links={forUsersLinks} />
          <div>
            <h6 className="mb-3  font-medium text-gray-700">Get app</h6>
            <Image src={AppleStoreIcon} alt="logo" width={150} height={56} />
            <Image
              src={GooglePlayIcon}
              alt="logo"
              className="mt-2"
              width={150}
              height={56}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EFF2F4] py-6">
        <div className="custom-container flex items-center justify-between">
          <span className="text-gray-800">© 2023 Ecommerce.</span>
          <div className="flex items-center gap-x-2">
            <Image src={USFlag} alt="logo" width={24} height={17} />
            <div className="flex items-center">
              <span className="text-gray-700">English</span>
              <RiArrowDropUpLine className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
