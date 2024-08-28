import React, { useState } from 'react';
import pLogo from '../assets/RF-ASSETS/Logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiGuideFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { PiFarm } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

function GuideNavBar({ activeTab }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getLinkClass = (tabName) =>
    activeTab === tabName
      ? "relative text-emerald-500 transition-colors duration-300 cursor-pointer"
      : "relative text-base-200 transition-colors duration-300 hover:text-emerald-500 cursor-pointer";

  const getUnderlineClass = (tabName) =>
    activeTab === tabName
      ? "absolute left-0 bottom-0 block w-full h-[1px] bg-emerald-500 shadow-[0px_0px_10px_2px_rgba(16,185,129,0.8)] transition-all duration-300"
      : "absolute left-0 bottom-0 block w-full h-[1px] bg-transparent group-hover:bg-emerald-500 group-hover:shadow-[0px_0px_10px_2px_rgba(16,185,129,0.8)] transition-all duration-300";

  return (
    <>
      <div className="navbar bg-black fixed top-0 w-full z-50">
        <div className="navbar-start">
          <RouterLink to="/">
            <img src={pLogo} className='object-cover w-[150px] h-[100px] ml-[100px]' alt="Logo" />
          </RouterLink>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-base-200 font-Cinzel hidden lg:flex space-x-5">
            <li className="relative group">
              <ScrollLink
                to="combinationSection"
                smooth={true}
                duration={500}
                offset={-200}
                className={getLinkClass("combination")}
              >
                <RiGuideFill />
                COMBINATION
                <span className={getUnderlineClass("combination")} />
              </ScrollLink>
            </li>

            <li className="relative group">
              <ScrollLink
                to="dropListSection"
                smooth={true}
                duration={500}
                offset={-100}
                className={getLinkClass("dropList")}
              >
                <GrResources />
                DROP LIST
                <span className={getUnderlineClass("dropList")} />
              </ScrollLink>
            </li>

            <li className="relative group">
              <ScrollLink
                to="farmSiteSection"
                smooth={true}
                duration={500}
                offset={-100}
                className={getLinkClass("farmSite")}
              >
                <PiFarm/>
                FARM SITE
                <span className={getUnderlineClass("farmSite")} />
              </ScrollLink>
            </li>

            <li className="relative group">
              <ScrollLink
                to="serverRulesSection"
                smooth={true}
                duration={500}
                offset={-100}
                className={getLinkClass("serverRules")}
              >
                <IoIosWarning />
                SERVER RULES
                <span className={getUnderlineClass("serverRules")} />
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
        <div className="dropdown dropdown-end block lg:hidden mb-5">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <a className="text-4xl text-base-100"><GiHamburgerMenu/></a>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow font-extrabold text-md text-gray-900 font-Cinzel">

            <li className="relative group">
                <ScrollLink
                  to="combinationSection"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  className={getLinkClass("combination")}
                >
                  COMBINATION
                  <span className={getUnderlineClass("combination")} />
                </ScrollLink>
              </li>

              <li className="relative group">
                <ScrollLink
                  to="dropListSection"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={getLinkClass("dropList")}
                >
                  DROP LIST
                  <span className={getUnderlineClass("dropList")} />
                </ScrollLink>
              </li>

              <li className="relative group">
              <ScrollLink
                to="farmSiteSection"
                smooth={true}
                duration={500}
                offset={-100}
                className={getLinkClass("farmSite")}
              >
                FARM SITE
                <span className={getUnderlineClass("farmSite")} />
              </ScrollLink>
              </li>

              <li className="relative group">
              <ScrollLink
                to="serverRulesSection"
                smooth={true}
                duration={500}
                offset={-100}
                className={getLinkClass("serverRules")}
              >
                SERVER RULES
                <span className={getUnderlineClass("serverRules")} />
              </ScrollLink>
               </li>


          </ul>
        </div>
        
      </div>
    </>
  );
}

export default GuideNavBar;
