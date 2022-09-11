import React from 'react'
import gradient from '../styles/gradient.module.css'

const Layout = (props: any) => {
  return (
    <div>
      <div className={`bg-black p-0 text-white flex flex-col justify-center content-center`}>
        <div className='max-w-[1920px] mx-auto w-full'>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
