import Image from "next/image";
import React from "react";

const Contactus = () => {
  return (
    <section className="mt-[95px] relative overflow-hidden">
      <Image
        src="/images/contactusLeftShadow.png"
        alt="Contact Us Left Shadow"
        width={1000}
        height={100}
        className="absolute top-[-30%] left-0"
      />
      <Image
        src="/images/contactus.png"
        alt="Contact Us"
        width={1440}
        height={515}
        className=""
      />
      <Image
        src="/images/contactusRightShadow.png"
        alt="Contact Us Left Shadow"
        width={500}
        height={100}
        className="absolute bottom-0 right-0 h-[550px]"
      />
      <div className="absolute top-[35%] left-[10%]">
        <h1 className="text-white font-bold font-display text-[48px]/[62.4px] tracking-[0.02em]">Contact Ubakco</h1>
        <p className="font-[400] text-white text-[18px]/[27px]">Let’s get your shipment moving.</p>
      </div>
    </section>
  );
};

export default Contactus;
