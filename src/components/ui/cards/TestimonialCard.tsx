import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({image, rating, quote, name, office}:{image: string, rating: string, quote: string, name: string, office: string}) => {
  return (
    <div className="flex flex-col justify-between sm:w-full w-full lg:min-w-[433px]  p-[32px] bg-white rounded-[16px]">
      <div className="top flex items-center justify-between">
        <div className="top-texts flex flex-col gap-0">
          <p className="text-[24px]/[42px] font-[600] text-[#242424] font-display">{name}</p>
          <p className="text-[#EA5C2B] text-[16px]/[24px] font-[500]">{office}</p>
        </div>
        <Image src={image} alt={name} width={40} height={40} />
      </div>
      <p className="desc mt-[32px] text-[18px]/[30px] font-[400]">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
