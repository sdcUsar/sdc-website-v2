'use client'
import { useState, useEffect, useRef } from "react";
import HeroVideo from '../../../../public/HeroVideo.mp4'
import { useRouter } from 'next/navigation'; 
import Image from "next/image";



const HackedCode = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    const handleSpeedTransition = () => {
      if (videoRef.current) {
        // Start at normal speed
        videoRef.current.playbackRate = 1.0;

        // Transition to medium speed after 3 seconds
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.playbackRate = 5.5;
            setIsTransitioning(true); // Trigger scaling animation
          }
        }, 2000);

        // Transition to fast speed after another 3 seconds
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.playbackRate = 10.0;
            setIsTransitioning(true); // Continue scaling animation
            setShowBlur(true); // Trigger blur effect and show logo
          }
        }, 3000);
        setTimeout(() => {
            if (typeof window !== 'undefined') {
              router.push("https://hackedcode.sdcusar.tech/");
            }
          }, 4000);
      }
    };

    if (typeof window !== 'undefined') {
        handleSpeedTransition();
      }
  }, [router]);

  return (
    <div className="relative h-screen w-full overflow-hidden cursor-pointer">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover ${showBlur ? "blur-md" : ""}`}
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* SDC Logo and Text */}
      <div
        className="relative flex flex-col items-center justify-center h-full transition-transform duration-500"
        style={{ transform: isTransitioning ? "scale(1)" : "scale(0.8)" }}
      >
        <div className="relative">
          {/* Line and Text Inside the Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
            <div
              className={`transition-all duration-500 ${
                isTransitioning ? "w-[90%]" : "w-[70%]"
              } border-t-4  border-white mb-1`}
            ></div>
            <div
              className={`text-white text-2xl sm:text-base md:text-xl tracking-widest pl-[30px] flex justify-center transition-all duration-500 ${
                isTransitioning ? "w-[80%]" : "w-[60%]"
              }`}
              style={{ letterSpacing: "2rem" }}
            >
              {/* Your text here */}
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4"> 
        <Image
            src="/warpinng you to.svg" 
            alt=""
            width={1000}
            height={1000}
            className=" w-[350px] h-[auto]" 
          />
         <Image
            src="/hackedc.png"
            alt="HackedCode Logo"
            height={1000}
            width={1000}
            className="w-[350px] h-auto"
            style={{ animation: 'blink 1s step-start infinite' }}
          />
          <style jsx>{`
          @keyframes blink {
            0%, 50%, 100% {
              opacity: 1;
            }
            25%, 75% {
              opacity: 0;
            }
          }
          .blink-animation {
            animation: blink 2s infinite;
          }
        `}</style>
        </div>
    
    </div>
  );
};

export default HackedCode;
