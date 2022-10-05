import '../styles/globals.css'
import { useState,useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state'
import Image from '../components/image'
import loading from '../public/0.gif'
import loading2 from '../public/90.gif'
import loading3 from '../public/100.gif'

function MyApp({ Component, pageProps }: AppProps) {
 const [isloading,setisloading] = useState(true)
 const [visible,setvisible] = useState("invisible")
 const [load1,setload1] = useState(true)
 const [load2,setload2] = useState(false)
 const [load3,setload3] = useState(false)

function show() {
  ;
  setvisible("visible");
  setload2(false)
  setload3(true)
  setTimeout(function() {
    setisloading(false)
   }, 1000);
}


 useEffect(()=>{
  setTimeout(function() {
     setload1(false)
       }, 7300);
  setTimeout(function() {
        setload2(true)
       }, 7100);
  if (document.readyState === "complete") {
  } else {
    window.addEventListener("load", show);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener("load", show);
  }
}
 
 );
  return(
  <GlobalProvider>
    {isloading&&<div id='#load0' className='w-full h-[100vh] flex justify-center items-center absolute inset-0 z-30 bg-white font-Josefin overflow-hidden'>
      {load1 &&<Image alt="" src={loading} className="w-[100vw] absolute"/>}
      {load2 &&<Image alt="" src={loading2} className="w-[100vw] absolute p-[3.7vw]"/>}
      {load3 &&<Image alt="" src={loading3} className="w-[100vw] absolute p-[3.7vw]"/>}
    </div>}
    <div className={``+visible}>
    <Component {...pageProps} />
    </div>
  </GlobalProvider>   
  )
}

export default MyApp
