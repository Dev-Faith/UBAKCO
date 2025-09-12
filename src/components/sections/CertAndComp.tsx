import Image from "next/image";
import React from "react";

const CertAndComp = () => {
  const Certifications = [
    "Registered under the Corporate Affairs Commission (CAC)",
    "Approved Cargo Handler within airport & port jurisdictions",
    "Compliant with Nigeria’s Transport & Freight Forwarding regulations",
    "Internal Quality Control & Service Assurance System",
    "All drivers and logistics officers are trained and background-checked",
    "NDLEA-complaint for sensitive and regulated goods handling",
  ];
  return (
    <div className="w-full bg-[#EFEFEF] flex justify-center">
      <section className="max-w-[1440px] w-full pt-[70px] lg:pt-[150px] px-[16px] lg:px-[60px] sm:px-[60px] pb-[358px] relative">
        <Image src="/images/Logomark.png" alt="Logomark" width={100} height={100}  className="absolute hidden sm:w-[312px] sm:h-[296px] sm:block lg:block top-0 right-0 soft-light-effect w-[567px] h-[537.62px]"/>
        <h2 className=" text-[32px]/[48px] lg:text-[42px]/[54.6px] sm:text-[42px]/[54.6px]  font-bold font-display tracking-[-0.02em] w-[368px] lg:w-[400px]">
        Certifications & Compliance
      </h2>
      <div className="py-[98px] grid lg:grid-cols-3 grid-cols-1 border-y-[1px] sm:w-full border-[#CACACA] mt-[98px] gap-y-[80px] lg:gap-x-[30px] relative">
        {Certifications.map((cert, index) => (
          <div key={index} className={` w-[362px] sm:w-full ${index !== 5 && "border-b-[1px]"} lg:border-b-0 border-[#CACACA] lg:border-b-0 pb-[40px] ${index !== 2 && index !== 5 ? "lg:border-r-[1px] lg:border-b-0 pb-[40px] lg:pb-0 border-b-[1px] pr-[28px]" : ""}`}>
            <Image
              src="/icons/shield.svg"
              alt="shield icon"
              width={34}
              height={48}
            />
            <p className="text-[20px]  sm:text-[28px]/[42px] text-[#323232] sm:w-full pt-[24px]">{cert}</p>
          </div>
        ))}
        <div className="w-full h-[1px] bg-[#CACACA] top-[50%] lg:block hidden absolute"></div>
      </div>
      </section>
    </div>
  );
};

export default CertAndComp;
