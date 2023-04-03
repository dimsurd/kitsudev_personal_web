import React from "react";

export default function SocialMedia() {
  return (
    <>
      <section id="socail-media-section" className="mt-8 md:mt-28">
        <div className="container md:px-16 text-white">
          <div className="flex flex-col-reverse gap-11 md:gap-0 md:flex-row">
            <div className="grow">
              <div className="flex flex-row gap-2 justify-center h-full items-center">
                <a href="https://www.instagram.com/kitsudev/" target="_blank">
                  <button className="bg-[#DC9752] hover:border-white rounded-full w-32 h-32 md:w-48 md:h-48 animate-spin-slow">
                    <img src="/instagram.svg" className="w-full" />
                  </button>
                </a>
                <a href="mailto:kitsudeveloper@gmail.com?subject=Hey%2CKitsudev%2C%20I%20have%20a%20question%20for%20you.">
                  <button className="bg-[#DC9752] hover:border-white rounded-full w-32 h-32 md:w-48 md:h-48 animate-bounce">
                    <img src="/email.svg" className="w-full h-auto" />
                  </button>
                </a>
              </div>
            </div>
            <h1 className="font-bold text-center md:text-8xl md:text-start ">
              TLDR?
              <br />
              Click
              <br />
              An Icon
              <br />
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
