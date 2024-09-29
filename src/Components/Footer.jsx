import React from 'react';
import DiscordIcon from '../assets/FOOTER/discord.png';  // Import the Discord icon
import GameIcon from '../assets/FOOTER/game.png';        // Import the game icon
import FacebookIcon from '../assets/FOOTER/facebook.png'

function Footer() {
  return (
    <div>
      <footer className="footer footer-center w-full bg-black text-emerald-500 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Discord</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href=""> 
              <img src={DiscordIcon} alt="Discord" className="w-8 h-8" /> {/* Discord icon */}
            </a>
            <a href="">
              <img src={GameIcon} alt="Game" className="w-8 h-8" /> {/* Game icon */}
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} RF Phoenix - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
