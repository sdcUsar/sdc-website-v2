"use client";
import React, { useState,useEffect } from "react";
import FacultyCard from "../Faculty/FacultyCard";

const FacultySection: React.FC = () => {
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (faculty: string) => {
    setHoveredFaculty(faculty);
  };

  const handleCardClick = (faculty: string) => {
    if(hoveredFaculty) return setHoveredFaculty(null);
    setHoveredFaculty(faculty);
  };
  const handleMouseLeave = () => {
    setHoveredFaculty(null);
  };

  console.log(hoveredFaculty);
  return (
    <div className="min-w-full ">
      {/* Main container for faculty section */}
      <div
        className={` p-8 bg-transparent border-none rounded-none raleway-font min-w-full  transition-all duration-1000 ${
          hoveredFaculty == null ? "h-[700px]" : "h-[500px]"
        } md:bg-white md:border-black md:border-[15px] md:rounded-[90px]`}
      >
        <h2 className="text-6xl px-20 py-5 font-bold mb-6 md:text-black text-white">Faculty</h2>
        {/* Container for faculty cards */}
        <div className="flex min-w-full justify-between gap-8">
          {/* Dr. Arvinder Kaur's card */}
          <div
            onMouseEnter={() => handleMouseEnter("arvinder")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick("arvinder")}
            className="relative cursor-pointer"
          >
            <FacultyCard
              imageSrc="/DeanMam.png"
              name="Dr. Arvinder Kaur"
              className={`
                transition-all duration-1000
                ${
                hoveredFaculty === "rahul"
                  ? "-translate-x-full scale-y-75 opacity-0"
                  : ""
              } md:text-black text-white `}
              hovered={screenWidth>=700 ? hoveredFaculty :null}
            />
          </div>
          {/* Dr. Rahul Johari's card */}
          <div
            onMouseEnter={() => handleMouseEnter("rahul")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick("rahul")}
            className="relative cursor-pointer"
          >
            <FacultyCard
              imageSrc="/RahulJohriSir.png"
              name="Dr. Rahul Johari"
              className={`
                transition-all duration-1000
                ${
                hoveredFaculty == "arvinder"
                  ? "translate-x-full scale-y-75 opacity-0 "
                  : ""
              } md:text-black text-white  `}
              hovered={screenWidth>=700 ? hoveredFaculty :null}
            />
          </div>
        </div>
      </div>
      {/* Container for faculty descriptions */}
      <div className="text-white px-8 -mt-10 md:mt-5  text-xs md:text-2xl w-full relative font-Raleway font-light h-[200px]">
        {hoveredFaculty === "rahul" && (
          <p className="pr-10 pl-32 text-end  absolute top-0 right-0 w-full ">
            Dr. Rahul Johari, a distinguished educator at USAR, GGSIPU, holds
            key leadership roles including Head of the Software Development Cell
            and Founder of the SWINGER Lab. A Microsoft Certified Professional,
            he has received numerous accolades, including the Best
            Teacher/Researcher Award and the Faculty Research Grant Scheme for
            consecutive years.
          </p>
        )}
        {hoveredFaculty === "arvinder" && (
          <p className="pl-10 pr-32 text-start absolute top-0 left-0 w-full">
            Dr. Arvinder Kaur, Dean of USAR and USDI at GGSIPU East Campus, is a
            highly skilled educator with expertise in Mathematical Modeling,
            Curriculum Development, and E-Learning. Formerly Dean of USICT, she
            holds a B.E. in Electrical Engineering and a Ph.D. in Software
            Engineering, making her a key leader at GGSIPU.
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultySection;
