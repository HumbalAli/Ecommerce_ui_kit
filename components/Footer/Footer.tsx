import React from 'react'
import { Josefin_Sans , Roboto , Lato} from 'next/font/google'
import Link from 'next/link'
const josefin2 = Josefin_Sans({
    subsets:['latin'],
    weight:['700']
})
const robot1 = Roboto({
    subsets:['latin'],
    weight:['500']
})
const lato1 = Lato({
    subsets:['latin'],
    weight:['400']
})
const Footer = () => {
  return (
    <div className='bg-[#EEEFFB] h-[479px] grid grid-cols-12 grid-rows-9'>

<div className='col-start-2 flex col-end-4 justify-center items-center row-start-2 row-end-5 '>
      <div className='h-[34px] w-[98px] leading-[34px] text-[34px] text-[#0D0E43]'><p className={josefin2.className}>Hekto</p></div>
  </div>
  <div className='col-start-2 col-end-4 row-start-4 flex w-[377px] h-[44px] justify-stretch '>
   <div> <input placeholder='Enter Email Address' className='w-[270px] h-[44px]' /> </div>
   <div className='bg-[#FB2E86] w-[100px] text-white justify-center flex items-center'> <button className={robot1.className}>Sign Up</button> </div>
 </div>

  <div className='col-start-2 col-end-4 row-start-6 flex'>
<div className='text-[#8A8FB9] text-[16px] leading-[19.2px]'><p className={lato1.className}>Contact</p></div>
  </div>

  <div className='col-start-2 col-end-6 justify-center items-center row-end-8 flex'>
<div className='text-[#8A8FB9] text-[16px] leading-[19.2px]'><p className={lato1.className}>17 Princess Road, London, Greater London NW1 8JR, UK</p></div>
  </div>

  <div className='row-start-3 text-[22px]  leading-[25.78px] col-start-6 col-end-7'><p className={josefin2.className}>Category</p></div>
  <div className=' gap-8 col-start-6 col-end-8 row-start-4'><ul className='text-[#8A8FB9] gap-10'>
    <li>Laptops & Computers</li>
    <br/>
    <li>Cameras & Photography</li>
    <br/>
    <li>Smart Phones & Tablets</li>
    <br/>
    <li>Video Games & Consoles</li>
    <br/>
    <li>Waterproof Headphones</li>
    <br/>
    </ul></div>

  <div className='row-start-3 text-[22px]  leading-[25.78px] col-start-8 col-end-10'><p className={josefin2.className}>Customer Care</p></div>
  <div className=' gap-8 col-start-8 col-end-10 row-start-4'><ul className='text-[#8A8FB9] gap-10'>
  <li><Link href="/Account" target="_blank">My Account</Link></li>
    <br/>
    <li>Discount</li>
    <br/>
    <li>Returns</li>
    <br/>
    <li>Orders History</li>
    <br/>
    <li>Order Tracking</li>
    <br/>
    </ul></div>
  <div className='row-start-3 text-[22px]  leading-[25.78px] col-start-10 col-end-12'><p className={josefin2.className}>Pages</p></div>
  <div className=' gap-8 col-start-10 col-end-12 row-start-4'><ul className='text-[#8A8FB9] gap-10'>
    <li>Blog</li>
    <br/>
    <li>Browse the Shop</li>
    <br/>
    <li>Category</li>
    <br/>
    <li>Pre-Built Pages</li>
    <br/>
    <li>Visual Composer Elements</li>
    <br/>
    <li>WooCommerce Pages</li>
    <br/>
    </ul></div>

    </div>
  )
}

export default Footer
