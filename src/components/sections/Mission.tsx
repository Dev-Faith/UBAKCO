import React from "react";
import { Button } from "../ui/buttons/Button";
import MissionCard from "../ui/cards/MissionCard";
import MissionLabel from "../ui/cards/MissionLabel";
import Image from "next/image";

const Mission = () => {
  interface MissionLabelInterface {
    title: string;
    type: "primary" | "secondary";
    offset?: string;
  }

  const MissionLabels: MissionLabelInterface[] = [
    {
      title: "Cross-Dock Complete",
      type: "primary",
      offset: "top-[70%] lg:top-[50%] left-[-40%]",
    },
    {
      title: "Custom Logistics Planning",
      type: "secondary",
      offset: " top-[60%] lg:top-[40%] right-[16%]",
    },
    {
      title: "White Glove Handling",
      type: "primary",
      offset: " bottom-[-20%] lg:bottom-[10%] right-[50%]",
    },
    {
      title: "Nationwide Delievery",
      type: "secondary",
      offset: " bottom-[-30%] lg:bottom-[-10%] left-[-40%]",
    },
    {
      title: "Shipment In Transit",
      type: "secondary",
      offset: "bottom-[-45%] lg:bottom-[-20%] right-[25%]",
    },
  ];

  return (
    <section className="sticky relative top-[-240px] lg:top-0 -z-9 .mission min-h-[calc(100vh+10%)] 2xl:h-[1029px] lg:h-screen pt-[120px] lg:pt-[120px] bg-white rounded-tl-[50px] rounded-tr-[50px] lg:pl-[60px] px-[16px] 2xl:pl-[120px] flex lg:items-center lg:justify-center xl:w-screen">
      <div className="flex flex-col lg:flex-row h-full  items-start justify-between w-full xl:w-[1440px] relative ">
        <div className="mission-left flex flex-col gap-[32px] lg:gap-[64px] w-[700px] ">
          <h1 className="lg:text-[42px]/[54.6px] text-[32px]/[48px] tracking-[0.02em] font-semibold lg:font-bold font-display w-[370px] lg:w-[617px] tracking-[-0.02em]">
            Logistics that Move Business Forward
          </h1>
          <p className=" w-[370px] lg:w-[516px] text-[#656565] font-sans text-[28px]/[42px] text-[16px]/[27px] font-regular tracking-[-0.02em]">
            From airport-to-airport shipments to executive white-glove
            logistics, Ubakco provides secure, efficient, and time-critical
            delivery solutions across Nigeria and beyond.
          </p>
          <Button className="w-[209px] h-[55px] flex items-center gap-[12px]">
            Our Mission{" "}
            <Image
              src="/icons/arrow-angled.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div className="mission-right max-h-[377.9px] lg:max-h-[574px] w-max-[371px] lg:max-w-[753px] flex relative flex items-center justify-center lg:right-0 right-[-30%] lg:mt-0 mt-[97px]">
          <MissionCard
            src="/images/Mission1.png"
            w={555}
            h={505}
            className=" relative right-[30%] -bottom-32 w-[300.05px] h-[248.81px] lg:w-[555px] lg:h-[505px]"
          />
          <MissionCard
            src="/images/mission2.png"
            w={555}
            h={505}
            className="absolute top-0 right-[20%] -z-10 rotate-[-8.1deg] w-[300.05px] h-[248.81px] lg:w-[555px] lg:h-[505px]"
          />
          {MissionLabels.map((label, index) => (
            <MissionLabel
              key={index}
              offset={label.offset}
              title={label.title}
              variant={label.type}
              className="absolute"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
