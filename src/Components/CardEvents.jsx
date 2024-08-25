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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-[1300px] m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="bg-black h-[350px] text-white rounded-xl">
              <div className="h-[220px] rounded-t-xl flex justify-center items-center">
                <img
                  src={d.img}
                  alt=""
                  className="w-full h-full object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-50 cursor-pointer"
                  onClick={() => handleImageClick(d.img)}  /** Modal will Open */
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
  {Title: `Streaming Event`,        img: `/events/StreamingEvent.jpg`},
  { Title: `Sniping Event`,         img: `/events/Sniping.jpg` },
  { Title: `Pitboss Invasion`,      img: `/events/PBInvasion.jpg` },
  { Title: `Zombie Invasion`,       img: `/events/Zombie.jpg` },
  { Title: `Treasure Hunt`,         img: `/events/Treasure.jpg` },
  { Title: `Unscrambled Words`,     img: `/events/Unscrambled.jpg` },
  { Title: `Divine Confrontation`,  img: `/events/DivineConfrontation.jpg` },
  { Title: `Poster Making`,         img: `/events/GuildPoster.jpg`},
  { Title: `Guild Bounty`,          img: `/events/GuildBounty.jpg`},
  { Title: `Chip Breaker`,          img: `/events/cbc.jpg`},
  { Title: `Like and Share`,        img: `/events/likeandshare.jpg`},


];

export default CardEvents;

/*        <>
<div className="flex text-center justify-center items-center ">
    <div className="card border-solid rounded-md shadow-2xl p-5 max-w-[400px] max-h-[450px]">
        <figure className="overflow-hidden h-[250px]">
        <img
            src={Treasure}
            alt="Treasure"
            className="w-full h-full object-cover"
        />
        </figure>
        <div className="card-body bg-black border-solid shadow-2xl text-white rounded-b-md">
        <h2 className="text text-xl font-bold hover:text-emerald-700 cursor-pointer">Treasure Hunt</h2>
        <p className="text text-sm">See More</p>
        <div className="card-actions justify-end"></div>
        </div>
    </div>

    <div className="card border-solid rounded-md shadow-2xl p-5 max-w-[400px] max-h-[450px]">
        <figure className="overflow-hidden h-[250px]">
        <img
            src={PBInvasion}
            alt="PB Invasion"
            className="w-full h-full object-cover"
        />
        </figure>
        <div className="card-body bg-black border-solid shadow-2xl text-white rounded-b-md">
        <h2 className="text text-xl font-bold hover:text-emerald-700 cursor-pointer">Pitboss Invasion</h2>
        <p className="text text-sm">See More</p>
        <div className="card-actions justify-end"></div>
        </div>
    </div>

    <div className="card border-solid rounded-md shadow-2xl p-5 max-w-[400px] max-h-[450px]">
        <figure className="overflow-hidden h-[250px]">
        <img
            src={Sniping}
            alt="Sniping"
            className="w-full h-full object-cover"
        />
        </figure>
        <div className="card-body bg-black border-solid shadow-2xl text-white rounded-b-md">
        <h2 className="text text-xl font-bold hover:text-emerald-700 cursor-pointer">Sniping Event</h2>
        <p className="text text-sm">See More</p>
        <div className="card-actions justify-end"></div>
        </div>
    </div>

    <div className="card border-solid rounded-md shadow-2xl p-5 max-w-[400px] max-h-[450px]">
        <figure className="overflow-hidden h-[250px]">
        <img
            src={Zombie}
            alt="Zombie"
            className="w-full h-full object-cover"
        />
        </figure>
        <div className="card-body bg-black border-solid shadow-2xl text-white rounded-b-md">
        <h2 className="text text-xl font-bold hover:text-emerald-700 cursor-pointer">Zombie Invasion</h2>
        <p className="text text-sm">See More</p>
        <div className="card-actions justify-end"></div>
        </div>
    </div>
</div>


        </>*/
    