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
      <div className="lg:pt-[150px] pt-[47px] px-[16px] lg:px-[60px] 2xl:px-[120px] 2xl:w-[1440px]">
        <h1 className=" text-[32px]/[48px] tracking-[-0.02em] lg:text-[42px]/[54.6px] font-semibold lg:font-bold font-display w-[209px] lg:w-[450px]">
          Proven Track Records
        </h1>
        <div className="relative border-y-[1px] border-[#CACACA] py-[40px] mt-[55px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[41px] lg:gap-0">
          <div className="separator w-[1px] left-[calc(100%/3)] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
          <div className="separator w-[1px] right-[30%] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
          {records.map((record, index) => (
            <div  key={index} className={`${index !== records.length -1 ? "border-b-[1px] lg:border-none border-[#CACACA] pb-[41px]" : ""}`}>
              <div  
                className="flex flex-col gap-[40px] lg:gap-[56px]"
              >
                <div className="flex flex-col gap-[32px] lg:gap-[48px]">
                  <Image
                    src={record.icon}
                    alt={record.title}
                    width={40}
                    height={40}
                    className="w-[48px] h-[48px]"
                  />
                  <h1 className="lg:text-[56px] text-[32px] font-semibold lg:font-bold lg:font-display font-sans">
                    {record.figure}
                  </h1>
                </div>
                <div className="flex flex-col gap-[28px]">
                  <p className="lg:text-[32px] text-[24px] font-semibold text-[#323232] font-display">
                    {record.title}
                  </p>
                  <p className="lg:text-[24px] text-[20px]/[30px]  font-[400] font-sans text-[#323232] w-[266px] lg:w-[278px]">
                    {record.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Records;
