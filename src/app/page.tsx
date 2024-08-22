"use client";

import EventsPage from "@/components/EventsPage";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/Hero Section/HeroBanner";

import PhotoAlbum from "@/components/PhotoAlbum";
import AboutUs from "@/components/about-us/about";
import FacultySection from "@/components/Faculty/FacultySection";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {/* <Navbar /> */}
      <HeroBanner />
      <AboutUs />

      <main className="flex min-h-screen flex-col items-center justify-between bg-black">
        <PhotoAlbum />
        <EventsPage />
        <div className="max-w-full lg:w-[1400px]">
          <FacultySection />
        </div>
        <Footer />
      </main>
      {/* <ShootingStars/> */}
    </div>
  );
}
