import React from 'react'
import pLogo from '../assets/RF-ASSETS/phoenixlogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"

function NavBar() {

  
  return (
    <>
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <img src={pLogo} className='w-[300px] h-[150px]'/>
                </div>

                <div className="navbar-center">
                
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 font-extrabold text-md text-base-200 font-Platino hidden lg:flex">
                        <Link to="/"><li><a>HOME</a></li></Link>
                        <Link to="/RULE"><li><a>RULE</a></li></Link>
                        <Link to="/DONATE"><li><a>DONATE</a></li></Link>
                        <Link to="/GUIDES"><li><a>GUIDES</a></li></Link>
                        <Link to="/PAGE"><li><a>PAGE</a></li></Link>
                        <Link to="/Download"><li><a>DOWNLOAD</a></li></Link>
                    </ul>
                </div>

                <div className="dropdown dropdown-end block lg:hidden mb-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1"><a className="text-4xl text-base-100"><GiHamburgerMenu /></a></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-extrabold text-md text-gray-900 font-Platino">
                        <li><a>HOME</a></li>
                        <li><a>RULE</a></li>
                        <li><a>DONATE</a></li>
                        <li><a>GUIDES</a></li>
                        <li><a>PAGE</a></li>
                        <li><a>DOWNLOAD</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar
