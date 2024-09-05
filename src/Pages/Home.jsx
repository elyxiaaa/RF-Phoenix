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
  const homeSectionRef = useRef(null); // Added ref for Home section
  const eventsSectionRef = useRef(null);
  const leaderboardSectionRef = useRef(null);
  const newbieRewardsSectionRef = useRef(null);
  const donationSectionRef = useRef(null);
  const interfaceSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isHomeAnimationReset, setIsHomeAnimationReset] = useState(false);
  const [isLeaderboardAnimationReset, setIsLeaderboardAnimationReset] = useState(false);
  const [isNewbieRewardsAnimationReset, setIsNewbieRewardsAnimationReset] = useState(false);
  const [isInterfaceAnimationReset, setIsInterfaceAnimationReset] = useState(false);
  const [isDonationAnimationReset, setIsDonationAnimationReset] = useState(false);
  const [isEventAnimationReset, setIsEventAnimationReset] = useState(false);

  useEffect(() => {
    const totalPlayer = async () => {
      const response = await fetch('https://phoenix.gamecp.net/web_api/?do=satu');
      const json = await response.json();

      if (response.ok) {

        const onlinePlayers = json.result.online_field;
          if (onlinePlayers >= 10) {
            setTotalPlayers(onlinePlayers + 80);
          } else {
            setTotalPlayers(onlinePlayers);
          }
        setServerStatus(json.result.status_game);
        setChipAcc(json.result.chip_a);
        setChipBcc(json.result.chip_b);
        setChipCcc(json.result.chip_c);
        setCbName(json.result.cb_name);
        setCbRace(json.result.cb_race);
        setCbStatus(updatedCbStatus);
          /*if (data.result.cb_status == "DELIVERING") {

          } else if (data.result.cb_status == "FAILED") { 
          
          } else if (data.result.cb_status == "DELIVERED") {
          
          }*/
        let updatedCbStatus = json.result.cb_status;
            if (updatedCbStatus === 'GOAL') {
                updatedCbStatus = 'SUCCESS';
            } else if (updatedCbStatus === 'WAFAT') {
              updatedCbStatus = 'FAILED';
            } else if (updatedCbStatus === 'KABUR') {
              updatedCbStatus = 'RUNNING';
            }

        setWinRace(json.result.win_race);
        console.log(json)
      }
    };

    const topKillers = async () => {
      const response = await fetch('https://phoenix.gamecp.net/web_api/?do=dua');
      const json = await response.json();

      if (response.ok) {
        console.log(json)
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
      
  
      // Determine which section is in view
      if (homeSectionTop <= height && homeSectionTop >= 0) {
        setActiveTab("home");
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
      <div className="h-screen w-screen bg-BG bg-no-repeat bg-full bg-center" ref={homeSectionRef}>
        <NavBar activeTab={activeTab} scrollToEvents={scrollToEvents} scrollToLeaderboard={scrollToLeaderboard} scrollToNewbieRewards={scrollToNewbieRewards} scrollToDonation={scrollToDonation} />
        <div className="max-w-screen-2xl mx-auto my-[130px] flex flex-col">
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

          <div className="relative flex justify-center items-center mt-[100px]">
            <p className="absolute top-0 mt-[-20px] text-4xl font-Platino font-bold text-white text-shadow-emeraldGlow animate-shine">
              JOIN THE BATTLEFIELD
            </p>

            <a href="https://phoenix.gamecp.net/index.php" className="block">
              <img src={lowerLeft} className={`h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Left 
              ${isHomeAnimationReset ?  'animate-slide-in-left' : ''}`} />
            </a>

            <img src={lowerMid} className="h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Middle" />

            <a href="" className="relative">
              <img src={lowerRight} className={`h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Right 
              ${isHomeAnimationReset ?  'animate-slide-in-right' : ''}`} />
            </a>
          </div>
        
      </div>
        {/** LEADERBOARD SECTION **/}
      <div className="h-screen w-screen bg-BG2 bg-no-repeat bg-full bg-center" ref={leaderboardSectionRef}>
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-4xl font-Platino font-bold text-white text-shadow-emeraldGlow ${isLeaderboardAnimationReset ? 'animate-slide-up' : ''}`}>
      LEADERBOARD
    </p>
  </div>

  <div className="relative flex w-screen justify-center items-center  mt-[10px]">
    <div className={`flex-col ${isLeaderboardAnimationReset ? 'animate-slide-in-left' : ''}`}>

      <div className="relative flex transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute flex ml-[50px] mt-[90px] w-full text-2xl font-bold font-Plantino">
          <p className="text-base-100">STATUS:</p>
          <p className={serverStatus === 'ONLINE' ? 'text-green-500 ml-[120px] underline underline-offset-4' : 'text-red-500 ml-[120px] underline underline-offset-4'}>
            {serverStatus ? serverStatus : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>

        <div className="absolute flex ml-[50px] mt-[140px] w-full text-2xl font-bold font-Plantino">
          <p className="text-base-100">TOTAL:</p>
          <p className={`ml-[135px] text-green-500 underline underline-offset-4 ${totalPlayers}`}>
            {totalPlayers ? totalPlayers : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>
            <img src={totalPlayer} className="h-[259px] w-[425px] mt-[30px]" alt="Total Players" />
      </div>


        
           
    <div className="relative flex transition-transform duration-500 ease-in-out transform hover:scale-105 mt-[20px]">
        <div className="absolute flex ml-[50px] mt-[60px] w-full text-2xl font-bold font-Plantino">
          <p className="text-base-100">WIN RACE:</p>
          <p className={`ml-[100px] text-green-500 underline underline offset-4 ${winRace}`}>
            {winRace ? winRace : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>
            {/** ACCRETIA STATUS **/}
          <p className="absolute hidden sm:block ml-[90px] mt-[100px] text-base-100 text-xl font-bold font-Plantino">ACCRETIA:</p>
            <div className="absolute hidden sm:block ml-[90px] mt-[130px] w-[250px] h-[20px] bg-gray-200 rounded">
              <div 
                className="h-full bg-emerald-500 rounded" 
                style={{ width: `${chipAcc}%` }}/>
              <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-Plantino mt-[-18px]">{chipAcc ? `${chipAcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
           </div>
           {/** BELLATO STATUS **/}
           <p className="absolute hidden sm:block ml-[90px] mt-[160px] text-base-100 text-xl font-bold font-Plantino">BELLATO:</p>
            <div className="absolute hidden sm:block ml-[90px] mt-[190px] w-[250px] h-[20px] bg-gray-200 rounded">
              <div 
                className="h-full bg-emerald-500 rounded" 
                style={{ width: `${chipBcc}%` }}/>
              <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-Plantino mt-[-18px]">{chipBcc ? `${chipBcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
           </div>
            {/** CORA STATUS STATUS **/}
           <p className="absolute hidden sm:block ml-[90px] mt-[220px] text-base-100 text-xl font-bold font-Plantino">CORA:</p>
            <div className="absolute hidden sm:block ml-[90px] mt-[250px] w-[250px] h-[20px] bg-gray-200 rounded">
              <div 
                className="h-full bg-emerald-500 rounded" 
                style={{ width: `${chipCcc}%` }}/>

              <p className="absolute hidden sm:block w-full text-center text-base-100 text-sm font-bold font-Plantino mt-[-18px]">{chipCcc ? `${chipCcc}%` : <span className="loading loading-bars loading-sm"></span>}</p>
           </div>

           <div className="absolute flex ml-[50px] mt-[280px] w-full text-xl font-bold font-Plantino">
          <p className="text-base-100">CHIP BREAKER:</p>
          <p className={`ml-[100px] max-w-[200px] text-green-500 underline underline offset-4 ${cbName}`}>
            {cbName ? cbName : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>

        <div className="absolute flex ml-[50px] mt-[310px] w-full text-xl font-bold font-Plantino">
          <p className="text-base-100">CB STATUS:</p>
          <p className={`ml-[100px] text-green-500 underline underline offset-4 ${cbStatus}`}>
            {cbStatus ? cbStatus : <span className="loading loading-bars loading-xl"></span>}
          </p>
        </div>
           
          
        <div className="relative flex">
         <img src={chipWarStatus} className="h-[400px] w-[425px] " alt="Chip War Status" />
         </div>
    </div>
    </div>

    <div className={`${isLeaderboardAnimationReset ? 'animate-slide-in-right' : ''}`}>
      <div>
        <ul>
          <li>

          </li>
        </ul>
      </div>
      <img src={topKiller} className="h-[736px] w-[428px] ml-[450px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Top Killer" />
    </div>
  </div>
</div>


<div className="h-screen w-screen flex bg-BG3 bg-no-repeat bg-full bg-center" ref={newbieRewardsSectionRef}>
  <div className="relative flex justify-center items-center">
    <div className="left-0 mb-[35px] w-full flex justify-center items-center">
      <img src={newPlayer} className={`h-[1409px] w-screen mt-[20px] mx-auto overflow-visible flex flex-col ${isNewbieRewardsAnimationReset ? 'animate-slide-up' : ''}`}/>
      <img src={Item} className={`h-[382px] w-[905px] absolute hidden sm:block right-20 mb-[300px]  ${isNewbieRewardsAnimationReset ? 'animate-slide-in-right' : ''}`}/>
   </div>
  </div>
</div>

{/**Interface Section */}
<div className="h-fit w-screen flex py-20 bg-black bg-no-repeat bg-center" ref={interfaceSectionRef}>  
  <div className="relative flex justify-center items-center">
    <img src={UIsection} className={`h-auto w-screen ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    <Link to="/Interface">
    <img src={UiButton} className={`absolute hidden sm:block right-[190px] bottom-[50px]  ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    </Link>
  </div>
  </div>

<div className="h-fit w-screen bg-black bg-no-repeat bg-cover bg-center" ref={donationSectionRef}>
<div className="relative flex justify-center items-center">
    <img src={cashShop} className="relative h-fit w-[screen]"/>

  </div>
</div>

<div ref={eventsSectionRef} className="h-screen w-full bg-BG4 bg-no-repeat bg-cover bg-center">
    <div className="relative flex flex-col justify-center items-center">
        <div className="absolute mt-[100px]">
        <CardEvents/>
        </div>
        <img src={events} className="mt-[140px]"/>
    </div>
</div>
      <Footer />
    </>
  );
}

export default Home;
