"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Use next/image for better performance

const events = [
  {
    title: "HackEDCode",
    description:
      "The premier hackathon of the SDC Tech Club, exemplifies innovation and collaboration. Participants tackle real-world challenges, developing impactful tech solutions. This high-energy event unites brilliant minds, setting new standards in technology through teamwork, creativity, and cutting-edge projects.",
    imageUrl: "/images/image1.jpeg",
  },
  {
    title: "Code Red",
    description:
      "Code Red, a pivotal cybersecurity hackathon organized by the Cyber Police Station and GGSIPU's USAR, united top minds to address digital challenges. Coordinated by USAR's Software Development Cell, it showcased innovative solutions and underscored the importance of cybersecurity.",
    imageUrl: "/images/image2.jpeg",
  },
  {
    title: "Data Science Bootcamp",
    description:
      "We hosted a successful bootcamp led by an expert, delving into data science essentials. The session provided comprehensive coverage of techniques, tools, and applications, offering participants hands-on experience and valuable insights into leveraging data for real-world solutions.",
    imageUrl: "/images/image4.jpeg",
  },
  {
    title: "HackEDCode 2.0",
    description:
      "HackEDCode 2.0, a highlight of Elysian'24 at GGSIPU East Campus, united top coding talent for a transformative hackathon. Participants tackled challenges in mobile, web development, and data science, learning from mentors, connecting with industry leaders, and showcasing their skills.",
    imageUrl: "/images/image3.jpeg",
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const EventsPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-10 overflow-y-auto font-Raleway p-7 sm:p-14 lg:p-20 px-2 sm:px-10 space-y-10">
      <div className="container mx-auto px-4">
        <h1 className="font-semibold text-3xl lg:text-4xl mb-2">Events</h1>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`flex flex-col mb-16 h-auto gap-2 sm:h-96 ${
              index % 2 !== 1 ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeIn",
            }}
          >
            <motion.div
              variants={index % 2 === 1 ? fadeInLeft : fadeInRight}
              className="sm:w-1/2 flex justify-center items-center"
            >
              <Image
                src={event.imageUrl}
                alt={event.title}
                className="max-w-full rounded-3xl shadow-lg h-80 sm:h-full"
                width={500}
                height={320}
              />
            </motion.div>
            <motion.div
              variants={index % 2 === 1 ? fadeInRight : fadeInLeft}
              className="sm:w-1/2 sm:pl-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
              <p>{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
