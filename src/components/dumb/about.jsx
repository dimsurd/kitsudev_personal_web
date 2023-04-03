import React from "react";

export default function About() {
  return (
    <>
      <section id="about-section" className="mt-8 md:mt-28">
        <div className="container-fluid text-white md:px-16">
          <div className="flex flex-col-reverse md:flex-row">
            <h2 className="font-bold text-xl text-justify  p-4 md:text-5xl md:text-start md:align-middle md:ps-8 md:self-center md:leading-normal">
              Kitsudev is currently working as Fullstack Web Developer at
              Indonesia, where he focuses on{" "}
              <span className="text-[#D07374]">
                {" "}
                Frontend, Backend, and also Database
              </span>
              . Kitsudev can be found indulging his two passions: jamming
              sessions and reading a book. Despite his busy jamming schedule, he
              always makes time to tune in to the insightful discussions of
              relationship with <span className="text-[#D07374]">kitsune</span>.
              Not only does he appreciate the valuable content of her talks, but
              he can't get enough of her smooth and captivating voice.
            </h2>
            <img
              src="/kitsudev.png"
              className="w-full hidden md:block md:w-1/3 object-cover"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
