import Image from 'next/image'
import React from 'react'

const Map = () => {
  return (
    <section className='lg:bg-[#EDEDED] md:px-[60px] flex items-center justify-center lg:pb-[170px] bg-[#ffffff] py-[35px] md:py-[90px]'>
      <Image src="/images/map.png" width={1200} height={719} alt="Map" className="lg:w-[1200px] rounded-[10px] md:w-full md:h-[371px]  lg:h-[719px] w-[370px] h-[226px] object-cover" />
    </section>
  )
}

export default Map
