import React, { useState } from 'react';
import NavBar from "../Components/NavBar";
import GuidesArmor from '../assets/RF-ASSETS/ArmorCombination2.png';
import GuidesSG from '../assets/RF-ASSETS/GuideSG2.png';
import GuideWeapon from '../assets/RF-ASSETS/GuideWeapon2.png';
import PhoenixMythicalEgg from '../assets/RF-ASSETS/PhoenixMythicalEgg.jpg';



function ArmorTypes () {
    return (
        <div>
      <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover  bg-center`}>
        <NavBar />
        <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col"></div>
          
        <div className="absolute top-[150px] left-0 w-full flex justify-center items-center mt-[50px]">
          <p className="text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow animate-shine">
            ARMOR COMBINATION
          </p>
        </div>
     
    </div>
    </div>
    )
}

export default ArmorTypes