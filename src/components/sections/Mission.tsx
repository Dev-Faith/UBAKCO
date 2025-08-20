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
      offset: "top-[300px] left-[-64px]",
    },
    {
      title: "Custom Logistics Planning",
      type: "secondary",
      offset: "top-[250px] right-[24px]",
    },
    {
      title: "White Glove Handling",
      type: "primary",
      offset: "top-[430px] right-[240px]",
    },
    {
      title: "Nationwide Delievery",
      type: "secondary",
      offset: "top-[520px] left-[-78px]",
    },
    {
      title: "Shipment In Transit",
      type: "secondary",
      offset: "top-[580px] right-[64px]",
    },
  ];

  return (
    <div className="sticky top-0 -z-9 h-screen bg-white pt-[100px] rounded-tl-[50px] rounded-tr-[50px] pl-[60px] flex items-center justify-between">
      <div className="mission-left flex flex-col gap-[64px] w-[1500px]">
        <h1 className="text-[75px]/[82px] tracking-[0.02em] font-bold font-display w-full">
          Logistics that move businesses forward
        </h1>
        <p className="w-[516px] font-sans text-[28px] font-regular">
          From airport-to-airport shipments to executive white-glove logistics,
          Ubakco provides secure, efficient, and time-critical delivery
          solutions across Nigeria and beyond.
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
      <div className="mission-right h-full w-full flex relative w-full flex items-center justify-center">
        <MissionCard
          src="/images/Mission1.png"
          w={555}
          h={505}
          className=" relative -left-14 -bottom-18"
        />
        <MissionCard
          src="/images/mission2.png"
          w={555}
          h={505}
          className="absolute top-0 right-[70px] -z-10 rotate-[-8.1deg]"
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
  );
};

export default Mission;
