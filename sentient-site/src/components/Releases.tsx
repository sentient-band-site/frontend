"use client";
import Image from "next/image";
import { Video } from "./Video";
import { motion } from "framer-motion";
import data from "../utils/data.json";

const Releases = () => {
  return (
    <>
      {data.releases.map((single, index) => (
        <motion.div
          key={index}
          id={index == 0 ? "new-release" : "releases"}
          className="scroll-mt-16 overflow-x-hidden"
          initial={
            index % 2 == 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }
          }
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center m-10 md:m-32">
            <div className="relative md:w-1/2 h-[300px] lg:h-[800px]">
              <Image
                src={single.imageName}
                fill
                alt={single.name}
                className="object-contain"
              />
            </div>
            <div className="md:ml-10 md:w-1/2">
              <Video src={single.video} title={single.name} />
              <div className="mt-10 md:mt-0">
                <h2 className="mt-5 md:mt-0 mb-5 text-2xl md:text-xl font-bold uppercase tracking-wide text-center sm:text-left">
                  {single.name}
                </h2>
                <p className="lg:text-xl md:mt-16">{single.desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Releases;
