import Image from '../image'
import topcm from '../../assets/heroes/topcm.png'
import botcm from '../../assets/heroes/botcm.png'
import pic1 from '../../assets/map/pic1.png'
import frame from '../../assets/heroes/frame.svg'
import { useState } from 'react'
import { HeroList } from './herolist'
import { Transition } from '@headlessui/react'
export default function HeroMobile(){
    const[selector,setselector]=useState(0)
  const[isskin,setisskin]=useState(false)
  const select =(x:number)=>{
      setselector(x)
      setisskin(false)
  }
  const {heroes} = HeroList()
    return(
       <div className='lg:hidden h-[216vw] relative pt-[70vw]'>
            <Image src={topcm} alt="icon" className=' w-[100%] absolute top-0'/>
            <Image src={botcm} alt="icon" className=' w-[100%] absolute bottom-0'/>
            <BG index={heroes[selector].index} isskin={isskin} />
            <div className='w-[100%] h-[80vw] relative px-[10vw]'>
                    <Image src={frame} alt="icon" className=' -z-10 w-[80%] mx-auto absolute inset-0 '/>
                    <div className=' h-[auto] flex justify-start items-center absolute top-[4%] px-[3%] '>  
                    <Role role={heroes[selector].role}/>
                    </div> 
                    <div className=' h-[auto] flex justify-center items-center absolute top-[13%] left-[30%] w-[40%]'>  
                    <a className='text-[9vw] heroes-text-gold text-center'>{heroes[selector].name}</a>
                    </div> 
                    <div className=' h-[auto] flex justify-center items-center absolute top-[31.5%] left-[36%] '>  
                    <Tribe tribe={heroes[selector].tribe}/>
                    </div> 
                    <div className=' flex justify-center items-start absolute top-[45%] left-[15%] w-[70vw] '>  
                    <a  className='text-[2.5vw] text-center leading-[4vw]'>{heroes[selector].des}</a>
                </div>
            </div>
            <div className=' h-[40vw] flex-col  items-center justify-end flex'>
                <div className='flex'>
                <SelectorTop hero={"tazia"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={0} skin={true} />
                <SelectorTop hero={"bullock"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={1} skin={true} />
                <SelectorTop hero={"kwondo"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={2} skin={true} />
                <SelectorTop hero={"orca"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={3} skin={true} />
                <SelectorTop hero={"ayla"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={4} skin={true} />
                </div>
                <div className='flex mt-[1vw]'>
                <SelectorBot hero={"mora"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={5} skin={false} />
                <SelectorBot hero={"dotler"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={6} skin={true} />
                <SelectorBot hero={"yano"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={7} skin={true} />
                <SelectorBot hero={"axolt"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={8} skin={false} />
                <SelectorBot hero={"mapius"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={9} skin={true} />
                </div>
            </div>
       </div>
    )
   } 

   const BG = ({
    index,
    isskin,
  }: {
    index: number
    isskin: boolean
  }) => {
    const [image, setImage] = useState<StaticImageData | null>(null);
    (function (imageName) {
      if(isskin){
      import(`../../assets/heroes/h${index}sm.png`).then((image) =>
        setImage(image.default)
      )
      }
      else{
        import(`../../assets/heroes/h${index}m.png`).then((image) =>
          setImage(image.default)
        )
        }
      
    })(index)
  
    return (
      <div>
        {image && (      
          <Image src={image} alt="icon" className='-z-20 w-[100%] absolute top-0 right-0 '/>
        )}
      </div>
    )
  }
  const Role = ({
    role,
  }: {
    role: number
  }) => {
    const [image, setImage] = useState<StaticImageData | null>(null)
  
    ;(function (imageName) {
      import(`../../assets/heroes/role${role}.svg`).then((image) =>
        setImage(image.default)
      )
    })(role)
  
    return (
      <div>
        {image && (      
          <Image src={image} alt="icon" className='w-[30vw] ' priority/> 
        )}
      </div>
    )
  }
  
  const Tribe = ({
    tribe,
  }: {
    tribe: number
  }) => {
    const [image, setImage] = useState<StaticImageData | null>(null)
  
    ;(function (imageName) {
      import(`../../assets/heroes/tribe${tribe}.svg`).then((image) =>
        setImage(image.default)
      )
    })(tribe)
  
    return (
      <div>
        {image && (      
          <Image src={image} alt="icon" className='w-[27vw]'/>
        )}
      </div>
    )
  }
  const SelectorTop = ({
    index,
    hero,
    selector,
    isskin,
    skin,
    setisskin,
    select,
  }: {
    index: number
    hero: string
    selector: number
    skin: boolean
    isskin: boolean
    setisskin: any
    select: any
  }) => {
    const [image, setImage] = useState<StaticImageData | null>(null)
    const [image2, setImage2] = useState<StaticImageData | null>(null)
    const [image3, setImage3] = useState<StaticImageData | null>(null)
    const [image4, setImage4] = useState<StaticImageData | null>(null)
  
    ;(function (imageName) {
      import(`../../assets/heroes/${hero}.png`).then((image) =>
        setImage(image.default)
      )
    })(hero);
  
    (function (imageName2) {
      import(`../../assets/heroes/${hero}s.png`).then((image2) =>
        setImage2(image2.default)
      )
    })(hero);
   if(skin){
    (function (imageName3) {
      import(`../../assets/heroes/${hero}skin.png`).then((image3) =>
        setImage3(image3.default)
      )
    })(hero);
  
    (function (imageName4) {
      import(`../../assets/heroes/${hero}skins.png`).then((image4) =>
        setImage4(image4.default)
      )
    })(hero);
    }
    return (
      <div className=' w-[15vw] cursor-pointer mx-[1vw] relative  h-[15vw] flex items-end justify-center'>
             <Transition
              show={selector==index}
              enter=" duration-500 absolute"
              enterFrom="opacity-0 translate-y-[15vw] "
              enterTo="opacity-100 translate-y-0"
              leave="duration-500 absolute"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 translate-y-[15vw]"
            >
              {skin&&<div onClick={()=>setisskin(true)} className="flex w-[15vw] justify-center items-center " >
              {!isskin&&image3&&<Image  src={image3} alt="icon" className='w-[120px] mb-[10px] '/>}
              {isskin&&image4&&<Image  src={image4} alt="icon" className='w-[120px] mb-[10px]'/>}
              </div>}
              <div onClick={()=>setisskin(false)} className="flex w-[15vw] justify-center" >
              {image2 && ( 
                <Image  src={image2} alt="icon" className='w-[15vw] '/>)}
              </div>
              </Transition>
            
              <Transition
              show={!(selector==index)}
              enter=" duration-500"
              enterFrom="opacity-0 opacity-0 translate-y-[-15vw] "
              enterTo="opacity-100 translate-y-0"
              leave="duration-500"
              leaveFrom="opacity-100 translate-y-0 "
              leaveTo="opacity-0 translate-y-[-15vw] "
            >
              <div onClick={()=>select(index)} className="z-10" >
              {image && ( 
              <Image  src={image} alt="icon" className='w-[15vw]'/>)}
              </div>
              </Transition>
          </div>
    )
  }

  const SelectorBot = ({
    index,
    hero,
    selector,
    isskin,
    skin,
    setisskin,
    select,
  }: {
    index: number
    hero: string
    selector: number
    skin: boolean
    isskin: boolean
    setisskin: any
    select: any
  }) => {
    const [image, setImage] = useState<StaticImageData | null>(null)
    const [image2, setImage2] = useState<StaticImageData | null>(null)
    const [image3, setImage3] = useState<StaticImageData | null>(null)
    const [image4, setImage4] = useState<StaticImageData | null>(null)
  
    ;(function (imageName) {
      import(`../../assets/heroes/${hero}.png`).then((image) =>
        setImage(image.default)
      )
    })(hero);
  
    (function (imageName2) {
      import(`../../assets/heroes/${hero}s.png`).then((image2) =>
        setImage2(image2.default)
      )
    })(hero);
   if(skin){
    (function (imageName3) {
      import(`../../assets/heroes/${hero}skin.png`).then((image3) =>
        setImage3(image3.default)
      )
    })(hero);
  
    (function (imageName4) {
      import(`../../assets/heroes/${hero}skins.png`).then((image4) =>
        setImage4(image4.default)
      )
    })(hero);
    }
    return (
      <div className=' w-[15vw] cursor-pointer mx-[1vw] relative  h-[15vw] flex items-start justify-center'>
             <Transition
              show={selector==index}
              enter=" duration-500 absolute"
              enterFrom="opacity-0 translate-y-[-15vw] "
              enterTo="opacity-100 translate-y-0"
              leave="duration-500 absolute"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 translate-y-[-15vw]"
            >
                <div onClick={()=>setisskin(false)} className="flex w-[15vw] justify-center" >
              {image2 && ( 
                <Image  src={image2} alt="icon" className='w-[15vw] '/>)}
              </div>
              {skin&&<div onClick={()=>setisskin(true)} className="flex w-[15vw] justify-center items-center " >
              {!isskin&&image3&&<Image  src={image3} alt="icon" className='w-[120px] mt-[10px] '/>}
              {isskin&&image4&&<Image  src={image4} alt="icon" className='w-[120px] mt-[10px]'/>}
              </div>}
              
              </Transition>
            
              <Transition
              show={!(selector==index)}
              enter=" duration-500"
              enterFrom="opacity-0 opacity-0 translate-y-[15vw] "
              enterTo="opacity-100 translate-y-0"
              leave="duration-500"
              leaveFrom="opacity-100 translate-y-0 "
              leaveTo="opacity-0 translate-y-[15vw] "
            >
              <div onClick={()=>select(index)} className="z-10" >
              {image && ( 
              <Image  src={image} alt="icon" className='w-[15vw]'/>)}
              </div>
              </Transition>
          </div>
    )
  }