import Image from "next/image";
import React from "react";

const Statistics = ({bg="#EFEFEF"}:{bg?:string}) => {
  const statistics = [
    {
      icon: "/icons/sta1.svg",
      title: "15,000+",
      subtitle: "Deliveries Completed",
      label: "Successfully delivered packages nationwide",
    },
    {
      icon: "/icons/sta2.svg",
      title: "99%",
      subtitle: "On-Time Performance",
      label: "Consistently meeting delivery commitments",
    },
    {
      icon: "/icons/sta3.svg",
      title: "12+",
      subtitle: "Years of Excellence",
      label: "Trusted logistics partner since 2012",
    },
  ];
  return (
    <div className={`w-full bg-[${bg}] flex justify-center`}>
      <section className="max-w-[1440px] w-full pt-[100px] px-[16px] sm:px-[60px] pb-[188px]">
        <div className="relative border-y-[1px] border-[#CACACA] py-[40px] mt-[55px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[41px] lg:gap-0">
                <div className="separator w-[1px] left-[calc(100%/3)] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
                <div className="separator w-[1px] right-[30%] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
                {statistics.map((record, index) => (
                  <div  key={index} className={`${index !== statistics.length -1 ? "border-b-[1px] lg:border-none border-[#CACACA] pb-[41px]" : ""}`}>
                    <div  
                      className="flex flex-col gap-[40px]"
                    >
                      <div className="flex flex-col gap-[32px]">
                        <Image
                          src={record.icon}
                          alt={record.title}
                          width={40}
                          height={40}
                          className="w-[48px] h-[48px]"
                        />
                        <h1 className="text-[32px] font-semibold font-sans">
                          {record.title}
                        </h1>
                      </div>
                      <div className="flex flex-col gap-[28px]">
                        <p className="lg:text-[28px] text-[24px] font-[500] text-[#323232] font-display">
                          {record.subtitle}
                        </p>
                        <p className="lg:text-[18px]/[27px] text-[20px]/[30px]  font-[400] font-sans text-[#323232] max-w-[305px] lg:w-full">
                          {record.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      </section>
    </div>
  );
};

export default Statistics;
