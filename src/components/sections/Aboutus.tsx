"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Aboutus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div className="w-full bg-[#EFEFEF] flex justify-center">
      <section className="relative w-full mt-[60px] lg:mt-[95px] overflow-hidden lg:h-[515px] h-[50vh]">
        <div className="">
          <Image
            src="/images/Aboutus.png"
            alt="About Us"
            width={1440}
            height={515}
            className="w-full lg:h-full h-[60vh] object-cover"
          />
          <Image
            src="/images/aboutShadowLeft.png"
            alt="About Us Shadow Left"
            width={1440}
            height={515}
            className="absolute  left-[-40%] top-[-120%] w-[100vw]"
          />
          <Image
            src="/images/AboutShadowRight.png"
            alt="About Us Shadow Right"
            width={1440}
            height={515}
            className="absolute  right-[-50%] top-[-0%]"
          />
        </div>
         {/* lg:w-[1440px] w-full max-w-[1440px] lg:pt-[10%] pt-[30%] px-[16px] lg:px-[60px] sm:px-[60px] flex flex-col gap-[12px] text-white */}
        <div className="absolute inset-0 w-full h-full flex justify-center items-center text-white">
          <div
            ref={ref}
            className=" w-full h-full max-w-[1440px] flex flex-col gap-[12px] px-[16px] sm:px-[60px] pt-[117px] lg:pt-[193px]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="font-display font-bold  text-[24px]/[36px] lg:text-[48px]/[62.4px] tracking-[-0.02em] lg:w-full w-[273px] sm:text-[40px]/[62.4px]"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="font-sans text-[14px]/[21px] lg:text-[18px]/[27px] w-[273px] lg:w-[572px] sm:text-[18px]/[27px] sm:w-[456px]"
            >
              Backed by 12+ years of experience, UBACKO is a trusted logistics
              partner for personal, corporate, and premium deliveries.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
