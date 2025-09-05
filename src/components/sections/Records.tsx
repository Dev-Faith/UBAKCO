"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

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
    <section className="w-full bg-white">
      <div className="lg:pt-[150px] pt-[47px] px-[16px] md:px-[60px] lg:px-[60px] 2xl:px-[120px] w-full max-w-[1440px] mx-auto ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className=" text-[32px]/[48px] tracking-[-0.02em] lg:text-[42px]/[54.6px] font-semibold lg:font-bold font-display w-[209px] lg:w-[450px]"
        >
          Proven Track Records
        </motion.h1>
        <div className="relative border-y-[1px] border-[#CACACA] py-[40px] mt-[55px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[41px] lg:gap-0">
          <div className="separator w-[1px] left-[calc(100%/3)] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
          <div className="separator w-[1px] right-[30%] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
          {records.map((record, index) => (
            <div  key={index} className={`${index !== records.length -1 ? "border-b-[1px] lg:border-none border-[#CACACA] pb-[41px]" : ""}`}>
              <div  
                className="flex flex-col gap-[40px] lg:gap-[56px]"
              >
                <div className="flex flex-col gap-[32px] lg:gap-[48px]">
                  <Image
                    src={record.icon}
                    alt={record.title}
                    width={40}
                    height={40}
                    className="w-[48px] h-[48px]"
                  />
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    className="lg:text-[56px] text-[32px] font-semibold lg:font-bold lg:font-display font-sans"
                  >
                    {record.figure}
                  </motion.h1>
                </div>
                <div className="flex flex-col gap-[28px]">
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    className="lg:text-[32px] text-[24px] font-semibold text-[#323232] font-display"
                  >
                    {record.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    className="lg:text-[24px] text-[20px]/[30px]  font-[400] font-sans text-[#323232] w-[266px] lg:w-[278px]"
                  >
                    {record.description}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Records;
