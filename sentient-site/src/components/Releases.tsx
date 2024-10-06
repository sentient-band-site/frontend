"use client";
import Image from "next/image";
import Tidal from "../public/sentient tidal shirt.png";
import BeOnYourOwnWay from "../public/BOYW ART.jpg";
import TheTruth from "../public/The Truth That's Behind Us.jpg";
import RedSky from "../public/RSAM 1400.jpg";
import SaltLight from "../public/salt and light 1400.jpg";

const Releases = () => {
  return (
    <>
      <div className="new-release tidal" id="new-release">
        <div className="trackart">
          <Image src={Tidal} alt="tidal" />
        </div>
        <div className="tracklist">
          <h2>Tidal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="new-release-b boyw" id="releases">
        <div className="trackart">
          <Image src={BeOnYourOwnWay} alt="BOYW" />
        </div>
        <div className="tracklist">
          <h2>Be On Your Own Way</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="new-release" id="new-release">
        <div className="trackart">
          <Image src={TheTruth} alt="The Truth That's Behind Us" />
        </div>
        <div className="tracklist">
          <h2>The Truth That{"'"}s Behind Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="new-release-b toggle" id="new-release-b">
        <div className="trackart">
          <Image src={RedSky} alt="Red Sky at Morning" />
        </div>
        <div className="tracklist">
          <h2>Red Sky At Morning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quia voluptas, veritatis reprehenderit fugiat assumenda
            necessitatibus. Quibusdam fugit explicabo minus dicta, dolorem hic
            illum optio itaque minima, incidunt quisquam? Fuga.
          </p>
        </div>
      </div>
      <div className="new-release" id="new-release">
        <div className="trackart">
          <Image src={SaltLight} alt="Salt and Light" />
        </div>
        <div className="tracklist">
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
