"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../utils/data.json";

const navItems = [
  {
    label: "New Release",
    href: "#new-release"
  },
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Releases",
    href: "#releases"
  },
  {
    label: "Contact",
    href: "#contact"
  },
  {
    label: "Coming Soon",
    href: ""
  }
]

const Hamburger = () => {
  const [navbarShown, setNavbarShown] = useState(false);

  const handleNavbar = () => {
    setNavbarShown(!navbarShown);
  };

  return (
    <>
      <div className="fixed m-5 z-50">
        <button
          onClick={handleNavbar}
          className="flex flex-col justify-center items-center"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      navbarShown
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      navbarShown ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      navbarShown
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
          ></span>
        </button>
        {navbarShown && (
          <nav>
            <div className="container mx-auto flex-col p-4 rounded-lg bg-background">
              <ul className="flex-col">
                {navItems.map((nav, index) => (
                  <li key={index}>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                    >
                      <a href={nav.href} className="" onClick={handleNavbar}>
                        {nav.label}
                      </a>
                  </motion.div>
                </li>
                ))}
              </ul>
              <div className="flex justify-center pt-8">
                <ul className="flex space-x-4">
                  {data.socials.map((socialMedia, index) => (
                    <li key={index}>
                    <a href={socialMedia.link} target="_blank">
                      <Image
                        className="bg-white rounded-full"
                        src={socialMedia.src}
                        width={20}
                        height={20}
                        alt={socialMedia.name}
                      />
                    </a>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Hamburger;
