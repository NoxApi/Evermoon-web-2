import Image from '../image'
import ImageNext from 'next/image'
import BG from '../../assets/bg.png'
import HeaderBox from '../../assets/header-box.svg'
import YouTube from 'react-youtube'
import NFTHero from '../../assets/feature/nft-hero.png'
import MarketPlace from '../../assets/feature/market-place.png'
import FreeToPlay from '../../assets/feature/free-to-play.png'
import Staking from '../../assets/feature/staking.png'
import BuildingChallenge from '../../assets/feature/building-challenge.png'
import YoutubeFrame from '../../assets/feature/youtube-frame.svg'
import SubFeature from './SubFeature'
import LearnMore from './LearnMore'

export default function Feature() {
  return (
    <section id="Feature" className="relative  w-full">
      {/* <div className="h-full w-full overflow-hidden">
      <ImageNext
          // width="100%"
          // height="100%"
          layout="fill"
          objectFit="cover"
          src={BG}
          alt="BG"
          priority={true}
        />
      </div> */}
      <div className="pb-16">
        <div className="flex flex-col items-center">
          <div className={'relative z-0 mt-32  mb-10'}>
            <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
              <Image className="" src={HeaderBox} alt="HeaderBox" />
            </div>
            <div className=" mx-10">
              <div className="text-gold-gradient font-tavi text-3xl md:text-5xl font-medium ">
                FEATURES
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
            <div className="flex flex-col mt-8 items-center">
              <div className="w-full max-w-2xl px-7">
                <div className="w-full relative z-0 aspect-video">
                  <Image
                    className="absolute inset-0 -mx-6 -my-4  sm:-mx-11 sm:-my-7 -z-10"
                    src={YoutubeFrame}
                    alt="YoutubeFrame"
                  />
                  <YouTube
                    videoId="piZkiA-mLx8"
                    opts={{ height: '100%', width: '100%' }}
                    className="w-full h-full aspect-video"
                    containerClassName="w-full h-full aspect-video"
                  />
                </div>
              </div>
              <LearnMore />
            </div>

            <div className="mx-8 mt-24 lg:mt-0  md:mx-20 flex flex-col">
              <SubFeature
                src={NFTHero}
                title={[`NFT HEROES`, <br key={''} />, `/SKINS`]}
                smallTitle="NFT HEROES / SKINS"
                detail="Heroes and skins are stored securely on the Binance Smart Chain."
              />
              <SubFeature
                src={MarketPlace}
                title={'Market Place'}
                detail="Trade heroes, skins, shards and loot boxes."
              />
              <SubFeature
                src={FreeToPlay}
                title={[`MOBA Free`, <br key={''} />, `to play`]}
                smallTitle="MOBA FREE TO PLAY"
                detail="Battle in the Everfield to earn $EVS while playing."
              />
              <SubFeature
                src={Staking}
                title={'Staking'}
                detail="Increase your $MS token yields by holding $EVS."
              />
              <SubFeature
                src={BuildingChallenge}
                title={'Building Challenge'}
                detail="Assimilate heroes and skins to earn new valuable resources."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
