"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Statistics from "./Statistics";

const Records = () => {
  const records = [
    {
      icon: "/icons/deliveries.png",
      figure: "15,000+",
      title: "Deliveries Completed",
      description: "Successfully delivered packages nationwide.",
    },
    {
      icon: "/icons/ontime.png",
      figure: "99%",
      title: "On-Time Performance",
      description: "Consistently meeting delivery commitments.",
    },
    {
      icon: "/icons/years.png",
      figure: "12+",
      title: "Years of Excellence",
      description: "Trusted logistics partner since 2012",
    },
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
    <section className=" relative z-[2] w-full bg-white">
      <div className="lg:pt-[150px] pt-[47px]  w-full max-w-[1440px] mx-auto ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className=" text-[32px]/[48px] tracking-[-0.02em] lg:text-[42px]/[54.6px] font-semibold lg:font-bold font-display w-[250px] lg:w-[450px] px-[16px] sm:px-[60px]"
        >
          Proven Track Records
        </motion.h1>
        <Statistics bg="white"/>
      </div>
    </section>
  );
};

export default Records;
