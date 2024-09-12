import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer'
import GuideNavBar from "../Components/GuideNavbar";
import GuidesArmor from '../assets/RF-ASSETS/ArmorCombination2.png';
import ArmorTypes from '../Pages/ArmorTypes'
import GuidesSG from '../assets/RF-ASSETS/GuideSG2.png';
import GuideWeapon from '../assets/RF-ASSETS/GuideWeapon2.png';
import PhoenixMythicalEgg from '../assets/RF-ASSETS/PhoenixMythicalEgg.jpg';
import button3D from '../assets/RF-ASSETS/PB-ASSETS/3dbutton.png';
import pb3D from '../assets/RF-ASSETS/PB-ASSETS/3dpb.png';
import elanButton from '../assets/RF-ASSETS/PB-ASSETS/elanbutton.png';
import elanPB from '../assets/RF-ASSETS/PB-ASSETS/elanpb.png';
import hqButton from '../assets/RF-ASSETS/PB-ASSETS/hqbutton.png';
import hqPB from '../assets/RF-ASSETS/PB-ASSETS/hqpb.png';
import setteButton from '../assets/RF-ASSETS/PB-ASSETS/settebutton.png';
import settePB from '../assets/RF-ASSETS/PB-ASSETS/settepb.png';
import settlementButton from '../assets/RF-ASSETS/PB-ASSETS/settlementbutton.png';
import settlementPB from '../assets/RF-ASSETS/PB-ASSETS/settlementpb.png';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';  // Import the Modal component

function Guides() {

  const combinationSectionRef = useRef(null);
  const dropListSectionRef = useRef(null);
  const farmSiteSectionRef = useRef(null);
  const serverRulesSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("combination");

  const [activePB, setActivePB] = useState(null);
  const handleButtonClick = (pbType) => {
    setActivePB(pbType); // Set the active background image based on button clicked
  };


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
        <div className= "h-screen w-screen bg-BG bg-no-repeat bg-full bg-center">
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

            <div className="h-[1180px] w-screen bg-BG5 bg-no-repeat bg-full bg-center" ref={dropListSectionRef}>
            <div className="relative h-full" id="dropListSection">
                  {/* Conditionally Render Background Images */}
                  {activePB === 'hq' && (
                    <img
                      src={hqPB}
                      alt="HQ Background"
                      className="absolute inset-0 h-full max-h-[90vh] w-full  max-w-[100vw]  mt-[140px] mx-auto object-cover z-0 
                      animate-slide-in-right"
                    />
                  )}

                  {activePB === 'settlement' && (
                    <img
                      src={settlementPB} 
                      alt="Settlement BG"
                      className="absolute inset-0 h-full max-h-[90vh] w-full  max-w-[100vw]  mt-[140px] mx-auto object-cover z-0
                      animate-slide-in-right"
                    />
                  )}

                  {activePB === 'sette' && (
                    <img
                      src={settePB} 
                      alt="Sette BG"
                      className="absolute inset-0 h-full max-h-[90vh] w-full  max-w-[100vw]  mt-[140px] mx-auto object-cover z-0
                      animate-slide-in-right"
                    />
                  )}

                  {activePB === 'elan' && (
                    <img
                      src={elanPB}
                      alt="Elan BG"
                      className="absolute inset-0 h-full max-h-[90vh] w-full  max-w-[100vw]  mt-[140px] mx-auto object-cover z-0
                      animate-slide-in-right "
                    />
                  )}

                  {activePB === '3d' && (
                    <img
                      src={pb3D} 
                      alt="3D BG"
                      className="absolute inset-0 h-full max-h-[90vh] w-full  max-w-[100vw]  mt-[140px] mx-auto object-cover z-0
                      animate-slide-in-right"
                    />
                  )}

                    {/* Buttons Section */}
                    <div className="absolute left-0 right-0 flex justify-center items-end space-x-2 bottom-[160px] z-10">
                      <img 
                        src={hqButton} 
                        alt="HQ Button" 
                        onClick={() => handleButtonClick('hq')} // Set HQ as active
                        className="hover:-translate-y-6 transition delay-150  cursor-pointer" 
                      />
                      <img 
                        src={settlementButton} 
                        alt="Settlement Button"
                        onClick={() => handleButtonClick('settlement')} // Set Settlement as active
                        className="hover:-translate-y-6 transition delay-150 cursor-pointer"
                      />
                      <img 
                      src={setteButton} 
                      alt="Sette Button"
                      onClick={() => handleButtonClick('sette')} // Handles button click
                      className="transform hover:scale-105 hover:-translate-y-6 transition-transform duration-300 ease-in-out cursor-pointer"
                    />
                        <img  
                        src={elanButton} 
                        alt="Elan Button"
                        onClick={() => handleButtonClick('elan')} // You can add similar logic for other buttons
                        className="hover:-translate-y-6 transition delay-150  cursor-pointer"
                      />
                      <img 
                        src={button3D} 
                        alt="3D Button"
                        onClick={() => handleButtonClick('3d')} // You can add similar logic for other buttons
                        className="hover:-translate-y-6 transition delay-150  cursor-pointer"
                      />
                    </div>
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