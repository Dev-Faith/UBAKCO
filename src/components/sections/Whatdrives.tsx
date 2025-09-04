import Image from "next/image";
import React from "react";

const Whatdrives = () => {
    const driveList = [
        {
            title: "Our Mission",
            desc: "To provide professional, secure, and efficient logistics services that prioritize client needs, protect sensitive cargo, and ensure timely deliveries every time."
        },
        {
            title: "Our Vision",
            desc: "To become West Africa’s most trusted logistics partner by combining technology and discretion, delivering value at every stage of the logistics journey."
        }
    ]
  return (
    <section className="bg-[#EFEFEF] pt-[70px] lg:pt-[120px] lg:pb-[100px] px-[16px] md:px-[60px] lg:px-[60px] relative overflow-hidden">
      <h1 className="w-[198px] lg:w-[265px] font-semibold lg:font-bold text-[32px]/[48px] lg:text-[42px]/[54.6px] font-display tracking-[-0.02em] md:text-[42px]/[54.6px] md:w-[265px]">What Drives Ubacko</h1>
      <div className="flex flex-col  lg:flex-row items-center md:items-start gap-[24px] lg:justify-between mt-[70px]">
        {driveList.map((drive, index) => (
          <div key={index} className="lg:w-[516px] w-[370px] md:w-full flex flex-col gap-[16px]">
            <h1 className="text-[#EA5C2B] text-[26px]/[42px]  text-[32px]/[42px] font-bold tracking-[0.02em] font-display">{drive.title}</h1>
            <p className="text-[18px]/[32px] font-sans font-[400] tracking-[0.05em] ">{drive.desc}</p>
          </div>
        ))}
      </div>
      <Image src="/images/Logomark.png" alt="What Drives Ubacko" height={100} width={100} className="absolute lg:top-[-50%] lg:right-0 top-0 right-0 soft-light-effect w-[289px] h-[274px] lg:w-[567px] lg:h-[537.62px]" />
    </section>
  );
};

export default Whatdrives;
