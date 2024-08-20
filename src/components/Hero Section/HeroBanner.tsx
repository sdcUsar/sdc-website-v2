"use client";
import Image from "next/image";
import { useState } from "react";
import HeroVideo from "../../../public/HeroVideo.mp4";
import Navbar from "../Navbar/Navbar";
const HeroBanner = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-screen w-full overflow-hidden cursor-pointer"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar isClicked={isClicked} />

      {/* SDC Logo and Text */}
      <div
        className="relative flex flex-col items-center justify-center h-full transition-transform duration-500"
        style={{ transform: isClicked ? "scale(1)" : "scale(0.8)" }}
      >
        <div className="relative">
          <Image
            src={"/sdcLogo.png"}
            width={1000}
            height={800}
            alt="SDC Logo"
            className={`transition-transform duration-500 ${
              isClicked ? "scale-100" : "scale-75"
            } lg:w-[250px] lg:h-[250px] md:w-[400px] md:h-[240px] sm:w-[300px] sm:h-[180px] w-[180px]`}
          />

          {/* Line and Text Inside the Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
            <div
              className={`transition-all duration-500 ${
                isClicked ? "w-[90%]" : "w-[70%]"
              } border-t-4  border-white mb-1`}
            ></div>
            <div
              className={`text-white text-2xl sm:text-base md:text-xl tracking-widest pl-[30px] flex justify-center transition-all duration-500 ${
                isClicked ? "w-[80%]" : "w-[60%]"
              }`}
              style={{ letterSpacing: "2rem" }}
            >
              USAR
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-500 ${
          isClicked ? "opacity-100" : "opacity-0"
        } absolute bottom-10 left-1/2 transform -translate-x-1/2`}
      >
        <Image
          src={"/images/sdc"}
          alt="sdc"
          height={100}
          width={1000}
          className=" sm:max-w-[500px] mb-12 md:max-w-[700px] lg:max-w-[1000px] h-auto"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
