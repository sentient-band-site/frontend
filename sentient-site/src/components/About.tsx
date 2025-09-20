"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="home" className="scroll-mt-16 w-screen">
        <div
          className="flex flex-col md:flex-row justify-center m-10 md:m-32 scroll-mt-16"
          id="about"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-[300px] lg:h-[800px]"
          >
            <Image
              src="/WalkTowrdsTheLight.png"
              fill
              alt="lightpath"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            className="md:ml-10 w-full lg:w-1/2 mt-5 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <h2 className="mt-5 md:mt-0 mb-5 text-2xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
                We are Sentient
              </h2>
              <p className="lg:text-xl md:mt-16">
                A 5-piece band from Tokyo with modern metal, post-rock, and
                ambient music influences If there is a singular concept behind
                the band, it might be best described as an effort to transmute
                darkness and pain into light, without constraints on style and
                execution. As the name eludes to, the music of Sentient is about
                visceral feeling, and many of the lyrical themes are derived
                from dark personal experiences and finding the light and beauty
                in them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
