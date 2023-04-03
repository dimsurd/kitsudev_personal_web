import React, { useEffect, useState } from "react";

export default function NavbarBottom() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    transition: "transform 300ms ease-in-out",
    transform: visible ? "translateY(0)" : "translateY(200%)",
  };

  return (
    <div
      className="md:hidden navbar text-white fixed z-50 bottom-0 bg-[#C06C84]/90 rounded-full mb-4"
      style={navbarStyle}
    >
      <ul className="menu menu-horizontal w-full font-bold text-base">
        <li className="grow justify-center">
          <a href="#hero-section">Home</a>
        </li>
        <li className="grow justify-center">
          <a href="#about-section">About</a>
        </li>
        <li className="grow justify-center">
          <a href="#socail-media-section">Contact</a>
        </li>
      </ul>
    </div>
  );
}
