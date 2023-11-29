"use client";

import Link from "next/link";
import Foo from "./Foo";

const Footer = () => {
  return (
    <div className=" bg-white w-full">
      <Foo />

      <footer className="bg-white flex justify-center w-full dark:bg-gray-900">
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
    </div>
  );
};

export default Footer;
