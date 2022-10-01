import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/home'
import ImageNext from 'next/image'
import Image from '../components/image'
import Layout from '../components/layout'
import  PTR  from '../components/playandearn'
import Divider from '../assets/tribe/Divider.svg'
import  Features from '../components/feature'
import  Heroes  from '../components/heroes'
import BGRune from '../assets/runes/bg.png'
import { Tokenomics } from '../components/tokenomics'
import { Team } from '../components/team'
import { Roadmap } from '../components/roadmap'
import { Partner } from '../components/partner'
import {useEffect,useRef,useState} from 'react'
import MAP from '../components/map'
import nav from '../assets/nav.svg'
import down from '../assets/down.svg'
import up from '../assets/up.svg'
import { Footer } from '../components/footer'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const Index: NextPage = () => {
  const [section,setsection] = useState(1)
  const [scrollY, setScrollY] = useState(0);
  var refy= useRef(0);
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
    function add(){
      if (section < 10)
       setsection(section+1)
    }
    function sub(){
      if (section > 1)
       setsection(section-1)
    }
    if (section == 1)
    home.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 2)
    playtoearn.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 3)
    feature.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 4)
    map.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 5)
    hero.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 6)
    token.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 7)
    team.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 8)
    partner.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 9)
    roadmap.current?.scrollIntoView({behavior: 'smooth'});
    if (section == 10)
    footerref.current?.scrollIntoView({behavior: 'smooth'});
    
  useEffect(() => {
    
  }, []);
   
  
  return (
    <Layout>
      <Head>
            <title>Evermoon</title>
            <meta name="description" content="Evermoon's NFT Marketplace" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='lgm:hidden'>
        <ReactScrollWheelHandler
          upHandler={(e) => sub()}
          downHandler={(e) => add()}
          preventScroll={true}
          timeout={200}
          // wheelConfig={[0,0,0,0]}
        >
          <main>
            <div className="relative z-0">
            <div className='fixed right-7 top-[20vw] h-[10.5vw] w-[3vw] z-50 '>
              <div className='relative w-full h-full flex flex-col justify-between items-center'>
                <div onClick={()=>sub()} className='w-full z-[60] mt-[1vw] flex justify-center cursor-pointer'>
                  <Image src={up} alt='' className={"w-[80%]"}/>
                </div>
              <Image src={nav} alt='' className={"w-full absolute"}/>
              <a className='text-[1.5vw] font-Glamode text-[#F1E3B5] z-30'>{section}</a>
              <div onClick={()=>add()} className='w-full z-[60] mb-[1vw] flex justify-center cursor-pointer'>
                  <Image src={down} alt='' className={"w-[80%]"}/>
                </div>

              </div>
            </div>
            <div ref={home}/>
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
                <div ref={playtoearn}/>
                <PTR/>
                <div ref={feature}/>
                <Features />
                <div ref={map}/>
                <MAP />
                <div ref={hero}/>
                <Heroes />
                <div ref={token}/>
                <Tokenomics />
                <div ref={team}/>
                <Team />
                <div ref={partner}/>
                <Partner/>
                <div ref={roadmap}/>
                <Roadmap />
                <div ref={footerref}/>
                <Footer />
            </div>
          </main>
        </ReactScrollWheelHandler>
      </div>
      <div className='lg:hidden'>
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
                <PTR/>
                <Features />
                <MAP />
                <Heroes />
                <Tokenomics />
                <Team />
                <Partner/>
                <Roadmap />
                <Footer />
            </div>
          </main>
      </div>
    </Layout>
  )
}

export default Index
