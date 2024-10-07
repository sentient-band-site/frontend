"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Instagram from "../public/icon/iconmonstr-instagram-14-240.png";
import Youtube from "../public/icon/iconmonstr-youtube-9-240.png";
import Spotify from "../public/icon/iconmonstr-spotify-4-240.png";
import Apple from "../public/icon/iconmonstr-apple-os-4-240.png";

import { useState } from "react";

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
            <div className="container bg-[#0a0a0a] mx-auto flex-col p-4 rounded-lg">
              <ul className="flex-col">
                <li>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <a href="#new-release" className="" onClick={handleNavbar}>
                      New Release
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ x: -15, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  >
                    <a className="" href="#about" onClick={handleNavbar}>
                      About
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  >
                    <a href="#releases" className="" onClick={handleNavbar}>
                      Releases
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ x: -25, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  >
                    <a href="#store" className="" onClick={handleNavbar}>
                      Store
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  >
                    <a href="#contact" className="" onClick={handleNavbar}>
                      Contact
                    </a>
                  </motion.div>
                </li>
              </ul>

              <div className="flex justify-center pt-8">
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://www.instagram.com/sentient.jp/">
                      <Image
                        className="bg-white rounded-full"
                        src={Instagram}
                        width={20}
                        height={20}
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCywdw6fckwUzAHxrzHfmMoA">
                      <Image
                        className="bg-white rounded-full"
                        src={Youtube}
                        width={20}
                        height={20}
                        alt="youtube"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/artist/6Cc4SibWYc1XHn07bvaXTC?si=h2vSmL58TzCjihClD0hVNw">
                      <Image
                        className="bg-white rounded-full"
                        src={Spotify}
                        width={20}
                        height={20}
                        alt="spotify"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://music.apple.com/us/artist/sentient/1551515794">
                      <Image
                        className="bg-white rounded-full outline-black"
                        src={Apple}
                        width={20}
                        height={20}
                        alt="apple"
                      />
                    </a>
                  </li>
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
