import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapClient"), { ssr: false });

const Map = () => {
  return (
    <div className="w-full w-screen flex justify-center z-[7] relative h-full">
      <section className="max-w-[1440px] w-full px-[16px] lg:min-h-[719px] sm:px-[60px] flex flex-col justify-center lg:py-[170px] bg-[#ffffff] py-[35px] sm:py-[90px]">
        <h2 className="text-[32px]/[48px] sm:w-[500px] sm:text-[42px]/[54.6px] lg:text-[42px]/[54.6px] tracking-[-0.02em] w-[249px] lg:w-[447px] font-bold font-display mb-[64px]">
          Our Location on the Map
        </h2>
        <DynamicMap />
      </section>
    </div>
  );
};

export default Map;
