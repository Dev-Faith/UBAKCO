
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const Aboutus = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section className="relative lg:mt-[95px] overflow-hidden lg:h-[515px] h-[50vh]">
      <Image src="/images/Aboutus.png" alt="About Us" width={1440} height={515} className="w-full lg:h-full h-[60vh] object-cover" />
      <Image src="/images/aboutShadowLeft.png" alt="About Us Shadow Left" width={1440} height={515} className="absolute  left-[-40%] top-[-120%]" />
      <Image src="/images/AboutShadowRight.png" alt="About Us Shadow Right" width={1440} height={515} className="absolute  right-[-50%] top-[-0%]" />
      <div ref={ref} className="absolute top-[30%] left-[16px] lg:left-[60px] md:left-[60px] flex flex-col gap-[12px] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="font-display font-bold  text-[24px]/[36px] lg:text-[48px]/[62.4px] tracking-[-0.02em] lg:w-full w-[273px] md:text-[40px]/[62.4px]"
        >About Us</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="font-sans text-[14px]/[21px] lg:text-[18px]/[27px] w-[273px] lg:w-[572px] md:text-[18px]/[27px] md:w-[456px]"
        >Backed by 12+ years of experience, UBACKO is a trusted logistics partner for personal, corporate, and premium deliveries.</motion.p>
      </div>
    </section>
  )
}

export default Aboutus;
