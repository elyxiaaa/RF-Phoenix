import React from 'react'
import NavBar from '../Components/NavBar'

function Guides() {
  return (
    <div>
        <div className="h-screen w-full bg-BG bg-no-repeat bg-cover bg-center">
            <div className="max-w-screen-2xl mx-auto">
                <NavBar/>
            </div>

            <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
                <h1 className="text-red-800 text-4xl font-bold">GUIDES PAGE</h1>
            </div>
        </div>

        
        <div className="h-screen bg-black">

        </div>

        
    </div>
  )
}

export default Guides
