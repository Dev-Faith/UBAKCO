import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({image, rating, quote, name, office}:{image: string, rating: string, quote: string, name: string, office: string}) => {
  return (
    <div className=" w-[370px] lg:w-[580px] p-[32px] bg-[#ffffff] rounded-[30px] shadow-[0_0_40px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <Image
          src={image}
          alt={image}
          width={155}
          height={48}
          className="w-[102px] h-[31px] lg:w-[155px] lg:h-[48px]"
        />
        <p className="lg:text-[24px] text-[15.97px] font-semibold flex items-center gap-[6px]">
          {rating}{" "}
          <span>
            <FaStar className="text-[#EA5C2B] lg:size-[24px] size-[16px]" />
          </span>
        </p>
      </div>
      <p className="lg:text-[26px] text-[20px]/[30px] w-[306px] font-sans font-regular lg:w-[516px] w-[306px] mt-[48px]">
        {quote}
      </p>
      <div className="mt-[32px]">
        <p className="lg:text-[32px] text-[22px]/[28px] font-semibold font-display text-[#242424]">{name}</p>
        <p className="lg:text-[24px] text-[16px]/[24px] font-sans font-regular text-[#666666]">{office}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
