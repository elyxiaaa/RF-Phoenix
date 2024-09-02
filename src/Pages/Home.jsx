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
import totalPlayers from '../assets/RF-ASSETS/TotalPlayers.png';
import chipWarStatus from '../assets/RF-ASSETS/ChipWarStatus.png';
import newPlayer from '../assets/RF-ASSETS/newplayer.png';
import Item from '../assets/RF-ASSETS/item.png'
import UIsection from '../assets/RF-ASSETS/UIsection.png'
import UiButton from '../assets/RF-ASSETS/button.png'

function Home() {
  const [total, setTotal] = useState(null);
const [chipWar, setChipWar] = useState('');
const [topKiller, setTopKiller] = useState('');
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
        setTotal(json);
      }
    };

    totalPlayer();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://phoenix.gamecp.net/web_api/?do=satu');
      const json = await response.json();
  
      if (response.ok) {
        setTotal(json.totalPlayers); // Assuming total players data is in json.totalPlayers
        setChipWar(json.chipWarStatus); // Assuming Chip War status data is in json.chipWarStatus
        setTopKiller(json.topKiller); // Assuming top killer data is in json.topKiller
      }
    };
  
    fetchData();
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
              <img src={dcImage} className={`h-[50px] w-[50px] ${isHomeAnimationReset ?  'animate-fadeIn' : ''}`} alt="Discord" />
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

      <div className="h-screen w-screen bg-BG2 bg-no-repeat bg-full bg-center" ref={leaderboardSectionRef}>
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Platino font-bold text-white text-shadow-emeraldGlow ${isLeaderboardAnimationReset ? 'animate-slide-up' : ''}`}>
      LEADERBOARD
    </p>
  </div>

  <div className="relative flex w-screen justify-center items-center mt-[40px]">
    <div className={`flex-col ${isLeaderboardAnimationReset ? 'animate-slide-in-left' : ''}`}>
      <div className="relative">
        <img src={chipWarStatus} className="h-[259px] w-[325px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Chip War Status" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">{chipWar}</p>
      </div>

      <div className="relative mt-[30px]">
        <img src={totalPlayers} className="h-[346px] w-[325px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Total Players" />
        <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">{total}</p>
      </div>
    </div>

    <div className={`${isLeaderboardAnimationReset ? 'animate-slide-in-right' : ''} relative ml-[450px]`}>
      <img src={topKiller} className="h-[636px] w-[328px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Top Killer" />
      <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">{topKiller}</p>
    </div>
  </div>
</div>


<div className="h-screen w-screen flex bg-BG3 bg-no-repeat bg-full bg-center" ref={newbieRewardsSectionRef}>
  <div className="relative flex justify-center items-center">
    <div className="left-0 mb-[35px] w-full flex justify-center items-center">
      <img src={newPlayer} className={`h-[1409px] w-screen mt-[20px] mx-auto overflow-visible flex flex-col ${isNewbieRewardsAnimationReset ? 'animate-slide-up' : ''}`}/>
      <img src={Item} className={`h-[382px] w-[905px] absolute right-20 mb-[300px]  ${isNewbieRewardsAnimationReset ? 'animate-slide-in-right' : ''}`}/>
   </div>
  </div>
</div>

{/**Interface Section */}
<div className="h-fit w-screen flex py-20 bg-black bg-no-repeat bg-center" ref={interfaceSectionRef}>  
  <div className="relative flex justify-center items-center">
    <img src={UIsection} className={`h-auto w-screen ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    <Link to="/Interface">
    <img src={UiButton} className={`absolute right-[190px] mt-[200px] ${isNewbieRewardsAnimationReset ?  'animate-fadeIn' : ''}`}/>
    </Link>
  </div>
  

</div>

<div className="h-screen w-screen bg-emerald-300 bg-no-repeat bg-cover bg-center" ref={donationSectionRef}>
  <div className="left-0 flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Platino font-bold text-white text-shadow-emeraldGlow ${isDonationAnimationReset ? 'animate-slide-up' : ''}`}>
      DONATION
    </p>
  </div>
</div>

<div ref={eventsSectionRef} className="h-screen w-full bg-emerald-800 bg-no-repeat bg-cover bg-center">
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Platino font-bold text-white text-shadow-emeraldGlow ${isDonationAnimationReset ? 'animate-slide-up' : ''}`}>
      EVENTS
    </p>
  </div>

        <CardEvents />
      </div>
      <Footer />
    </>
  );
}

export default Home;
