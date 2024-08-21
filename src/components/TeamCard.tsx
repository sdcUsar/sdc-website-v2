"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient"; // Import BackgroundGradient

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  socials: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  image,
  socials,
}) => {
  return (
    <BackgroundGradient className="p-4 h-96 overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 justify-center hover:shadow-2xl grid place-content-end hover:shadow-blue-900/70">
      <div className="grid w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform rounded-3xl duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 w-80 rounded-xl bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-[5px]">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gray-300 font-medium">{position}</p>
        <div className="flex items-center space-x-4 mt-4"></div>
      </div>
    </BackgroundGradient>
  );
};

export default TeamCard;
