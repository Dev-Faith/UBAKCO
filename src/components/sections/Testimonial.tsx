"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TestimonialCard from "../ui/cards/TestimonialCard";

const Testimonial = () => {
  const testimonialRef1 = useRef<HTMLDivElement | null>(null);
  const testimonialRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create timeline for testimonialList1 with multi-step animation
    if (testimonialRef1.current) {
      const tl1 = gsap.timeline({ repeat: -1 });
      
      tl1
        .to(testimonialRef1.current, {
          x: -300,
          duration: 1.5,
          ease: "power2.out"
        })
        .to(testimonialRef1.current, {
          x: -150,
          duration: 0.8,
          ease: "power2.inOut"
        })
        .to(testimonialRef1.current, {
          x: -400,
          duration: 1.2,
          ease: "power2.inOut"
        })
        .to(testimonialRef1.current, {
          x: 0,
          duration: 1.8,
          ease: "power2.inOut"
        });
    }

    // Create timeline for testimonialList2 with opposite multi-step animation
    if (testimonialRef2.current) {
      const tl2 = gsap.timeline({ repeat: -1 });
      
      tl2
        .to(testimonialRef2.current, {
          x: 300,
          duration: 1.5,
          ease: "power2.out"
        })
        .to(testimonialRef2.current, {
          x: 150,
          duration: 0.8,
          ease: "power2.inOut"
        })
        .to(testimonialRef2.current, {
          x: 400,
          duration: 1.2,
          ease: "power2.inOut"
        })
        .to(testimonialRef2.current, {
          x: 0,
          duration: 1.8,
          ease: "power2.inOut"
        });
    }

    return () => {
      gsap.killTweensOf([testimonialRef1.current, testimonialRef2.current]);
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
    <section className="bg-[#EFEFEF] pb-[113px]  overflow-hidden pb-[319px]">
      <div className="relative  pt-[150px]  pl-[60px] flex items-start justify-between overflow-hidden">
        <div className="left flex flex-col gap-[64px] ">
          <h1 className="text-[75px]/[94px] font-bold tracking-[0.02em] w-[918px] font-display text-[#000000] z-9">
            What Clients Say About Ubakco
          </h1>
          <p className="font-sans text-[#323232] text-[28px] w-[516px]">
            Feedback from businesses and individuals who rely on Ubacko for fat,
            secure, and professional delivery.
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
      <div className="px-[60px] w-[100vw] mt-[100px] relative h-[934px]">
        <Image
          src="/images/testShadowLeft.png"
          alt="Shadow Left"
          className="absolute z-[9] left-[-400px]  top-[-200px] h-[1300px] w-full z-50 pointer-events-none"
          width={100}
          height={100}
        />
        <div>
          <div 
            className="flex items-center gap-[50px] absolute left-[-50%]"
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
            className="flex items-center right-[-50%] gap-[50px] mt-[50px] absolute bottom-0"
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
        <Image src="/images/testShadowRight.png" width={100} height={100} alt="Shadow Right" className="absolute right-[-400px] top-[-200px] h-[1300px] w-full z-50 pointer-events-none z-[9]" />
      </div>
    </section>
  );
};

export default Testimonial;
