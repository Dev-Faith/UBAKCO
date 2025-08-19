import clsx from 'clsx'
import React from 'react'

const MissionLabel = ({title, className, variant, offset}:{title: string, className?: string, variant: "primary" | "secondary", offset?: string}) => {
    const primary = "bg-[#11116E]"
    const secondary = "bg-[#B3B3B3]"

    const variantClass = variant === "primary" ? primary : secondary;
  return (
    <div className={clsx("px-[24px] py-[10px] text-[#FFFFFF] text-[16px] font-sans font-[400] rounded-[100px]", offset, variantClass, className) }>
      <p>{title}</p>
    </div>
  )
}

export default MissionLabel
