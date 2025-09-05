import React from "react";
import { Button } from "../ui/buttons/Button";
import Image from "next/image";

const WedLove = () => {
  const address = [
    {
      title: "Office Address",
      desc: "Cargo Village, GAT 2,Murtala Mohammed Airport, Ikeja, Lagos Nigeria",
    },
    {
      title: "Email",
      desc: "emmaubak@gmail.com",
    },
    {
      title: "Phone",
      desc: "+234 803 370 6085",
    },
  ];
  return (
    <div className="w-full bg-[#EDEDED] flex justify-center">
      <section className="max-w-[1440px] w-full pt-[70px] lg:pt-[150px] px-[16px] md:px-[60px] lg:px-[60px] rounded-t-[20px] relative mt-[-24px] pb-[116px] overflow-hidden">
        <Image src="/images/logoMark.png" width={567} height={567} alt="Logo Mark" className="absolute lg:top-[-240px] right-0 soft-light-effect w-[198px] lg:w-[567px] h-[274px] lg:h-[567px] top-0" />
        <div className="flex flex-col gap-[32px]">
        <h1 className=" text-[32px]/[48px] md:w-[500px] md:text-[42px]/[54.6px] lg:text-[42px]/[54.6px] tracking-[-0.02em] w-[249px] lg:w-[447px] font-bold font-display">
          We’d love to hear from you
        </h1>
        <p className="text-[#323232] text-[18px]/[27px] tracking-[0.05em] lg:text-[28px]/[42px] w-[370px] lg:w-[631px] md:w-full md:text-[28px]/[42px]">
          Whether you’re requesting a quote, tracking a delivery, or exploring
          premium logistics solutions. Our team is ready to assist.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center md:items-start border-y-[1px] border-[#CACACA] gap-[41px] lg:justify-between py-[40px] mt-[64px]">
        {address.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-[40px] w-[375px]  md:w-full h-[260px] ${
              address.length - 1 !== index
                ? "lg:pr-[75px] lg:border-r-[1px] border-b-[1px] lg:border-b-0 pb-[41px] lg:pb-0 border-[#CACACA]"
                : ""
            }`}
          >
            <h1 className="text-[#EA5C2B] md:text-[32px]/[42px] font-bold text-[26px]/[42px] lg:text-[32px]/[42px] tracking-[-0.02em] font-display">
              {item.title}
            </h1>
            <p className="text-[#323232] md:w-full md:text-[28px]/[42px] font-[400] tracking-[0.02em] w-[300px] font-sans text-[20px]/[30px] lg:text-[28px]/[42px]">
              {item.desc}
            </p>
            {index === address.length - 1 && (
              <Button className="flex items-center gap-[12px] w-[209px]">
                {" "}
                Request a quote{" "}
                <Image
                  src="/icons/requestBox.png"
                  width={24}
                  height={24}
                  alt="Request a quote"
                />
              </Button>
            )}
          </div>
        ))}
      </div>
      </section>
    </div>
  );
};

export default WedLove;
