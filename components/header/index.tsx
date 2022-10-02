import React, { Fragment, useEffect, useState } from 'react'
import Moon from '../assets/moon.png'
import Image from '../image'
import { ComingSoonLink, Link , SubLink } from './Link'
import NextLink from 'next/link'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.svg'
import x from '../../assets/x.svg'
import bg from '../../assets/starbg.svg'
import NextImage from 'next/image'
import MarketplaceSmall from '../../assets/marketsmall.svg'
import login from '../../assets/header/marketplace.svg'
import team from '../../assets/header/team.svg'
import Line from '../../assets/header/line.png'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'

const Header = () => {
  const [isHover, setIsHover] = useState(false)
  console.log(isHover)
  let width = "w-0"
  if (isHover)
    width = " w-full "
  return (
    <header className="relative mx-auto w-full z-50 ">
      <div className="absolute top-0 left-0 right-0 w-full h-[8vw] bg-black-gradient" />
      <div onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className={`flex flex-col items-start absolute top-0 left-0 right-0  h-[7vw] bg-black-gradient navbar overflow-hidden cursor-pointer `+width }>
        <div className='w-[88vw] h-[0.1vw] bg-[#F4DFB7] mt-[4vw] ml-[12vw]'/>
        <div className='flex ml-[11vw]'>
        <SubLink title="ABOUT THE GAME" section={2} current={false} />
        <SubLink title="FEATURES" section={3} current={false} />
        <SubLink title="MAP" section={4} current={false} />
        <SubLink title="HEROES" section={5} current={false} /> 
        </div>
      </div>
      <div className="px-4 md:px-[9vw] py-5 flex items-center">
        <div className="">
          <NextLink href="/">
            <a>
              <Image
                className="w-28 lg:w-[10vw] absolute top-[10px] left-[10px] cursor-default"
                src={Logo}
                alt="logo"
                blur={false}
              />
            </a>
          </NextLink>
        </div>
        <HeaderDesktop isHover={isHover} setIsHover={setIsHover}/>
        <HeaderMobile />
      </div>
      
      
    </header>
  )
}

export default Header
interface Prop {
  isHover: any
  setIsHover: any
}
function HeaderDesktop({isHover,setIsHover}:Prop) {

  return (
    <div className="hidden lg:flex w-full  ">
      <div className="ml-8 flex items-start mr-auto z-0">
        <Link title="HOME" section={1} current={true} />
        
        <a onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="cursor-pointer px-2 min-w-[6rem] flex flex-col items-center justify-center xlm:px-0 xlm:min-w-0 ">
        <div className="relative">
          <div
            className={`px-4 lgm:px-2 py-2 font-Glamode text-[1.5vw]  text-center whitespace-nowrap transition-all duration-300
             ${isHover ? 'text-gold' : 'text-white'} ${
              isHover && '-translate-y-1'
            }`}
          >
            {"EXPLORE"}
          </div>
          <div
            className={`${
              !isHover ? 'opacity-0' :  'opacity-100'
            } absolute left-0 right-0 bottom-0 w-[5vw]  mx-auto translate-y-1 transition-all duration-500 `}
          >
            <Image src={Line} alt="Line" blur={false} />
          </div>
        </div>
      </a>
        <Link title="TOKENOMIC" section={6} current={false} />
        <Link title="TEAM" section={7} current={false} />
        <Link title="PARTNER" section={8} current={false} />
        <Link title="ROADMAP" section={9} current={false} />
      </div>

      <div className="flex items-center">
        {/* <Image src={team} alt="team" className="w-24 translate-x-1" /> */}
        <div className="relative">
          {/* <Image src={login} alt="marketplace" className="w-44" /> */}
        </div>
      </div>
      
    </div>
  )
}

function HeaderMobile() {
  let [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div className="lg:hidden w-full flex justify-end ">
      <button type="button" onClick={openModal} className="mr-2">
        <Image className="w-8 ml-auto " src={Hamburger} alt="logo" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[60] overflow-y-aut"
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="sm:ml-auto sm:w-80 h-screen relative w-full  overflow-hidden text-left align-middle transition-all transform bg-bgs8m bg-cover shadow-xl ">
                <div className="absolute inset-0 -z-10">
                  <NextImage
                    layout="fill"
                    objectFit="cover"
                    className="h-screen"
                    src={bg}
                    alt="bgstart"
                  />
                </div>
                <div className="px-4 pt-2 flex items-center  border-b-[1px] border-[#5c503a]">
                  <div className="">
                    <NextLink href="/">
                      <a>
                        <Image className="w-28 " src={Logo} alt="logo" />
                      </a>
                    </NextLink>
                  </div>
                  <div className="ml-auto" onClick={closeModal}>
                    <Image className="w-8 " src={x} alt="x" />
                  </div>
                </div>

                <div className="mt-12 mx-4">
                  <NLink title="HOME" href="#Home" />
                  <NLink title="ABOUT THE GAME" href="#Playandearn" />
                  <NLink title="FEATURE" href="#Feature" />
                  <NLink title="MAP" href="#Map"  />
                  <NLink title="HEROES" href="#Heroes" />
                  <NLink title="TOKENOMIC" href="#Tokenomic" />
                  <NLink title="TEAM" href="#Team"  />
                  <NLink title="PARTNER" href="#Partner" />
                  <NLink title="ROADMAP" href="#Roadmap" />
                  <NextLink href="https://docs.evermoon.games/evermoon/">
                    <a className="block font-Glamode m-6 mt-0 text-white mdm:text-2xl">WHITE PAPER</a>
                  </NextLink>
                            
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )

  function NLink({ title, href }: { title: string; href?: string }) {
    if (href) {
      return (
        <div
          onClick={() => {
            closeModal()
            document.getElementById(href)?.scrollIntoView()
          }}
        >
          <NextLink href={href}>
            <a className="block font-Glamode m-6 mt-0 text-white mdm:text-2xl">{title}</a>
          </NextLink>
        </div>
      )
    }
    return <div className="block font-Glamode m-6 mt-0 text-white">{title}</div>
  }


  function SubLink({ title }: { title: string }) {
    return (
      <div
        className="pb-4"
        onClick={() => {
          closeModal()
          document.getElementById(`/#${title}`)?.scrollIntoView()
        }}
      >
        <NextLink href={`/#${title}`}>
          <a className="block ">{title}</a>
        </NextLink>
        <div className="h-[2px] w-8 rounded-full bg-gold-light scale-x-100 transition-transform origin-top-left" />
      </div>
    )
  }
}
