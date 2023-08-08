import { HeaderIcon } from '@/components'
import { LoginForm } from '@/components/login-form'
import { FaPrayingHands, FaHeadphones } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { BiSolidDonateHeart } from 'react-icons/bi'
import Image from 'next/image'

import logomarca from '../../public/shalom.png'

export default function Home() {
  return (
    <div className="bg-zinc-100 flex flex-col dark:bg-zinc-950 text-blue-800 dark:text-blue-400 h-full min-h-screen divide-y-2 divide-gray-300">
      <div>
        <header className="flex w-full bg-black h-[50px] justify-center items-center px-2">
          <div className="flex items-center w-full max-w-[1110px] justify-center gap-8 sm:gap-0 sm:justify-between">
            <Image alt="logomarca" src={logomarca} height={45} />

            <div className="flex gap-2 sm:gap-8 items-center">
              <HeaderIcon
                label="Pedido de oração"
                icon={<FaPrayingHands />}
                href="https://comshalom.org/pedidodeoracao/"
              />
              <HeaderIcon
                label="Rádio"
                icon={<FaHeadphones />}
                href="https://redeshalomderadio.com/"
              />
              <HeaderIcon
                label="Ao vivo"
                icon={<BsYoutube />}
                href="https://www.youtube.com/comshalom/live"
              />
              <a
                href="https://benfeitordapaz.org/doe/"
                target="_blank"
                className="bg-teal-400 px-2 max-h-[24px] text-ellipsis overflow-hidden flex-nowrap rounded text-sm justify-center items-center flex text-white"
              >
                <span>
                  <BiSolidDonateHeart />
                </span>
                <span className="hidden sm:block truncate">
                  Ajude-nos a evangelizar
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>
      <main className="flex justify-center items-center pt-2 px-4 gap-2 flex-col flex-1">
        <LoginForm />
      </main>
    </div>
  )
}
