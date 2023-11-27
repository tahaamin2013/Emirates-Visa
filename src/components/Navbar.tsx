'use client'
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
    <div className="shadow-md w-full top-0 left-0">
      <div className="xl:flex items-center justify-between bg-white py-4 w-full xl:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          Designer
          <Image
            src="/Logo.png"
            className="absolute top-1"
            alt="Logo"
            width={150}
            height={40}
          />
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden"
        >
          {open ? <IoClose /> : <CiMenuBurger />}
        </div>

        <ul
          className={`xl:flex xl:items-center xl:pb-0 xl:static bg-white z-10 inset-x-0 backdrop-blur-lg xl:z-auto left-0 w-full h-full xl:w-auto xl:pl-0 bg-white/75 fixed pl-9 transition-all duration-500 ease-in ${
            open ? "left-0" : "left-[-1150px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="xl:ml-8 text-xl xl:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="xl:ml-8 text-md xl:my-0 my-7 hidden xl:block">
            <Button>EMERGENCY VISA IN 12 HOURS</Button>
          </li>

          <div className="flex flex-row text-2xl gap-4 lg:mx-4 mx-1 my-4">
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
