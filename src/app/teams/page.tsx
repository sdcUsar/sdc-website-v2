"use client"

import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../../components/TeamCard';
import Navbar from '@/components/Navbar/Navbar';
import { core_team, web_team, graphic_team, ui_team, appdev_team } from './TeamData';
import Image from 'next/image';
import "../globals.css";

function TeamsPage() {
  const allTeams = [...core_team, ...web_team, ...graphic_team, ...ui_team, ...appdev_team];

  return (
    <div className='bg-black h-full w-full p-8'>
      <div className='z-100'>
        <Navbar isClicked={true}/>
      </div>
      <div className='mt-16 grid place-content-center group'>
          <Image 
              width={800}
              height={500}
              src="/group.jpg"
              alt="Team Picture"
              className='rounded-xl transition-all duration-500 ease-in-out hover:opacity-50 hover:shadow-2xl hover:shadow-blue-900/70'    
          />
          <motion.div 
            className='absolute inset-0 bg-black'
            initial={{ clipPath: 'polygon(0 0, 0, 0, 50% 50%, 100% 100%, 100% 100%, 50% 100%, 50% 50%, 0 50%)' }}
            animate={{ 
              clipPath: [
                'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Fully covered
                'polygon(0 0, 0 0, 0 100%, 0 100%)'  // Fully uncovered
              ] 
            }}
            transition={{ 
              duration: 3, // Total duration for one cycle
              ease: 'easeInOut',
              repeat: 0 // Run only once
            }}
          />
        </div>
      <h1 className='my-8 w-full text-center mt-20 p-4 text-white text-2xl font-Raleway font-semibold'>Our Team</h1>
      <div className='grid grid-cols-1 -z-10 md:grid-cols-3 gap-12'>
        {allTeams.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.title}
            image={member.imageUrl}
            socials={[member.twitterLink, member.linkedIn]}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamsPage;