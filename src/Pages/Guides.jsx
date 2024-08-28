import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer'
import GuideNavBar from "../Components/GuideNavbar";
import GuidesArmor from '../assets/RF-ASSETS/ArmorCombination2.png';
import ArmorTypes from '../Pages/ArmorTypes'
import GuidesSG from '../assets/RF-ASSETS/GuideSG2.png';
import GuideWeapon from '../assets/RF-ASSETS/GuideWeapon2.png';
import PhoenixMythicalEgg from '../assets/RF-ASSETS/PhoenixMythicalEgg.jpg';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';  // Import the Modal component

function Guides() {

  const combinationSectionRef = useRef(null);
  const dropListSectionRef = useRef(null);
  const farmSiteSectionRef = useRef(null);
  const serverRulesSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("combination");

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;

      const combinationSectionTop = combinationSectionRef.current.getBoundingClientRect().top;
      const dropListSectionTop = dropListSectionRef.current.getBoundingClientRect().top;
      const farmSiteSectionTop = farmSiteSectionRef.current.getBoundingClientRect().top;
      const serverRulesSectionTop = serverRulesSectionRef.current.getBoundingClientRect().top;

      if (combinationSectionTop <= height && combinationSectionTop >= 0) {
        setActiveTab("combination");
      } else if (dropListSectionTop <= height && dropListSectionTop >= 0) {
        setActiveTab("dropList");
      } else if (farmSiteSectionTop <= height && farmSiteSectionTop >= 0) {
        setActiveTab("farmSite");
      } else if (serverRulesSectionTop <= height && serverRulesSectionTop >= 0) {
        setActiveTab("serverRules");
      } else {
        setActiveTab("");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <>
        <div className= "h-screen w-full bg-BG bg-no-repeat bg-cover bg-center">
          <GuideNavBar activeTab={activeTab}/>
            <div className="flex flex-col items-center justify-center h-screen w-full" ref={combinationSectionRef}>
              <div className="absolute top-[150px]" id="combinationSection">
                <p className="text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">Combination Guide</p>
              </div>

              <div className="flex h-[350px] w-[300px] justify-center ">
                <img src={GuidesArmor} className="cursor-pointer transform transition-transform duration-300 hover:scale-105"/>
                <img src={GuidesSG} className="cursor-pointer transform transition-transform duration-300 hover:scale-105"/>
                <img src={GuideWeapon} className="cursor-pointer transform transition-transform duration-300 hover:scale-105"/>
              </div>
            </div>

            <div className="h-screen w-full bg-emerald-700 flex flex-col items-center justify-cneter" ref={dropListSectionRef}>
              <div className="" id="dropListSection">
                  <p className="mt-[100px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">DropList</p>
              </div>

              <div className="">
                  {/** New Content Here **/}
              </div>
            </div>

            <div className="h-screen w-full bg-emerald-600 flex flex-col items-center justify-cneter " ref={farmSiteSectionRef}>
              <div className="" id="farmSiteSection">
                  <p className="mt-[100px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">FarmSite</p>
              </div>

              <div className="">
                  {/** New Content Here **/}
              </div>
            </div>

            <div className="h-screen w-full bg-emerald-700 flex flex-col items-center justify-cneter " ref={serverRulesSectionRef}>
              <div className="" id="serverRulesSection">
                  <p className="mt-[100px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">Server Rules</p>
              </div>

              <div className="">
                  {/** New Content Here **/}
              </div>
            </div>
            <Footer />
        </div>
       
       
        
          </>
  )
}

export default Guides