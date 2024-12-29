import React from 'react'
import { Josefin_Sans } from 'next/font/google'
const josefin1 = Josefin_Sans({
    subsets:['latin'],
    weight:['700']
})
const josefin2 = Josefin_Sans({
    subsets:['latin']
})
const Section3 = () => {
  return (
    <div className='bg-[#F1F0FF] h-[579px] grid grid-cols-9 grid-rows-12 '>
<div className='col-start-2 col-end-5 row-start-4  row-end-10 justify-center items-center flex'><img src='/bigSofa.svg' alt='Big Sofa' height={550} width={558}/></div>
<div className='col-start-5 row-start-4 col-end-9 justify-center items-center flex'>
    <div className={josefin1.className}><p className='text-[#151875] text-[35px] leading-[46.2px] smtext'>Unique Features Of leatest &
    Trending Poducts</p></div>
</div>
<br/>
<div className='col-start-5 col-end-9 row-start-6 row-end-9 content-center items-center'>
    <div className='text-[#ACABC3]'><span className='opacity-[70%]'>🔴</span><span className={josefin2.className}>All frames constructed with hardwood solids and laminates</span></div><br/>
    <div className='text-[#ACABC3]'><span className='opacity-[70%]'>🔵</span><span className={josefin2.className}>Reinforced with double wood dowels, glue, screw - nails corner 
    blocks and machine nails</span></div><br/>
    <div className='text-[#ACABC3]'><span className='opacity-[70%] '>🟢</span><span className={josefin2.className}>Arms, backs and seats are structurally reinforced</span></div>
</div>


<div className='flex justify-center items-center col-start-5 col-end-8 row-end-11 gap-2 smpaddown1 '>
<div className='bg-[#FB2E86] w-[157px] h-[45px] flex justify-center items-center rounded-sm '><button>Add To Cart</button></div>
<div className='text-[14px] leading-[16.41px]'> <p className={josefin2.className}>B&B Italian Sofa</p>
<p>$32.00</p>
</div>

</div>
    </div>
  )
}

export default Section3
