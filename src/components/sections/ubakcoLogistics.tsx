import React from "react";
import { Button } from "../ui/buttons/Button";
import Image from "next/image";

const UbakcoLogistics = () => {
  return (
    <section className="bg-[#EFEFEF] px-[16px] lg:px-[60px] py-[120px]">
      <div className="flex items-center justify-between 2xl:w-[1440px] mx-auto gap-[100px] flex-col lg:flex-row">
       <div className="flex flex-col gap-[24px] lg:gap-[64px]">
         <h1 className="font-display w-[300px] lg:w-[434px] text-[32px]/[48px] lg:text-[42px]/[54.6px] font-bold tracking-[0.02em]">Ubakco Logistics Concierge</h1>
        <p className=" text-[18px]/[27px] text-[#656565] lg:text-[28px]/[42px] w-[370px] lg:w-[434px] font-[400] tracking-[0.05em]">
          Get direct access to a dedicated logistics expert who manages
          everything. From pickups to real-time tracking.
        </p>
       <Button className="w-[209px] flex items-center gap-[12px]">Request a quote <Image src="/icons/requestBox.png" alt="Quote Icon"  width={24} height={24}/></Button>
       </div>
       <div className="rounded-full overflow-hidden rounded-tl-[16px] rounded-tr-[100px] rounded-b-[16px] w-[370px] lg:w-[621px]">
        <Image src="/images/logistics.png" alt="Ubakco Logistics Concierge" width={621} height={676} className="w-[621px] h-[676px] object-cover"/>
       </div>
      </div>

    </section>
  );
};

export default UbakcoLogistics;
