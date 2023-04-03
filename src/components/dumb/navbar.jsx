import React from "react";

export default function Navbar() {
  return (
    <div className="navbar text-white px-9">
      <div className="flex-1">
        <img src="/logo_kitsudev.svg"></img>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/about">Github</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
