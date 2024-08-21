"use client";

import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import Image from "next/image";

type Link = {
  path: string;
  title: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };};

type Props = {
  links: Link[];
  closeNavbar: () => void;
};

const MenuOverlay: React.FC<Props> = ({ links, closeNavbar }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true); // Automatically open the sheet when the component mounts
  }, []);

  const handleClose = () => {
    setIsOpen(false); // Close the sheet
    setTimeout(() => {
      closeNavbar(); // Wait until the closing animation finishes
    }, 300); // Match the duration of your closing animation
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    }
  };

  return (
    <div className="inset-0 bg-black bg-opacity-100 z-20">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetContent className="bg-[#FFFFFF] m-0 border-l-[0.5px] border-b-[0.5px] bg-opacity-10 backdrop-blur-sm transition-all duration-300 ease-in-out">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className="flex flex-col items-start py-4">
            {links.map((link, index) => {
              // if (index === 2) return null; // Skip rendering if index is 4
              return (
                <li key={index} onClick={handleClose} className="mb-4">
                  <NavLinks href={link.path} title={link.title} icon={link.icon} />
                </li>
              );
            })}
          </ul>
          <Image
              src="/svg/hackedcode.png"
              alt="University Logo"
              width={100}
              height={100}
              className="w-full "
            />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuOverlay;
