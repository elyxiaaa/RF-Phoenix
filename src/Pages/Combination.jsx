import React, { useState } from 'react';
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer'
import GuidesArmor from '../assets/RF-ASSETS/ArmorCombination2.png';
import ArmorTypes from '../Pages/ArmorTypes'
import GuidesSG from '../assets/RF-ASSETS/GuideSG2.png';
import GuideWeapon from '../assets/RF-ASSETS/GuideWeapon2.png';
import PhoenixMythicalEgg from '../assets/RF-ASSETS/PhoenixMythicalEgg.jpg';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';  // Import the Modal component

function Combination() {
 
    //Modal
  /* const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };
*/

  return (
    <div>
      <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover  bg-center`}>
        <NavBar />
        <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col"></div>
          
        <div className="absolute top-[150px] left-0 w-full flex justify-center items-center mt-[50px]">
          <p className="text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow animate-shine">
            COMBINATION GUIDE
          </p>
        </div>
            
           
        <div className="max-w-screen-2xl mx-auto flex justify-center items-center">
            
          <div className="flex">
          <Link to="/ArmorTypes">
          
            <img
              src={GuidesArmor}
              className="h-[350px] w-[307px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
              /*onClick={() => openModal(
                <img 
                  src={PhoenixMythicalEgg} 
                  alt="Phoenix Mythical Egg" 
                  style={{ width: 'auto', height: 'auto' }} 
                />
              )}
              alt="Armor Guide"*/ //Modal
            />
            </Link>
            <img
              src={GuidesSG}
              className="h-[350px] w-[307px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
              /*onClick={() => openModal(
                <img 
                  src={GuideWeapon} 
                  alt="Weapon Guide" 
                  style={{ width: '1600px', height: '900px' }} 
                />
              )}
              alt="SG Guide" */ //Modal
            />
            <img
              src={GuideWeapon}
              className="h-[350px] w-[307px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
              /*onClick={() => openModal(
                <img 
                  src={GuidesArmor} 
                  alt="Armor Guide" 
                  style={{ width: '1600px', height: '900px' }} 
                />
              )}
              alt="Weapon Guide" */ //Modal
            />
          </div>
        </div>
      </div>

      <div className="h-screen bg-black"></div>
      <div>
          <Footer/>
          </div>
          
      {/* Modal */}
       <Modal 
      //  isOpen={isModalOpen} 
       // onClose={closeModal} 
       // content={modalContent} 
      />
    </div>

      
  );
}

export default Combination;
