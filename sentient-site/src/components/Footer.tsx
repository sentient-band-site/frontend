"use client";
import SentientLogo from "../public/Sentient-Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center my-4">
        <Image
          src={SentientLogo}
          height="30"
          width="30"
          alt="logo"
          className="mr-2"
        ></Image>
        <p className="w-32 text-xs mt-1">2024 Sentient</p>
      </div>
    </>
  );
};

export default Footer;
