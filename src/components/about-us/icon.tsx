"use client";

import React, { useState } from "react";
import Image from "next/image";

const SocialMediaTransition: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleToggle = (): void => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="relative w-20  md:w-fit  space-y-3">
        <h1 className="uppercase hidden md:block">Follow us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <button
            onClick={handleToggle}
            className={`relative md:absolute  text-4xl md:text-7xl text-white 
              transition-transform duration-500 ease-in-out ${
              visible ? "-rotate-45" : "rotate-0"
            }`}
          >
            +
          </button>
          <div
            className={`flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-7 align-middle 
              items-center justify-center transition-transform duration-[2.8s] ease-in-out 
              ${
                visible ? "translate-y-10 md:translate-y-0 delay-100" : "translate-y-5 md:translate-y-0 opacity-0"
              }  ${
               visible ? "md:translate-x-10 delay-100" : "md:translate-x-5 opacity-0"
             } md:ml-7`}
          >
            <a href="#" className="p-1 bg-white rounded-2xl">
              <div className="group transition-all ease-in-out">
                <Image
                  priority
                  src={"/svg/about-us/insta-1.svg"}
                  alt="Instagram"
                  width={40}
                  height={40}
                  className={`group-hover:hidden rounded-lg`}
                />
                <Image
                  priority
                  src={"/svg/about-us/insta-2.svg"}
                  alt="Instagram Hover"
                  width={40}
                  height={40}
                  className={`group-hover:block hidden rounded-lg`}
                />
              </div>
            </a>
            <a href="#" className="p-1 bg-white rounded-2xl">
              <div className="group transition-all duration-700 ease-in-out delay-200">
                <Image
                  priority
                  src={"/svg/about-us/linkedin-1.svg"}
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className={`group-hover:hidden rounded-lg`}
                />
                <Image
                  priority
                  src={"/svg/about-us/linkedin-2.svg"}
                  alt="LinkedIn Hover"
                  width={40}
                  height={40}
                  className={`group-hover:block hidden rounded-lg`}
                />
              </div>
            </a>
            <a href="#" className="p-1 bg-white rounded-2xl">
              <div className="group transition-all duration-700 ease-in-out delay-200">
                <Image
                  priority
                  src={"/svg/about-us/twitter-1.svg"}
                  alt="Twitter"
                  width={40}
                  height={40}
                  className={`group-hover:hidden rounded-lg`}
                />
                <Image
                  priority
                  src={"/svg/about-us/twitter-2.svg"}
                  alt="Twitter Hover"
                  width={40}
                  height={40}
                  className={`group-hover:block hidden rounded-lg`}
                />
              </div>
            </a>
            <a href="#" className="p-1 bg-white rounded-2xl">
              <div className="group transition-all duration-700 ease-in-out delay-200">
                <Image
                  priority
                  src={"/svg/about-us/github-1.svg"}
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={`group-hover:hidden rounded-lg`}
                />
                <Image
                  priority
                  src={"/svg/about-us/github-2.svg"}
                  alt="GitHub Hover"
                  width={40}
                  height={40}
                  className={`group-hover:block hidden rounded-lg`}
                />
              </div>
            </a>
            <a href="#" className="p-1 bg-white rounded-2xl">
              <div className="group transition-all duration-700 ease-in-out delay-200">
                <Image
                  priority
                  src={"/svg/about-us/discord-1.svg"}
                  alt="Discord"
                  width={40}
                  height={40}
                  className={`group-hover:hidden rounded-lg`}
                />
                <Image
                  priority
                  src={"/svg/about-us/discord-2.svg"}
                  alt="Discord Hover"
                  width={40}
                  height={40}
                  className={`group-hover:block hidden rounded-lg`}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaTransition;