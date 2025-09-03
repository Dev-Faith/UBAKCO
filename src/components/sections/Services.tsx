import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='w-screen h-[492px] flex justify-center lg:mt-[88px] overflow-hidden'>
       <Image src="/images/service-bg.png" alt="services" width={1500} height={492} className='lg:h-[492px] lg:w-[1500px] object-cover'/>
       <Image src="/images/OurServiceBlur.png" alt="services" width={1500} height={492} className='h-full w-[1500px] absolute left-[-30%] top-[-10%]'/>
       <div className='absolute lg:top-[30%] top-[30%] w-[304px] left-[16px] lg:left-[60px] lg:w-[1440px] px-[16px] lg:px-[60px] flex flex-col gap-[12px]'>
            <h1 className='text-[#ffffff] font-display text-[24px]/[36px] tracking-[-0.02em] lg:text-[48px] font-bold'>Our Services</h1>
            <p className='text-[#ffffff] text-[14px]/[21px]  lg:text-[18px]/[27px] w-[304px] lg:w-[516px] font-regular'>From same day shipments to international cargo, UBAKCO delivers with precision and care.</p>
       </div> 
    </div>
  )
}

export default Services
