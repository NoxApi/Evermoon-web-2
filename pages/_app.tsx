import '../styles/globals.css'
import { useState,useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state'

function MyApp({ Component, pageProps }: AppProps) {
 const [isloading,setisloading] = useState(true)
 const [visible,setvisible] = useState("invisible")
function show() {
  setisloading(false);
  setvisible("visible");
}
 useEffect(()=>{
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
    {isloading&&<div className='w-full h-[100vh] flex justify-center items-center absolute inset-0 z-30 bg-black font-Josefin overflow-hidden'>
        <a className='text-6xl heroes-text-gold '>LOADING</a>
        </div>}
    <div className={``+visible}>
    <Component {...pageProps} />
    </div>
  </GlobalProvider>   
  )
}

export default MyApp
