import React from 'react';
import pLogo from '../assets/unnamed.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineCloudDownload } from "react-icons/md";

function NavBar({ activeTab, scrollToEvents, scrollToLeaderboard, scrollToDownload, scrollToNewbieRewards, scrollToDonation }) {
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
      <div className="navbar bg-black/90 fixed top-0 w-screen z-50">
        <div className="navbar-start">
          <Link to="/">
            <img src={pLogo} className='object-cover w-[80px] h-[100px] ml-[250px] lg:ml-20' alt="Logo" />
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-base-200 font-Platino hidden lg:flex lg:ml-20 space-x-5">
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

            <Link to="/Guides">
              <li className="relative group">
                <a className={getLinkClasses("guide")}>
                  GAME GUIDES
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("guide")} />
                </a>
              </li>
            </Link>

            <li className="relative group">
  <a
    onClick={(e) => {
      e.preventDefault();
      scrollToDownload();
    }}
    className={getLinkClasses("download")}
  >
    DOWNLOAD
    <MdOutlineCloudDownload className="mr-0 text-2xl" />
    <span className={getUnderlineClasses("download")} />
  </a>
</li>
          </ul>
        </div>

        <div className="navbar-end"></div>
        <div className="dropdown dropdown-end block lg:hidden mb-5">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <a className="text-4xl text-base-100"><GiHamburgerMenu /></a>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow font-extrabold text-md text-gray-900 font-Platino">

          <li className="relative group">
              <a onClick={handleHomeClick} className={getLinkClasses("home")}>
                <FaHome className="mr-0 text-2xl" />
                HOME
                <span className={getUnderlineClasses("home")} />
              </a>
            </li>
            
            <li className="relative group">
              <a onClick={(e) => {e.preventDefault();scrollToLeaderboard();}} className={getLinkClasses("leaderboard")}>
                <FaRankingStar className="mr-0 text-2xl" />
                LEADERBOARDS
                <span className={getUnderlineClasses("leaderboard")} />
              </a>
            </li>
            
            <li className="relative group">
              <a onClick={(e) => {e.preventDefault();scrollToDonation();}} className={getLinkClasses("donation")}>
                <FaDonate className="mr-0 text-2xl" />
                DONATION
                <span className={getUnderlineClasses("donation")} />
              </a>
            </li>

            <li className="relative group">
              <a onClick={(e) => {e.preventDefault();scrollToEvents();}} className={getLinkClasses("events")}>
                <MdEmojiEvents className="mr-0 text-2xl" />
                EVENTS
                <span className={getUnderlineClasses("events")} />
              </a>
            </li>


            <Link to="/Guides">
              <li className="relative group">
                <a className={getLinkClasses("guide")}>
                  GAME GUIDES
                  <FiArrowUpRight className="mr-0 text-2xl" />
                  <span className={getUnderlineClasses("guide")} />
                </a>
              </li>
            </Link>



            <li className="relative group">
              <a onClick={(e) => {e.preventDefault();scrollToDownload();}} className={getLinkClasses("download")}>
                <MdOutlineCloudDownload className="mr-0 text-2xl" />
                DOWNLOAD
                <span className={getUnderlineClasses("download")} />
              </a>
            </li>
          
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
