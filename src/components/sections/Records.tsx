import Image from "next/image";
import React from "react";

const Records = () => {
  const records = [
    {
      icon: "/icons/deliveries.png",
      figure: "15,000+",
      title: "Deliveries Completed",
      description: "Successfully delivered packages nationwide.",
    },
    {
      icon: "/icons/ontime.png",
      figure: "99%",
      title: "On-Time Performance",
      description: "Consistently meeting delivery commitments.",
    },
    {
      icon: "/icons/years.png",
      figure: "12+",
      title: "Years of Excellence",
      description: "Trusted logistics partner since 2012",
    },
  ];
  return (
    <section className="2xl:w-screen 2xl:flex justify-center bg-white">
      <div className="pt-[150px] px-[60px] 2xl:px-[120px] 2xl:w-[1440px]">
        <h1 className="text-[60px] font-bold font-display w-[450px]">
          Proven Track Records
        </h1>

        <div className="relative border-y-[1px] border-[#CACACA] py-[40px] mt-[55px] flex items-center justify-between ">
          <div className="separator w-[1px] left-[calc(100%/3)] absolute h-[70%] bg-[#CACACA]"></div>
          <div className="separator w-[1px] right-[30%] absolute h-[70%] bg-[#CACACA]"></div>
          {records.map((record, index) => (
            <div key={index} className="flex flex-col gap-[56px]">
              <div className="flex flex-col gap-[48px]">
                <Image
                  src={record.icon}
                  alt={record.title}
                  width={40}
                  height={40}
                  className="w-[48px] h-[48px]"
                />
                <h1 className="text-[56px] font-bold font-display">
                  {record.figure}
                </h1>
              </div>
              <div className="flex flex-col gap-[28px]">
                <p className="text-[32px] font-semibold">{record.title}</p>
                <p className="text-[24px] font-[400] font-sans text-[#323232] w-[278px]">
                  {record.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Records;
