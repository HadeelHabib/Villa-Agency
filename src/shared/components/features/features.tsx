import { IMAGES } from '@/utils/images'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='bg-[#fff]  shadow-lg p-9 rounded-[10px]   '>
      <div className="flex  items-center pt-[20px] border-b border-b-[#00000013] py-[30px]">
        <Image src={IMAGES.info1} alt=""/>
        <div className="ml-6">
            <h2 className='text-[25px]'>250 m2</h2>
            <span className='opacity-70'>Total Flat Space</span>
        </div>
      </div>
      <div className="flex   items-center border-b border-b-[#00000013] py-[30px]">
        <Image src={IMAGES.info2} alt=""/>
        <div className="ml-6">
            <h2 className='text-[25px]'>Contract</h2>
            <span className='opacity-70'>Contract Ready</span>
        </div>
      </div>
      <div className="flex  items-center border-b border-b-[#00000013] py-[30px]">
        <Image src={IMAGES.info3} alt=""/>
        <div className="ml-6">
            <h2 className='text-[25px]'>Payment</h2>
            <span className='opacity-70'>Payment Process</span>
        </div>
      </div>
      <div className="flex  pb-[10px] items-center  border-b-[#00000013] py-[30px]">
        <Image src={IMAGES.info4} alt=""/>
        <div className="ml-6">
            <h2 className='text-[25px]'>Safety</h2>
            <span className='opacity-70'> 24/7Under Control</span>
        </div>
      </div>
    </div>
  )
}

export default Features
