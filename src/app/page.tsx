import { ToggleThemeButton } from '@/components'
import { ToggleLanguageButton } from '@/components/toggle-language'
import Image from 'next/image'
import { FaPrayingHands, FaHeadphones } from 'react-icons/fa'
import { ImPlay, ImSearch } from 'react-icons/im'
import {
  BsFacebook,
  BsSpotify,
  BsTwitter,
  BsInstagram,
  BsYoutube,
} from 'react-icons/bs'

import logomarca from '../../public/shalom.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 text-blue-800 dark:text-blue-400 h-full min-h-screen divide-y-2 divide-gray-300">
      <header className="flex min-w-full items-center flex-col pb-1">
        <section className="flex bg-black h-11 w-full justify-center items-center">
          <div className="flex w-full max-w-[1200px]  justify-between items-center">
            <div className="flex">
              <button className="text-white flex items-center gap-1">
                Pedido de oração
                <FaPrayingHands />
              </button>
            </div>

            <div className="flex justify-between gap-8">
              <button className="text-white flex items-center gap-1">
                Rádio
                <FaHeadphones />
              </button>

              <button className="text-white flex items-center gap-1">
                Ao vivo
                <ImPlay />
              </button>

              <button className="bg-blue-600 text-white px-2">
                Ajude-nos a evangelizar
              </button>

              <button className="text-white flex items-center gap-1">
                <ImSearch />
              </button>

              <ToggleLanguageButton />
            </div>
          </div>
        </section>
        <div className="flex relative w-full h-[120px] justify-center items-end max-w-[1200px]">
          <Link href="https://comshalom.org" target="_blank">
            <Image src={logomarca} alt="logomarca" height={100} />
          </Link>
          <div className="absolute flex right-0 gap-4">
            <a
              href="https://www.facebook.com/comshalom"
              target="_blank"
              className="text-gray-400 text-2xl hover:text-blue-600"
            >
              <BsFacebook />
            </a>

            <a
              href="https://open.spotify.com/intl-pt/artist/0t9f7kAQ1wKeHeLC25ZYin"
              target="_blank"
              className="text-gray-400 text-2xl hover:text-green-600"
            >
              <BsSpotify />
            </a>

            <a
              href="https://twitter.com/comshalom"
              target="_blank"
              className="text-gray-400 text-2xl hover:text-blue-400"
            >
              <BsTwitter />
            </a>

            <a
              href="https://www.instagram.com/comshalom/"
              target="_blank"
              className="text-gray-400 text-2xl hover:text-pink-600"
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.youtube.com/comshalom"
              target="_blank"
              className="text-gray-400 text-2xl hover:text-red-600"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center gap-2 flex-col flex-1">
        <ToggleThemeButton />
      </main>
    </div>
  )
}
