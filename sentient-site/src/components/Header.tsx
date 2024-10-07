"use client";
import React from "react";
import Image from "next/image";
import SentientLogo from "../public/Sentient-Logo.png";
import Hamburger from "./Hamburger";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Header = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scaleLogo = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);
  const moveLogoUp = useTransform(scrollYProgress, [0, 0.5], [0, -400]);

  const navbarControls = useAnimation();
  const [navbarShown, setNavbarShown] = useState(false);

  useEffect(() => {
    const release = scrollYProgress.onChange((latestProgress) => {
      if (latestProgress >= 0.5 && !navbarShown) {
        navbarControls.start({ opacity: 1, transition: { duration: 1 } });
        setNavbarShown(true);
      }
    });
    return release;
  }, [scrollYProgress, navbarControls, navbarShown]);

  return (
    <>
      <header className="h-screen">
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex justify-center z-50"
          style={{
            scale: scaleLogo,
            y: moveLogoUp,
          }}
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
        <Hamburger />

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={navbarControls}
          viewport={{ once: true }}
        >
          <nav className="fixed bg-[#0a0a0a] w-full h-48 pt-24 flex justify-center align-end flex-wrap top-0 z-50">
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
            <div className="flex justify-center pb-24">
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
          </nav>
        </motion.div> */}
      </header>
    </>
  );
};

export default Header;
