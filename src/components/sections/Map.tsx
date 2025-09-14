import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapClient"), { ssr: false });

const Map = () => {
  return (
    <div className="w-full w-screen flex justify-center z-[7] relative h-full">
      <section className="max-w-[1440px] w-full px-[16px] lg:min-h-[719px] sm:px-[60px] flex items-center justify-center lg:py-[170px] bg-[#ffffff] py-[35px] sm:py-[90px]">
        <DynamicMap />
      </section>
    </div>
  );
};

export default Map;
