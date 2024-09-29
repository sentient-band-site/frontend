"use client";
import React from "react";
import Image from "next/image";
import SentientLogo from "../public/Sentient-Logo.png";
import Instagram from "../public/icon/iconmonstr-instagram-14-240.png";
import Youtube from "../public/icon/iconmonstr-youtube-9-240.png";
import Spotify from "../public/icon/iconmonstr-spotify-4-240.png";
import Apple from "../public/icon/iconmonstr-apple-os-4-240.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#home">
            <Image src={SentientLogo} width={100} height={100} alt="logo" />
          </a>
        </div>
        <nav className="flex justify-center">
          <div className="container mx-28 p-4">
            <ul className="flex justify-between items-center">
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
        </nav>
      </header>
      <nav>
        <div className="socials-container">
          <ul className="toggle">
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
    </>
  );
};

export default Header;
