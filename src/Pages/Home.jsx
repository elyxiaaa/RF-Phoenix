import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CardEvents from '../Components/CardEvents';
import txtImage from '../assets/RF-ASSETS/Text.png';
import dcImage from '../assets/RF-ASSETS/DCicon.png';
import fbImage from '../assets/RF-ASSETS/FBicon.png';
import lowerLeft from '../assets/RF-ASSETS/Left.png';
import lowerMid from '../assets/RF-ASSETS/Middle.png';
import lowerRight from '../assets/RF-ASSETS/Right.png';
import topKiller from '../assets/RF-ASSETS/TopKiller.png';
import totalPlayer from '../assets/RF-ASSETS/TotalPlayers.png';
import chipWarStatus from '../assets/RF-ASSETS/ChipWarStatus.png';
import newPlayer from '../assets/RF-ASSETS/newplayer.png';
import Item from '../assets/RF-ASSETS/item.png'
import UIsection from '../assets/RF-ASSETS/UIsection.png'
import UiButton from '../assets/RF-ASSETS/button.png'
import cashShop from '../assets/RF-ASSETS/Cashshop.png'
import events from '../assets/RF-ASSETS/events.png'
import accretiaIcon from '../assets/RF-ASSETS/AccretiaIcon.jpg'
import bellatoIcon from '../assets/RF-ASSETS/BellatoIcon.jpg'
import coraIcon from '../assets/RF-ASSETS/CoraIcon.jpg'
import { FaGoogleDrive } from "react-icons/fa";
import { SiMega } from "react-icons/si";
import { SiMediafire } from "react-icons/si";

