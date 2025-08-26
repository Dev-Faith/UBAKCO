import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='w-screen h-[492px] flex justify-center mt-[88px] overflow-hidden'>
       <Image src="/images/service-bg.png" alt="services" width={1500} height={492} className='h-[492px] w-[1500px] object-cover'/>
       <Image src="/images/OurServiceBlur.png" alt="services" width={1500} height={492} className='h-full w-[1500px] absolute left-[-30%] top-[-10%]'/>
       <div className='absolute top-[30%] w-[1440px] px-[60px] flex flex-col gap-[12px]'>
            <h1 className='text-[#ffffff] font-display text-[48px] font-bold'>Our Services</h1>
            <p className='text-[#ffffff] text-[18px]/[27px] w-[516px] font-regular'>From same day shipments to international cargo, UBAKCO delivers with precision and care.</p>
       </div>
    </div>
  )
}

export default Services
