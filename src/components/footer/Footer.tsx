"use client";

import Link from "next/link";
import Foo from "./Foo";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-white w-full">
      <Foo />

      <footer className="flex justify-center w-full ">
        <div className="justify-center grid grid-cols-1 text-left gap-28  px-4 py-6 lg:py-8 md:text-left md:grid-cols-4">
          {/* Get in touch */}
          <div>
            <h2 className="mb-6 text-black">Get in touch</h2>
            <ul className="text-gray-700 font-light">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  support@emiratesvisa.com
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  WhatsApp
                </Link>
              </li>
              <li className="mb-4">+971 50 803 8472</li>
              <li className="mb-4">Down Town Dubai</li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h2 className="mb-6 text-black">Help & Support</h2>
            <ul className="text-gray-700 font-light">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  support@emiratesvisa.com
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Hangout with Us */}
          <div>
            <h2 className="mb-6 text-black">Hangout with Us</h2>
            <ul className="text-gray-700 font-light">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div>
            <h2 className="mb-6 text-black">About us</h2>
            <ul className="text-gray-700 font-light">
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Term of use
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
           
          </div>
          
         
        </div>
        
      </footer>
      <div className="flex flex-col justify-center items-center gap-16">
      <Image src='/Visa.svg' className="" alt="footer image" width={260} height={260} />
      <p className="text-center mb-9 text-gray-700 font-light text-sm">emiratesvisa.com is officially registered to issue UAE Tourist Visas. <br />
© 2023 All rights reserved.</p>
</div>
    </div>
  );
};

export default Footer;
