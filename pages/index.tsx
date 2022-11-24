import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/home'
import HomeD from '../components/home/desktop'
import Image from '../components/image'
import Layout from '../components/layout'
import  PAE  from '../components/playandearn'
import  PAED  from '../components/playandearn/desktop'
import  Features from '../components/feature'
import  FeaturesD from '../components/feature/desktop'
import  Heroes  from '../components/heroes'
import  HeroesM  from '../components/heroes/mobile'
import { Tokenomics } from '../components/tokenomics'
import { TokenomicsM } from '../components/tokenomics/tablet'
import { Team } from '../components/team'
import { TeamD } from '../components/team/desktop'
import { Roadmap } from '../components/roadmap'
import { RoadmapM } from '../components/roadmap/mobile'
import { Partner } from '../components/partner'
import { PartnerM } from '../components/partner/mobile'
import {useEffect,useRef,useState} from 'react'
import MAP from '../components/map'
import MAPM from '../components/map/mobile'
import nav from '../assets/nav.svg'
import down from '../assets/down.svg'
import up from '../assets/up.svg'
import { Footer } from '../components/footer'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useGlobalContext } from '../state'
import { workerData } from 'worker_threads'
import Script from 'next/script'

const Index: NextPage = () => {
  const {section,setsection} = useGlobalContext()!
  const home = useRef<null | HTMLDivElement>(null);
  const roadmap = useRef<null | HTMLDivElement>(null);
  const hero = useRef<null | HTMLDivElement>(null);
  const partner = useRef<null | HTMLDivElement>(null);
  const token = useRef<null | HTMLDivElement>(null);
  const map = useRef<null | HTMLDivElement>(null);
  const playtoearn = useRef<null | HTMLDivElement>(null);
  const feature = useRef<null | HTMLDivElement>(null);
  const team = useRef<null | HTMLDivElement>(null);
  const footerref = useRef<null | HTMLDivElement>(null); 
  const [width,setwidth]=useState(0)
    function add(){
      if (section < 10)
       setsection(section+1)
    }
    function sub(){
      if (section > 1)
       setsection(section-1)
    }
    useEffect(()=>{
      setwidth(window.innerWidth)
      window.addEventListener('resize', ()=> {
        setwidth(window.innerWidth)
    })
      console.log(width)
    if (section == 1)
      home.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 2)
      playtoearn.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 3)
      feature.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 4)
      map.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 5)
      hero.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 6)
      token.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 7)
      team.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 8)
      partner.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 9)
      roadmap.current?.scrollIntoView({behavior: 'smooth'});
    else if (section == 10)
      footerref.current?.scrollIntoView({behavior: 'smooth'});       
    }
    ,[section,width]

    )
    
  return (
    <Layout>
      <Head>
            <title>Evermoon</title>
            <meta name="description" content="Evermoon's NFT Marketplace" />
            <link rel="icon" href="/favicon.ico" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'GA_MEASUREMENT_ID');
              `}
            </Script>
      </Head>
      {width>1023&&<div className='lgm:hidden'>
        <ReactScrollWheelHandler
          upHandler={() => sub()}
          downHandler={() => add()}
          preventScroll={true}
          timeout={150}
          // wheelConfig={[0,0,0,0]}
        >
          <main>
            <div className="relative z-0">
            <div className='fixed right-7 top-[20vw] h-[10.5vw] w-[3vw] z-50 '>
              <div className='relative w-full h-full flex flex-col justify-between items-center'>
                <div onClick={()=>sub()} className='w-full z-[60] mt-[0.5vw] flex justify-center cursor-pointer'>
                  <Image src={up} alt='' className={"w-[80%]"}/>
                </div>
                <Image src={nav} alt='' className={"w-full absolute"}/>
              {section!==1?(<a className='text-[1vw] font-Glamode text-[#637F9E] z-30 mt-[0.6vw]'>{section-1}</a>):(<a className='text-[1vw] font-Glamode z-30 mt-[0.6vw] invisible'>{section-1}</a>)}
              <a className='text-[1.5vw] font-Glamode text-[#F1E3B5] z-30'>{section}</a>
              {section!==10?(<a className='text-[1vw] font-Glamode text-[#637F9E] z-30 mb-[0.7vw]'>{section+1}</a>):(<a className='text-[1vw] font-Glamode z-30 mb-[0.7vw] invisible'>{section-1}</a>)}
              <div onClick={()=>add()} className='w-full z-[60] mb-[1vw] flex justify-center cursor-pointer'>
                  <Image src={down} alt='' className={"w-[80%]"}/>
                </div>

              </div>
            </div>
            <div ref={home}/>
            <HomeD />
              <div className="relative w-full h-0 z-20">
                <div className='  flex items-start lgm:items-center  justify-center  absolute right-0 translate-y-[-85px] z-20'>
                    {/* <Image src={sec1footer} alt="banner" className='w-[1920px]'/> */}
                </div> 
                <div
                  className="w-full h-56 -translate-y-[52%]"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10, 9, 16, 0) 20%,rgba(22, 22, 55, 1) 45%, rgba(22, 22, 55, 1) 50%, rgba(7, 22, 45, 0) 100%)',
                  }}
                />           
              </div>
                <div ref={playtoearn}/>
                <PAED/>
                <div ref={feature}/>
                <FeaturesD />
                <div ref={map}/>
                <MAP />
                <div ref={hero}/>
                <Heroes />
                <div ref={token}/>
                <Tokenomics />
                <div ref={team}/>
                <TeamD />
                <div ref={partner}/>
                <Partner/>
                <div ref={roadmap}/>
                <Roadmap />
                <div ref={footerref}/>
                <Footer />
            </div>
          </main>
        </ReactScrollWheelHandler>
      </div>}
      {width<1024&&<div className='lg:hidden'>
      <main>
            <div className="relative z-0">
            <Home />
              <div className="relative w-full h-0 z-20">
                <div className='  flex items-start lgm:items-center  justify-center  absolute right-0 translate-y-[-85px] z-20'>
                    {/* <Image src={sec1footer} alt="banner" className='w-[1920px]'/> */}
                </div> 
                <div
                  className="w-full h-56 -translate-y-[52%]"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10, 9, 16, 0) 20%,rgba(22, 22, 55, 1) 45%, rgba(22, 22, 55, 1) 50%, rgba(7, 22, 45, 0) 100%)',
                  }}
                />           
              </div>
                <PAE/>
                <Features />
                <MAPM />
                <HeroesM />
                <TokenomicsM />
                <Team />
                <PartnerM/>
                <RoadmapM />
            </div>
          </main>
      </div>}
    </Layout>
  )
}

export default Index
