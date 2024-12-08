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
const Treanding = () => {
  return (
    <div className='h-[800px] grid grid-cols-6 grid-rows-5'>
  <div className='text-[#1A0B5B] col-start-3 col-end-7 justify-center items-center flex w-[367px] text-[42px] leading-[49.22px]'><p className={josefin1.className}>Trending Products</p></div>
      <div className='row-start-2 row-end-4 col-start-1 col-end-10 flex items-center justify-evenly'>
    <div><img src='/Trend1.svg' alt='sofa1' className='w-[270px] h-[350px] cursor-pointer '/></div>
    <div><img src='/Trend2.svg' alt='sofa2' className='w-[270px] h-[350px] cursor-pointer'/></div>
    <div><img src='/Trend3.svg' alt='sofa3' className='w-[270px] h-[350px] cursor-pointer '/></div>
    <div><img src='/Trend4.svg' alt='sofa4' className='w-[270px] h-[350px] cursor-pointer '/></div>
</div>

<div className='flex justify-around items-center gap-3 col-start-1 col-end-7 row-start-4 row-end-6'>
    <div className='grid grid-rows-4 grid-cols-6 bg-[#FFF6FB] w-[600px] h-[270px] '>

    <div className='col-start-1 col-end-4 row-start-1 row-end-3 text-[#151875] flex justify-center items-center'><div className={josefin1.className}>23% off in all products</div></div>
    <div className='col-start-1 col-end-3 row-start-2 row-end-3 text-[#FB2E86] underline font-semibold flex justify-center items-center '><div className={lato1.className}>Shop Now</div></div>
    <div className='col-start-3 col-end-7 row-start-3  flex justify-center items-center'><img src='clock.svg' alt='clock' width={213} height={207} /></div>
</div>
<div className='grid grid-rows-4 grid-cols-6 bg-[#EEEFFB] w-[600px] h-[270px] '>

    <div className='col-start-1 col-end-4 row-start-1 row-end-3 text-[#151875] flex justify-center items-center'><div className={josefin1.className}>23% off in all products</div></div>
    <div className='col-start-1 col-end-3 row-start-2 row-end-3 text-[#FB2E86] underline font-semibold flex justify-center items-center '><div className={lato1.className}>View Collection</div></div>
    <div className='col-start-3 col-end-7 row-start-3  flex justify-center items-center'><img src='cabinet.svg' alt='cabinet' width={213} height={207} /></div>

</div><div className='grid grid-rows-3 grid-cols-3 bg-[#FFF6FB] w-[600px] h-[270px]  '>

<div className=' shadow-md grid grid-cols-5 row-start-1 col-start-1 col-end-4 justify-center items-center'>
    <div className='col-start-1 col-end-4 row-start-1 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]'><img src='/chair1.svg' alt='chair' width={64} height={71} className='col-start-1 col-end-4 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]' /></div>
    <div className='text-[#151875] col-start-3 col-end-6 row-start-1 '>
        <div className={josefin1.className}>Executive Seat chair</div>
        <div>$32.00</div>
    </div>
</div>
<div className=' shadow-md grid grid-cols-5 row-start-2 col-start-1 col-end-4 justify-center items-center'>
    <div className='col-start-1 col-end-4 row-start-1 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]'><img src='/chair2.svg' alt='chair' width={64} height={71} className='col-start-1 col-end-4 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]' /></div>
    <div className='text-[#151875] col-start-3 col-end-6 row-start-1 '>
        <div className={josefin1.className}>Executive Seat chair</div>
        <div>$32.00</div>
    </div>
</div>
<div className=' shadow-md grid grid-cols-5 row-start-3 col-start-1 col-end-4 justify-center items-center'>
    <div className='col-start-1 col-end-4 row-start-1 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]'><img src='/chair3.svg' alt='chair' width={64} height={71} className='col-start-1 col-end-4 justify-center items-center bg-[#F5F6F8] w-[107px] h-[74px]' /></div>
    <div className='text-[#151875] col-start-3 col-end-6 row-start-1 '>
        <div className={josefin1.className}>Executive Seat chair</div>
        <div>$32.00</div>
    </div>
</div>


</div>
</div>
   

    </div>
  )
}

export default Treanding
