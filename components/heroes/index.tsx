
import Image from '../image'
import { Transition } from '@headlessui/react'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import mm from '../../assets/map/minimap.svg'
import h1 from '../../assets/heroes/h1.png'
import frame from '../../assets/heroes/frame.svg'
import tribe1 from '../../assets/heroes/tribe1.svg'
import role1 from '../../assets/heroes/role1.svg'
import tazia from '../../assets/heroes/tazia.png'
import tazias from '../../assets/heroes/tazias.png'
import bullock from '../../assets/heroes/bullock.png'
import bullocks from '../../assets/heroes/bullocks.png'
import kwondo from '../../assets/heroes/kwondo.png'
import kwondos from '../../assets/heroes/kwondos.png'
import h0skin0 from '../../assets/heroes/h0skin0.png'
import h0skin0s from '../../assets/heroes/h0skin0s.png'
import dynamic from 'next/dynamic'
import { useState } from 'react'


export default function Heroes() {
  const heroes = [{name:"TAZIA",index:0,tribe:0,role:0,rarity:0,des:"A skilled warrior in the Byzan. As a child, he was rescued by the Jarad, which is the powerful people of the tribe. After that, Tazia was trained to become a warrior of the tribe. With gratitude for his childhood heroes, he set up his training day after day until he became one of the strongest warriors in the tribe"},
                  {name:"BULLOCK",index:1,tribe:1,role:1,rarity:0,des:"A former Nakamatos council member. He formed his own rebel group as part of a plan to steal the power of De-Zentrum, because he was not chosen to be tested for powers. Therefore, he persuades people who wanted to gain power like him to rebelled the council. During the rush hour, he stole the power. Later on,he formed a new group call Ethern and soon thisnew group has become a new kingdom."},
                  {name:"KWONDO",index:2,tribe:2,role:2,rarity:0,des:"KwonDo was separated from his younger siblings since when he was a child and was sent by his parents toa military school at the age of 10. He stayed inthe military school for 5 years and received the first place to get into the military training. Twelve years later, he becomes the leader of the unit. He is an expert in using long-range weapons in the battlefield. While he is going to help people form bank robberies, he meets his brother who is the one robbing, so he wants to help his brother. He took his brother into the unit and tell his supervisor that his brother has talent and he did not want the army to lose this talent source, so the commander accepted his brother and put him in charge of Zet."},
                  {name:"ORCA",index:3,tribe:3,role:3,rarity:0,des:"An assassin of the Solis which was trusted by the leader of the tribe. One day, Orca was on a mission to explore the outer space, when he returns, a group of people invaded the Solis, causing almost everyone in the tribe to die. Orca’s wife and children died in this tragedy. He set out to take revenge on the group that destroyed his tribe."},
                  {name:"AYLA",index:4,tribe:4,role:1,rarity:0,des:"The daughter of Adelard, the King of Nakamatos, and is trained in battle by the kingdom’s knight in order to pass the test of obtaining power from the piece of De-Zentrum. Ten years later, she was put to the test for De-Zentrum’s powers. After gaining the power, she has become – which is a group that received power to protect their people."},
                  {name:"MORA",index:5,tribe:0,role:4,rarity:0,des:"An weapons mechanic in the Byzan. She always secretly sells the weapons she created to other cities. Because she is fascinated with technology, she wants to come out to exchange technology in Everfield rather than sit and make weapons in her own tribe alone. She wants to bring out her knowledge and abilities to let others know. She also likes to combine different types of weapons to create her own weapons."},
                  {name:"DOTLER",index:6,tribe:1,role:0,rarity:0,des:"A member of Ethen, he is a controversial person.He is often violent in various matters. He is also the leader of the Bruiser, which is the most violent group in Ethern. He had been slaughtering people who had affairs with him every day. He organizes a battle which bring people within the group to fight against each other in the arena."},
                  {name:"YANO",index:7,tribe:2,role:3,rarity:0,des:"Yano was captured by a group of thieves when he was a child, but managed to escape. He later joins a gang of thugs to survive. Fifteen years later, he went to rob a bank and met his long-lost older brother, KwonDo. During the heist, KwonDo saw his skill in using close-range weapon and realized that Zet was his brother and wanted to help him to live a better life. Kwondo brought Zet into the army and introduced Zet to soldiers who were skilled in using sword to train his brother. Later, he came to work with KwonDo."},
                  {name:"AXOIT",index:8,tribe:3,role:5,rarity:0,des:"It is a species that belong to the Solis which is playful and it was a species that has supported the tribe for a long time. It is one species that is now a minority who can still use the power of gems in their fight for the survival of the Ethern’s invasion. Now, they are seeking for a place to settle in the ocean while protecting their gems which is their energy source."},
                  {name:"MAPIUS",index:9,tribe:4,role:2,rarity:0,des:"She was one of the people who passed the test of the Nakamatos. After she join Electus, she loses one of her arms from her battle with Abris, a monster that had invaded Nakamatos. Her right arm has become a prosthetic arm that can be used in battle with the power of the De-Zentrum. She is also a close friend of Ayla, King Adelard’s daughter. They always have a mini battle with each other to prove who’s better no matter what that battle is."},

                ] 
  const[selector,setselector]=useState(0)
  const[isskin,setisskin]=useState(false)
  const select =(x:number)=>{
      setselector(x)
      setisskin(false)
  }
  return (
    <section
      id="Home"
      className="relative h-[1080px] w-full overflow-hidden bg-center font-Josefin " 
    >
      <Image src={topc} alt="icon" className=' w-[100%] absolute top-0'/>
      <BG index={heroes[selector].index} isskin={isskin} />
      <Image src={botc} alt="icon" className=' w-[100%] absolute bottom-0'/>
      <div className='w-[100%] h-[50px] flex justify-start items-start mt-[150px] ml-[5vw] relative'>
        <Image src={frame} alt="icon" className=' -z-10 w-[600px] absolute inset-0'/>
        <div className=' w-[600px] h-[auto] flex justify-start items-center absolute top-[30%] px-[40px] '>  
          <Role role={heroes[selector].role}/>
        </div> 
        <div className=' w-[600px] h-[auto] flex justify-center items-center absolute top-[220%] '>  
          <a className='text-6xl text-[#D9AE5F]'>{heroes[selector].name}</a>
        </div> 
        <div className=' w-[600px] h-[auto] flex justify-center items-center absolute top-[370%] px-[40px] '>  
          <Tribe tribe={heroes[selector].tribe}/>
        </div> 
        <div className=' w-[600px] h-[300px] flex justify-center items-start absolute top-[500%] px-[30px] '>  
          <a  className='text-xl text-center'>{heroes[selector].des}</a>
        </div> 
      </div>
      <div className='w-[100%] h-[45%] flex justify-center items-end mt-[300px] '>
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
        <Image src={image} alt="icon" className='w-[200px] ' priority/> 
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
        <Image src={image} alt="icon" className='w-[140px] '/>
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
        <Image src={image} alt="icon" className='-z-20 w-[1920px] absolute top-0 right-0'/>
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
    <div className=' w-[120px] cursor-pointer mx-[15px] relative  h-[300px] flex items-end'>
           <Transition
            show={selector==index}
            enter=" duration-500 absolute"
            enterFrom="opacity-0 translate-y-[130px] "
            enterTo="opacity-100 translate-y-0"
            leave="duration-500 absolute"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-[130px]"
          >
            {skin&&<div onClick={()=>setisskin(true)} className="flex w-[130px] justify-center" >
            {!isskin&&image3&&<Image  src={image3} alt="icon" className='w-[120px] mb-[10px]'/>}
            {isskin&&image4&&<Image  src={image4} alt="icon" className='w-[120px] mb-[10px]'/>}
            </div>}
            <div onClick={()=>setisskin(false)} className="flex w-[130px] justify-center" >
            {image2 && ( 
              <Image  src={image2} alt="icon" className='w-[130px] '/>)}
            </div>
            </Transition>
          
            <Transition
            show={!(selector==index)}
            enter=" duration-500"
            enterFrom="opacity-0 opacity-0 translate-y-[-130px] "
            enterTo="opacity-100 translate-y-0"
            leave="duration-500"
            leaveFrom="opacity-100 translate-y-0 "
            leaveTo="opacity-0 translate-y-[-130px] "
          >
            <div onClick={()=>select(index)} className="z-10" >
            {image && ( 
            <Image  src={image} alt="icon" className='w-[120px]'/>)}
            </div>
            </Transition>
        </div>
  )
}