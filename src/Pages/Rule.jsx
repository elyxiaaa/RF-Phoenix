import React from 'react'
import NavBar from '../Components/NavBar'
import Rules1 from '../assets/RF-ASSETS/Rules1.png'
import Footer from '../Components/Footer'
function Rule() {
  return (
    <div>
         <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover bg-center`}>
        <NavBar/>
          <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col">

            </div>
      <div className="absolute top-[150px] left-0 w-full flex justify-center items-center mt-[50px]">
          <p className="text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow animate-shine">
            SERVER RULES
          </p>
        </div>

        <div className="flex h-screen w-full justify-center">
            <img src={Rules1} className="mt-[-150px]"/>
        </div>
        </div>
        <div className="h-screen bg-black">

        </div>
        

        <div>
          <Footer/>
          </div>
    </div>
  )
}

export default Rule
