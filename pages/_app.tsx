import '../styles/globals.css'
import { useState,useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state'

function MyApp({ Component, pageProps }: AppProps) {
 const [isloading,setisloading] = useState(true)
 useEffect(()=>{
  setisloading(false);
 });
  return(
  <GlobalProvider>
    {isloading&&<div className='w-full h-full flex justify-center items-center absolute inset-0 z-30'>
        <a className='text-6xl heroes-text-gold'>LOADING</a>
        </div>}
    <Component {...pageProps} />
  </GlobalProvider>   
  )
}

export default MyApp
