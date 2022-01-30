import NextLink from 'next/link'

interface LinkProp {
  title: string
  href: string
  current: boolean
}

export function Link({ title, href, current }: LinkProp) {
  return (
    <NextLink href={href}>
      <a className="px-2 min-w-[10.5rem] flex flex-col items-center justify-center">
        <div>
          <div
            className={`px-8 py-2 font-source text-lg text-center whitespace-nowrap ${
              current && 'bg-gold-gradient'
            } ${current ? 'text-gold' : 'text-white'}`}
          >
            {title}
          </div>
          <div
            className={`w-full h-[1.5px] rounded-xl -translate-y-1/2 ${
              current && 'bg-gold'
            }`}
          />
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
