"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blogs",
    path: "/event",
  },
  {
    title: "HackEDCode",
    path: "/hack-ed-code",
  },
  {
    title: "Team",
    path: "/team",
  },
];

interface NavBarProps {
  isClicked: boolean;
}

// const NavBar = (isClicked : boolean) => {
const Navbar: React.FC<NavBarProps> = ({ isClicked }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // bg-[#121212]
  return (
    // <motion.nav
    //     className='top-0 left-0 right-0 z-10 transparent bg-opacity-100'
    //     initial={{ y: '-100%', opacity: 0 }}
    //     animate={{ y: '0%', opacity: 1 }}
    //     transition={{ duration: 0.5, ease: 'easeOut' }}
    // >
    // <nav
    //     className={`fixed top-0 left-0 right-0 z-10 transition-opacity duration-[900ms] ease-in-out ${
    //         isClicked ? "opacity-100" : "opacity-0"
    //     }`}
    // >

    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: isClicked ? "0%" : "-100%", opacity: isClicked ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-10 transition-opacity duration-[900ms] ease-in-out ${
        isClicked ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-12 py-4">
        <div className="flex-grow">
          <Link href={"/"}>
            {/* Nikhil */}
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-16 w-28"
            />
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navBar">
          <ul className="flex p-4 gap-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks
                  href={link.path}
                  title={link.title}
                  className={`text-white ${pathname === link.path ? " underline font-bold " : ""}  hover:underline`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </motion.nav>

    // {/* </nav> */}
    // </motion.nav>
  );
};

export default Navbar;
