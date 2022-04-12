import NextLink from 'next/link'
import Line from '../../assets/header/line.png'
import Image from '../image'

interface LinkProp {
  title: string
  href: string
  current: boolean
}

export function Link({ title, href, current }: LinkProp) {
  return (
    <NextLink href={href}>
      <a className="px-2 min-w-[6rem] flex flex-col items-center justify-center">
        <div className="relative">
          <div
            className={`px-4 py-2 font-Glamode text-base text-center whitespace-nowrap 
             ${current ? 'text-gold' : 'text-white'} ${
              current && '-translate-y-1'
            }`}
          >
            {title}
          </div>
          <div
            className={`${
              !current && 'hidden'
            } absolute left-0 right-0 bottom-0 w-16  mx-auto translate-y-1 `}
          >
            <Image src={Line} alt="Line" />
          </div>
        </div>
      </a>
    </NextLink>
  )
}

interface ComingSoonLinkProp {
  title: string
}

export function ComingSoonLink({ title }: ComingSoonLinkProp) {
  return (
    <div className="mx-1 px-4 relative min-w-[11.5rem] flex justify-center">
      <div>
        <div
          className={`px-8 py-2 font-source text-lg text-disable min-w-[12rem]`}
        >
          {title}
        </div>
        <div
          className={`absolute bottom-0 translate-y-1/2 px-8 text-sm font-source text-gold-gradient`}
        >
          COMING SOON
        </div>
      </div>
    </div>
  )
}
