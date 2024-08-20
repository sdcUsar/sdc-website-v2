"use client";
import React, { useState } from "react";
import FacultyCard from "../Faculty/FacultyCard";

const FacultySection: React.FC = () => {
  // State to track which faculty member is being hovered over
  const [hoveredFaculty, setHoveredFaculty] = useState<string | null>(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (faculty: string) => {
    setHoveredFaculty(faculty);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredFaculty(null);
  };

  return (
    <div className="min-w-full overflow-hidden">
      {/* Main container for faculty section */}
      <div
        className={`mx-6 p-4 md:bg-white md:text-black text-white border-black border-[15px] rounded-[40px] .raleway-font transition-all duration-1000 ${
          hoveredFaculty == null ? "h-[600px]" : "h-[500px]"
        }`}
      >
        <h2 className="text-6xl px-20  py-5 font-bold  mb-6">Faculty</h2>
        {/* Container for faculty cards */}
        <div className="grid grid-flow-col px-20 min-w-full justify-between gap-4">
          {/* Dr. Arvinder Kaur's card */}
          <div
            onMouseEnter={() => handleMouseEnter("arvinder")}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer "
          >
            <FacultyCard
              imageSrc="/DeanMam.png"
              name="Dr. Arvinder Kaur"
              className={
                hoveredFaculty == "rahul"
                  ? "-translate-x-full scale-y-75 opacity-0 transition-all duration-1000"
                  : ""
              }
              hovered={hoveredFaculty}
            />
          </div>
          {/* Dr. Rahul Johari's card */}
          <div
            onMouseEnter={() => handleMouseEnter("rahul")}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer"
          >
            <FacultyCard
              imageSrc="/RahulJohriSir.png"
              name="Dr. Rahul Johari"
              className={
                hoveredFaculty == "arvinder"
                  ? "translate-x-full scale-y-75 opacity-0 transition-all duration-1000"
                  : ""
              }
              hovered={hoveredFaculty}
            />
          </div>
        </div>
      </div>
      {/* Container for faculty descriptions */}
      <div className="text-white  px-8 mt-5 text-[24px] w-full relative font-Raleway font-light h-[200px]">
        {/* Dr. Rahul Johari's description */}
        {hoveredFaculty === "rahul" && (
          <p className="pr-10 pl-32 text-end absolute  w-full  ">
            Dr. Rahul Johari, a distinguished educator at USAR, GGSIPU, holds
            key leadership roles including Head of the Software Development Cell
            and Founder of the SWINGER Lab. A Microsoft Certified Professional,
            he has received numerous accolades, including the Best
            Teacher/Researcher Award and the Faculty Research Grant Scheme for
            consecutive years.
          </p>
        )}
        {/* Dr. Arvinder Kaur's description */}
        {hoveredFaculty === "arvinder" && (
          <p className="pl-10 pr-32 text-start absolute top-0 left-0 w-full ">
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
