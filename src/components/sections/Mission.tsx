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
      offset: "top-[50%] left-[-40%]",
    },
    {
      title: "Custom Logistics Planning",
      type: "secondary",
      offset: "top-[40%] right-[16%]",
    },
    {
      title: "White Glove Handling",
      type: "primary",
      offset: "bottom-[10%] right-[50%]",
    },
    {
      title: "Nationwide Delievery",
      type: "secondary",
      offset: "bottom-[-10%] left-[-40%]",
    },
    {
      title: "Shipment In Transit",
      type: "secondary",
      offset: "bottom-[-20%] right-[25%]",
    },
  ];

  return (
    <section className="sticky relative top-0 -z-9 .mission 2xl:h-[1029px]  h-screen pt-[120px] bg-white rounded-tl-[50px] rounded-tr-[50px] pl-[60px] 2xl:pl-[120px] flex items-center justify-center xl:w-screen">
      <div className="flex h-full  items-start justify-between w-full xl:w-[1440px] relative ">
        <div className="mission-left flex flex-col gap-[64px] w-[700px] ">
          <h1 className="text-[42px]/[54.6px] tracking-[0.02em] font-bold font-display w-[617px] tracking-[-0.02em]">
            Logistics that move businesses forward
          </h1>
          <p className="w-[516px] font-sans text-[28px]/[42px] font-regular">
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
        <div className="mission-right max-h-[574px] max-w-[753px] flex relative flex items-center justify-center right-0">
          <MissionCard
            src="/images/Mission1.png"
            w={555}
            h={505}
            className=" relative right-[30%] -bottom-32"
          />
          <MissionCard
            src="/images/mission2.png"
            w={555}
            h={505}
            className="absolute top-0 right-[20%] -z-10 rotate-[-8.1deg]"
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
