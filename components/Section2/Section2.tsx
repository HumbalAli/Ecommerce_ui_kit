import React from 'react'
import { Josefin_Sans , Lato } from 'next/font/google'

const josefin1 = Josefin_Sans({
    subsets:['latin'],
    weight:['700']
})
const lato1 = Lato({
    subsets:['latin'],
    weight:['400']
})

const Section2 = () => {
  return (
    <div className='grid grid-cols-9 grid-rows-12 h-[1000px]'>
<div className='text-[#1A0B5B] col-start-4 col-end-7 justify-center items-center flex w-[367px] h[42px] text-[42px] leading-[49.22px]'><p className={josefin1.className}>Featured Products</p></div>
<div className='row-start-2 row-end-6 col-start-1 col-end-10 flex items-center justify-evenly'>
    <div><img src='/pro1.svg' alt='prod1' className='w-[270px] h-[361px] cursor-pointer '/></div>
    <div><img src='/pro2.svg' alt='prod2' className='w-[270px] h-[361px] cursor-pointer'/></div>
    <div><img src='/pro3.svg' alt='prod3' className='w-[270px] h-[361px] cursor-pointer '/></div>
    <div><img src='/pro4.svg' alt='prod4' className='w-[270px] h-[361px] cursor-pointer '/></div>
</div>
<div className='row-start-6 col-start-5 flex justify-center items-center'><img src='dashes.svg' alt='dashes'/></div>
<div className='text-[#1A0B5B] col-start-4 col-end-7 justify-center items-center flex w-[367px] h[42px] text-[42px] leading-[49.22px]'><p className={josefin1.className}>Leatest Products</p></div>
   <div className='col-end-4 col-start-7 justify-center flex items-center'>
    <div className='w-[527px] h-[22px]'>
        <ul className='text-[18px] flex justify-between items-center'>
            <li className={lato1.className}><div className='text-[#FB2E86] underline'>New Arrival</div></li>
            <li className={lato1.className}>Best Seller</li>
            <li className={lato1.className}>Featured</li>
            <li className={lato1.className}>Special Offer</li>
        </ul>
    </div>
   </div>
    <div className='col-start-1 col-end-10 row-start-11 flex justify-around items-center'>
        <div className='w-[360px] h-[306px] cursor-pointer '><img src='/sofa2.svg' alt='sofa' /></div>
        <div className='w-[360px] h-[306px] cursor-pointer '><img src='/sofa3.svg' alt='sofa' /></div>
        <div className='w-[360px] h-[306px] cursor-pointer '><img src='/sofa4.svg' alt='sofa' /></div>
    </div>
    </div>
  )
}

export default Section2