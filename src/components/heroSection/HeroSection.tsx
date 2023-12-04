"use client";
import React, { useEffect } from "react";
import styles from "./herosection.module.css";
import SearchSection from "../Contry-Selection/Country-Selection";
import CountrySelection from "../Contry-Selection/Country-Selection";
import Navbar from "../Navbar";

function toggleText() {
  const paragraphs = document.querySelectorAll(".text-container p");
  let visibleIndex = -1;

  paragraphs.forEach((p, index) => {
    if (!p.classList.contains("hidden")) {
      p.classList.add("hidden");
      visibleIndex = index;
    }
  });

  visibleIndex = (visibleIndex + 1) % paragraphs.length;
  paragraphs[visibleIndex].classList.remove("hidden");
}

const HeroSection = () => {
  useEffect(() => {
    const intervalId = setInterval(toggleText, 3600);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={` overflow-hidden bg-cover bg-no-repeat bg-center ${styles.heroSection}`}
      >
        <div className="top-0 right-0 bottom-0 left-0 h-full w-full">
          <div className="flex h-full items-center">
            <div className={`text-white mt-[80px] ${styles.style}`}>
              <div className="text-container text-[22px]">
                <p className={` ${styles.paragraphs}`}>
                  <span className="font-bold">Travelling to Dubai?</span>
                  <br />
                  Apply for UAE Visa with Emirates Visa service online
                </p>
                <p className={`hidden second ${styles.paragraphs}`}>
                  The fastest way to get your Emirates Visa approval
                </p>
                <p className={`hidden ${styles.paragraphs}`}>
                  100% guaranteed approval*
                </p>
                <p className={`hidden ${styles.paragraphs}`}>
                  Get Emirates Visa approval in 12 hours with Express Service
                </p>
              </div>
            </div>
          </div>
          <button className="lg:hidden ml-5 heroSection-button bg-[#e90000] text-white border-white border-[2px] mt-[69px] py-4 rounded-[6px] px-[38px]">
            EMERGENCY VISA IN 12 HOURS
          </button>
        </div>
      </div>
      <div className="relative top-[-60px] sm:top-[-45px] md:top-[-62px]">
        <CountrySelection />
      </div>
    </>
  );
};

export default HeroSection;
