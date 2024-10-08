import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";

function CardEvents() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (imgSrc) => {
    setCurrentImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  // Settings for the slider with responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Laptop screen width
        settings: {
          slidesToShow: 3,  // Show 3 slides on laptops
        },
      },
      {
        breakpoint: 768, // Tablet size
        settings: {
          slidesToShow: 2,  // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-[90%] xl:w-[1300px] mx-auto"> {/* Responsive container width */}
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="bg-black h-[350px] text-white rounded-xl">
              <div className="h-[220px] rounded-t-xl flex justify-center items-center">
                <img
                  src={d.img}
                  alt=""
                  className="w-full h-full object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-50 cursor-pointer"
                  onClick={() => handleImageClick(d.img)}  // Modal will open
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-2xl font-bold hover:text-emerald-500 cursor-pointer">{d.Title}</p>
                <button className="bg-transparent font-bold text-emerald-400 border border-emerald-400 text-md px-6 py-1 rounded-md hover:bg-emerald-400 hover:text-black transition-colors duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
      />
    </div>
  );
}

const data = [
  {Title: `Streaming Event`, img: `/events/StreamingEvent.jpg`},
  {Title: `Sniping Event`, img: `/events/Sniping.jpg`},
  {Title: `Pitboss Invasion`, img: `/events/PBInvasion.jpg`},
  {Title: `Zombie Invasion`, img: `/events/Zombie.jpg`},
  {Title: `Treasure Hunt`, img: `/events/Treasure.jpg`},
  {Title: `Unscrambled Words`, img: `/events/Unscrambled.jpg`},
  {Title: `Divine Confrontation`, img: `/events/DivineConfrontation.jpg`},
  {Title: `Poster Making`, img: `/events/GuildPoster.jpg`},
  {Title: `Guild Bounty`, img: `/events/GuildBounty.jpg`},
  {Title: `Chip Breaker`, img: `/events/cbc.jpg`},
  {Title: `Like and Share`, img: `/events/likeandshare.jpg`},
];

export default CardEvents;