"use client";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { FaFacebook, FaApple } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Trusted = () => {
  const iconsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (iconsContainerRef.current) {
      // Create GSAP timeline with yoyo animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(iconsContainerRef.current, {
        x: -300,
        duration: 2,
        ease: "power2.inOut",
      }).to(iconsContainerRef.current, {
        x: 300,
        duration: 2,
        ease: "power2.inOut",
      });
    }

    return () => {
      gsap.killTweensOf(iconsContainerRef.current);
    };
  }, []);
  const companyLogos = [
    {
      logo: "/images/facebook.png",
      height: "58.7px",
      width: "59.06px",
    },
    {
      logo: "/images/spotify.png",
      height: "100px",
      width: "300px",
    },
    {
      logo: "/images/apple.png",
      height: "58.7px",
      width: "59.06px",
    },
    {
      logo: "/images/facebook.png",
      height: "58.7px",
      width: "59.06px",
    },
    {
      logo: "/images/apple.png",
      height: "58.7px",
      width: "59.06px",
    },
    {
      logo: "/images/facebook.png",
      height: "58.7px",
      width: "59.06px",
    },
    {
      logo: "/images/spotify.png",
      height: "100px",
      width: "300px",
    },
    {
      logo: "/images/apple.png",
      height: "58.7px",
      width: "59.06px",
    },
  ];

  const iconComponents = [
    { Component: FaApple, key: "apple-1" },
    { Component: FaFacebook, key: "facebook-1" },
    { Component: SiSpotify, key: "spotify-1" },
    { Component: FaApple, key: "apple-2" },
    { Component: FaFacebook, key: "facebook-2" },
    { Component: SiSpotify, key: "spotify-2" },
    { Component: FaApple, key: "apple-3" },
    { Component: FaFacebook, key: "facebook-3" },
    { Component: SiSpotify, key: "spotify-3" },
    { Component: FaApple, key: "apple-4" },
    { Component: FaFacebook, key: "facebook-4" },
    { Component: SiSpotify, key: "spotify-4" },
    { Component: FaApple, key: "apple-5" },
    { Component: FaFacebook, key: "facebook-5" },
    { Component: SiSpotify, key: "spotify-5" },
  ];

  return (
    <section className="2xl:w-screen flex justify-center bg-white">
      <div className=" mt-[130px]  w-full 2xl:w-[1440px] relative pb-[150px] ">
        <div className="flex flex-col gap-[24px] lg:gap-[32px] px-[16px] lg:px-[60px] 2xl:px-[120px]">
          <h1 className="font-display lg:text-[60px]/[72px] text-[32px]/[48px] tracking-[-0.02em] font-semibold lg:font-bold w-[370px] lg:w-[550px]">
            Trusted by Industry Leaders
          </h1>
          <p className="text-[18px]/[27px] lg:text-[28px]/[42px]  font-sans font-regular w-[370px] lg:w-[623px]">
            Ubakco offers tailored logisitics built  on trust and performance. Every delivery, big or small is managed with the precision our clients expect.
          </p>
        </div>
        <div className="flex justify-between items-center w-full p-0 mt-[94px] overflow-hidden">
          <Image
            src="/images/leftShadow.png"
            alt="Left Shadow"
            width={100}
            height={100}
            className="object-cover absolute left-0 z-10"
          />
          <div
            className="flex items-center w-full justify-center"
            style={{ gap: "80px" }}
            ref={iconsContainerRef}
          >
            {iconComponents.map(({ Component, key }) => (
              <div
                key={key}
                className="flex items-center justify-center flex-shrink-0"
              >
                <Component className="text-[100px] text-[#848484] size-[56px] object-cover" />
              </div>
            ))}
          </div>
          <Image
            src="/images/rightShadow.png"
            alt="Right Shadow"
            width={100}
            height={100}
            className="object-cover absolute right-0 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
