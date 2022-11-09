import React from "react"
import { Footer } from "../../components/footer"
import Image from "../../components/image"
import policy from '../../public/policy.svg'
import { GlobalProvider } from "../../state"

const Policypage = () => {
  return (
    <GlobalProvider>
      <div className="bg-[#0C0436] h-[490.4vw]">
        <Image src={policy} alt="" className="w-full"/>
         <Footer/>
      </div>
    </GlobalProvider>
  )
}

export default Policypage