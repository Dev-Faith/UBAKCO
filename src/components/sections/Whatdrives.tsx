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
    <section className="bg-[#EFEFEF] pt-[120px] pb-[100px] px-[60px] relative overflow-hidden">
      <h1 className="w-[265px] font-bold text-[42px]/[54.6px] font-display tracking-[-0.02em]">What Drives Ubacko</h1>
      <div className="flex  items-center justify-between mt-[70px]">
        {driveList.map((drive, index) => (
          <div key={index} className="w-[516px] flex flex-col gap-[16px]">
            <h1 className="text-[#EA5C2B] text-[32px]/[42px] font-bold tracking-[0.02em] font-display">{drive.title}</h1>
            <p className="text-[18px]/[32px] font-sans font-[400] tracking-[0.05em] ">{drive.desc}</p>
          </div>
        ))}
      </div>
      <Image src="/images/logomark.png" alt="What Drives Ubacko" height={100} width={100} className="absolute top-[-50%] right-0 soft-light-effect w-[567px] h-[537.62px]" />
    </section>
  );
};

export default Whatdrives;
