import React, { useEffect, useState } from "react";
import { Bars3Icon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import MenuOverlay from "./MenuOverlay";
import NavLinks from "./NavLinks";
import MenuOverlay from "./navMobile";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: {
      src: "/svg/home.svg",
      alt: "Home",
      width: 40,
      height: 40
    }
  },
  {
    title: "Blogs",
    path: "/event",
    icon: {
      src: "/svg/blogs.svg",
      alt: "Blogs",
      width: 40,
      height: 40
    }
  },
  {
    title: "HackEDCode",
    path: "/hack-ed-code",
    icon: {
      src: "/svg/blogs.svg",
      alt: "HackEDCode",
      width: 40,
      height: 40
    }
  },
  {
    title: "Team",
    path: "/team",
    icon: {
      src: "/svg/teams.svg",
      alt: "Team",
      width: 40,
      height: 40
    }
  },
];

interface NavBarProps {
  isClicked: boolean;
}

const Navbar: React.FC<NavBarProps> = ({ isClicked }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname(); 

  const [navbarOpaque, setNavbarOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.93;

      if (window.scrollY > threshold) {
        setNavbarOpaque(true);
      } else {
        setNavbarOpaque(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: isClicked ? "0%" : "-100%", opacity: isClicked ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-10 transition-opacity duration-[900ms] ease-in-out ${
        isClicked ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: navbarOpaque
          ? `rgba(0, 0, 0, 1)`
          : `rgba(0, 0, 0, 0)`,
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <div className="flex items-center justify-between mx-auto px-12 py-4">
        <div className="flex-grow  opacity-0 sm:opacity-100">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-16 w-28"
            />
          </Link>
        </div>
{/* this needs to be fixed */}
{        <div className="mobile-menu block md:hidden">
{!navbarOpen ? (
    <button
    onClick={() => setNavbarOpen(!navbarOpen)}
    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
  >
    <Bars3Icon className="h-5 w-5" />
  </button>
          ) : null}
        </div>}
        <div className="menu hidden md:block md:w-auto" id="navBar">
          <ul className="flex p-4 gap-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks
                  href={link.path}
                  title={link.title}
                  className={`text-white ${
                    pathname === link.path ? " underline font-bold " : ""
                  }  hover:underline`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} closeNavbar={() => setNavbarOpen(false)} /> : null}
    </motion.nav>
  );
};

export default Navbar;
