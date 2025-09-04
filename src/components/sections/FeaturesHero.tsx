import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/buttons/Button'
import { FaArrowRight } from "react-icons/fa6";

const FeaturesHero = () => {
  return (
    <section className="lg:mt-[88px] relative lg-h-full h-[50vh] lg:mb-[325px] mb-[509px]">
     <div className="relative">
        <Image src="/images/features.png" alt="features-background" width={1440} height={682} className="h-[calc(100vh-88px)] object-cover " />
        <Image src="/images/featShadow.png" alt="features-shadow" width={865} height={685} className='absolute lg:top-0 top-[10%] md:w-[100vw] w-[500px] h-[100vh]'/>
        <div className="absolute top-[30%] lg:top-[20%] left-[16px] lg:left-[60px] md:left-[60px] flex flex-col gap-[40px]">
           <div className=" flex flex-col gap-[24px]">
             <h1 className="font-bold text-[24px]/[36px]  lg:text-[48px]/[62.4px] md:w-[400px] md:text-[40px]/[50px]  tracking-[-0.02em] font-display w-[221px] lg:w-[748px] text-white">Premium & White-Glove Logistics</h1>
            <p className="font-sans text-white text-[14px]/[21px] lg:text-[18px]/[27px] md:text-[18px]/[27px] w-[516px] font-[400] w-[301px] lg:w-[516px]">For luxury, executive, and high-value deliveries that demand absolute care, privacy and precision.</p>
           </div>
           <Button className="w-[209px] text-white flex items-center gap-[12px]">Contact Us<FaArrowRight/> </Button>
        </div>

     </div>
    </section>
  )
}

export default FeaturesHero
