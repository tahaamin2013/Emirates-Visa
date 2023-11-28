"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "./Button/Button";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "APPLY", link: "/" },
    { name: "TRACK", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full top-0 left-0 text-white">
      <div className="md:flex items-center justify-between bg-[#464646] py-3 w-full h-24 md:h-fit md:px-10 px-11">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] lg:text-gray-800">
          {/* <Image className=" absolute top-2" src="/Logo.png" alt="Logo" width={220} height={20} /> */}
          <Image
            src="/Logo.png"
            className=" absolute shadow-lg top-0"
            alt="Logo"
            width={150}
            height={40}
          />
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl z-30 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <icon>
            {open ? (
              <IoClose className="text-white" />
            ) : (
              <CiMenuBurger
                className="text-white"
              />
            )}
          </icon>
        </div>

        <ul
          className={`md:flex md:items-center text-sm md:pb-0 md:mt-0 -mt-3 md:static md:bg-transparent bg-[#464646] z-10 inset-x-0 md:z-auto left-0 w-full h-full md:w-auto md:pl-0 fixed pl-9 transition-all duration-500 ease-in ${
            open ? "left-0" : "left-[-1150px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <a
                href={link.link}
                className=" text-blac hover:text-gray-400 duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 text-md md:my-0 my-7 hidden md:block">
            <Button>EMERGENCY VISA IN 12 HOURS</Button>
          </li>

          <div className="flex flex-row text-2xl gap-6 lg:mx-4 mx-5 my-4">
            <Link href="/" className="socialLink">
              <FaFacebookF />
            </Link>
            <Link href="/" className="socialLink">
              <FaTwitter />
            </Link>
          </div>

          <select className="bg-transparent">
            <option value="">English</option>
            <option value="">العربية</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;