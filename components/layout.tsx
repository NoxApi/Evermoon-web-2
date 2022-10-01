import React from 'react'
import gradient from '../styles/gradient.module.css'

const Layout = (props: any) => {
  return (
    <>
      <div  className={`bg-black p-0 text-white flex flex-col lg:h-[50vw] relative lg:overflow-hidden `}>        
          <div>{props.children}</div>         
      </div>
    </>
  )
}

export default Layout
