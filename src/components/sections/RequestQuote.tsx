import React from "react";
import QuoteRequestForm from "../ui/forms/QuoteRequestForm";
import Image from "next/image";
import { Button } from "../ui/buttons/Button";

const RequestQuote = ({className, formOffset=true, bg="white"}:{className?:string, formOffset?:boolean, bg?:string}) => {
  return (
    <section className={`w-screen bg-${bg} flex justify-center ${className}`}>
      <div className="">
        <div className={`flex flex-col items-center relative ${formOffset ? "top-[calc(297px-650px)]" : ""} lg:rounded-[32px]`}>
          <Image
            src="/images/request.png"
            alt="Call to Action"
            width={1200}
            height={700}
            className="lg:w-[1200px] h-[700px] object-cover rounded-[32px]"
          />
          <div className=" absolute lg:left-[10%] lg:top-[20%] top-[70px] flex flex-col gap-[30px]">
            <div className="w-[349px] flex flex-col gap-[8px] lg:gap-[32px]">
              <h1 className=" text-[32px]/[41.6px] tracking-[-0.02em] lg:text-[60px]/[72px] w-[370px] font-bold font-display text-[#ffff]">
                Request a Quote
              </h1>
              <p className="font-sans text-[#ffff] w-[349px] text-[16px]/[24px] lg:text-[28px]/[42px] font-regular">
                Tell us what you are sending.
              </p>
            </div>
          </div>
           <QuoteRequestForm className="absolute lg:right-[5%] lg:top-[10%] top-[170px]" />
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
