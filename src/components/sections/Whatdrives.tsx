"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const driveList = [
  {
    title: "Our Mission",
    desc: "To provide professional, secure, and efficient logistics services that prioritize client needs, protect sensitive cargo, and ensure timely deliveries every time."
  },
  {
    title: "Our Vision",
    desc: "To become West Africa’s most trusted logistics partner by combining technology and discretion, delivering value at every stage of the logistics journey."
  }
];

export default function Whatdrives() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <div className="w-full bg-[#EFEFEF] flex justify-center">
      <section className="max-w-[1440px] w-full pt-[70px] lg:pt-[120px] lg:pb-[100px] px-[16px] sm:px-[60px] lg:px-[60px] relative overflow-hidden">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="w-[198px] lg:w-[265px] font-semibold sm:font-bold text-[32px]/[48px] lg:text-[42px]/[54.6px] font-display tracking-[-0.02em] sm:text-[42px]/[54.6px] sm:w-[265px]"
        >
          What Drives Ubacko
        </motion.h1>
        <div className="flex flex-col  lg:flex-row items-center sm:items-start gap-[24px] lg:justify-between mt-[70px]">
          {driveList.map((drive, index) => (
            <div key={index} className="lg:w-[516px] w-full sm:w-full flex flex-col gap-[16px]">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className="text-[#EA5C2B] text-[26px]/[42px]  sm:text-[32px]/[42px] font-bold tracking-[0.02em] font-display"
              >
                {drive.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className="text-[18px]/[27px] font-sans font-[400] tracking-[0.05em] text-[#656565]"
              >
                {drive.desc}
              </motion.p>
            </div>
          ))}
        </div>
        <Image src="/images/Logomark.png" alt="What Drives Ubacko" height={100} width={100} className="absolute lg:top-[-50%] lg:right-0 top-0 right-0 soft-light-effect w-[289px] h-[274px] lg:w-[567px] lg:h-[537.62px]" />
      </section>
    </div>
  );
 }

