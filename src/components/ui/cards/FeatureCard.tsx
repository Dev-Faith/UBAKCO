import Image from 'next/image'
import React from 'react'
import { Button } from '../buttons/Button'

interface featureCardProps {
    icon: string;
    title:string;
    desc: string;
    subDesc: string;
    separator?:boolean,
    className?: string;
}
const FeatureCard = ({icon, title, desc, subDesc, separator, className}:featureCardProps) => {
  return (
    <div className={` relative group flex flex-col gap-[24px] w-full sm:w-full lg:w-[578px] sm:w-full hover:bg-[#F8DCD2] lg:px-[40px] px-[24px] pt-[32px] lg:pb-[72px] pb-[32px] rounded-tl-[20px]  rounded-tr-[60px] rounded-bl-[20px] rounded-br-[20px] sm:rounded-[20px] lg:rounded-tr-[60px] ${className} `}>
      <Image src={icon} alt= "icon" width={48} height={48}/>
      <div className="texts w-[516px] flex flex-col gap-[18px]">
        <h3 className="lg:text-[32px] text-[24px]/[42px] sm:text-[32px]/[42px] tracking-[-0.02em] font-dislay font-semibold lg:w-full w-[322px] sm:w-full">{title}</h3>
        <p className="lg:text-[24px]/[36px] text-[20px]/[30px] font-sans text-[#323232] lg:w-full w-[322px] sm:text-[22px]/[33px] sm:w-full">{desc}</p>
        <p className="text-[#656565] lg:text-[18px]/[32px] text-[16px]/[24px] font-sans lg:w-full w-[322px] sm:text-[16px]/[24px] sm:w-full">{subDesc}</p>
      </div>
  <Button fn="quote" variant="tertiary" className='flex items-center gap-[12px] w-[209px] text-[16px]'>Request a Quote <Image src="/icons/requestBox.png" alt="requestBox icon" height={24} width={24}/></Button>
      {separator && <div className="separator h-[80%] right-[-6%]  absolute w-[1px] bg-[#CACACA] self-center top-[50px] hidden lg:block"></div>}
    </div>
  )
}

export default FeatureCard;
