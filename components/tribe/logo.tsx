import  Image  from "next/image"
import Naka from '../../assets/tribe/naka.png'
import Byza from '../../assets/tribe/byza.png'
import Ethe from '../../assets/tribe/ethe.png'
import Luna from '../../assets/tribe/luna.png'
import Soli from '../../assets/tribe/soli.png'
export const Logo = () =>{
    return (
        <div className="mdm:mx-8 mx-16 pb-12 flex  flex-nowrap  justify-between mt-10 bg-black mdm:grid mdm:grid-col-6">
        <div className=" col-span-2">
            <Image src={Naka} width={100} height={100} alt="Naka" />
        </div>
        <div className=" col-span-2">
        <Image src={Byza} alt="Byza" width={100} height={100} />
        </div>
        <Image src={Ethe} alt="Ethe" className=" w-28 mdm:col-span-2" />
        <Image src={Luna} alt="Luna" className=" w-28 mdm:col-span-2" />
        <Image src={Soli} alt="Soli" className="  w-28 mdm:col-span-2" />
      </div>
    )
}