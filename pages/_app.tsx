import '../styles/globals.css'
import { useState,useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state'
import Image from '../components/image'
import loading from '../public/0.gif'
import loading2 from '../public/90.gif'
import loading3 from '../public/100.gif'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
 const [isloading,setisloading] = useState(true)
 const [load1,setload1] = useState("visible")
 const [load3,setload3] = useState(false)

function show() {
  ;
  setload3(true)
  setload1("invisible")
  setTimeout(function() {
  setisloading(false)
   }, 1200);
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
    {isloading&&<div id='#load0' className='w-full h-[100vh] lgm:h-[99vh] flex justify-center items-center absolute inset-0 z-30 bg-white font-Josefin overflow-hidden'>
      <Image alt="" src={loading3} priority={true} className={`w-[50vw] mx-auto absolute lgm:w-[100vw] z-40 hidden`}/>
      {<Image alt="" src={loading}  priority={true} className={`w-[50vw] mx-auto absolute lgm:w-[100vw] z-30 `+load1}/>}
      {load3&&<Image alt="" src={loading3} priority={true} className={`w-[50vw] mx-auto lgm:w-[100vw] absolute z-40 `}/>} 
    </div>}
    <div className={``+(!isloading ? '' : 'invisible')}>
      <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-T59LHBSCPN"
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-T59LHBSCPN');
                `}
      </Script>
      <Component {...pageProps} />
    </div>
  </GlobalProvider>   
  )
}

export default MyApp
