"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "./Button/Button";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "APPLY", link: "/" },
    { name: "TRACK", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full top-0 left-0 text-white">
      <div className="md:flex items-center justify-between bg-[#464646] py-3 w-full h-24 md:h-fit md:px-[140px] px-[27px]">
        <div className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] lg:text-gray-800">
          <Image
            src="/Logo.png"
            className=" absolute shadow-lg top-0"
            alt="Logo"
            width={150}
            height={40}
          />
        </div>

 
          <div className="relative">
      <div
        onClick={toggleMenu}
        className="text-3xl z-50 absolute right-0 top-6 cursor-pointer md:hidden transition-all duration-300"
      >
                <span className="text-3xl text-white">
          {open ? (
            <AiOutlineClose style={{ fontSize: '40px' }} />
          ) : (
            <AiOutlineMenu style={{ fontSize: '40px' }} />
          )}
        </span> 

      </div>
        </div>

       

        <ul
          className={`md:flex md:items-center text-sm md:pb-0 md:mt-0 -mt-3 md:static md:bg-transparent bg-[#464646] z-10 inset-x-0 md:z-auto left-0 w-full h-full md:w-auto md:pl-0 fixed transition-all duration-500 ease-in ${
            open ? "left-0 text-[26px] pt-14 flex flex-col" : "text-sm left-[-1000px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="w-full hover:bg-white/10 p-3 text-md md:text-center text-left md:my-0 py-4 my-3"
            >
              <a
                href={link.link}
                className=" text-blac duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 text-sm hidden md:block">
            <Button>EMERGENCY VISA IN 12 HOURS</Button>
          </li>

          <div className="md:pl-0 pl-3 flex flex-row text-start text-2xl gap-6 lg:mx-4 my-4">
            <Link href="/" className="socialLink">
              <FaFacebookF size={16} />
            </Link>
            <Link href="/" className="socialLink">
              <FaTwitter size={16} />
            </Link>
          </div>

          <select className="bg-transparent md:pl-0 pl-3 outline-none w-fit text-sm">
            <option value="" className="text-black">English</option>
            <option value="" className="text-black">العربية</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;