import Image from "next/image";
import React from "react";

const Contactus = () => {
  return (
    <section className="lg:mt-[95px] relative overflow-hidden h-[50vh] lg:h-full">
      <Image
        src="/images/contactusLeftShadow.png"
        alt="Contact Us Left Shadow"
        width={1000}
        height={100}
        className="absolute lg:top-[-30%] left-0 top-[20px] h-full"
      />
      <Image
        src="/images/contactus.png"
        alt="Contact Us"
        width={1440}
        height={515}
        className="h-[50vh] lg:h-full object-cover"
      />
      <Image
        src="/images/contactusRightShadow.png"
        alt="Contact Us Left Shadow"
        width={500}
        height={100}
        className="absolute lg:bottom-0 bottom-[20px] right-0 h-[550px]"
      />
      <div className="absolute top-[50%] lg:top-[35%] left-[10%]">
        <h1 className="text-white font-bold font-display text-[24px]/[36px] lg:text-[48px]/[62.4px] tracking-[0.02em]">Contact Ubakco</h1>
        <p className="font-[400] text-white text-[14px]/[21px] lg:text-[18px]/[27px]">Let’s get your shipment moving.</p>
      </div>
    </section>
  );
};

export default Contactus;
