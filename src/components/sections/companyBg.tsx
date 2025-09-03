import React from "react";

const CompanyBg = () => {
  return (
    <section className="bg-[#EFEFEF] pt-[100px] pb-[100px] px-[16px] lg:px-[60px] flex flex-col  lg:flex-row gap-[100px] lg:justify-between">
      <div className="flex flex-col gap-[32px] w-[370px] lg:w-[600px]">
        <h1 className="font-display font-bold text-[32px]/[48px] lg:text-[42px]/[54.6px] tracking-[-0.02em] w-[198px] lg:w-[264px]">Company Background</h1>
        <div className="flex flex-col gap-[32px] w-[20px]/[30px] lg:text-[28px]/[48px] font-sans tracking-[0.02em] text-[#323232]">
          <p>
            UBACKO Logistic company was founded to solve a simple but urgent
            problem: <span className="font-semibold lg:font-regular">Logistics in Nigeria needed to be more reliable.</span><br className="lg:hidden"/><br className="lg:hidden"/> What
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
      <div className="bg-[#D9D9D9] h-[772px] w-[370px] lg:w-[550px] rounded-[40px]">

      </div>
    </section>
  );
};

export default CompanyBg;
