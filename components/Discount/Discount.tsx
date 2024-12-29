import React from 'react'
import { Josefin_Sans,Lato } from 'next/font/google'
const josefin1 = Josefin_Sans({
    subsets:['latin']
})
const lato1 = Lato({
    subsets:['latin'],
    weight:['400']
})
const Discount = () => {
  return (
    <div className='grid grid-cols-6 grid-rows-6 h-[800px]'>
      <div className='text-[#151875] text-[42px] font-bold leading-[49.22px] col-start-1 col-end-7 justify-center flex items-center row-start-1 row-end-3 smtext'><h1 className={josefin1.className}>Discount Item</h1></div>
      <div className='col-start-2 col-end-6 justify-center w-[800px] h-[597px] grid grid-rows-7 grid-cols-5 '>
       <div className='col-start-2 col-end-5 justify-center items-center flex smpadleft1'>
        <ul className='flex justify-between items-center gap-4'>
            <li className='text-[#FB2E86] underline text-[18px] leading-[21.6px] smtext2'><p className={lato1.className}>Wood Chair <span className='smtext2 text-[30px] text-pink-600'>.</span></p></li>
            <li className='text-[18px] leading-[21.6px] text-[#151875] smtext2'><p className={lato1.className}>Plastic Chair</p></li>
            <li className='text-[18px] leading-[21.6px] text-[#151875] smtext2'><p className={lato1.className}>Sofa Collection</p></li>
        </ul>
       </div>
       <div className='row-start-3 col-start-1 col-end-5 text-[35px] leading-[46.2px] text-[#151875] font-semibold smtext '><p className={josefin1.className}>20% Discount Of All Products</p></div>
       <div className='row-end-4 pt-16 col-start-1 col-end-5 text-[21px] leading-[27.72px] text-[#fb2e86] font-semibold smtext'><p className={josefin1.className}>Eams Sofa Compact</p></div>
       <div className='row-end-5 pt-6 col-start-1 col-end-4 text-[21px] leading-[27.72px] text-[#B7BACB] font-medium smtext2'><p className={lato1.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p></div>
       <div className='row-end-6 col-start-1 col-end-3 text-[16px] flex justify-between items-center'>
        <div className='text-[#B8B8DC] smtext2 '>Material expose like metals</div>  <div className='text-[#B8B8DC] smtext2'>Clear lines and geomatric figures</div>
       </div>
       <div className='row-end-7 col-start-1 col-end-3 text-[16px] flex justify-between items-center'>
        <div className='text-[#B8B8DC] smtext2'>Simple neutral colours.</div>  <div className='text-[#B8B8DC] smtext2'>Material expose like metals</div>
       </div>
       <div className='row-end-8 col-start-1 col-end-5  h-[57px] bg-[#fb2e86] flex justify-center items-center w-[100px] '>
       <div className={josefin1.className}><button className='flex items-center justify-center text-white bg-[#fb2e86] '>Shop Now</button></div>
      </div>
      <div className='row-start-3 row-end-8 col-start-4 col-end-6 smhidden'><img src='GiantSofa.svg'/></div>
    </div>
    </div>
  )
}

export default Discount
