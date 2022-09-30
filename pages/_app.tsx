import '../styles/globals.css'
import { useState,useEffect } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
 const [isloading,setisloading] = useState(true)
 useEffect(()=>{
  setisloading(false);
 });
  return(
  <>
    {!isloading? (<Component {...pageProps} />):(<a className='text-white text-5xl'>loading</a>)}
  </>   
  )
}

export default MyApp
