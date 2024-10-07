"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Light from "../public/Walk Towards The Light.png";

const About = () => {
  return (
    <>
      <div id="home"></div>
      <div className="flex justify-center m-32" id="about">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image src={Light} sizes="500" alt="lightpath" />
        </motion.div>
        <motion.div
          className="ml-10 w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-5">We are Sentient</h2>
          <p>
            A 5-piece band from Tokyo with modern metal, post-rock, and ambient
            music influences If there is a singular concept behind the band, it
            might be best described as an effort to transmute darkness and pain
            into light, without constraints on style and execution. As the name
            eludes to, the music of Sentient is about visceral feeling, and many
            of the lyrical themes are derived from dark personal experiences and
            finding the light and beauty in them.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
