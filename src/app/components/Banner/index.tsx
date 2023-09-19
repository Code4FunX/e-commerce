import Image from 'next/image'
import BannerHome from '@/assets/banner.svg'
import { Card } from '../Card'
import { CardUser } from '../CardUser'

export const Banner = () => {
  const options: Array<{ title: string }> = [
    {
      title: 'Automobiles',
    },
    {
      title: 'Clothes and wear',
    },
    {
      title: 'Home interiors',
    },
    {
      title: 'Computer and tech',
    },
    {
      title: 'Tools, equipments',
    },
    {
      title: 'Sports and outdoor',
    },
    {
      title: 'Animal and pets',
    },
    {
      title: 'Machinery tools',
    },
    {
      title: 'More category',
    },
  ]

  return (
    <div className="mb-5 mt-5 grid flex-1 grid-cols-5 gap-x-2 rounded-md bg-white  p-3 shadow-sm">
      <div className="mr-3 flex  flex-col">
        {options.map((option, key) => (
          <span
            className="hover:bg-secondary cursor-pointer py-2 ps-2 text-lg hover:rounded-md"
            key={key}
          >
            {option.title}
          </span>
        ))}
      </div>
      <div className="relative col-span-3">
        <div className="absolute left-8 top-14 z-10 flex flex-col items-start gap-y-3.5">
          <div className="flex flex-col">
            <span className="text-3xl">Latest trending</span>
            <span className="text-4xl font-bold">Electronic items</span>
          </div>
          <button className="rounded-md bg-white px-4 py-2 shadow-sm">
            Learn more
          </button>
        </div>
        <Image fill objectFit="cover" src={BannerHome} alt="Banner" />
      </div>
      <div className="flex flex-col gap-y-2 pl-3 ">
        <CardUser username="Carlos" />
        <Card
          title="Get US $10 off with a new supplier"
          style="bg-orange-500 rounded-md py-6 px-2 bg-orange"
          text_style="text-lg text-white w-4"
        />
        <Card
          title="Send quotes with supplier preferences"
          style="bg-cyan-300 rounded-md py-6 px-2 bg-cyan"
          text_style="text-lg text-white w-4"
        />
      </div>
    </div>
  )
}
