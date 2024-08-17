"use client";
import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-black text-white py-10 h-screen overflow-y-auto">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Events</h1>
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row mb-16 h-96 ${
              index % 2 !== 1 ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.9 }}
            transition={{ delay: index * 0.2, duration: 10, ease: "easeIn" }}
          >
            <motion.div
              variants={index % 2 === 1 ? fadeInLeft : fadeInRight}
              className="md:w-1/2 flex justify-center items-center"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="max-w-full rounded-md shadow-lg h-80"
              />
            </motion.div>
            <motion.div
              variants={index % 2 === 1 ? fadeInRight : fadeInLeft}
              className="md:w-1/2 md:pl-10 flex flex-col justify-center"
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
