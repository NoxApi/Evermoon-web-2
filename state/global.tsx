import { createContext, Dispatch, SetStateAction, useState,useContext } from 'react'

type GlobalValue = {
  section: number
  setsection: Dispatch<SetStateAction<number>>
  isloading: boolean
  setisloading: Dispatch<SetStateAction<boolean>>
  
} | null

export const GlobalContext = createContext<GlobalValue>(null)

export function GlobalProvider(props: any) {
  const [section, setsection] = useState(1)
  const [isloading, setisloading] = useState(true)
  const value: GlobalValue = {
    section, setsection,isloading,setisloading,
  }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export function useGlobalContext() {
  return useContext(GlobalContext)
}