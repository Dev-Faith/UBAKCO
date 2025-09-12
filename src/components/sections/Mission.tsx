"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/buttons/Button";
import MissionCard from "../ui/cards/MissionCard";
import MissionLabel from "../ui/cards/MissionLabel";
import Image from "next/image";

const Mission = () => {
  interface MissionLabelInterface {
    title: string;
    type: "primary" | "secondary";
    offset?: string;
  }

  const MissionLabels: MissionLabelInterface[] = [
    {
      title: "Cross-Dock Complete",
      type: "primary",
      offset: "top-[70%] lg:top-[69.61px] right-[320.36px] sm:top-[60%]",
    },
    {
      title: "Custom Logistics Planning",
      type: "secondary",
      offset: " top-[60%] lg:top-[32px] right-[-50px] sm:top-[45%]",
    },
    {
      title: "White Glove Handling",
      type: "primary",
      offset: " bottom-[-20%] lg:bottom-[137px] right-[100px] sm:bottom-[1%]",
    },
    {
      title: "Nationwide Delievery",
      type: "secondary",
      offset: " bottom-[-30%] lg:bottom-[76px] right-[350px] sm:bottom-[-20%]",
    },
    {
      title: "Shipment In Transit",
      type: "secondary",
      offset: "bottom-[-45%] lg:bottom-[23px] right-[-22px] sm:bottom-[-28%]",
    },
  ];

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
    <section className="sticky relative top-0 h-screen pb-[120px]  lg:top-0 -z-9 .mission lg:min-h-[calc(100vh+10%)] lg:h-screen pt-[120px] lg:pt-[120px] bg-white rounded-tl-[50px] rounded-tr-[50px] flex lg:items-center lg:justify-center w-full">
      <div className="flex flex-col lg:flex-row h-full px-[16px] sm:px-[60px] max-h-[1029px] h-full  items-start justify-between w-full max-w-[1440px] mx-auto relative">
        <div
          ref={ref}
          className="mission-left flex flex-col gap-[32px] lg:gap-[64px] w-[700px] sm:w-[617px]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="lg:text-[42px]/[54.6px] text-[26px]/[33.8px] sm:text-[42px]/[54.6px] tracking-[-0.02em] font-semibold lg:font-bold font-display w-[370px] sm:w-[714px] lg:w-[427px] tracking-[-0.02em]"
          >
            Logistics that Move Your Business Forward
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className=" w-[370px] lg:w-[516px] text-[#656565] sm:w-[617px] sm:text-[20px]/[30px] font-sans text-[18px]/[27px] font-regular tracking-[-0.02em]"
          >
            From airport-to-airport shipments to executive white-glove
            logistics, Ubakco provides secure, efficient, and time-critical
            delivery solutions across Nigeria and beyond.
          </motion.p>
          <Button className="w-[209px] h-[55px] flex items-center gap-[12px]">
            Our Mission{" "}
            <Image
              src="/icons/arrow-angled.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </Button>
        </div>
      <Image src="/images/mission.png" alt="mission" width={592.75} height={554.41} className="relative sm:w-[592.75px] sm:h-[554.41px] top-0 left-0 lg:hidden z-[24] w-[371px] h-[377.9px] mt-[67px]"/>
        <div className=" lg:h-[80%] w-full lg:flex-row flex-col lg:items-end relative hidden lg:flex">
          <div className=" h-full w-full mission-right max-h-[377.9px] w-max-[371px] lg:max-w-[753px] sm:max-w-[753px] flex relative flex items-center justify-end ">
            <MissionCard
              src="/images/Mission1.png"
              w={455.84}
              h={378}
              className=" lg:absolute w-[300.05px] h-[248.81px] lg:w-[455.84px] sm:w-[472.82px] lg:h-[378px] sm:h-[392.07px]"
            />
            <MissionCard
              src="/images/mission2.png"
              w={455.84}
              h={378}
              className=" absolute top-[-156.5px] right-[-54.24px] -z-10 rotate-[-8.1deg] w-[300.05px] h-[248.81px] sm:w-[472.82px] lg:w-[455.84px] lg:h-[378px] sm:h-[392.07px]"
            />
            {MissionLabels.map((label, index) => (
              <MissionLabel
                key={index}
                offset={label.offset}
                title={label.title}
                variant={label.type}
                className="absolute"
              />
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Mission;
