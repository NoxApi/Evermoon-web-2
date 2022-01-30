import Image from '../image'
import MarketplaceBox from '../../assets/marketplace-box.svg'

export default function Marketplace(props: any) {
  return (
    <div className={'relative ' + props.className}>
      <div className="absolute top-1/2 left-0 right-0  -z-10 -translate-y-1/2">
        <Image className="" src={MarketplaceBox} alt="marketplace" />
      </div>
      <div className=" mx-10">
        <div className="text-disable font-tavi text-xl ">Marketplace</div>
        <div className={`text-sm font-source text-gold-gradient leading-3`}>
          COMING SOON
        </div>
      </div>
    </div>
  )
}
