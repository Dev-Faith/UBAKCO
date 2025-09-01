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
    <section className="bg-[#EDEDED] pt-[150px] px-[60px] rounded-t-[20px] relative mt-[-24px] pb-[116px] overflow-hidden">
      <Image src="/images/logoMark.png" width={567} height={567} alt="Logo Mark" className="absolute top-[-240px] right-0 soft-light-effect" />
      <div className="flex flex-col gap-[32px]">
        <h1 className="text-[42px]/[54.6px] tracking-[-0.02em] w-[447px] font-bold font-display">
          We’d love to hear from you
        </h1>
        <p className="text-[#323232] tracking-[0.05em] text-[28px]/[42px] w-[631px]">
          Whether you’re requesting a quote, tracking a delivery, or exploring
          premium logistics solutions. Our team is ready to assist.
        </p>
      </div>
      <div className="flex items-center border-y-[1px] border-[#CACACA] justify-between py-[40px] mt-[64px]">
        {address.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-[40px] w-[375px] h-[260px] ${
              address.length - 1 !== index
                ? "pr-[75px] border-r-[1px] border-[#CACACA]"
                : ""
            }`}
          >
            <h1 className="text-[#EA5C2B] font-bold text-[32px]/[42px] tracking-[-0.02em] font-display">
              {item.title}
            </h1>
            <p className="text-[#323232] font-[400] tracking-[0.02em] w-[300px] font-sans text-[28px]/[42px]">
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
  );
};

export default WedLove;
