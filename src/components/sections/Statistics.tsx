import Image from "next/image";
import React from "react";

const Statistics = () => {
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
    <section className=" pt-[100px] px-[60px] pb-[188px] bg-[#EFEFEF]">
       <div className="relative border-y-[1px] border-[#CACACA] py-[40px] mt-[55px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[41px] lg:gap-0">
                <div className="separator w-[1px] left-[calc(100%/3)] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
                <div className="separator w-[1px] right-[30%] absolute h-[70%] bg-[#CACACA] hidden lg:block"></div>
                {statistics.map((record, index) => (
                  <div  key={index} className={`${index !== statistics.length -1 ? "border-b-[1px] lg:border-none border-[#CACACA] pb-[41px]" : ""}`}>
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
                          {record.title}
                        </h1>
                      </div>
                      <div className="flex flex-col gap-[28px]">
                        <p className="lg:text-[32px] text-[24px] font-semibold text-[#323232] font-display">
                          {record.subtitle}
                        </p>
                        <p className="lg:text-[24px] text-[20px]/[30px]  font-[400] font-sans text-[#323232] w-[266px] lg:w-[278px]">
                          {record.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </section>
  );
};

export default Statistics;
