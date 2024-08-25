import React from 'react';
import pLogo from '../assets/RF-ASSETS/Logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";

function NavBar({ activeTab, scrollToEvents, scrollToLeaderboard, scrollToNewbieRewards, scrollToDonation }) {
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

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <>
      <div className="navbar bg-black fixed top-0 w-full z-50">
        <div className="navbar-start">
          <Link to="/">
            <img src={pLogo} className='object-cover w-[150px] h-[100px] ml-[100px]' alt="Logo" />
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-base-200 font-Cinzel hidden lg:flex space-x-5">
            <li className="relative group">
              <a
                onClick={handleHomeClick}
                className={getLinkClasses("home")}
              >
                <FaHome className="mr-0 text-2xl" />
                HOME
                <span className={getUnderlineClasses("home")} />
              </a>
            </li>

            <li className="relative group">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToLeaderboard();
                }}
                className={getLinkClasses("leaderboard")}
              >
                <FaRankingStar className="mr-0 text-2xl" />
                LEADERBOARDS
                <span className={getUnderlineClasses("leaderboard")} />
              </a>
            </li>

            <li className="relative group">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDonation();
                }}
                className={getLinkClasses("donation")}
              >
                <FaDonate className="mr-0 text-2xl" />
                DONATION
                <span className={getUnderlineClasses("donation")} />
              </a>
            </li>


            <li className="relative group">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToEvents();
                }}
                className={getLinkClasses("events")}
              >
                <MdEmojiEvents className="mr-0 text-2xl" />
                EVENTS
                <span className={getUnderlineClasses("events")} />
              </a>
            </li>

            <Link to="/">
              <li className="relative group">
                <a className={getLinkClasses("game-guides")}>
                  <IoMdArrowDropdown className="mr-0 text-2xl" />
                  GAME GUIDES
                  <span className={getUnderlineClasses("game-guides")} />
                </a>
                {/* Dropdown Menu */}
                <ul className="absolute left-0 mt-10 hidden w-[218px] bg-black/80 group-hover:block rounded-lg shadow-lg">
                  <li>
                    <Link to="/Combination" className="block px-6 py-2 text-base-200 hover:text-emerald-500">Combination</Link>
                  </li>
                  <li>
                    <Link to="/DropList" className="block px-6 py-2 text-base-200 hover:text-emerald-500">Drop List</Link>
                  </li>
                  <li>
                    <Link to="/farmSite" className="block px-6 py-2 text-base-200 hover:text-emerald-500">Farm Site</Link>
                  </li>
                  <li>
                    <Link to="/Rule" className="block px-6 py-2 text-base-200 hover:text-emerald-500">Server Rules</Link>
                  </li>
                </ul>
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
        <div className="dropdown dropdown-end block lg:hidden mb-5">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <a className="text-4xl text-base-100"><GiHamburgerMenu /></a>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-extrabold text-md text-gray-900 font-Platino">
            <li><a href="/" onClick={handleHomeClick}>HOME</a></li>
            <li><a href="/GameGuides">GAME GUIDES</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToDonation(); }}>DONATION</a></li>
            <li><a href="/Download">DOWNLOAD</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToEvents(); }}>EVENTS</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToLeaderboard(); }}>LEADERBOARDS</a></li>
          </ul>
        </div>
      </div>

      {/* Add top margin to the content to prevent it from being hidden behind the fixed navbar */}
      <div className="pt-[100px] bg-black-100">
        {/* Rest of your content goes here */}
      </div>
    </>
  );
}

export default NavBar;
