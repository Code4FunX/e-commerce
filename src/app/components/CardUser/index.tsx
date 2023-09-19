import Avatar from '@/assets/Avatar.svg'
import Image from 'next/image'

interface ICardUserProps {
  username: string
}

export const CardUser = ({ username }: ICardUserProps) => {
  return (
    <div className="bg-secondary flex flex-col gap-y-4 rounded-md px-3 py-4">
      <div className="flex items-center gap-x-2">
        <Image src={Avatar} alt="avatar" />
        <span className="text-lg">
          Hi, {username} <br />
          lets get started
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-2 ">
        <button className="w-full gap-y-2 rounded-md bg-primary p-2 text-white shadow-sm">
          Join now
        </button>
        <button className="w-full rounded-md bg-white p-2 text-primary shadow-sm">
          Log in
        </button>
      </div>
    </div>
  )
}
