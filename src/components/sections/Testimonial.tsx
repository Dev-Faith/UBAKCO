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
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    if (!testimonialRef1.current || !testimonialRef2.current || !sectionRef.current) {
      console.warn('Testimonial refs not set:', {
        testimonialRef1: testimonialRef1.current,
        testimonialRef2: testimonialRef2.current,
        sectionRef: sectionRef.current
      });
      return;
    }
    // Debug: refs are set
    console.log('Testimonial refs:', {
      testimonialRef1: testimonialRef1.current,
      testimonialRef2: testimonialRef2.current,
      sectionRef: sectionRef.current
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
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
  ];
  const testimonialList2 = [
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
      rating: "4.2",
      quote:
        "UBAKCO has been our go-to logistics partner for over 5 years. Their premium service is unmatched, and their attention to detail is exceptional.",
      name: "Dan Peters",
      office: "CEO, Spotify",
    },
    {
      image: "/images/spotify.png",
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
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
  <div className="flex justify-center 2xl:w-screen bg-[#EFEFEF] pb-[620px] md:pb-[160px] lg:pb-[500px] md:h-auto">
      <section
        ref={sectionRef}
        className="2xl:w-[1440px]"
      >
        <div className="relative  lg:pt-[150px] pt-[60px] md:px-[60px] px-[16px] lg:pl-[60px] 2xl:pl-[120px] flex items-start justify-between overflow-hidden">
          <div ref={ref} className="left flex flex-col gap-[24px] lg:gap-[64px] ">
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
              className="font-sans text-[#656565] text-[18px]/[27px] font-[400] lg:text-[28px]/[42px] w-[370px] md:w-[498px] lg:w-[516px]"
            >
              Feedback from businesses and individuals who rely on Ubacko for
              fat, secure, and professional delivery.
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
  <div className="w-screen mt-[100px] relative h-[800px] md:px-[60px]">
          <Image
            src="/images/testShadowLeft.png"
            alt="Shadow Left"
            className="hidden lg:block absolute z-[9] left-[-20%] 2xl:left-[-40%] top-[-20%] h-[1300px] w-full z-50 pointer-events-none"
            width={100}
            height={100}
          />
          <div>
            {/* Mobile: show only 3 cards in total, Desktop: show all */}
            <div className="block lg:hidden flex flex-col gap-8 mt-8 mb-8 px-2">
              {testimonialList1.concat(testimonialList2).slice(0, 3).map((testimonial, idx) => (
                <div key={idx} className="w-full flex justify-center">
                  <TestimonialCard
                    image={testimonial.image}
                    rating={testimonial.rating}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    office={testimonial.office}
                  />
                </div>
              ))}
            </div>
            <div>
              <div
                className="invisible lg:visible flex flex-row items-center gap-[32px] left-0 absolute left-[-50%] 2xl:left-[-30%]"
                ref={testimonialRef1}
              >
                {testimonialList1.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    office={testimonial.office}
                  />
                ))}
              </div>
              <div
                className="invisible lg:visible flex flex-row items-center gap-[32px] right-0 absolute right-[-50%] 2xl:right-[10%] top-[60%]"
                ref={testimonialRef2}
              >
                {testimonialList2.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    office={testimonial.office}
                  />
                ))}
              </div>
            </div>
          </div>
          <Image
            src="/images/testShadowRight.png"
            width={100}
            height={100}
            alt="Shadow Right"
            className="hidden lg:block absolute right-[-20%] top-[-20%] 2xl:right-[-30%] h-[1300px] w-full z-50 pointer-events-none z-[9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
