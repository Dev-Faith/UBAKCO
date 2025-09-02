import Image from "next/image";
import React from "react";
import { Button } from "../ui/buttons/Button";

const CTA = ({
  className,
  offset = "top-[calc(297px-493px)]",
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div className={`flex justify-center w-screen ${className}`}>
      <div className="px-[16px] bg-white">
        <div
          className={`flex w-full rounded-[32px] lg:rounded-[16px] overflow-hidden flex-col items-center relative ${offset}`}
        >
          <Image
            src="/images/CTA.png"
            alt="Call to Action"
            width={1200}
            height={493}
            className="w-[1200px] h-[493px] object-cover relative rounded-[32px] lg:rounded-[16px] hidden lg:block"
          />
          <Image
            src="/images/mobileCTA.png"
            alt="Call to Action"
            width={1200}
            height={493}
            className="w-[369px] h-[453px] object-cover relative rounded-[32px] lg:rounded-[16px] lg:hidden"
          />
          <div className=" absolute lg:left-[10%] top-[15%] flex flex-col gap-[30px]  ">
            <h1 className="lg:text-[52px]/[62.4px] w-[269px] text-[32px]/[41.6px] lg:w-[549px] tracking-[-0.02em] font-bold font-display text-[#ffff]">
              Let’s make your next delivery effortless
            </h1>
            <p className="font-sans text-[#ffff] w-[337px] lg:w-[539px] text-[16px]/[24px] font-regular">
              Feedback from businesses and individuals who rely on Ubacko for
              fast, secure, and professional delivery.
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
