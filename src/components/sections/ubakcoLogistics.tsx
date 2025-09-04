
"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/buttons/Button";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const UbakcoLogistics = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <section className="bg-[#EFEFEF] px-[16px] md:px-[60px] lg:px-[60px] py-[120px]">
      <div className="flex items-center md:items-start lg:justify-between 2xl:w-[1440px] mx-auto gap-[100px] flex-col lg:flex-row">
        <div ref={ref} className="flex flex-col gap-[24px] md:gap-[64px] lg:gap-[64px] ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="font-display w-[300px] md:w-[400px] md:text-[42px]/[54.6px] lg:w-[434px] text-[32px]/[48px]  lg:text-[42px]/[54.6px] font-bold tracking-[0.02em]"
          >
            Ubakco Logistics Concierge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className=" text-[18px]/[27px] text-[#656565] md:w-[540px] lg:text-[28px]/[42px] w-[370px] lg:w-[434px] font-[400] tracking-[0.05em]"
          >
            Get direct access to a dedicated logistics expert who manages
            everything. From pickups to real-time tracking.
          </motion.p>
          <Button className="w-[209px] flex items-center gap-[12px]">
            Request a quote{" "}
            <Image
              src="/icons/requestBox.png"
              alt="Quote Icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div className="rounded-full overflow-hidden rounded-tl-[16px]  md:w-full rounded-tr-[100px] rounded-b-[16px] w-[370px] lg:w-[621px]">
          <Image
            src="/images/logistics.png"
            alt="Ubakco Logistics Concierge"
            width={621}
            height={676}
            className="w-[621px] h-[676px] object-cover md:w-[714px]"
          />
        </div>
      </div>
    </section>
  );
};

export default UbakcoLogistics;
