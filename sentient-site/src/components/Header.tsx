"use client";
import React from "react";
import Image from "next/image";
import SentientLogo from "../public/Sentient-Logo.png";
import Instagram from "../public/icon/iconmonstr-instagram-14-240.png";
import Youtube from "../public/icon/iconmonstr-youtube-9-240.png";
import Spotify from "../public/icon/iconmonstr-spotify-4-240.png";
import Apple from "../public/icon/iconmonstr-apple-os-4-240.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Header = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const scaleLogo = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const moveLogoUp = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const moveNavDown = useTransform(scrollYProgress, [0, 1], [-2000, 0]);

  return (
    <>
      <header>
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex justify-center z-50"
          style={{ scale: scaleLogo, y: moveLogoUp }}
          ref={targetRef}
        >
          <a href="#home">
            <Image
              src={SentientLogo}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </a>
        </motion.div>
        <motion.div style={{ y: moveNavDown }}>
          <nav className="fixed bg-[#0a0a0a] w-full h-36 pt-24 flex justify-center align-end top-0 z-40">
            <div className="container mx-auto flex justify-center p-4">
              <ul className="flex justify-between items-center space-x-8">
                <li>
                  <a href="#new-release" className="navlinks-link tidal">
                    New Release
                  </a>
                </li>
                <li>
                  <a className="navlinks-link active" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#releases" className="navlinks-link boyw">
                    Releases
                  </a>
                </li>
                <li>
                  <a href="#store" className="navlinks-link">
                    Store
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navlinks-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </motion.div>
      </header>
      <nav>
        <div className="socials-container">
          <ul className="toggle">
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
      </nav>
    </>
  );
};

export default Header;
