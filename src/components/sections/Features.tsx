"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import FeatureCard from "../ui/cards/FeatureCard";

export default function Features() {
  const featuresCardItems = [
    {
      icon: "/icons/Nationwide.png",
      title: "Nationwide Delivery",
      desc: "Comprehensive logistics coverage across all 36 states with guaranteed delivery timelines.",
      subDesc:
        "All 36 states coverage, E-commerce integration, Bulk shipping rates, API Connectivity",
      separator: true,
    },
    {
      icon: "/icons/Coporate-cargo.png",
      title: "Corporate cargo",
      desc: "Specialized solutions for businesses with volume discounts and dedicated account management.",
      subDesc:
        "Same-day delivery options, Bulk shipping discounts, Dedicated account management, Real-time tracking",
      separator: false,
    },
    {
      icon: "/icons/Haulage.png",
      title: "Haulage Services",
      desc: "Heavy-duty transportation for industrial equipment and bulk cargo with specialized vehicles.",
      subDesc:
        "Heavy machinery transport, Construction materials, Industrial equipment, Specialized vehicles",
      separator: true,
    },
    {
      icon: "/icons/import.png",
      title: "Import/Export",
      desc: "Seamless international shipping with customs clearance and documentation support.",
      subDesc:
        "Customs clearance, International shipping, Documentation support, Duty management",
      separator: false,
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
    <section className="bg-[#EFEFEF] 2xl:w-screen rounded-tl-[50px]  lg:pb-[113px] rounded-tr-[50px] overflow-hidden">
      <div className="relative  lg:pt-[150px] pt-[70px] px-[16px] md:px-[60px] lg:pl-[60px] 2xl:pl-[120px] flex items-start justify-between overflow-hidden">
        <div ref={ref} className="left flex flex-col lg:gap-[64px] gap-[24px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className=" text-[32px]/[48px] lg:text-[75px]/[94px] md:text-[32px]/[41.6px] md:w-[714px] font-bold tracking-[-0.02em] w-[370px] lg:w-[918px] font-display text-[#000000] z-9 "
          >
            Complete Logistics Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="font-sans text-[#656565] lg:text-[28px]/[42px] md:text-[16px]/[24px] text-[18px]/[27px] md:w-[600px] lg:w-[516px]"
          >
            Ubakco offers tailored logistics built on trust and performance.
            Every delivery, big or small is managed with the precision our
            clients expect.
          </motion.p>
        </div>
        <div className="overflow-hidden absolute w-[600px] h-full bg-[#EFEFEF] top-0 right-[-64px] hidden lg:block">
          <Image
            src="/images/Logomark.png"
            alt="Ubakco Logo"
            width={793}
            height={752}
            className=" w-[700px] h-[752px] soft-light-effect absolute right-0 top-[-150px]"
          />
        </div>
      </div>
      <div className="px-[60px] w-full mt-[54px] lg:mt-[100px] md:mt-[54px] flex justify-center">
        <div className="separator w-[1800px] mx-auto lg:border-t border-[#CACACA] px-[20px] py-[75px] lg:grid lg:grid-cols-2 lg:gap-y-[115px] flex flex-col relative justify-items-center ">
          {featuresCardItems.map((item, index) => (
            <div
              key={index}
              className={`${
                featuresCardItems.length - 1 !== index
                  ? "border-b-[1px] lg:border-none border-[#CACACA]"
                  : ""
              }  pb-[24px] lg:pb-0 `}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                subDesc={item.subDesc}
                separator={item.separator}
                className={`${index == 0 && "bg-[#F8DCD2] lg:bg-[#EFEFEF]"}`}
              />
            </div>
          ))}
          <div className="separator h-[1px] absolute w-full bg-[#CACACA] top-[50%] hidden lg:block"></div>
          <div className="separator h-[1px] absolute w-full bg-[#CACACA] bottom-0 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
