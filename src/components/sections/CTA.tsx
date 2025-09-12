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
    <div className={`w-full bg-white flex justify-center ${className}`}>
      <div className="max-w-[1440px] w-full px-[16px] sm:px-[60px]">
        <div
          className={`flex w-full max-w-[1440px] rounded-[32px] lg:rounded-[16px] sm:w-full sm:h-full overflow-hidden flex-col items-center relative bg-green-200 ${offset}`}
        >
          <Image
            src="/images/CTA.png"
            alt="Call to Action"
            width={1200}
            height={493}
            className=" w-full h-full absolute inset-0 w-full object-cover relative rounded-[32px] sm:rounded-[16px]  hidden sm:min-h-[375px]  sm:block lg:block"
          />
          <Image
            src="/images/mobileCTA.png"
            alt="Call to Action"
            width={1200}
            height={493}
            className="w-full h-[453px] object-cover relative rounded-[32px] lg:rounded-[16px] sm:hidden lg:hidden"
          />
          <div className=" absolute left-[40px] lg:left-[130px] sm:left-[60px] top-[50px] sm:top-[80px] lg:top-[115.5px] flex flex-col gap-[30px] sm:gap-[24px]">
            <h1 className="lg:text-[52px]/[62.4px] w-[269px] sm:w-[346px] sm:text-[32px]/[41.6px] text-[32px]/[41.6px] lg:w-[549px] tracking-[-0.02em] font-bold font-display text-[#ffff]">
              Let's make your next delivery effortless
            </h1>
            <p className="font-sans text-[#ffff] w-[337px] lg:w-[539px] text-[16px]/[24px] font-regular sm:text-[16px]/24px] sm:w-[416px]">
              Feedback from businesses and individuals who rely on Ubacko for
              fast, secure, and professional delivery.
            </p>
            <Button fn="quote" className="w-[311px] flex items-center gap-[12px]">
              Request a Quote
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
