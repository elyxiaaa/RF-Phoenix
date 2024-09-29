import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../Components/NavBar';
import pLogo from '../assets/RF-ASSETS/Logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGoogleDrive } from "react-icons/fa";
import { SiMega } from "react-icons/si";
import { SiMediafire } from "react-icons/si";
import Footer from '../Components/Footer';

function Download ({ activeTab, scrollToEvents, scrollToLeaderboard, scrollToNewbieRewards, scrollToDonation }) {
    const navigate = useNavigate();
    const getLinkClasses = (tabName) => {
        return activeTab === tabName
          ? "relative text-emerald-500 glow-effect"
          : "relative text-base-200 transition-colors duration-300 hover:text-emerald-500";
      };

      const getUnderlineClasses = (tabName) => {
    return activeTab === tabName
      ? "absolute left-0 bottom-0 block w-full h-[1px] bg-emerald-500 shadow-[0px_0px_10px_2px_rgba(16,185,129,0.8)]"
      : "absolute left-0 bottom-0 block w-full h-[1px] bg-transparent group-hover:bg-emerald-500 group-hover:shadow-[0px_0px_10px_2px_rgba(16,185,129,0.8)] transition-all duration-300";
  };

    return (
        <>
        <div className="h-screen w-full bg-black bg-no-repeat bg-cover">
            <div className="flex navbar bg-black fixed top-0 w-screen z-50">
        <div className="navbar-start">
          <Link to="/">
          <img src={pLogo} className='object-cover w-[80px] h-[100px] ml-[150px]' alt="Logo" />
          </Link>
        </div>

        <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-bold text-xl text-base-200 font-Platino hidden xl:flex space-x-5">
            <li className="relative group">
              <Link to="/"
                className={getLinkClasses("home")}
              >
                <FaHome className="mr-0 text-2xl" />
                HOME
                <span className={getUnderlineClasses("home")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("leaderboard")}
              >
                <FaRankingStar className="mr-0 text-2xl" />
                LEADERBOARDS
                <span className={getUnderlineClasses("leaderboard")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("donation")}
              >
                <FaDonate className="mr-0 text-2xl" />
                DONATION
                <span className={getUnderlineClasses("donation")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("events")}
              >
                <MdEmojiEvents className="mr-0 text-2xl" />
                EVENTS
                <span className={getUnderlineClasses("events")} />
              </Link>
            </li>

            <Link to="/Guides">
              <li className="relative group">
                <a className={getLinkClasses("guide")}>
                  GAME GUIDES
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("download")} />
                </a>
              </li>
            </Link>
            
              <Link to="/Download">
              <li className="relative group">
                <a className={getLinkClasses("download")}>
                  DOWNLOAD
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("download")} />
                </a>
              </li>
            </Link>
           </ul>
        </div>

         <div className="navbar-end"></div>
         <div className="dropdown dropdown-end block xl:hidden mb-5">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <a className="text-4xl text-base-100"><GiHamburgerMenu/></a>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow font-extrabold text-md text-gray-900 font-Rokkit">

          <li className="relative group">
              <Link to="/"
                className={getLinkClasses("home")}
              >
                <FaHome className="mr-0 text-2xl" />
                HOME
                <span className={getUnderlineClasses("home")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("leaderboard")}
              >
                <FaRankingStar className="mr-0 text-2xl" />
                LEADERBOARDS
                <span className={getUnderlineClasses("leaderboard")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("donation")}
              >
                <FaDonate className="mr-0 text-2xl" />
                DONATION
                <span className={getUnderlineClasses("donation")} />
              </Link>
            </li>

            <li className="relative group">
            <Link to="/"
                className={getLinkClasses("events")}
              >
                <MdEmojiEvents className="mr-0 text-2xl" />
                EVENTS
                <span className={getUnderlineClasses("events")} />
              </Link>
            </li>

            <Link to="/Guides">
              <li className="relative group">
                <a className={getLinkClasses("guide")}>
                  GAME GUIDES
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("download")} />
                </a>
              </li>
            </Link>
            
              <Link to="/Download">
              <li className="relative group">
                <a className={getLinkClasses("download")}>
                  DOWNLOAD
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("download")} />
                </a>
              </li>
            </Link>

          </ul>
        </div>
        </div>
        <div className="h-screen w-full overflow-hidden bg-BG2 bg-no-repeat bg-cover bg-center p-4" >
    <div className="flex items-center justify-center">
      <h2 className="text-4xl text-white font-bold font-Platino text-shadow-emeraldGlow mt-[200px]">FULL CLIENT</h2>
    </div>
    <div className="flex items-center justify-center mt-10">
      <div className="relative flex gap-10 justify-center items-center">
        <a
          href="https://drive.google.com/drive/u/0/folders/1VtecgIsZtcznEWVACZfB8ghyFylxMaTl"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
        <FaGoogleDrive />
          GDRIVE
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/1VtecgIsZtcznEWVACZfB8ghyFylxMaTl"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
        <SiMediafire />
          MEDIAFIRE
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/1VtecgIsZtcznEWVACZfB8ghyFylxMaTl"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
          <SiMega />
          MEGA
        </a>
      </div>
    </div>
  </div>
  </div>
        </>
    )
}

export default Download