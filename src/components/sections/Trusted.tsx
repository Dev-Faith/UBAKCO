"use client";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { FaFacebook, FaApple } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";

const Trusted = () => {
  const iconsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (iconsContainerRef.current) {
      const container = iconsContainerRef.current;
      gsap.set(container, { x: 0 });
      // Get width of one icon set (half the children)
      const iconSetWidth = container.scrollWidth / 2;
      // Animate from 0 to -iconSetWidth (left, so icons move right)
      gsap.to(container, {
        x: -iconSetWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(container, { x: 0 });
        }
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

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section className="w-full flex justify-center bg-white">
      <div className="mt-[130px] w-full max-w-[1440px] mx-auto relative pb-[150px] px-[16px] sm:px-[60px] ">
        <div ref={ref} className="flex flex-col gap-[24px] lg:gap-[32px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="font-display lg:text-[42px]/[54.6px] text-[32px]/[48px] md:text-[42px]/[54.6px] tracking-[-0.02em] font-semibold lg:font-bold w-[370px] lg:w-[550px] md:w-[364px]"
          >
            Trusted by Industry Leaders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="text-[18px]/[27px] lg:text-[20px]/[30px]  font-sans font-regular w-[370px] lg:w-[623px] md:w-[623px]"
          >
            Proud to serve Nigeria's most prestigious companies and organizations
          </motion.p>
        </div>
        <div className="flex justify-between items-center w-full p-0 mt-[94px] overflow-hidden">
          <Image
            src="/images/leftShadow.png"
            alt="Left Shadow"
            width={100}
            height={100}
            className="object-cover absolute left-0 z-10"
          />
          <div className="relative w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
            <div
              className="flex items-center justify-center gap-[38px] lg:gap-[80px]"
              ref={iconsContainerRef}
              style={{ width: 'max-content' }}
            >
              {/* Duplicate icon list for seamless scroll */}
              {[...iconComponents, ...iconComponents].map(({ Component, key }, idx) => (
                <div
                  key={key + '-' + idx}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <Component className="text-[100px] text-[#848484] size-[28px] sm:size-[56px] object-cover" />
                </div>
              ))}
            </div>
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
