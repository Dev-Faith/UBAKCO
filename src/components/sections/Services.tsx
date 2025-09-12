"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
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
    <div className="w-full flex justify-center bg-black lg:mt-[88px] overflow-hidden h-[492px] w-screen ">
      <div className=" w-screen relative h-full flex lg:justify-center">
        <Image
          src="/images/service-bg.png"
          alt="services"
          width={1500}
          height={492}
          className="lg:h-[492px] absolute left-0 h-full object-cover z-[11] w-screen"
        />
        <Image
          src="/images/OurServiceBlur.png"
          alt="services"
          width={1500}
          height={492}
          className="h-screen md:h-full w-screen md:w-full absolute left-[-20%] top-[-50%] lg:left-[-30%] md:left-[-20%] lg:left-[-50%] lg:top-[-10%] md:top-[-20%] z-[11]"
        />
        <div className=" w-full h-full z-[11] flex justify-center">
          <div
            ref={ref}
            className="absolute w-full h-full max-w-[1440px] px-[16px] sm:px-[60px] pt-[180px] flex flex-col gap-[24px]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="text-[#ffffff] font-display text-[24px]/[36px] tracking-[-0.02em] lg:text-[48px] font-bold"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="text-[#ffffff] text-[14px]/[21px]  lg:text-[18px]/[27px] w-[304px] lg:w-[516px] font-regular"
            >
              From same day shipments to international cargo, UBAKCO delivers
              with precision and care.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
