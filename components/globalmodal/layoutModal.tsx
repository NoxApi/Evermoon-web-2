import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'


type Props = {
  children: any
}

const LayoutModal = ({ children }: Props) => {
  const [opct, setOpct] = useState(0)
  useEffect(() => {
    setOpct(1)
  }, [children])

  return (
  
    <div
      className={`flex justify-content items-center bg-black/40 backdrop-blur-xl  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   transition-opacity  duration-200 opacity-${opct} ease-in-out`}
    >
      <div className={`m-auto `} >
        <div className="w-full inline-block lg:w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1A2035]/95 border-[1px] border-[#5F5F5F] shadow-xl rounded-lg font-source">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutModal