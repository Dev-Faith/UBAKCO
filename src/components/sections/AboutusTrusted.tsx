"use client"
import Image from "next/image";
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

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onWheel = (e: WheelEvent) => {
      // Only handle vertical scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const atStart = carousel.scrollLeft === 0;
        const atEnd = Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth;
        if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) {
          // Allow normal scroll if at the start/end
          return;
        }
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    };
    carousel.addEventListener('wheel', onWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', onWheel);
  }, []);

  // Hide scrollbar with CSS
  const carouselStyle = {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  } as React.CSSProperties;

  // Hide scrollbar for webkit browsers
  const hideScrollbar = (
    <style>{`
      .about-carousel::-webkit-scrollbar { display: none; }
    `}</style>
  );

  return (
    <section className="pt-[120px] pl-[60px]">
      <div>
        <h1 className="text-[42px]/[54.6px] font-bold tracking-[-0.02em] font-display w-[358px]">
          Trusted by Industry Leaders
        </h1>
        <p className="text-[28px]/[42px] font-[400] font-sans tracking-[0.05em] text-[#323232] w-[628px] mt-[32px]">
          Proud to serve Nigeria's most prestigious companies and organizations
        </p>
      </div>
      <div
        ref={carouselRef}
        className="about-carousel mt-[70px] flex items-center gap-[32px] pb-[138px] overflow-x-auto overflow-y-hidden pr-[40px]"
        style={carouselStyle}
      >
        {carouselItems.map((items, index) => (
          <div
            key={index}
            className="relative px-[40px]  py-[60px] text-white  min-w-[596px] min-h-[812px] flex flex-col justify-between"
          >
            <Image
              src={items.image}
              alt={items.title}
              width={500}
              height={300}
              className="rounded-[40px] top-0 left-0 w-full h-full absolute z-[-1] w-[596px] h-[812px]"
            />
            <div className="flex items-center justify-between ">
              <p className="text-[40px]/[42px] tracking-[0.05em] font-semibold font-display line-clamp-2">
                {items.title}
              </p>{" "}
              <Image
                src={items.logo}
                alt={items.title}
                width={80}
                height={80}
              />
            </div>
            <p>{items.desc}</p>
          </div>
        ))}
      </div>
      {hideScrollbar}
    </section>
  );
};

export default AboutusTrusted;
