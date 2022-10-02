
import Image from '../image'
import { Transition } from '@headlessui/react'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import frame from '../../assets/heroes/frame.svg'
import HeroMobile from './mobile'
import { useState } from 'react'
import { HeroList } from './herolist'


export default function Heroes() {
  const {heroes} = HeroList()
  const[selector,setselector]=useState(0)
  const[isskin,setisskin]=useState(false)
  const select =(x:number)=>{
      setselector(x)
      setisskin(false)
  }
  return (
    <section
      id="Heroes"
      className="" 
    >
      <HeroMobile/>
      <div className='relative h-[50vw] w-full overflow-hidden bg-center font-Josefin max-w-[1920px] lgm:hidden'> 
      <Image src={topc} alt="icon" className=' w-[100%] absolute top-0'/>
      <BG index={heroes[selector].index} isskin={isskin} />
      <Image src={botc} alt="icon" className=' w-[100%] absolute bottom-0'/>
      <div className='w-[100%] h-[67%] flex justify-start items-start   relative '>
        <Image src={frame} alt="icon" className=' -z-10 w-[40%] absolute inset-0 top-[20%] left-[4%]'/>
        <div className=' h-[auto] flex justify-start items-center absolute top-[24%] px-[7%] '>  
          <Role role={heroes[selector].role}/>
        </div> 
        <div className=' h-[auto] flex justify-center items-center absolute top-[40%] left-[4%] w-[40%]'>  
          <a className='text-[3.5vw] heroes-text-gold text-center'>{heroes[selector].name}</a>
        </div> 
        <div className=' h-[auto] flex justify-center items-center absolute top-[57%] left-[16.4%] '>  
          <Tribe tribe={heroes[selector].tribe}/>
        </div> 
        <div className=' flex justify-center items-start absolute top-[69%] left-[1%] px-[4vw] w-[45vw] '>  
          <a  className='text-[1.1vw] text-center leading-[1.4vw]'>{heroes[selector].des}</a>
        </div> 
      </div>
      <div className='w-[100%] h-[25%] flex justify-center items-end pb-[0.5vw]'>
        <Selector hero={"tazia"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={0} skin={true} />
        <Selector hero={"bullock"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={1} skin={true} />
        <Selector hero={"kwondo"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={2} skin={true} />
        <Selector hero={"orca"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={3} skin={true} />
        <Selector hero={"ayla"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={4} skin={true} />
        <Selector hero={"mora"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={5} skin={false} />
        <Selector hero={"dotler"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={6} skin={true} />
        <Selector hero={"yano"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={7} skin={true} />
        <Selector hero={"axolt"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={8} skin={false} />
        <Selector hero={"mapius"} setisskin={setisskin} isskin={isskin} select={select} selector={selector} index={9} skin={true} />
      </div>
      </div>
    </section>
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
        <Image src={image} alt="icon" className='w-[15vw] ' priority/> 
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
        <Image src={image} alt="icon" className='w-[15vw]'/>
      )}
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
    import(`../../assets/heroes/h${index}s.png`).then((image) =>
      setImage(image.default)
    )
    }
    else{
      import(`../../assets/heroes/h${index}.png`).then((image) =>
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

const Selector = ({
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
    <div className=' w-[6vw] cursor-pointer mx-[0.5vw] relative  h-[7vw] flex items-end justify-center'>
           <Transition
            show={selector==index}
            enter=" duration-500 absolute"
            enterFrom="opacity-0 translate-y-[7vw] "
            enterTo="opacity-100 translate-y-0"
            leave="duration-500 absolute"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-[7vw]"
          >
            {skin&&<div onClick={()=>setisskin(true)} className="flex w-[7vw] justify-center items-center " >
            {!isskin&&image3&&<Image  src={image3} alt="icon" className='w-[120px] mb-[10px] '/>}
            {isskin&&image4&&<Image  src={image4} alt="icon" className='w-[120px] mb-[10px]'/>}
            </div>}
            <div onClick={()=>setisskin(false)} className="flex w-[7vw] justify-center" >
            {image2 && ( 
              <Image  src={image2} alt="icon" className='w-[7vw] '/>)}
            </div>
            </Transition>
          
            <Transition
            show={!(selector==index)}
            enter=" duration-500"
            enterFrom="opacity-0 opacity-0 translate-y-[-7vw] "
            enterTo="opacity-100 translate-y-0"
            leave="duration-500"
            leaveFrom="opacity-100 translate-y-0 "
            leaveTo="opacity-0 translate-y-[-7vw] "
          >
            <div onClick={()=>select(index)} className="z-10" >
            {image && ( 
            <Image  src={image} alt="icon" className='w-[6vw]'/>)}
            </div>
            </Transition>
        </div>
  )
}