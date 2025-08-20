import Image from 'next/image'
import React from 'react'
import { Button } from '../buttons/Button'

interface featureCardProps {
    icon: string;
    title:string;
    desc: string;
    subDesc: string;
    separator?:boolean
}
const FeatureCard = ({icon, title, desc, subDesc, separator}:featureCardProps) => {
  return (
    <div className={` relative group flex flex-col gap-[24px] w-[578px] hover:bg-[#F8DCD2] px-[40px] pt-[32px] pb-[72px] rounded-tl-[20px] rounded-tr-[60px] rounded-bl-[20px] rounded-br-[20px]`}>
      <Image src={icon} alt= "icon" width={48} height={48}/>
      <div className="texts w-[516px] flex flex-col gap-[18px]">
        <h3 className="text-[32px] font-dislay font-semibold">{title}</h3>
        <p className="text-[24px]/[36px] font-sans text-[#323232]">{desc}</p>
        <p className="text-[#656565] text-[18px]/[32px] font-sans">{subDesc}</p>
      </div>
      <Button variant="tertiary" className='flex items-center gap-[12px] w-[209px]'>Request a Quote <Image src="/icons/requestBox.png" alt="requestBox icon" height={24} width={24}/></Button>
      {separator && <div className="separator h-[80%] right-[-24px] absolute w-[1px] bg-[#CACACA] self-center top-[50px]"></div>}
    </div>
  )
}

export default FeatureCard
