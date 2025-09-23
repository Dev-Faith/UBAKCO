"use client";
import Image from "next/image";
import { Button } from "../ui/buttons/Button";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

export default function Hero() {
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
    <section className="sticky top-0 bg-[#DCDEE0] min-w-screen h-screen 2xl:h-[872px] flex overflow-hidden z-[1] justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="lg:flex w-full lg:w-full mx-auto ">
          <Image
            src="/images/gradient.png"
            alt="gradient"
            fill
            className="object-cover fixed pointer-events-none z-[8]"
          />
          <div className="left-hero w-full  max-w-[calc(100vw/2+50vw)] items-center 2xl:pt-[20%] 2xl:pl-[128px] justify-center sm:justify-start  xl:h-full px-[16px] sm:px-[60px] xl:px-[60px] pt-[130%] sm:pt-[120%] xl:pt-[201px] sm:pb-0">
            <div
              ref={ref}
              className="absolute inset-0 flex flex-col lg:flex-row lg:justify-center items-center mt-[138px]"
            >
             <div className="flex flex-col gap-[24px] lg:gap-[32px] w-full max-w-[1440px] px-[16px] sm:px-[60px]">
               <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className="font-display text-[32px]/[41.6px] xl:text-[75px]/[82px] w-[265px] font-bold text-[#1C1C1C] tracking-[-0.02em] sm:w-[485px] sm:text-[60px]/[74px]"
              >
                Ubakco delivers from airport to anywhere
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                className="font-sans text-[#323232] text-[14px]/[21px] xl:text-[20px]/[30px] sm:text-[20px]/[30px] sm:w-[485px]"
              >
                We move goods with precision, care, and a commitment to
                excellence across Nigeria and beyond. From standard delivery to
                white glove logistics.
              </motion.p>
              <Button fn="quote" className="flex items-center gap-[12px] w-[209px] h-[55px] pointer-events-auto">
                Request a Quote
                <Image
                  src="/icons/arrow-angled.png"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
             </div>
            </div>
          </div>
          <div className="sm:h-[50%] h-[50vh] xl:h-full w-full flex relative overflow-hidden">
            <Image
              src="/images/stepper.png"
              alt="Hero Image"
              width={725}
              height={1024}
              className="w-full h-full hidden lg:block aboslute mt-[92px] top-[-64px] xl:mt-0 xl:top-[64px] sm:top-[-30px] pointer-events-none object-cover"
            />
            <Image
              src="/images/stepperTab.png"
              alt="Hero Image"
              width={725}
              height={1024}
              className="w-full h-full lg:hidden relative mt-[92px] top-[-88px] xl:mt-0 xl:top-[64px] sm:top-[-30px] pointer-events-none object-cover"
            />
            {/* <Image
              src="/images/dash.png"
              alt="dash"
              width={100}
              height={100}
              className="w-[20px] h-screen 2xl:h-[872px] left-[10%] pointer-events-none xl:left-0 xl:right-[98%] top-[-63%] xl:top-0 sm:top-[-33%] sm:left-[244px] sm:right-[-20%] sm:flex rotate-90 xl:rotate-0 absolute"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
