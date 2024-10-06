"use client";
import Image from "next/image";
import { Video } from "./Video";
import Tidal from "../public/sentient tidal shirt.png";
import BeOnYourOwnWay from "../public/BOYW ART.jpg";
import TheTruth from "../public/The Truth That's Behind Us.jpg";
import RedSky from "../public/RSAM 1400.jpg";
import SaltLight from "../public/salt and light 1400.jpg";
import Isophase from "../public/Isophase.jpg";

const Releases = () => {
  return (
    <>
      <div className="flex justify-center m-32" id="new-release">
        <div>
          <Image src={Isophase} sizes="500" alt="Isophase" />
        </div>
        <div className="ml-10">
          <Video
            src="https://www.youtube.com/embed/uTbGNekZ9SE?si=2M1G5p4UftcexlPY"
            title="Isophase"
          />
          <h2>Isophase</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum
            praesentium culpa expedita vero id delectus ipsam ullam earum porro.
            Labore adipisci distinctio nostrum esse in laboriosam impedit,
            tempora consequatur.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-32" id="releases">
        <div className="">
          <Image src={Tidal} sizes="500" alt="tidal" />
        </div>
        <div className="ml-10">
          <h2>Tidal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-32">
        <div className="">
          <Image src={BeOnYourOwnWay} sizes="500" alt="BOYW" />
        </div>
        <div className="ml-10">
          <Video
            src="https://www.youtube.com/embed/zooiw_COQKg?si=99zEIr1a0yFJ7iOQ"
            title="Be On Your Way"
          />
          <h2>Be On Your Own Way</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-32">
        <div className="">
          <Image src={TheTruth} sizes="500" alt="The Truth That's Behind Us" />
        </div>
        <div className="ml-10">
          <Video
            src="https://www.youtube.com/embed/1DqXVfzAMOk?si=0O9uXxZdyYlUVYls"
            title="The Truth That's Behind Us"
          />
          <h2>The Truth That{"'"}s Behind Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-32">
        <div className="trackart">
          <Image src={RedSky} sizes="500" alt="Red Sky at Morning" />
        </div>
        <div className="ml-10">
          <Video
            src="https://www.youtube.com/embed/E-zQnc8YPOM?si=_qMW2LZMxx4OxaTv"
            title="Red Sky At Morning"
          />
          <h2>Red Sky At Morning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-32">
        <div className="">
          <Image src={SaltLight} sizes="500" alt="Salt and Light" />
        </div>
        <div className="ml-10">
          <Video
            src="https://www.youtube.com/embed/xstwjyruCtg?si=g6Vf7FVy5oDIThhx"
            title="Cascading"
          />
          <h2>Salt + Light</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
    </>
  );
};

export default Releases;
