
"use client";
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";


const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <div className='w-screen h-[492px] flex justify-center lg:mt-[88px] overflow-hidden'>
      <Image src="/images/service-bg.png" alt="services" width={1500} height={492} className='lg:h-[492px] lg:w-[1500px] object-cover md:z-[-11]'/>
      <Image src="/images/OurServiceBlur.png" alt="services" width={1500} height={492} className='h-full w-[1500px] absolute left-[-30%] md:left-[-20%] top-[-10%] md:top-[-20%] md:z-[-10]'/>
      <div ref={ref} className='absolute lg:top-[30%] top-[30%] md:top-[25%] w-[304px] left-[16px] md:left-[60px] lg:left-[60px] lg:w-[1440px] px-[16px] lg:px-[60px] flex flex-col gap-[12px]'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className='text-[#ffffff] font-display text-[24px]/[36px] tracking-[-0.02em] lg:text-[48px] font-bold'
        >Our Services</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className='text-[#ffffff] text-[14px]/[21px]  lg:text-[18px]/[27px] w-[304px] lg:w-[516px] font-regular'
        >From same day shipments to international cargo, UBAKCO delivers with precision and care.</motion.p>
      </div> 
    </div>
  )
}

export default Services
