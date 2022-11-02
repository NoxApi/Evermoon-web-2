import React from 'react'
import gradient from '../styles/gradient.module.css'
import {useEffect,useState} from 'react'

const Layout = (props: any) => {
  const [isloading,setisloading]=useState(true)
  function done(){
    setTimeout(function() {
      setisloading(false)
       }, 1200);
  }
  useEffect(()=>{
    if (document.readyState === "complete") {
    } else {
      window.addEventListener("load", done);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", done);
    }
    console.log(isloading)
  },[]   
   );
  return (
    <>
      <div  className={`bg-black p-0 text-white flex flex-col lg:h-[100vh] h-[90vh]  relative overflow-hidden `+(isloading ? '' : 'lgm:overflow-visible lgm:h-auto')}>        
          <div>{props.children}</div>         
      </div>
    </>
  )
}

export default Layout
//