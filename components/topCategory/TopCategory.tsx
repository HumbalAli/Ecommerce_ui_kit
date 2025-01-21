import React from 'react'
import { Josefin_Sans } from 'next/font/google'
const josefin1 = Josefin_Sans(
    {
        subsets:['latin'],

    }
)

const TopCategory = () => {
  return (
    <div className='h-[400px] grid grid-cols-4 grid-rows-7'>
        <div className='col-start-2 col-end-4 flex justify-center items-center leading-[49.22px] text-[42px] font-bold text-[#151875] smtext '><p className={josefin1.className}>Top Categories</p></div>
      <div className='col-start-1 col-end-8 row-start-5 justify-between flex items-center'>
        <div><img src='/golchair1.svg' alt="img"  loading="lazy"  className='hover:w-[500px]'/></div>
        <div><img src='/golchair2.svg' alt="img"  loading="lazy"  className='hover:w-[500px]'/></div>
        <div><img src='/golchair3.svg' alt="img"  loading="lazy" className='hover:w-[500px] smhidden'/></div>
        <div><img src='/golchair4.svg' alt="img"  loading="lazy"  className='hover:w-[500px] smhidden'/></div>
      </div>
    </div> 
  )
}

export default TopCategory
