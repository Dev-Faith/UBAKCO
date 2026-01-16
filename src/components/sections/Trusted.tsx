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
        duration: 100,
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
      logo: "/images/logo1.png",
      height: 250,
      width: 250,
      key: "logo-1",
    },
    {
      logo: "/images/logo2.jpeg",
      height: 250,
      width: 250,
      key: "logo-2",
    },
    {
      logo: "/images/logo4.jpeg",
      height: 210,
      width: 210,
      key: "logo-4",
    },
    {
      logo: "/images/logo5.png",
      height: 210,
      width: 210,
      key: "logo-5",
    },
    {
      logo: "/images/logo6.png",
      height: 210,
      width: 210,
      key: "logo-6",
    },
    {
      logo: "/images/logo7.png",
      height: 210,
      width: 210,
      key: "logo-7",
    },
    {
      logo: "/images/logo8.png",
      height: 210,
      width: 210,
      key: "logo-8",
    },
    {
      logo: "/images/logo9.png",
      height: 210,
      width: 210,
      key: "logo-9",
    },
    {
      logo: "/images/logo10.png",
      height: 210,
      width: 210,
      key: "logo-10",
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
      controls.start({ opacity: 1, y: 0, transition: { duration:0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section className=" relative z-[2] w-full flex justify-center bg-white">
      <div className=" mt-[32px] sm:mt-[60px] w-full max-w-[1440px] mx-auto relative pb-[128px] sm:pb-[150px] px-[16px] sm:px-[60px] ">
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
        <div className="flex relative justify-between items-center w-full p-0 mt-[94px] overflow-hidden">
          <Image
            src="/images/leftShadow.png"
            alt="Left Shadow"
            width={100}
            height={100}
            className="object-cover absolute left-[-16px] z-10"
          />
          <div className="relative w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
            <div
              className="flex items-center justify-center gap-[38px] lg:gap-[80px]"
              ref={iconsContainerRef}
              style={{ width: 'max-content' }}
            >
              {/* Duplicate icon list for seamless scroll */}
              {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map(({ logo, height, width, key }, idx) => (
                <Image
                  src={logo}
                  alt={`Company Logo ${idx}`}
                  width={Number(companyLogos[idx % companyLogos.length].width)}
                  height={Number(companyLogos[idx % companyLogos.length].height)}
                  key={key + '-' + idx}
                  className="flex items-center justify-center flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <Image
            src="/images/rightShadow.png"
            alt="Right Shadow"
            width={100}
            height={100}
            className="object-cover absolute right-[-32px] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
