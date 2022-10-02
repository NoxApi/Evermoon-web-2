import { createContext, Dispatch, SetStateAction, useState,useContext } from 'react'

type GlobalValue = {
  section: number
  setsection: Dispatch<SetStateAction<number>>
  
} | null

export const GlobalContext = createContext<GlobalValue>(null)

export function GlobalProvider(props: any) {
  const [section, setsection] = useState(1)
  const value: GlobalValue = {
    section, setsection,
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