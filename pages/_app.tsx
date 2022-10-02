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
    {!isloading? (<Component {...pageProps} />):(<a className='text-white text-5xl'>loading</a>)}
  </GlobalProvider>   
  )
}

export default MyApp
