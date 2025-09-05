"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import FeatureCard from "../ui/cards/FeatureCard";
import { motion, useAnimation, useInView } from "framer-motion";

const PremiumOfferings = () => {
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

  const featuresCardItems = [
    {
      icon: "/icons/prHand.png",
      title: "White Glove Handling",
      desc: "Delicate, high-value items handled with care, precision and professional white-gloved delivery agents.",
      subDesc:
        "Gloved personnel, Velvet/crate packaging, Setup/unpacking available, End-to-end documentation",
      separator: true,
    },
    {
      icon: "/icons/Tbag.png",
      title: "Personal Shopper Logistics",
      desc: "We collect, consolidate, and discreetly deliver exclusive fashion and luxury purchases nationwide.",
      subDesc:
        "Boutique pickups, Consolidated shipments, Discreet private packaging, Import handling & customs",
      separator: false,
    },
    {
      icon: "/icons/luxBag.png",
      title: "Luxury Item Delivery",
      desc: "From art to timepieces, every item arrives intact. Tracked, insured, and expertly secured.",
      subDesc:
        "High-value item protection, GPS tracking, 1-on-1 delivery coordination, Temp-controlled storage",
      separator: true,
    },
    {
      icon: "/icons/personShield.png",
      title: "Executive Discreet Delivery",
      desc: "Confidential logistics for high-profile clients using vetted staff and unbranded transport vehicles.",
      subDesc:
        "Non-branded vehicles, Background-checked officers, Custom scheduling, Confidential handling",
      separator: false,
    },
  ];

  return (
    <div className="w-full bg-[#EFEFEF] flex justify-center z-9">
      <section className="max-w-[1440px] w-full rounded-tl-[50px]  pb-[514px] rounded-tr-[50px] overflow-hidden">
        <div className="relative  lg:pt-[150px] pt-[70px] px-[16px] md:px-[60px] lg:pl-[60px] 2xl:pl-[120px] flex items-start justify-between overflow-hidden z-9">
          <div
            ref={ref}
            className="left flex flex-col lg:gap-[64px] gap-[24px] "
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className=" text-[32px]/[48px] lg:text-[60px]/[72px] font-bold tracking-[-0.02em] w-[370px] lg:w-[918px] font-display text-[#000000]"
            >
              Premium Offerings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="font-sans text-[#656565] lg:text-[28px]/[42px] text-[18px]/[27px] lg:w-[516px]"
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
        <div className="px-[60px] w-full mt-[54px] lg:mt-[100px] flex justify-center">
          <div className="separator w-[1800px] mx-auto lg:border-t border-[#CACACA] px-[20px] py-[75px] lg:grid lg:grid-cols-2 lg:gap-y-[115px] flex flex-col relative justify-items-center ">
            {featuresCardItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  featuresCardItems.length - 1 !== index
                    ? "border-b-[1px] lg:border-none border-[#CACACA]"
                    : ""
                } ${
                  index !== 3 && index !== 1
                    ? "lg:border-r-[1px] border-[#CACACA] lg:pr-[24px]"
                    : ""
                } pb-[24px] lg:pb-0 `}
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
    </div>
  );
};

export default PremiumOfferings;
