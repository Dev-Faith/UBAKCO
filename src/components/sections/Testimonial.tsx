"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "../ui/cards/TestimonialCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialRef1 = useRef<HTMLDivElement | null>(null);
  const testimonialRef2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Scroll-based animation for testimonialList1 - moves left as user scrolls
    if (testimonialRef1.current && sectionRef.current) {
      gsap.to(testimonialRef1.current, {
        x: -500,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
    }

    // Scroll-based animation for testimonialList2 - moves right as user scrolls (opposite direction)
    if (testimonialRef2.current && sectionRef.current) {
      gsap.to(testimonialRef2.current, {
        x: 500,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
    }

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
  return (
    <div className="flex justify-center 2xl:w-screen bg-[#EFEFEF]">
      <section
        ref={sectionRef}
        className=" pb-[113px]  overflow-hidden pb-[319px] 2xl:w-[1440px]"
      >
        <div className="relative  pt-[150px]  pl-[60px] 2xl:pl-[120px] flex items-start justify-between overflow-hidden">
          <div className="left flex flex-col gap-[64px] ">
            <h1 className="text-[75px]/[94px] font-bold tracking-[0.02em] w-[918px] font-display text-[#000000] z-9">
              What Clients Say About Ubakco
            </h1>
            <p className="font-sans text-[#323232] text-[28px] w-[516px]">
              Feedback from businesses and individuals who rely on Ubacko for
              fat, secure, and professional delivery.
            </p>
          </div>
          <div className="overflow-hidden absolute w-[600px] h-full bg-[#EFEFEF] top-0 right-[-64px]">
            <Image
              src="/images/Logomark.png"
              alt="Ubakco Logo"
              width={793}
              height={752}
              className=" w-[700px] h-[752px] soft-light-effect absolute right-0 top-[-150px]"
            />
          </div>
        </div>
        <div className="w-screen mt-[100px] relative h-[934px]">
          <Image
            src="/images/testShadowLeft.png"
            alt="Shadow Left"
            className="absolute z-[9] left-[-20%] 2xl:left-[-40%] top-[-20%] h-[1300px] w-full z-50 pointer-events-none "
            width={100}
            height={100}
          />
          <div>
            <div
              className="flex items-center gap-[50px] absolute left-[-50%] 2xl:left-[-30%]"
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
              className="flex items-center right-[-50%] 2xl:right-[10%] gap-[50px] mt-[50px] absolute bottom-0"
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
          <Image
            src="/images/testShadowRight.png"
            width={100}
            height={100}
            alt="Shadow Right"
            className="absolute right-[-20%] top-[-20%] 2xl:right-[-30%] h-[1300px] w-full z-50 pointer-events-none z-[9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
