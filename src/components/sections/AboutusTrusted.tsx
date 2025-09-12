
"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const AboutusTrusted = () => {
  const carouselItems = [
    {
      image: "/images/ac1.png",
      title: "Luxury Fashion & Jewelry",
      logo: "/icons/ci-1.svg",
      desc: "We handle exclusive fashion pieces and fine jewelry with precision, secure packaging, and private delivery designed for high-value retail clients and boutiques.",
    },
    {
      image: "/images/ac2.png",
      title: "Art Collectors",
      logo: "/icons/ci-2.png",
      desc: "From framed masterpieces to fragile sculptures, our logistics process is built to preserve, protect, and deliver priceless artworks with white-glove care.",
    },
    {
      image: "/images/ac3.png",
      title: "Vips & Executives",
      logo: "/icons/ci-3.svg",
      desc: "For public figures, diplomats, and corporate leaders, we offer discreet, schedule-sensitive deliveries using non-branded vehicles and highly vetted personnel.",
    },
    {
      image: "/images/ac4.png",
      title: "High-End Electronics",
      logo: "/icons/ci-4.svg",
      desc: "We provide secure, insured delivery of premium tech devices, ensuring every item arrives in perfect condition, with temperature control and full tracking on request.",
    },
    {
      image: "/images/ac5.png",
      title: "Personal Shoppers",
      logo: "/icons/ci-5.svg",
      desc: "We support personal shoppers and stylists with fast, coordinated pickups, package consolidation, and private delivery to meet demanding luxury clients’ needs.",
    },
  ];
  const carouselRef = useRef<HTMLDivElement>(null);


  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
      <div className="w-full bg-white flex justify-center">
        <section className="max-w-[1440px] w-full pt-[120px] px-[16px] sm:px-[60px] lg:pl-[60px]">
        <div ref={ref}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className=" text-[32px]/[48px] lg:text-[42px]/[54.6px] sm:text-[42px]/[54.6px] font-semibold lg:font-bold tracking-[-0.02em] sm:w-[358px] font-display w-[268px] lg:w-[358px]"
        >
          Trusted by Industry Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className=" text-[18px]/[27px] lg:text-[28px]/[42px] sm:text-[28px]/[42px] sm:w-[500px] font-[400] font-sans tracking-[0.05em] text-[#656565] w-[370px] lg:w-[628px] mt-[24px] lg:mt-[32px]"
        >
          Proud to serve Nigeria's most prestigious companies and organizations
        </motion.p>
      </div>
      <div
        ref={carouselRef}
        className="about-carousel mt-[70px] flex flex-col lg:flex-row items-center gap-[32px] pb-[138px] lg:overflow-x-auto overflow-y-hidden lg:pr-[40px] hide-scrollbar"
      >
        {carouselItems.map((items, index) => (
          <div
            key={index}
            className="relative px-[20px] lg:px-[40px]  py-[60px] text-white min-h-[490px] w-full sm:h-[812px] lg:min-w-[596px] lg:min-h-[812px] flex flex-col justify-between"
          >
            <Image
              src={items.image}
              alt={items.title}
              width={500}
              height={300}
              className="rounded-[40px] top-0 left-0 w-full h-full object-cover absolute w-[350px] lg:w-[596px] h-[490px] sm:h-[812px]"
            />
            <div className="flex items-center justify-between z-[1]">
              <p className=" text-[24px]/36px] sm:text-[40px]/[42px] sm:w-full w-[190px] lg:w-full tracking-[0.05em] font-semibold font-display line-clamp-2">
                {items.title}
              </p>{" "}
              <Image
                src={items.logo}
                alt={items.title}
                width={80}
                height={80}
              />
            </div>
            <p className="text-[16px]/[24px] lg:text-[28px]/[42px] w-full sm:text-[28px]/[42px] sm:w-full z-[1]  line-clamp-3">{items.desc}</p>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default AboutusTrusted;
