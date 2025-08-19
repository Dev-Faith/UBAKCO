import clsx from 'clsx';
import Image from 'next/image'
import React from 'react'

const MissionCard = ({ src, className, w, h} : { src: string, className?: string, w: number, h: number }) => {
  return (
   <Image src={src} alt={src} width={w} height={h} className={clsx(`w-[${w}px] h-[${h}px]`, className)} />
  )
}

export default MissionCard;
