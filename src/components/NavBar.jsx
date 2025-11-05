import React, { useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "learn", href: "#learn" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium shadow-md relative bg-white">
      {/* Logo */}
      <a href="#" className="text-xl font-semibold">
        ALGORIZE
      </a>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="flex flex-col items-center gap-1 hover:text-black transition-all"
            >
              <p>{item.name.toUpperCase()}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-all" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden cursor-pointer" onClick={() => setVisible(true)}>
        <div className="space-y-1">
          <div className="w-6 h-[2px] bg-black"></div>
          <div className="w-6 h-[2px] bg-black"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 shadow-lg ${
          visible ? "w-3/4 sm:w-1/3" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 cursor-pointer border-b"
          >
            <span className="text-lg font-semibold">← Back</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b hover:bg-gray-100 transition-all"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
