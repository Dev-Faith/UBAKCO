import clsx from 'clsx'
import React from 'react'

const MissionLabel = ({title, className, variant, offset}:{title: string, className?: string, variant: "primary" | "secondary", offset?: string}) => {
    const primary = "bg-[#11116E]"
    const secondary = "bg-[#B3B3B3]"

    const variantClass = variant === "primary" ? primary : secondary;
  return (
    <div className={clsx("lg:px-[24px] px-[11.82px] lg:py-[10px] py-[4.93px] text-[#FFFFFF] lg:text-[16px] text-[7.88px] font-sans font-[400] rounded-[100px]", offset, variantClass, className) }>
      <p>{title}</p>
    </div>
  )
}

export default MissionLabel
