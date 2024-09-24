import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer'
import GuideNavBar from "../Components/GuideNavbar";
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

// Farm site
import setteButton2 from '../assets/RF-ASSETS/FARM-ASSETS/Settebutton2.png'
import setteFarm from '../assets/RF-ASSETS/FARM-ASSETS/sette.png'
import cauldronButton from '../assets/RF-ASSETS/FARM-ASSETS/cauldronbutton.png'
import cauldronFarm from '../assets/RF-ASSETS/FARM-ASSETS/cauldron.png';
import cragButton from '../assets/RF-ASSETS/FARM-ASSETS/cragbutton.png'
import cragFarm from '../assets/RF-ASSETS/FARM-ASSETS/crag.png'
import elanButton2 from '../assets/RF-ASSETS/FARM-ASSETS/elanbutton2.png'
import elanFarm from '../assets/RF-ASSETS/FARM-ASSETS/elan.png'
import etherButton from '../assets/RF-ASSETS/FARM-ASSETS/etherbutton.png'
import etherFarm from '../assets/RF-ASSETS/FARM-ASSETS/ether.png'

//Combination
import abilityExchangeBG from '../assets/RF-ASSETS/COMBI-ASSETS/ArmorAbilityExchange.jpg'
import abilityExchangeButton from '../assets/RF-ASSETS/COMBI-ASSETS/ArmorAbilityExchange.png'
import gpBG from '../assets/RF-ASSETS/COMBI-ASSETS/GP.jpg'
import gpButton from '../assets/RF-ASSETS/COMBI-ASSETS/GP.png'
import h1BG from '../assets/RF-ASSETS/COMBI-ASSETS/H1-H5.jpg'
import h1Button from '../assets/RF-ASSETS/COMBI-ASSETS/h1-h5.png'
import h11BG from '../assets/RF-ASSETS/COMBI-ASSETS/H11-H55.jpg'
import h11Button from '../assets/RF-ASSETS/COMBI-ASSETS/h11-h55.png'
import capeBG from '../assets/RF-ASSETS/COMBI-ASSETS/PHOENIXrebirthcape.jpg'
import capeButton from '../assets/RF-ASSETS/COMBI-ASSETS/PHOENIXREBIRTHCAPE.png'
import armorBG from '../assets/RF-ASSETS/COMBI-ASSETS/typecarmor.jpg'
import armorButton from '../assets/RF-ASSETS/COMBI-ASSETS/TypeCarmor.png'
import shieldBG from '../assets/RF-ASSETS/COMBI-ASSETS/typecshield.jpg'
import shieldButton from '../assets/RF-ASSETS/COMBI-ASSETS/TYPECSHIELD.png'
import weaponBG from '../assets/RF-ASSETS/COMBI-ASSETS/typecwep.jpg'
import weaponButton from '../assets/RF-ASSETS/COMBI-ASSETS/TypeCwep.png'

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
      } else if (dropListSectionTop <= height && dropListSectionTop >= -100) {
        setActiveTab("dropList");
      } else if (farmSiteSectionTop <= height && farmSiteSectionTop >= -5) {
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
            <div className="flex flex-col items-center justify-center h-screen w-full " ref={combinationSectionRef}>
              <div className="absolute top-[150px]" id="combinationSection">
                <p className="text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">Combination Guide</p>
              </div>

              <div className="flex mt-40 h-[250px] w-[200px] w-full justify-center items-center">
                <img src={abilityExchangeButton} 
                className ="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('exchange_modal').showModal()}/>

                <img src={gpButton} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('gp_modal').showModal()}/>

                <img src={h1Button} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('h1_modal').showModal()}/>

                <img src={h11Button} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('h11_modal').showModal()}/>
                
                 <img src={capeButton} 
                 className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                 onClick={()=>document.getElementById('cape_modal').showModal()}/>

                <img src={armorButton} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('armor_modal').showModal()}/>

                <img src={shieldButton} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('shield_modal').showModal()}/>

                <img src={weaponButton} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={()=>document.getElementById('weapon_modal').showModal()}/>

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

            <div className="h-[1180px] w-screen bg-BG6  bg-no-repeat bg-full bg-center" ref={farmSiteSectionRef}>
                <div className="relative flex items-center justify-center h-full" id="farmSiteSection">
                <img
          src={cauldronButton}
          className="h-[664px] mt-20 cursor-pointer"
          onClick={()=>document.getElementById('cauldron_modal').showModal()}
        />
        <img
          src={cragButton}
          className="h-[664px] mt-20 cursor-pointer"
          onClick={()=>document.getElementById('crag_modal').showModal()}
          
        />
        <img
          src={elanButton2}
          className="h-[664px] mt-20 cursor-pointer"
          onClick={()=>document.getElementById('elan_modal').showModal()}
        />
        <img
          src={etherButton}
          className="h-[664px] mt-20 cursor-pointer"
          onClick={()=>document.getElementById('ether_modal').showModal()}
        />
        <img
          src={setteButton2}
          className="h-[664px] mt-20 cursor-pointer"
          onClick={()=>document.getElementById('sette_modal').showModal()}
        />
                </div>
                
            </div>

            <div className="h-screen w-full bg-BG4 flex flex-col items-center justify-cneter " ref={serverRulesSectionRef}>
              <div className="" id="serverRulesSection">
                  <p className="mt-[100px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow">Server Rules</p>
              </div>


            
              <div className="overflow-x-auto w-3/4 bg-black/50 rounded-lg mt-10 mb-10 p-5">
                <table className="table text-emerald-300">
                  {/* head */}
                  <thead className="text-5xl text-white text-shadow-emeraldGlow font-bold">
                    <tr>
                      <th></th>
                      <th>Rules</th>
                      <th>Sanction</th>
                    </tr>
                  </thead>
                  <tbody className="text-xl">
                    {/* row 1 */}
                    <tr >
                      <th>1</th>
                      <td>Impersonating as an <strong>GM/ADMIN/STAFF</strong> or Using nicknames such as "GM", "ADMIN" is strictly prohibited</td>
                      <td>PERMANENT BAN, If the offense comited by the same person for the 2nd or 3rd time, it would tantamound to IP BAN.</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Promoting other Server In game is prohibited.</td>
                      <td>PERMANENT BAN and/or IP BAN (Subject to discretion of the ADMIN/GM/STAFF/)</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Abusing ITEM ERRORS / BUGS
                      EX.. (But not Limited To)-Duplicating an item and a like.-Errored items from Race Transfers / Donation without reporting</td>
                      <td> 3 Days - PERMANENT BAN.  ( The sanction is subject to the discretion of the ADMIN/GM/STAFF depending on the gravamen of the defense.)</td>
                    </tr>
                     {/* row 4 */}
                     <tr>
                      <th>4</th>
                      <td>Terrain Glitch to serve as an advantage from other players</td>
                      <td className="flex flex-col ">
                      <td>1ST: 7 Days Ban</td>
                      <td>2ND: 1 Month Ban</td>
                      <td>3RD: PERMANENT BAN</td>
                      <td>Note: If the player that was caught is using a Alt / Dummy Account, both of his main and alt account will receive the punishment ( We can trace it ).</td>
                      </td>
                    </tr>
                     {/* row 5 */}
                     <tr>
                      <th>5</th>
                      <td>Use of Third Party Programs such as Cheats that can Greatly Affect the game that are advantageous to other playeers are prohibited. Hacking or cheating in any manner would result to a penalty which commensurate the act/s</td>
                      <td> PERMANENT BAN AND /OR IP BAN</td>
                    </tr>
                     {/* row 6 */}
                     <tr>
                      <th>6</th>
                      <td>Illegal Name:
                      Nicknames containing "I" OR "L" Letters, I.E. "IIIIIII" or "LLLLL" </td>
                      <td> Name will be randomly changed or 7 Day - Permanent BAN, subject to the discretion of the ADMIN/GM/STAFF.</td>
                    </tr>
                     {/* row 7 */}
                     <tr>
                      <th>7</th>
                      <td>Insult, Threats or any form of Disrespect to an ADMIN/GM/STAFF.</td>
                      <td>PERMANENT BAN AND /OR IP BAN</td>
                    </tr>
                     {/* row 8 */}
                     <tr>
                      <th>8</th>
                      <td>Chaos Abuse on LOWBIES / LOWBIE KILLER</td>
                      <td className="flex flex-col">
                      <td>1ST: 12 HOURS BAN</td>
                      <td>2ND: 3 DAYS BAN:</td>
                      <td>3RD: 7 DAYS BAN AND SO ON
                      </td>
                      </td>
                    </tr>
                     {/* row 9 */}
                     <tr>
                      <th>9</th>
                      <td>Using Chaos potion during CHIP WAR</td>
                      <td className="flex flex-col">
                      <td>1ST: KICK IN GAME</td>
                      <td>2ND: 12 HOURS BAN</td>
                      <td>3RD: 3-7 DAYS BAN</td>
                      </td>
                    </tr>
                     {/* row 10 */}
                     <tr>
                      <th>10</th>
                      <td>PVP Point / CPT Feeding</td>
                      <td className="flex flex-col">
                      <td>1ST: 7 Days Ban</td>
                      <td>2ND: 15 Days Ban</td>
                      <td>3RD: PERMANENT BAN</td>
                      </td>
                    </tr>
                     {/* row 11 */}
                     <tr>
                      <th>11</th>
                      <td>Placing a NUKE, Guard Towers and Killing Players INSIDE CORE after HSK is safe is strictly prohibited.</td>
                      <td className="flex flex-col">
                      <td>1ST: 3 DAYS BAN & CPT WIPE ( CPT wipe is for councils who will nuke )</td>
                      <td>2ND: 7 DAYS BAN & CPT WIPE ( CPT wipe is for councils who will nuke )</td>
                      <td>3RD: 1 MONTH - PERMANENT BAN & CPT WIPE ( CPT wipe is for councils who will nuke )</td>
                      </td>
                    </tr>
                     {/* row 12 */}
                     <tr>
                      <th>12</th>
                      <td>Trash Buffing</td>
                      <td className="flex flex-col">
                      <td>1ST: 12 Hours Ban</td>
                      <td>2ND: 3 Days Ban</td>
                      <td>3RD: 7 Days - PERMANENT BAN</td>
                      </td>
                    </tr>
                     {/* row 13 */}
                     <tr>
                      <th>13</th>
                      <td>Safe Zone Debuffing or Healing while inside the Safe Zone</td>
                      <td className="flex flex-col">
                      <td>1ST: WARNING</td>
                      <td>2ND: 3 DAYS BAN</td>
                      <td>3RD: 7 DAYS - PERMANENT BAN</td>
                      </td>
                    </tr>
                     {/* row 14 */}
                     <tr>
                      <th>14</th>
                      <td>Tower Camping NEAR ANY SAFEZONE SPOTS (Elan / Sette / etc.) will receive the following sanction. (Unless those towers are intended to use while clashing).</td>
                      <td className="flex flex-col">
                      <td>1ST: 7 Days Ban</td>
                      <td>2ND: 15 DAYS BAN</td>
                      <td>3rd: 30 DAYS - PERMANENT BAN</td>
                      </td>
                    </tr>
                     {/* row 15 */}
                     <tr>
                      <th>15</th>
                      <td clasName="max-w-xl">
                      <td>RACE LEADER / RACE COUNCIL RULES</td>
                        <td className="flex flex-col">
                          <td>All appointed and elected councils must be dedicated to do their job as Race Councils</td>

                          <td>-Race Leaders must be active at PVP, Raid, Major PBs, and CW. Race Leaders must also attend at least 2 CW per day in order to completely fulfill their duty as a Leader.</td>

                          <td>-All councils must attend at least 2 CW per day, and should also cooperate in every PVP, Raid or Major PBs once the Race Leader demands the participation of the race. All councils must help their leader to lead their own race by cooperating and joining their Race Leader</td>
                          
                          <td><strong>Special Note:</strong> If a certain Race Leader / Council gets banned, we will NOT change any of those spots. Vote Wisely and take it seriously. Only Run for Archon if you're dedicated to lead your race and not just for your personal us</td>
                        </td>
                      </td>
                      <td className="flex flex-col mt-20">
                     <td>Race Leaders / Councils that are inactive will receive a punishment such as</td>
                      <td>1ST: 3 Days Ban + CPT Wipe</td>
                      <td>2ND: 7 Days ban + CPT Wipe</td>
                      <td>3RD: Perma Ban + CPT Wipe</td>
                      </td>
                    </tr>
                     {/* row 16 */}
                     <tr>
                      <th>16</th>
                      <td>Any form of trashtalks relating a person's family / relatives that are not connected to RF Phoenix server will not be tolerated.</td>
                      <td className="flex flex-col">
                      <td>1ST: 48 HOURS CHAT BLOCK</td>
                      <td>2ND: 7 DAYS BAN</td>
                      <td>3RD: 30 DAYS - PERMANENT BAN</td>
                      <td>Note: The admins will decide how heavy the trashtalk is. and the Admins will be the one to decide what sanction should be put against that violator.</td>
                      </td>
                    </tr>
                     {/* row 17 */}
                     <tr>
                      <th>17</th>
                      <td className="text-2xl font-bold">The player is responsible for his account details. Giving your personal account details to your friends / pilots is at your own risk. If they changed your password or sold your items / account. It will not be recovered by the staffs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>
            <Footer />
        </div>

           {/* Modals Combination */}
           <dialog id="exchange_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={abilityExchangeBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="gp_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={gpBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="h1_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={h1BG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="h11_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={h11BG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="cape_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={capeBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="armor_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={armorBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="shield_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={shieldBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="weapon_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={weaponBG} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* Modals PB */}
          <dialog id="cauldron_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={cauldronFarm} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="crag_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={cragFarm} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="elan_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={elanFarm} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="ether_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={etherFarm} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <dialog id="sette_modal" className="modal">
              <div className="modal-box w-full h-full max-w-[1600px] bg-transparent">
                <img src={setteFarm} className="w-full h-full object-cover" />
                  </div>
                <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          </>
  )
}

export default Guides