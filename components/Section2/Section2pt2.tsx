import React from 'react'
import { Josefin_Sans } from 'next/font/google'
const josefin1 = Josefin_Sans({
  subsets:['latin']
})
const Section2pt2 = () => {
  return (
    <div className='grid grid-cols-9 grid-rows-12 h-[900px]'>
      <div className='col-start-1 col-end-10 row-start-4 flex justify-around items-center gap-2'>
      <div className='w-[360px] h-[306px] cursor-pointer hover:w-[400px]'><img src='/sofa5.svg' alt='sofa' /></div>
      <div className='w-[360px] h-[306px] cursor-pointer hover:w-[400px]'><img src='/sofa6.svg' alt='sofa' /></div>
      <div className='w-[360px] h-[306px] cursor-pointer hover:w-[400px] smhidden'><img src='/sofa7.svg' alt='sofa' /></div>
      </div>
      <div className='w-[399px] h-[42px] col-start-4 col-end-7 row-start-7 flex justify-center items-center text-[#151875] text-[42px] leading-[49.22px] smpadleft1 smtext '><div className={josefin1.className}>What Shopex Offer!</div></div>
   
      <div className='col-start-1 col-end-10 row-start-9 row-end-12 flex justify-around items-center'>

      <div className='w-[270px] h-[320px]  shadow-md grid grid-cols-1 grid-rows-5'>
        <div className='row-start-2 row-end-3 flex justify-center items-center'><img src='/truck.svg' alt='truck-kun' height={65} width={65}/></div>
        <div className='row-start-3 row-end-4 flex justify-center items-center text-[#151875] text-[22px]'><p className={josefin1.className}>24/7 Support</p></div>
        <div className='row-start-4 row-end-5 flex justify-center items-center text-[#1A0B5B4D] text-opacity-[30%] smhidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
      </div>
      <div className='w-[270px] h-[320px]  shadow-md grid grid-cols-1 grid-rows-5'>
        <div className='row-start-2 row-end-3 flex justify-center items-center'><img src='/cashback.svg' alt='money' height={65} width={65}/></div>
        <div className='row-start-3 row-end-4 flex justify-center items-center text-[#151875] text-[22px]'><p className={josefin1.className}>24/7 Support</p></div>
        <div className='row-start-4 row-end-5 flex justify-center items-center text-[#1A0B5B4D] text-opacity-[30%] smhidden '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
      </div>
      <div className='w-[270px] h-[320px]  shadow-md grid grid-cols-1 grid-rows-5'>
        <div className='row-start-2 row-end-3 flex justify-center items-center'><img src='/badge.svg' alt='honor' height={65} width={65}/></div>
        <div className='row-start-3 row-end-4 flex justify-center items-center text-[#151875] text-[22px]'><p className={josefin1.className}>24/7 Support</p></div>
        <div className='row-start-4 row-end-5 flex justify-center items-center text-[#1A0B5B4D] text-opacity-[30%] smhidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
      </div>
      <div className='w-[270px] h-[320px]  shadow-md grid grid-cols-1 grid-rows-5 smhidden'>
        <div className='row-start-2 row-end-3 flex justify-center items-center'><img src='/24to7.svg' alt='all the time' height={65} width={65}/></div>
        <div className='row-start-3 row-end-4 flex justify-center items-center text-[#151875] text-[22px]'><p className={josefin1.className}>24/7 Support</p></div>
        <div className='row-start-4 row-end-5 flex justify-center items-center text-[#1A0B5B4D] text-opacity-[30%] smhidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
      </div>
      </div>
    </div>
  )
}

export default Section2pt2
