import { Josefin_Sans,Lato } from 'next/font/google'
import React from 'react'

const josefin2 = Josefin_Sans({
  subsets:['latin'],
  weight:["700"]
})
const lato1 = Lato({
  subsets:['latin'],
  weight:['400']
})
const Header = () => {
  return (
    <div className='items-center flex justify-evenly'>
      <div className='flex justify-evenly w-[1177px] h-[40px]'>
      <div className='flex justify-between items-center'>
      <div className='h-[34px] w-[98px] leading-[34px] text-[34px] text-[#0D0E43]' ><div className={josefin2.className}>Hekto</div></div>
      <div className='flex justify-between items-center gap-7 pl-[50px]'>
     <div className='flex items-center justify-between gap-1'> <div className={lato1.className}><div className='text-[#FB2E86]'>Home</div></div><img src='pink-arrow.svg' alt='arrow down'/> </div>
      <div className={lato1.className}>Pages</div>
      <div className={lato1.className}>Products</div>
      <div className={lato1.className}>Blog</div>
      <div className={lato1.className}>Shop</div>
      <div className={lato1.className}>Contact</div>



      </div>
    </div>
      <div className='flex justify-center items-center'>
      <div><input className='border-[#E7E6EF] border-[2px] h-[40px] w-[317px] '/></div>
      <div className='bg-[#FB2E86] h-[40px] w-[51px] justify-center items-center flex'><img src='search.svg' alt='search'/></div>
    </div>
    </div>
    </div>
  )
}

export default Header
