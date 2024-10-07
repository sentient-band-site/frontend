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

  const scaleLogo = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const moveLogoUp = useTransform(scrollYProgress, [0, 0.5], [0, -450]);

  // const navbarControls = useAnimation();
  // const [navbarShown, setNavbarShown] = useState(false);
  const [isScaledDown, setIsScaledDown] = useState(false);

  useEffect(() => {
    const release = scrollYProgress.onChange((latestProgress) => {
      if (latestProgress >= 0.5) {
        // navbarControls.start({ opacity: 1, transition: { duration: 1 } });
        setIsScaledDown(true);
      } else {
        setIsScaledDown(false);
      }
    });
    return release;
  }, [scrollYProgress]);

  return (
    <>
      <header className="h-screen">
        <motion.div
          className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50`}
          style={{
            scale: scaleLogo,
            y: moveLogoUp,
          }}
          ref={targetRef}
        >
          <div>
            <a href="#home">
              <Image
                src={SentientLogo}
                fill
                sizes=""
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </a>
          </div>
        </motion.div>
        {isScaledDown && (
          <motion.div
            className="fixed top-4 right-4 w-16 h16 z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home">
              <Image
                src={SentientLogo}
                sizes=""
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </a>
          </motion.div>
        )}
        <Hamburger />
      </header>
    </>
  );
};

export default Header;
