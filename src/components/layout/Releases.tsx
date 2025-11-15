"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import fallbackData from "../../utils/data.json";

import Loader from "../sections/Loader";
import Image from "next/image";
import Video from "../sections/Video";
import Parallax from "../sections/Parallax";
import { getReleases } from "@/lib/releases";
import { getImage } from "@/lib/images";

import type { Releases } from "@/interfaces/interfaces";

const Releases = () => {
  const [releases, setReleases] = useState<Releases[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutTriggered = false;
    async function getAllReleases() {
      try {
        const timeout = setTimeout(() => {
          timeoutTriggered = true;
          setReleases(fallbackData.releases);
          setLoading(false);
          console.warn("Timeout exceeded");
        }, 5000)

        const data = await getReleases();
        console.log("data:", data)

        const releaseUrls = await Promise.all(
          data.map(async (release: Releases) => {
            try {
              const image = await getImage(release.imageName);
              return {...release, imageUrl: image.url}
            } catch (err: unknown) {
              if(err instanceof Error) {
                return release;
              }
            }
          })
        )

        clearTimeout(timeout);

        if(!timeoutTriggered) {
          setReleases(releaseUrls);
        } else {
          console.log("Replacing data with live data");
          setReleases(releaseUrls);
        }

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Failed to fetch");
        } 
      } finally {
          setLoading(false);
      }
    }
    getAllReleases();
  }, [])

  if (loading) return <Loader message="Loading..."/>
  if(error) return <p className="text-center text-red-500 mt-10">{error}</p>

  return (
    <section className="relative">
      <div className="flex flex-col">
        {[...releases].reverse().map((single, index) => (
            <motion.div
              key={index}
              id={index == 0 ? "new-release" : "releases"}
              className="snap-center scroll-mt-16 overflow-x-hidden"
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
                      src={single.imageUrl || single.imageName}
                      fill
                      alt={single.name}
                      className="object-contain"
                      />
                  </div>
                <div className="md:ml-10 md:w-1/2">
                  <div className="w-full md:h-72 md:mb-5">
                    <Video src={single.video} title={single.name} />
                  </div>
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
      </div>
    </section>
  );
};

export default Releases;
