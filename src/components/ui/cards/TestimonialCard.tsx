import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({image, rating, quote, name, office}:{image: string, rating: string, quote: string, name: string, office: string}) => {
  return (
    <div className="w-[580px] p-[32px] bg-[#ffffff] rounded-[30px] shadow-[0_0_40px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between">
        <Image
          src={image}
          alt={image}
          width={155}
          height={48}
        />
        <p className="text-[24px] font-semibold flex items-center gap-[6px]">
          {rating}{" "}
          <span>
            <FaStar className="text-[#EA5C2B] size-[24px]" />
          </span>
        </p>
      </div>
      <p className="text-[26px] font-sans font-regular w-[516px] mt-[48px]">
        {quote}
      </p>
      <div className="mt-[32px]">
        <p className="text-[32px] font-semibold font-display text-[#242424]">{name}</p>
        <p className="text-[24px] font-sans font-regular text-[#666666]">{office}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
