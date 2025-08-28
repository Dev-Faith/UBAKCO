import Image from "next/image";
import React from "react";
import { Button } from "../ui/buttons/Button";

const CTA = ({className}:{className?:string}) => {
  return (
    <div className={`flex justify-center w-screen ${className}`}>
      <div className="bg-white">
        <div className="flex flex-col items-center relative top-[calc(297px-493px)] ">
          <Image
            src="/images/CTA.png"
            alt="Call to Action"
            width={1200}
            height={493}
            className="w-[1200px] h-[493px] object-cover"
          />
          <div className=" absolute left-[10%] top-[15%] flex flex-col gap-[30px]">
            <h1 className="text-[52px]/[62.4px] w-[549px] tracking-[-0.02em] font-bold font-display text-[#ffff]">
              Let’s make your next delivery effortless
            </h1>
            <p className="font-sans text-[#ffff] w-[539px] text-[16px] font-regular">
              Feedback from businesses and individuals who rely on Ubacko for
              fat, secure, and professional delivery.
            </p>
            <Button className="w-[311px] flex items-center gap-[12px]">
              Request a Quote{" "}
              <Image
                src="/icons/arrow-angled.png"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
