import NextLink from "next/link";

interface LinkProp {
  title: string;
  href: string;
  current: boolean;
}

export function Link({ title, href, current }: LinkProp) {
  return (
    <NextLink href={href}>
      <a className="mx-8 ">
        <div
          className={`px-8 py-2 font-source text-lg ${
            current && "gold-gradient"
          } ${current ? "text-gold" : "text-white"}`}
        >
          {title}
        </div>
        <div
          className={`w-full h-[1.5px] rounded-xl -translate-y-1/2 ${
            current && "gold"
          }`}
        />
      </a>
    </NextLink>
  );
}

interface ComingSoonLinkProp {
  title: string;
}

export function ComingSoonLink({ title }: ComingSoonLinkProp) {
  return (
    <div className="mx-8 relative">
      <div className={`px-8 py-2 font-source text-lg text-disable min-w-[12rem]`}>{title}</div>
      <div className={`absolute bottom-0 translate-y-1/2 px-8 text-sm font-source text-gold-gradient`}>COMING SOON</div>
    </div>
  );
}
