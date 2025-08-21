import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-[#EFEFEF] pb-[113px]  overflow-hidden">
      <div className="relative  pt-[150px]  pl-[60px] flex items-start justify-between overflow-hidden">
        <div className="left flex flex-col gap-[64px] ">
          <h1 className="text-[75px]/[94px] font-bold tracking-[0.02em] w-[918px] font-display text-[#000000] z-9">
            What Clients Say About Ubakco
          </h1>
          <p className="font-sans text-[#323232] text-[28px] w-[516px]">
            Feedback from businesses and individuals who rely on Ubacko for fat, secure, and professional delivery.
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
      <div className="px-[60px] w-full mt-[100px]"></div>
    </section>
  );
};

export default Testimonial;
