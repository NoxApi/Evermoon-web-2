import React, { Fragment, useState } from 'react'
import Moon from '../assets/moon.png'
import Image from '../image'
import { ComingSoonLink, Link } from './Link'
import NextLink from 'next/link'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.svg'
import x from '../../assets/x.svg'
import bg from '../../assets/starbg.svg'
import NextImage from 'next/image'
import MarketplaceSmall from '../../assets/marketsmall.svg'
import marketplace from '../../assets/header/marketplace.svg'
import team from '../../assets/header/team.svg'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
const Header = () => {
  return (
    <header className="relative mx-auto w-full z-50">
      <div className="hidden 2xl:block absolute inset-0 w-full h-16 bg-gold-gradient-inv" />
      <div className="px-4 md:px-10 py-5 flex items-center">
        <div className="">
          <NextLink href="/">
            <a>
              <Image className="w-28 md:w-32" src={Logo} alt="logo" />
            </a>
          </NextLink>
        </div>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  )
}

export default Header

function HeaderDesktop() {
  return (
    <div className="hidden xl:flex w-full ">
      <div className="ml-8 flex items-center mr-auto z-0">
        <Link title="HOME" href="#Home" current={true} />
        <Link title="FEATURE" href="/#Feature" current={false} />
        <Link title="HEROES" href="/#Heroes" current={false} />
        <Link title="RUNES" href="/#Runes" current={false} />
        <Link title="TICKETS" href="/#Tickets" current={false} />
        <Link title="TOKENOMIC" href="/#Tokenomic" current={false} />
        <Link title="ROADMAP" href="/#Roadmap" current={false} />
      </div>

      <div className='flex items-center'>
        <Image src={team} alt="team" className="w-24 translate-x-1" />
        <Image src={marketplace} alt="marketplace" className="w-44" />
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
    <div className="xl:hidden w-full flex justify-end ">
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
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
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
              <div className="sm:ml-auto sm:w-80 h-screen relative w-full  overflow-hidden text-left align-middle transition-all transform bg-[#0E0E16] shadow-xl ">
                <div className="absolute inset-0 -z-10">
                  <NextImage
                    layout="fill"
                    objectFit="cover"
                    className="h-screen"
                    src={bg}
                    alt="bgstart"
                  />
                </div>
                <div className="px-4 pt-2 flex items-center bg-[#0E0E16] border-b-[1px] border-[#5c503a]">
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
                  <NLink title="HOME" href="/" />

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="">
                          <NLink title="ABOUT GAME" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="ml-12  pb-8 font-source text-white uppercase">
                          <SubLink title="Features" />
                          <SubLink title="Tribes" />
                          <SubLink title="Tokens" />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <NLink title="ROADMAP" href="/#RoadMap" />
                  <CLink title="PARTNERSHIP" />
                  <CLink title="NEWS" />
                  <Image
                    className="max-w-[300px] mx-6 md:mx-0 mt-8"
                    src={MarketplaceSmall}
                    alt="MarketplaceSmall"
                  />
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
            <a className="block font-source m-6 mt-0 text-white">{title}</a>
          </NextLink>
        </div>
      )
    }
    return <div className="block font-source m-6 mt-0 text-white">{title}</div>
  }

  function CLink({ title }: { title: string }) {
    return (
      <div className="flex items-center">
        <a className="block font-source m-6 mt-0 text-disable">{title}</a>
        <div className="text-[10px] text-gold font-source mb-5">
          COMING SOON
        </div>
      </div>
    )
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
