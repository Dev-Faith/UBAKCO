"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "../ui/cards/TestimonialCard";

const Testimonial = () => {
  const testimonialRef1 = useRef<HTMLDivElement | null>(null);
  const testimonialRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    if (
      !testimonialRef1.current ||
      !testimonialRef2.current ||
      !sectionRef.current
    ) {
      console.warn("Testimonial refs not set:", {
        testimonialRef1: testimonialRef1.current,
        testimonialRef2: testimonialRef2.current,
        sectionRef: sectionRef.current,
      });
      return;
    }
    // Debug: refs are set
    console.log("Testimonial refs:", {
      testimonialRef1: testimonialRef1.current,
      testimonialRef2: testimonialRef2.current,
      sectionRef: sectionRef.current,
    });
    gsap.to(testimonialRef1.current, {
      x: -500,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(testimonialRef2.current, {
      x: 500,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const testimonialList1 = [
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
  ];
  const testimonialList2 = [
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/testimonialProfile.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
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
    <div className="relative z-[2] flex justify-center 2xl:w-screen bg-[#EFEFEF] sm:h-auto">
      <section ref={sectionRef} className="2xl:w-[1440px] w-full sm:px-[60px] px-[16px]">
        <div className="relative  lg:pt-[150px] pt-[60px] flex items-start justify-between overflow-hidden">
          <div
            ref={ref}
            className="left flex flex-col gap-[24px] lg:gap-[32px] "
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="lg:text-[42px]/[54.6px] text-[32px]/[48px] md:w-[374px] font-semibold lg:font-bold md:font-bold tracking-[-0.02em] w-[363px] font-display text-[#000000] z-9"
            >
              What Clients Say About Ubakco
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="font-sans text-[#656565] text-[18px]/[27px] font-[400] lg:text-[20px]/[30px] w-[370px] md:w-[498px] lg:w-[516px]"
            >
              Feedback from businesses and individuals who rely on Ubakco for
              fast, secure, and professional delivery.
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
        <div className="w-full mt-[100px] relative h-full min-h-[648px] pb-[60px] lg:pb-0">
          <Image
            src="/images/testShadowLeft.png"
            alt="Shadow Left"
            className="hidden absolute z-[9] left-[-20%] 2xl:left-[-40%] top-[-20%] h-[1300px] w-full z-50 pointer-events-none"
            width={100}
            height={100}
          />
          {/* Mobile/tablet: flex-col, Desktop: horizontal scroll */}
          <div className="flex flex-col gap-[24px] lg:hidden">
            {testimonialList1.slice(0, 3).map((item, index) => (
              <TestimonialCard
                key={index}
                image={item.image}
                rating={item.rating}
                quote={item.quote}
                name={item.name}
                office={item.office}
              />
            ))}
          </div>
          <div
            className="testimonial-scroll hidden lg:block w-full overflow-hidden relative"
            style={{ height: '340px' }}
          >
            <div
              className="flex gap-[32px] testimonial-track"
              style={{
                animation: 'testimonialScroll 40s linear infinite',
                display: 'flex',
                minWidth: 'max-content',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
              }}
            >
              {[...testimonialList1, ...testimonialList1].map((item, index) => (
                <TestimonialCard
                  key={index}
                  image={item.image}
                  rating={item.rating}
                  quote={item.quote}
                  name={item.name}
                  office={item.office}
                />
              ))}
            </div>
            <style>{`
              @keyframes testimonialScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
          <Image
            src="/images/testShadowRight.png"
            width={100}
            height={100}
            alt="Shadow Right"
            className="hidden absolute right-[-20%] top-[-20%] 2xl:right-[-30%] h-[1300px] w-full z-50 pointer-events-none z-[9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
