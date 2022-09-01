import React from 'react'
import LayoutModal from './layoutModal'
import Image from 'next/image'
import ImageNext from 'next/image'
import YouTube from 'react-youtube'
import Frame from '../../assets/trailer/frame.svg'
import Star from '../../assets/trailer/star.svg'

type Props = {
  setErrorModal: any
  setStatus: any
}

const ErrorModal = ({ setErrorModal, setStatus }: Props) => {
  return (
    <LayoutModal>
      <div className='relative w-[1024px] flex flex-col items-center'>
      <div className="relative  w-full  mb-6 z-10">
        <YouTube
          videoId="_UpRh3Wgv1M"
          opts={{ height: '100%', width: '100%' }}
          className="w-full h-full aspect-video"
          containerClassName="w-full h-full aspect-video"
        />
        <div className="absolute inset-0 pointer-events-none">
          <ImageNext
            src={Frame}
            layout="responsive"
            alt="Frame"
            className=" pointer-events-none "
          />
        </div>
      </div>

        <div className='flex gap-2 text-sm '>
          <button
            className='border p-2  w-full lg:w-[400px] marker:rounded border-gold-light text-gold' onClick={() => setStatus(false)}>Close</button>
        </div>
      </div>
    </LayoutModal>
  )
}

export default ErrorModal