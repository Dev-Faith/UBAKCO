
"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WhyPremiumTrust = () => {
  const records = [
    { title: "Over 12 Years of Trust with Elite Clients", separation: true },
    { title: "Over 12 Years of Trust with Elite Clients", separation: false },
    { title: "Over 12 Years of Trust with Elite Clients", separation: true },
    { title: "Over 12 Years of Trust with Elite Clients", separation: false },
  ];
  // Carousel items (replace with your real data/images as needed)
  const carouselItems = [
    {
      img: "/images/hero-img.png",
      title: "Elite Security & Reliability",
      desc: "Your goods are handled with the highest level of care and security."
    },
    {
      img: "/images/Logomark.png",
      title: "Dedicated Account Managers",
      desc: "Personalized service for every premium client."
    },
    {
      img: "/images/spotify.png",
      title: "Global Logistics Network",
      desc: "Seamless delivery across borders and continents."
    },
    {
      img: "/images/mission2.png",
      title: "24/7 Support",
      desc: "Always available to resolve your logistics needs."
    },
  ];

  const imageCarousel = [
    {
      src: "/images/c1.png",
      alt: "carousel 1"
    },
    {
      src: "/images/c2.png",
      alt: "carousel 2"
    },
    {
      src: "/images/c3.png",
      alt: "carousel 3"
    },
    {
      src: "/images/c4.png",
      alt: "carousel 4"
    },
    {
      src: "/images/c5.png",
      alt: "carousel 5"
    },
    {
      src: "/images/c6.png",
      alt: "carousel 6"
    },
    {
      src: "/images/c7.png",
      alt: "carousel 7"
    },
    {
      src: "/images/c8.png",
      alt: "carousel 8"
    },
    {
      src: "/images/c9.png",
      alt: "carousel 9"
    },
    {
      src: "/images/c10.png",
      alt: "carousel 10"
    },
    {
      src: "/images/c11.png",
      alt: "carousel 11"
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !carouselRef.current) return;
    const el = carouselRef.current;
    const itemWidth = 550;
    const gap = 12;
    // Calculate how many images are needed to fill and overflow the viewport
    const visibleWidth = el.parentElement ? el.parentElement.offsetWidth : window.innerWidth;
    const minImages = Math.ceil(visibleWidth / (itemWidth + gap)) + 2; // +2 for overflow buffer
    // Duplicate the array enough times
    const repeats = Math.ceil(minImages / imageCarousel.length);
    const fullArray = Array(repeats).fill(imageCarousel).flat();
    // Set the width of the container
    el.style.width = `${fullArray.length * (itemWidth + gap)}px`;
    // Animate
    const totalWidth = fullArray.length * (itemWidth + gap);
    gsap.set(el, { x: 0 });
    gsap.to(el, {
      x: `-=${totalWidth / 2}`,
      duration: 18 * (fullArray.length / imageCarousel.length) / 2,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -(totalWidth / 2))
      }
    });
    return () => {
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div className="w-full bg-white flex justify-center">
      <section className="max-w-[1440px] w-full pt-[120px] px-[16px] sm:px-[60px] pb-[420px]">
        <h1 className="font-display text-[32px]/[48px] lg:text-[42px]/[54.6px] sm:text-[42px]/[54.6px] sm:w-[500px] tracking-[-0.02em] font-bold w-[370px] lg:w-[717px]">
        Why Premium Clients Trust Ubakco?
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-[120px] gap-y-[24px] mt-[70px] relative h-[320px]">
        {records.map((record, index) => (
          <div
            key={index}
            className={`flex items-center gap-[16px] ${
              record.separation
                ? "lg:pr-[104px] pb-[24px] lg:pb-0 border-[#CACACA] border-b-[1px] lg:border-b-0 lg:border-r-[1px]"
                : `lg:pl-[104px] pb-[24px] lg:pb-0 border-[#CACACA] ${ index < records.length - 1 ? "border-b-[1px]" : ""} lg:border-b-0 `
            }`}
          >
            <Image src="icons/star.svg" alt="star" width={40} height={40} className="size-[40px]" />
            <h2 className="text-[20px]/[30px] lg:text-[28px]/[42px] sm:text-[28px]/[42px] tracking-[-0.02em] w-full">
              {record.title}
            </h2>
            {record.separation && <hr className="hidden lg:block" />}
          </div>
        ))}
        <div className="absolute top-[50%] h-[1px] w-full bg-[#CACACA] hidden lg:block"></div>
      </div>
  {/* Carousel with fading shadows */}
  <div className="carousel w-full overflow-x-hidden mt-[120px] sm:mt-[250px] relative " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div
          ref={carouselRef}
          className="flex gap-[12px] hide-scrollbar"
          style={{ overflowY: "hidden" }}
        >
          {/* Dynamically render enough images for seamless loop */}
          {(() => {
            // Always render at least 2x the imageCarousel for seamless loop
            const fullArray = Array(2).fill(imageCarousel).flat();
            return fullArray.map((item, idx) => (
              <Image
                key={idx}
                src={item.src}
                alt={item.alt}
                width={550}
                height={466}
                className="object-cover rounded-[20px] shadow-md"
                style={{ minWidth: 550, minHeight: 466, maxWidth: 550, maxHeight: 466 }}
              />
            ));
          })()}
        </div>
        <style jsx>{`
          .carousel::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
      </section>
    </div>
  );
}

export default WhyPremiumTrust;
