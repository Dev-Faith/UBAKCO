
"use client";
import React, { useRef, useEffect } from "react";
import QuoteRequestForm from "../ui/forms/QuoteRequestForm";
import Image from "next/image";
import { Button } from "../ui/buttons/Button";
import { motion, useAnimation, useInView } from "framer-motion";


const RequestQuote = ({className, formOffset=true, bg="white"}:{className?:string, formOffset?:boolean, bg?:string}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section className={`min-w-screen bg-${bg} flex justify-center ${className}`}>
      <div className="lg:flex justify-center  w-full max-w-[1440px] px-[16px] sm:px-[60px]">
        <div className={`flex flex-col items-center  w-full bg-red-200  relative ${formOffset ? "top-[calc(297px-650px)]" : ""} lg:rounded-[32px]`}>
          <Image
            src="/images/request.png"
            alt="Call to Action"
            width={1200}
            height={700}
            className="w-full min-w-screen lg:min-w-full h-[700px] object-cover rounded-[32px]"
          />
          <div className=" absolute lg:left-[10%] lg:top-[20%] top-[70px] flex flex-col gap-[30px]">
            <div ref={ref} className="w-[349px] lg:flex flex-col gap-[8px] lg:gap-[32px] hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className=" text-[32px]/[41.6px] tracking-[-0.02em] lg:text-[60px]/[72px] w-[370px] font-bold font-display text-[#ffff]"
              >
                Request a Quote
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className="font-sans text-[#ffff] w-[349px] text-[16px]/[24px] lg:text-[28px]/[42px] font-regular"
              >
                Tell us what you are sending.
              </motion.p>
            </div>
          </div>
          <div className=" w-[30px] sm:w-full bg-red-200 flex items-center justify-center">
             <QuoteRequestForm className="absolute lg:right-[5%] lg:top-[10%] top-[70px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