function Home() {
  const [totalPlayers, setTotalPlayers] = useState();
  const [serverStatus, setServerStatus] = useState()
  const [chipAcc, setChipAcc] = useState();
  const [chipBcc, setChipBcc] = useState();
  const [chipCcc, setChipCcc] = useState();
  const [cbName, setCbName] = useState();
  const [cbRace, setCbRace] = useState();
  const [cbStatus, setCbStatus] = useState();
  const [winRace, setWinRace] = useState();
  const [killer, setKiller] = useState([]);
  const [orePercent, setOrepercent] = useState();
  const homeSectionRef = useRef(null); // Added ref for Home section
  const eventsSectionRef = useRef(null);
  const leaderboardSectionRef = useRef(null);
  const newbieRewardsSectionRef = useRef(null);
  const donationSectionRef = useRef(null);
  const interfaceSectionRef = useRef(null);
  const downloadSectionRef = useRef(null); // Added ref for Download section
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isHomeAnimationReset, setIsHomeAnimationReset] = useState(false);
  const [isLeaderboardAnimationReset, setIsLeaderboardAnimationReset] = useState(false);
  const [isNewbieRewardsAnimationReset, setIsNewbieRewardsAnimationReset] = useState(false);
  const [isInterfaceAnimationReset, setIsInterfaceAnimationReset] = useState(false);
  const [isDonationAnimationReset, setIsDonationAnimationReset] = useState(false);
  const [isEventAnimationReset, setIsEventAnimationReset] = useState(false);
  const raceImages = {
    Accretia: accretiaIcon,
    Bellato: bellatoIcon,
    Cora: coraIcon,
  };

  console.log(killer)
  useEffect(() => {
    const totalPlayer = async () => {
      const response = await fetch('https://phoenix.gamecp.net/web_api/?do=satu');
      const json = await response.json();

      if (response.ok) {

        const onlinePlayers = json.result.online_field;
          if (onlinePlayers >= 10) {
            setTotalPlayers(onlinePlayers);
          } else {
            setTotalPlayers(onlinePlayers);
          }
        
        let updatedServerStatus = json.result.status_game;
          if (updatedServerStatus === 'OFFLINE') {
            updatedServerStatus = 'MAINTENANCE';
          }
            setServerStatus(updatedServerStatus);

        let updatedCbStatus = json.result.cb_status;
            if (updatedCbStatus === 'GOAL') {
              updatedCbStatus = 'DELIVERED';
            } else if (updatedCbStatus === 'WAFAT') {
              updatedCbStatus = 'FAILED';
            } else if (updatedCbStatus === 'KABUR') {
              updatedCbStatus = 'ONGOING';
            }
            setCbStatus(updatedCbStatus);
        
        let updatedWinRace = json.result.win_race;
            if (updatedWinRace === 'Accretia') {
              updatedWinRace = 'ACCRETIA';
            } else if (updatedWinRace === 'Bellato') {
              updatedWinRace = 'BELLATO';
            } else if (updatedWinRace === 'Cora') {
              updatedWinRace = 'CORA';
            }
            setWinRace(updatedWinRace);

        setChipAcc(json.result.chip_a);
        setChipBcc(json.result.chip_b);
        setChipCcc(json.result.chip_c);
        setCbName(json.result.cb_name);
        setCbRace(json.result.cb_race);
        setOrepercent(json.result.orepercent);
        console.log(json)
      }
    };

    const topKillers = async () => {
      const response = await fetch('https://phoenix.gamecp.net/web_api/?do=dua');
      const json = await response.json();

      if (response.ok) {
        setKiller(json.result.killer);
      
      }
    };

    topKillers();
    totalPlayer();
  }, []);

    


  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
  
      // Get section offsets
      const homeSectionTop = homeSectionRef.current.getBoundingClientRect().top;
      const eventsSectionTop = eventsSectionRef.current.getBoundingClientRect().top;
      const eventsSectionBottom = eventsSectionRef.current.getBoundingClientRect().bottom;
      const leaderboardSectionTop = leaderboardSectionRef.current.getBoundingClientRect().top;
      const donationSectionTop = donationSectionRef.current.getBoundingClientRect().top;
      const newbieRewardsSectionTop = newbieRewardsSectionRef.current.getBoundingClientRect().top;
      const interfaceSectionTop = interfaceSectionRef.current.getBoundingClientRect().top;
      const downloadSectionTop = downloadSectionRef.current.getBoundingClientRect().top; // Add this for download section

  
      // Determine which section is in view
      if (homeSectionTop <= height && homeSectionTop >= 0) {
        setActiveTab("home");
      } else if (downloadSectionTop <= height && downloadSectionTop >= 0) { // Add check for download section
        setActiveTab("download");
      } else if (donationSectionTop <= height && donationSectionTop >= 0) {
        setActiveTab("donation");
      } else if (eventsSectionTop <= height && eventsSectionBottom >= 0) {
        setActiveTab("events");
      } else if (leaderboardSectionTop <= height && leaderboardSectionTop >= 0) {
        setActiveTab("leaderboard");
      } else if (newbieRewardsSectionTop <= height && newbieRewardsSectionTop >= 0) {
        setActiveTab("newbieRewards");
      } else if (interfaceSectionTop <= height && interfaceSectionTop >= 0) {
        setActiveTab("interface");
      } else {
        setActiveTab(""); // No section is currently in view
      }
      
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case homeSectionRef.current:
              setIsHomeAnimationReset(true);
              break;
            case leaderboardSectionRef.current:
              setIsLeaderboardAnimationReset(true);
              break;
            case newbieRewardsSectionRef.current:
              setIsNewbieRewardsAnimationReset(true);
              break;
            case donationSectionRef.current:
              setIsDonationAnimationReset(true);
              break;
              case interfaceSectionRef.current:
              setIsInterfaceAnimationReset(true);
              break;
            default:
              break;
          }
        } else {
          switch (entry.target) {
            case homeSectionRef.current:
              setIsHomeAnimationReset(false);
              break;
            case leaderboardSectionRef.current:
              setIsLeaderboardAnimationReset(false);
              break;
            case newbieRewardsSectionRef.current:
              setIsNewbieRewardsAnimationReset(false);
              break;
            case donationSectionRef.current:
              setIsDonationAnimationReset(false);
              break;
            case interfaceSectionRef.current:
              setIsInterfaceAnimationResetReset(false);
              break;
            default:
              break;
          }
        }
      },
      { threshold: 0.1 }
    );
  
    
    if (homeSectionRef.current) {
      observer.observe(homeSectionRef.current);
    }
    if (leaderboardSectionRef.current) {
      observer.observe(leaderboardSectionRef.current);
    }
    if (donationSectionRef.current) {
      observer.observe(donationSectionRef.current);
    }
    if (eventsSectionRef.current) {
      observer.observe(eventsSectionRef.current);
    }
    if (newbieRewardsSectionRef.current) {
      observer.observe(newbieRewardsSectionRef.current);
    }
    if (interfaceSectionRef.current) {
      observer.observe(interfaceSectionRef.current);
    }
    return () => {
      if (homeSectionRef.current) {
        observer.unobserve(homeSectionRef.current);
      }
      if (leaderboardSectionRef.current) {
        observer.unobserve(leaderboardSectionRef.current);
      }
      if (donationSectionRef.current) {
        observer.unobserve(donationSectionRef.current);
      }
      if (eventsSectionRef.current) {
        observer.unobserve(eventsSectionRef.current);
      }
      if (newbieRewardsSectionRef.current) {
        observer.unobserve(newbieRewardsSectionRef.current);
      }
      if (interfaceSectionRef.current) {
        observer.unobserve(interfaceSectionRef.current);
      }
    };

  }, []);

  const scrollToDownload = () => {
    if (downloadSectionRef.current) {
      downloadSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  const scrollToEvents = () => {
  if (eventsSectionRef.current) {
    eventsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

const scrollToLeaderboard = () => {
  if (leaderboardSectionRef.current) {
    leaderboardSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

const scrollToNewbieRewards = () => {
  if (newbieRewardsSectionRef.current) {
    newbieRewardsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

const scrollToInterface = () => {
  if (interfaceSectionRef.current) {
    interfaceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

const scrollToDonation = () => {
  if (donationSectionRef.current) {
    donationSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};


  return (
    <>
      <div className="h-[1080px] w-full overflow-hidden bg-BG bg-no-repeat bg-full bg-center" ref={homeSectionRef}>
      <NavBar 
    activeTab={activeTab} 
    scrollToEvents={scrollToEvents} 
    scrollToLeaderboard={scrollToLeaderboard} 
    scrollToNewbieRewards={scrollToNewbieRewards} 
    scrollToDonation={scrollToDonation} 
    scrollToDownload={scrollToDownload}
  />
        <div className="max-w-screen-2xl  mx-auto my-[130px] flex flex-col">
          
            <img src={txtImage} className={`object-fill h-[350px] w-[650px] ${isHomeAnimationReset ?  'animate-fadeIn' : ''}`} alt="Text"  />
    
          <div className="flex ml-[274px]">
            <a href="">
              <img src={dcImage} className={`h-[50px] w-[50px] ${isHomeAnimationReset ?  'animate-slide-in-left' : ''}`} alt="Discord" />
            </a>

            <a href="https://www.facebook.com/RFPhoenix55">
              <img src={fbImage} className={`h-[50px] w-[50px] ${isHomeAnimationReset ?  'animate-slide-in-right' : ''}`} alt="Facebook" />
            </a>
          </div>
          </div>
          <div className="flex items-center justify-center">
            <h2 className={`text-3xl font-COP1 font-bold text-white text-shadow-emeraldGlow mb-10 ${isHomeAnimationReset ? 'animate-fadeIn' : ''}`}>JOIN THE BATTLEFIELD</h2>
          </div>
          <div className="flex h-[80px] w-[auto] justify-center items-center">
            <a href="https://phoenix.gamecp.net/index.php" className="block">
              <img src={lowerLeft} className={`h-full w-auto  transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Left 
              ${isHomeAnimationReset ?  'animate-slide-in-left' : ''}`} />
            </a>

            <img src={lowerMid} className="h-full w-auto transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Middle" />

            <div className="relative hover:cursor-pointer">
              <img src={lowerRight} className={`relative h-full w-auto  transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Right 
              ${isHomeAnimationReset ?  'animate-slide-in-right' : ''}`} onClick={scrollToDownload}/>
            </div>
          </div>
      </div>
        {/** LEADERBOARD SECTION **/}
      <div className="h-full w-full overflow-hidden bg-BG2 bg-no-repeat bg-full bg-center" ref={leaderboardSectionRef}>
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-4xl font-COP1 font-bold text-white text-shadow-emeraldGlow ${isLeaderboardAnimationReset ? 'animate-slide-up' : ''}`}>
      LEADERBOARD
    </p>
  </div>

  <div className="relative flex w-full overflow-hidden justify-center items-center  mt-[10px]">
    <div className={`flex-col mb-[200px] ${isLeaderboardAnimationReset ? 'animate-slide-in-left' : ''}`}>

      <div className="relative flex transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute flex ml-[20%] mt-[90px] w-full font-bold font-COP1">
          <p className="text-cyan-300 text-shadow-cyanGlow text-lg">STATUS:</p>
          <p className={serverStatus === 'ONLINE' ? 'text-green-500 text-shadow-emeraldGlow text-lg ml-[20%] underline underline-offset-4' : 'text-red-500 text-shadow-redGlow text-lg ml-[20%] underline underline-offset-4'}>
            {serverStatus ? serverStatus : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>

        <div className="absolute flex ml-[20%] mt-[140px] w-full text-2xl font-bold font-COP1">
          <p className="text-cyan-300 text-shadow-cyanGlow text-lg">USERS:</p>
          <p className={`text-lg ml-[23%] text-green-500 text-shadow-emeraldGlow underline underline-offset-4 ${totalPlayers}`}>
            {totalPlayers ? totalPlayers : <span className="loading loading-bars loading-md"></span>}
          </p>
        </div>

      <div className=" flex mt-[100px]">
        <p className="absolute hidden sm:block ml-[20%] mt-[90px] text-cyan-300 text-shadow-cyanGlow text-lg font-bold font-COP1">ORE:</p>
      <div className="absolute hidden sm:block ml-[20%] mt-[130px] w-[200px] h-[20px] bg-gray-500 rounded">
        <div className="h-full bg-orange-400 rounded" 
          style={{ width: `${orePercent}%` }}/>
        <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-COP1 mt-[-18px]">{orePercent ? `${orePercent}%` : <span className="loading loading-bars loading-sm"></span>}</p>
        </div>          

      </div>
            <img src={totalPlayer} className="h-[259px] w-[425px] mt-[30px]" alt="Total Players" />
      </div>


        
           
    <div className="relative flex transition-transform duration-500 ease-in-out transform hover:scale-105 mt-[20px]">
        <div className="absolute flex ml-[15%] mt-[60px] w-full font-bold font-COP1">
          <p className="text-xl text-cyan-300 text-shadow-cyanGlow">WIN RACE:</p>
          <p className={`ml-[15%] text-xl text-shadow-blackGlow text-green-500 underline underline offset-4 ${winRace}`}>
            {winRace ? winRace : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>
                  
           <div className="absolute ml-[15%] mt-[100px] w-full font-bold font-COP1">
              <div className="grid grid-cols-2 ">
                
                {/* CHIP BREAKER Row */}
                <div className="text-lg text-cyan-300 text-shadow-cyanGlow">
                  BREAKER:
                </div>
                <div className="text-lg text-green-500 underline underline-offset-4">
                  {cbName ? cbName : <span className="loading loading-bars"></span>}
                </div>

                {/* CB STATUS Row */}
                <div className="text-lg text-cyan-300 text-shadow-cyanGlow ">
                  CB STATUS:
                </div>
                <div className="text-lg text-green-500 text-shadow-blackGlow underline underline-offset-4">
                  {cbStatus ? cbStatus : <span className="loading loading-bars"></span>}
                </div>

              </div>
          </div>


<div className="relative flex mt-[80px]">
 {/** ACCRETIA STATUS **/}
      <p className="absolute hidden sm:block ml-20 mt-[100px] text-cyan-300  text-xl font-bold font-COP1">ACCRETIA:</p>
      <div className="absolute hidden sm:block ml-20 mt-[130px] w-[230px] h-[20px] bg-gray-500 rounded">
        <div 
          className="h-full bg-orange-400 rounded" 
          style={{ width: `${chipAcc}%` }}/>
        <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-COP1 mt-[-18px]">{chipAcc ? `${chipAcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
      </div>
      {/** BELLATO STATUS **/}
      <p className="absolute hidden sm:block ml-20 mt-[160px] text-cyan-300 text-xl font-bold font-COP1">BELLATO:</p>
      <div className="absolute hidden sm:block ml-20 mt-[190px] w-[230px] h-[20px] bg-gray-500 rounded">
        <div 
          className="h-full bg-orange-400 rounded" 
          style={{ width: `${chipBcc}%` }}/>
        <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-Phoenix2 mt-[-18px]">{chipBcc ? `${chipBcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
      </div>
      {/** CORA STATUS STATUS **/}
      <p className="absolute hidden sm:block ml-20 mt-[220px] text-cyan-300  text-xl font-bold font-COP1">CORA:</p>
      <div className="absolute hidden sm:block ml-20 mt-[250px] w-[230px] h-[20px] bg-gray-500 rounded">
        <div 
          className="h-full bg-orange-400 rounded" 
          style={{ width: `${chipCcc}%` }}/>

        <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-COP1 mt-[-18px]">{chipCcc ? `${chipCcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
      </div>
      </div>
          
        <div className="relative flex">
         <img src={chipWarStatus} className="h-[400px] w-[425px] " alt="Chip War Status" />
         </div>
    </div>
    </div>

    <div className="transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className={`flex mb-[160px] ${isLeaderboardAnimationReset ? 'animate-slide-in-right' : ''}`}> 
        {/* TopKiller Image */}
        <img 
          src={topKiller} 
          className="h-auto max-h-[60vh] w-auto max-w-[80vw] md:max-h-[736px] md:max-w-[428px] mx-auto md:ml-[300px] " 
          alt="Top Killer" 
        />

          {/* Data Section Positioned on Top */}
          <div className="absolute top-[55px] left-[330px] w-1/2 h-full flex flex-col justify-start ">
            {/* Header Section */}
            <div className="flex justify-between items-center bg-opacity-50 bg-black rounded-t-xl p-3">
              <div className="w-1/2 text-left text-cyan-300 text-shadow-cyanGlow font-bold font-COP1 text-sm">TOP KILLERS</div>
              <div className="w-1/4 text-center text-green-500 text-shadow-emeraldGlow font-bold font-COP1 text-sm">KILLS</div>
              <div className="w-1/4 text-center text-orange-400 text-shadow-orangeGlow font-bold font-COP1 text-sm">DEATHS</div>
            </div>

                  {/* Killers Data Section */}
                  <div className="mt-2 p-2 bg-opacity-50 bg-black rounded">
                    {killer && killer.map((killer, index) => (
                      <div key={index} className="flex justify-between items-center px-2 py-2 border-b border-gray-600">
                        <div className="w-1/2 flex items-center">
                          <img
                            src={raceImages[killer.race] || defaultImage}
                            alt=""
                            className="h-[30px] w-[30px] object-contain mr-2"
                          />
                          <span className="text-cyan-300 text-shadow-cyanGlow text-sm font-semibold">{killer.name}</span>
                        </div>

                        <div className="w-1/4 text-center text-green-500 text-shadow-emeraldGlow text-sm">
                          {killer.kill}
                        </div>

                        <div className="w-1/4 text-center text-orange-400 text-shadow-orangeGlow text-sm">
                          {killer.dead}
                        </div>
                      </div>
                    ))}
                  </div>
          </div>
       </div>
     </div>
    

  </div>
  </div>



<div className="h-screen w-full flex bg-BG3 bg-no-repeat bg-full bg-center" ref={newbieRewardsSectionRef}>
  <div className="relative flex justify-center items-center">
    <div className="left-0 mb-[35px] w-full flex justify-center items-center">
      <img src={newPlayer} className={`h-[1409px] w-screen mt-[20px] mx-auto overflow-hidden flex flex-col ${isNewbieRewardsAnimationReset ? 'animate-slide-up' : ''}`}/>
      <img src={Item} className={`h-[382px] w-[905px] absolute hidden lg:block right-20 mb-[300px]  ${isNewbieRewardsAnimationReset ? 'animate-fadeIn' : ''}`}/>
   </div>
  </div>
</div>

{/**Interface Section */}
<div className="h-fit w-full overflow-hidden flex py-20 bg-black bg-no-repeat bg-center" ref={interfaceSectionRef}>  
  <div className="relative flex justify-center items-center">
    <img src={UIsection} className={`h-auto w-screen ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    <Link to="/Interface">
    <img src={UiButton} className={`absolute hidden sm:block right-[190px] bottom-[50px]  ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    </Link>
  </div>
  </div>

  <div className="h-fit w-full bg-black bg-no-repeat bg-cover bg-center" ref={donationSectionRef}>
<div className="relative flex justify-center items-center">
    <img src={cashShop} className="relative h-fit w-screen"/>

  </div>
</div>

<div ref={eventsSectionRef} className="h-screen w-full overflow-hidden bg-BG4 bg-no-repeat bg-cover bg-center">
    <div className="relative flex flex-col justify-center items-center">
        <div className="absolute mt-[100px]">
        <CardEvents/>
        </div>
        <img src={events} className="mt-[140px]"/>
    </div>
</div>


  <div className="h-fit w-full overflow-hidden bg-BG6 bg-no-repeat bg-cover bg-center p-4" ref={downloadSectionRef}>
    <div className="flex items-center justify-center">
      <h2 className="text-4xl text-white font-bold font-COP1 text-shadow-emeraldGlow">FULL CLIENT</h2>
    </div>
    <div className="flex items-center justify-center mt-5">
    <div className="relative flex gap-10 justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1lZKNaZW71IEvC8cMlL2Y3x486BTzPdpO/view"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold font-COP1 text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
        <FaGoogleDrive />
          GDRIVE
        </a>
        <a
          href="https://www.mediafire.com/file/x48ld4u0vu5j1ru/RF_Phx_2232.rar/file"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold font-COP1 text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
        <SiMediafire />
          MEDIAFIRE
        </a>
        <a
          href="https://mega.nz/file/l393RSjR#591lKuUvObKIMI0no4nRMOkW4OaqD9ZNYvbjpGiLvNw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[200px] bg-transparent font-bold font-COP1 text-emerald-400 border border-emerald-400 text-xl px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2">
          <SiMega />
          MEGA
        </a>
      </div>
    </div>
  </div>


      <Footer />
    </>
  );
}

export default Home;


     