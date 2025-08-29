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
      <div className="flex items-center justify-between gap-[24px] py-[40px] border-y-[1px] border-[#CACACA]">
        {statistics.map((stat, index) => (
          <div key={index} className={`flex flex-col gap-[40px] ${index !== statistics.length - 1 ? "border-r border-[#C4C4C4] pr-[0px]" : ""}`}>
            <div className="flex flex-col gap-[32px]">
              <Image src={stat.icon} alt={stat.title} width={48} height={48} />
              <h2 className="text-[32px] font-semibold font-sans">
                {stat.title}
              </h2>
            </div>
            <div className="flex flex-col gap-[28px]">
              <p className="text-[28px] font-semibold font-display text-[#323232] ">
                {stat.subtitle}
              </p>
              <p className="text-[24px] font-[300] font-display text-[#323232]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
