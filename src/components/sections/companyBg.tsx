import React from "react";

const CompanyBg = () => {
  return (
    <section className="bg-[#EFEFEF] pt-[100px] pb-[100px] px-[60px] flex justify-between">
      <div className="flex flex-col gap-[32px] w-[600px]">
        <h1 className="font-display font-bold text-[42px]/[54.6px] tracking-[-0.02em] w-[264px]">Company Background</h1>
        <div className="flex flex-col gap-[32px] text-[28px]/[48px] font-sans tracking-[0.02em] text-[#323232]">
          <p>
            UBACKO Logistic company was founded to solve a simple but urgent
            problem: Logistics in Nigeria needed to be more reliable. What
            started as a small operation with one delivery van has grown into a
            trusted name known for professionalism, precision, and client-first
            service.
          </p>
          <p>
            Today, we provide nation wide and international logistics. This
            includes last-mile delivery, airport-to-airport cargo, and
            white-glove solutions, supported by a team that understands the
            value of every shipment.{" "}
          </p>
        </div>
      </div>
      <div className="bg-[#D9D9D9] h-[772px] w-[550px] rounded-[40px]">

      </div>
    </section>
  );
};

export default CompanyBg;
