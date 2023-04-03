import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative h-screen overflow-hidden md:max-h-[1000px] text-white"
    >
      <div className="absolute inset-0 z-30 flex flex-col pt-[165px] items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl mb-3 font-bold md:leading-[120%] md:text-[64px] md:mb-2">
          Hi, Welcome !!!
          <br />
          <span className="text-[#D07374]">Kitsudev</span> Desu 🦊
        </h1>
        <p className="mb-16 md:mb-12">
          fullstack web developer with 1+ years of experience
        </p>
        <button className="bg-[#DC9752] hover:border-white max-w-[304px] w-full py-3 rounded-full font-semibold animate-bounce hover:animate-none">
          Start Our Journey <span className="">↓</span>
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C06C84]/40 z-20"></div>
      <div className=" absolute inset-0 z-10 bg-bottom bg-cover filter brightness-50 md:brightness-75 w-auto">
        <img className="bottom-0 absolute md:static" src="/kitsudev.png"></img>
      </div>
    </section>
  );
}
