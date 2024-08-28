import React, { useEffect, useRef, useState } from 'react';
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

function Home() {
  const [total, setTotal] = useState();
  const homeSectionRef = useRef(null); // Added ref for Home section
  const eventsSectionRef = useRef(null);
  const leaderboardSectionRef = useRef(null);
  const newbieRewardsSectionRef = useRef(null);
  const donationSectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaderboardAnimationReset, setIsLeaderboardAnimationReset] = useState(false);
  const [isNewbieRewardsAnimationReset, setIsNewbieRewardsAnimationReset] = useState(false);
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
    const handleScroll = () => {
      const height = window.innerHeight;
  
      // Get section offsets
      const homeSectionTop = homeSectionRef.current.getBoundingClientRect().top;
      const eventsSectionTop = eventsSectionRef.current.getBoundingClientRect().top;
      const eventsSectionBottom = eventsSectionRef.current.getBoundingClientRect().bottom;
      const leaderboardSectionTop = leaderboardSectionRef.current.getBoundingClientRect().top;
      const donationSectionTop = donationSectionRef.current.getBoundingClientRect().top;
      const newbieRewardsSectionTop = newbieRewardsSectionRef.current.getBoundingClientRect().top;
      
  
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
            case leaderboardSectionRef.current:
              setIsLeaderboardAnimationReset(true);
              break;
            case newbieRewardsSectionRef.current:
              setIsNewbieRewardsAnimationReset(true);
              break;
            case donationSectionRef.current:
              setIsDonationAnimationReset(true);
              break;
            default:
              break;
          }
        } else {
          switch (entry.target) {
            case leaderboardSectionRef.current:
              setIsLeaderboardAnimationReset(false);
              break;
            case newbieRewardsSectionRef.current:
              setIsNewbieRewardsAnimationReset(false);
              break;
            case donationSectionRef.current:
              setIsDonationAnimationReset(false);
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
          <div >
            <img src={txtImage} className="object-fill h-[350px] w-[650px]" alt="Text" />
          </div>

          <div className="flex ml-[274px]">
            <a href="">
              <img src={dcImage} className="h-[50px] w-[50px]" alt="Discord" />
            </a>

            <a href="https://www.facebook.com/RFPhoenix55">
              <img src={fbImage} className="h-[50px] w-[50px]" alt="Facebook" />
            </a>
          </div>

          <div className="relative flex justify-center items-center mt-[100px]">
            <p className="absolute top-0 mt-[-20px] text-4xl font-Cinzel font-bold text-white text-shadow-emeraldGlow animate-shine">
              Join Us Now!
            </p>

            <a href="https://phoenix.gamecp.net/index.php" className="block">
              <img src={lowerLeft} className="h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Left" />
            </a>

            <img src={lowerMid} className="h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Middle" />

            <a href="" className="relative">
              <img src={lowerRight} className="h-[80px] w-[auto] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Lower Right" />
            </a>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen bg-BG2 bg-no-repeat bg-full bg-center" ref={leaderboardSectionRef}>
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow ${isLeaderboardAnimationReset ? 'animate-slide-up' : ''}`}>
      LEADERBOARD
    </p>
  </div>

  <div className="relative flex w-screen justify-center items-center mt-[40px]">
    <div className={`flex-col ${isLeaderboardAnimationReset ? 'animate-slide-in-left' : ''}`}>
      <img src={chipWarStatus} className="h-[259px] w-[325px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Chip War Status" />
      <img src={totalPlayers} className="h-[346px] w-[325px] mt-[30px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Total Players" />
    </div>

    <div className={`${isLeaderboardAnimationReset ? 'animate-slide-in-right' : ''}`}>
      <img src={topKiller} className="h-[636px] w-[328px] ml-[450px] transition-transform duration-500 ease-in-out transform hover:scale-105" alt="Top Killer" />
    </div>
  </div>
</div>


<div className="h-screen w-full flex bg-BG3 bg-no-repeat bg-full bg-center" ref={newbieRewardsSectionRef}>
  <div className="relative flex justify-center items-center">
    <div className="left-0 mb-[35px] w-full flex justify-center items-center">
      <img src={newPlayer} className={`h-[1409px] mt-[20px] mx-auto overflow-visible flex flex-col ${isNewbieRewardsAnimationReset ? 'animate-slide-up' : ''}`}/>
      <img src={Item} className={`h-[382px] w-[905px] absolute right-20 mb-[300px]  ${isNewbieRewardsAnimationReset ? 'animate-slide-in-right' : ''}`}/>
   </div>
  </div>
</div>

<div className="h-screen w-full bg-emerald-300 bg-no-repeat bg-cover bg-center" ref={donationSectionRef}>
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow ${isDonationAnimationReset ? 'animate-slide-up' : ''}`}>
      DONATION
    </p>
  </div>
</div>

<div ref={eventsSectionRef} className="h-screen w-full bg-emerald-800 bg-no-repeat bg-cover bg-center">
  <div className="left-0 w-full flex justify-center items-center">
    <p className={`mt-[150px] text-6xl font-Cinzel font-bold text-white text-shadow-emeraldGlow ${isDonationAnimationReset ? 'animate-slide-up' : ''}`}>
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
