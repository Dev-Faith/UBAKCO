"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const CompanyBg = () => {
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
    <div className="w-full bg-[#EFEFEF] flex justify-center">
      <section className="max-w-[1440px] w-full pt-[100px] pb-[100px] px-[16px] lg:px-[60px] sm:px-[60px] flex flex-col  lg:items-end lg:flex-row gap-[100px] lg:justify-between">
        <div
          ref={ref}
          className="flex flex-col gap-[32px] w-[370px] sm:w-full lg:w-[600px]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="font-display font-semibold sm:font-bold text-[32px]/[48px] lg:text-[42px]/[54.6px] tracking-[-0.02em] w-[198px] lg:w-[264px] sm:w-[264px] sm:text-[42px]/[54.6px] "
          >
            Company Background
          </motion.h1>
          <div className="flex flex-col gap-[32px] text-[20px]/[30px] sm:w-full lg:text-[28px]/[48px] font-sans tracking-[0.02em] text-[#323232]">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              className="sm:w-full"
            >
              UBACKO Logistic company was founded to solve a simple but urgent
              problem:{" "}
              <span className="font-semibold lg:font-regular">
                Logistics in Nigeria needed to be more reliable.
              </span>
              <br className="lg:hidden" />
              <br className="lg:hidden" /> What started as a small operation
              with one delivery van has grown into a trusted name known for
              professionalism, precision, and client-first service.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 40 }} animate={controls}>
              Today, we provide nation wide and international logistics. This
              includes last-mile delivery, airport-to-airport cargo, and
              white-glove solutions, supported by a team that understands the
              value of every shipment.{" "}
            </motion.p>
          </div>
        </div>
        <div className="bg-[#D9D9D9] h-[436px] sm:h-[772px] lg:h-[390px] w-[370px] lg:w-[550px] rounded-[40px] w-full sm:rounded-[40px]"></div>
      </section>
    </div>
  );
};

export default CompanyBg;
