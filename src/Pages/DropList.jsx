import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function DropList() {
  return (
    <div>
      <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover bg-center`}>
        <NavBar/>
        <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col">
            </div>

            <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
                <h1 className="text-red-800 text-4xl font-bold">Drop List</h1>
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

export default DropList
