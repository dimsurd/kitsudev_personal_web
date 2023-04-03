import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isUnderHero, setIsUnderHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      const heroSection = document.getElementById("hero-section");
      const heroSectionBottom =
        heroSection.offsetTop + heroSection.offsetHeight;
      const isUnderHero = currentScrollPos >= heroSectionBottom;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      setIsUnderHero(isUnderHero);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    backgroundColor: isUnderHero ? "rgba(192, 108, 132, .4)" : "transparent",
    transition: "transform 300ms ease-in-out",
    transform: visible ? "translateY(0)" : "translateY(-100%)",
  };

  return (
    <div
      className="hidden md:flex navbar fixed text-white px-9 z-50"
      style={navbarStyle}
    >
      <div className="flex-1">
        <img src="/logo_kitsudev.svg"></img>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#hero-section">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#socail-media-section">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
