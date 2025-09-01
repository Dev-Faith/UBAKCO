import Image from 'next/image'
import React from 'react'

const Map = () => {
  return (
    <section className='bg-[#EDEDED] flex items-center justify-center pb-[170px]'>
      <Image src="/images/map.png" width={1200} height={719} alt="Map" className="w-[1200px]  h-[719px]" />
    </section>
  )
}

export default Map
