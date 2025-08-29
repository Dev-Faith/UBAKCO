import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <section className="relative mt-[95px] overflow-hidden h-[515px]">
      <Image src="/images/Aboutus.png" alt="About Us" width={1440} height={515} className="" />
      <Image src="/images/aboutShadowLeft.png" alt="About Us Shadow Left" width={1440} height={515} className="absolute left-[-40%] top-[-120%]" />
      <Image src="/images/aboutShadowRight.png" alt="About Us Shadow Right" width={1440} height={515} className="absolute right-[-50%] top-[-0%]" />
      <div className="absolute top-[30%] left-[60px] flex flex-col gap-[12px] text-white">
        <h1 className="font-display font-bold text-[48px]/[62.4px] tracking-[-0.02em]">About Us</h1>
        <p className="font-sans text-[18px]/[27px] w-[572px]">Backed by 12+ years of experience, UBACKO is a trusted logistics partner for personal, corporate, and premium deliveries.</p>
      </div>
    </section>
  )
}

export default Aboutus;
