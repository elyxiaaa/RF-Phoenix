import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Download() {
  return (
    <div>
         <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover bg-center`}>
        <NavBar/>
        <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col">
            </div>

            <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
                <h1 className="text-red-800 text-4xl font-bold">DOWNLOAD PAGE</h1>
            </div>
        </div>

        <div>
          <Footer/>
          </div>
    </div>
  )
}

export default Download
