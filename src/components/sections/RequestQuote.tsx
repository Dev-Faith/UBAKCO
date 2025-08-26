import React from "react";
import QuoteRequestForm from "../ui/forms/QuoteRequestForm";
import Image from "next/image";
import { Button } from "../ui/buttons/Button";

const RequestQuote = () => {
  return (
    <section className="w-screen bg-white flex justify-center">
      <div className="">
        <div className="flex flex-col items-center relative top-[calc(297px-650px)] rounded-[32px]">
          <Image
            src="/images/request.png"
            alt="Call to Action"
            width={1200}
            height={700}
            className="w-[1200px] h-[700px] object-cover rounded-[32px]"
          />
          <div className=" absolute left-[10%] top-[20%] flex flex-col gap-[30px]">
            <div className="w-[349px] flex flex-col gap-[32px]">
              <h1 className="text-[60px]/[72px] w-[370px] font-bold font-display text-[#ffff]">
                Request a Quote
              </h1>
              <p className="font-sans text-[#ffff] w-[349px] text-[28px]/[42px] font-regular">
                Tell us what you are sending.
              </p>
            </div>
          </div>
           <QuoteRequestForm className="absolute right-[5%] top-[10%]" />
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
