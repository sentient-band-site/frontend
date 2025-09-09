"use client";
import Image from "next/image";
import { Video } from "./Video";
import { motion } from "framer-motion";
import Tidal from "../public/artwork/Tidal.png";
import BeOnYourOwnWay from "../public/artwork/BeOnYourWay.jpg";
import TheTruth from "../public/artwork/TheTruthThatsBehindUs.jpg";
import RedSky from "../public/artwork/RedSkyAtMorning.jpg";
import SaltLight from "../public/artwork/SaltAndLight.jpg";
import Isophase from "../public/artwork/Isophase.jpg";

const Releases = () => {
  return (
    <>
      <div>
        <motion.div
          id="new-release"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center m-10 md:m-32">
            <Image
              src={Isophase}
              sizes="500"
              alt="Isophase"
              className="lg:w-1/2 mb-10"
            />
            <div className="md:ml-10 md:w-1/2 w-full">
              <Video
                src="https://www.youtube.com/embed/uTbGNekZ9SE?si=2M1G5p4UftcexlPY"
                title="Isophase"
              />
              <div className="mt-10 md:mt-0">
                <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
                  Isophase
                </h2>
                <p className="lg:text-lg md:mt-16">
                  A heavy addition to our discography that builds upon the sound
                  we
                  {"'"}ve been developing since the start. We{"'"}ve been
                  working on this one since the start of Sentient but it was
                  never in a state we could show to you until now.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        id="releases"
      >
        <Image src={Tidal} sizes="500" alt="tidal" className="mb-10 md:w-1/2" />
        <div className="md:ml-10 md:w-1/2">
          <Video 
            src="https://www.youtube.com/embed/2O5XVyO5SZc?si=LFl7IXySpIJwF50b" 
            title="Tidal" 
          />
          <div className="mt-10 md:mt-0">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              Tidal
            </h2>
            <p className="lg:text-lg md:mt-16">
              Tidal is an emotional experience that crashes like waves. It
              {"'"}s a deeply thoughtful song about grief that dives into the
              experience and the realities of loss. Open the door and let it
              envelop you.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={BeOnYourOwnWay}
          sizes="500"
          alt="BOYW"
          className="mb-10 lg:w-1/2"
        />
        <div className="md:ml-10 md:w-1/2">
          <Video
            src="https://www.youtube.com/embed/zooiw_COQKg?si=99zEIr1a0yFJ7iOQ"
            title="Be On Your Way"
          />
          <div className="mt-10 md:mt-0">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              Be On Your Own Way
            </h2>
            <p className="lg:text-lg md:mt-16">
              Our take on Daughter{"'"}s beautiful song, Be On Your Own Way has
              a more heavier tone. This song spoke to us on a level we couldn
              {"'"}t describe and felt compelled to make a version that was true
              to us.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={TheTruth}
          sizes="500"
          alt="The Truth That's Behind Us"
          className="mb-10 lg:w-1/2"
        />
        <div className="md:ml-10 md:w-1/2">
          <Video
            src="https://www.youtube.com/embed/1DqXVfzAMOk?si=0O9uXxZdyYlUVYls"
            title="The Truth That's Behind Us"
          />
          <div className="mt-10 md:mt-0">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              The Truth That{"'"}s Behind Us
            </h2>
            <p className="lg:text-lg md:mt-16">
              The title song of our full length album is another song that we
              were building on since before Sentient was a band.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={RedSky}
          sizes="500"
          alt="Red Sky at Morning"
          className="mb-10 lg:w-1/2"
        />
        <div className="md:ml-10 md:w-1/2">
          <Video
            src="https://www.youtube.com/embed/E-zQnc8YPOM?si=_qMW2LZMxx4OxaTv"
            title="Red Sky At Morning"
          />
          <div className="mt-10 md:mt-0">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              Red Sky At Morning
            </h2>
            <p className="lg:text-lg md:mt-16">
              A deeply emotional song about loss and grappling with the
              realities and trials life can throw at us.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row justify-center m-10 md:m-32"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={SaltLight}
          sizes="500"
          alt="Salt and Light"
          className="mb-10 lg:w-1/2"
        />
        <div className="md:ml-10 md:w-1/2">
          <Video
            src="https://www.youtube.com/embed/xstwjyruCtg?si=g6Vf7FVy5oDIThhx"
            title="Cascading"
          />
          <div className="mt-10 md:mt-0">
            <h2 className="mt-5 md:mt-0 mb-5 text-xl md:text-2xl font-bold uppercase tracking-wide text-center sm:text-left">
              Cascading
            </h2>
            <p className="lg:text-lg md:mt-16">
              Cascading is one of the first songs we ever wrote and for that,
              will hold a special place in our hearts.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Releases;
