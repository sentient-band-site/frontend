"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Light from "../public/WalkTowrdsTheLight.png";

const About = () => {
  return (
    <>
      <div id="home"></div>
      <div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        id="about"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={Light}
            sizes="500"
            alt="lightpath"
            className="lg:w-full"
          />
        </motion.div>
        <motion.div
          className="md:ml-10 w-full lg:w-1/3 mt-5 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              We are Sentient
            </h2>
            <p className="lg:text-lg md:mt-16">
              A 5-piece band from Tokyo with modern metal, post-rock, and
              ambient music influences If there is a singular concept behind the
              band, it might be best described as an effort to transmute
              darkness and pain into light, without constraints on style and
              execution. As the name eludes to, the music of Sentient is about
              visceral feeling, and many of the lyrical themes are derived from
              dark personal experiences and finding the light and beauty in
              them.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
