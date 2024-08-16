import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'


function Home() {
  return (
    <>
      <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover bg-center`}>
        <div className="max-w-screen-2xl mx-auto flex flex-col">
        <NavBar/>
          <div>
            
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Home
