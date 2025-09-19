
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
  // Scroll handler for arrows
  const scrollByAmount = 600; // px, matches min-w of card
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollByAmount : scrollByAmount,
        behavior: 'smooth',
      });
    }
  };


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
            className=" text-[18px]/[27px] lg:text-[28px]/[42px] sm:text-[28px]/[42px] sm:w-[500px] font-[400] font-sans tracking-[-0.02em] text-[#656565] w-[370px] lg:w-[628px] mt-[24px] lg:mt-[32px]"
          >
            Proud to serve Nigeria's most prestigious companies and organizations
          </motion.p>
        </div>
        <div className="relative mt-[70px]">
          {/* Arrows only for desktop */}
          <button
            type="button"
            aria-label="Scroll left"
            className="hidden lg:flex absolute left-[32px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#EA5C2B] text-[#EA5C2B] hover:text-white rounded-full w-12 h-12 items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]"
            onClick={() => handleScroll('left')}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            className="hidden lg:flex absolute right-[32px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#EA5C2B] text-[#EA5C2B] hover:text-white rounded-full w-12 h-12 items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]"
            onClick={() => handleScroll('right')}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <div
            ref={carouselRef}
            className="about-carousel flex flex-col lg:flex-row items-center gap-[32px] pb-[138px] lg:overflow-x-auto overflow-y-hidden lg:pr-[40px] hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {carouselItems.map((items, index) => (
              <div
                key={index}
                className="relative px-[20px] lg:px-[40px] py-[16px] sm:py-[60px] text-white min-h-[490px] w-full sm:h-[812px] lg:min-w-[596px] lg:min-h-[512px] flex flex-col justify-between"
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
        </div>
      </section>
    </div>
  );
};

export default AboutusTrusted;
