import React from 'react'
import { Josefin_Sans , Lato } from 'next/font/google'
const josefin1 = Josefin_Sans({
    subsets:['latin']
})
const lato1 = Lato({
    subsets:['latin'],
    weight:['400']
})
const Latestblog = () => {
  return (
    <div className='h-[800px] grid grid-cols-6 grid-rows-6 justify-center '>
    <div className='col-start-1 col-end-6 flex justify-around items-center text-[#151875] font-bold text-[42px] leading-[49.22px] smtext'>Latest Blog</div>

      <div className=' h-[493px] col-start-1 col-end-3 items-center grid grid-rows-5 grid-cols-5 smpadright1'>
      <div className='col-start-1 col-end-6 row-start-2 row-end-2 justify-center items-center w-[370px] h-[255px]'><img src='/img1.svg'/></div>
        <div className='flex justify-center items-center row-start-3 row-end-5 col-start-1 col-end-5 gap-[35px]'>
            <div className='flex items-center justify-center mdtext1'><div><img src='/pen.svg' className='mdhidden smhidden'/></div><div className={josefin1.className}>SaberAli</div></div>
            <div className='flex items-center justify-center gap-[1px] mdtext1'><div><img src='/calendar.svg' className='smhidden mdhidden'/></div><div className={josefin1.className}>21 August,2020</div></div>
        </div>
        <div className='col-start-1 col-end-5 row-end-5 flex justify-baseline items-center font-bold text-[#151875] pb-9 mdtext1' ><p className={josefin1.className}>Top esssential Trends in 2021</p></div>
        <div className='text-[#72718F] col-start-1 col-end-6 row-start-4 row-end-5 flex justify-around items-center w-[297px] h-[60px] pt-[70px] mdtext2'><p className={lato1.className}>More off this less hello samlande lied much
        over tightly circa horse taped mightly</p></div>
        <div className='row-start-5 row-end-6 col-start-1 col-end-6 pl-3 underline text-[#151875]'><p>Read More</p></div>
    </div>


      <div className=' smhidden h-[493px] col-start-3 col-end-5 items-center grid grid-rows-5  grid-cols-5 mdpadleft1 padleft1 '>
      <div className='col-start-1 col-end-6 row-start-2 row-end-2 justify-center items-center w-[370px] h-[255px]'><img src='/img2.svg'/></div>
        <div className='flex justify-center items-center row-start-3 row-end-5 col-start-1 col-end-5 gap-[35px]'>
            <div className='flex items-center justify-center mdtext1'><div><img src='/pen.svg' className='mdhidden smhidden'/></div><div className={josefin1.className}>SaberAli</div></div>
            <div className='flex items-center justify-center gap-[1px] mdtext1'><div><img src='/calendar.svg' className='mdhidden smhidden'/></div><div className={josefin1.className}>21 August,2020</div></div>
        </div>
        <div className='col-start-1 col-end-5 row-end-5 flex justify-baseline items-center font-bold text-[#FB2E86] pb-9 mdtext1' ><p className={josefin1.className}>Top esssential Trends in 2021</p></div>
        <div className='text-[#72718F] col-start-1 col-end-6 row-start-4 row-end-5 flex justify-around items-center w-[297px] h-[60px] pt-[70px] mdtext2'><p className={lato1.className}>More off this less hello samlande lied much
        over tightly circa horse taped mightly</p></div>
        <div className='row-start-5 row-end-6 col-start-1 col-end-6 pl-3 underline text-[#FB2E86]'><p>Read More</p></div>
    </div>




      <div className='smhidden mdhidden h-[493px] col-start-5 col-end-7 items-center grid grid-rows-5 grid-cols-5'>
      <div className='col-start-1 col-end-6 row-start-2 row-end-2 justify-center items-center w-[370px] h-[255px]'><img src='/img3.svg'/></div>
        <div className='flex justify-center items-center row-start-3 row-end-5 col-start-1 col-end-5 gap-[35px]'>
            <div className='flex items-center justify-center'><div><img src='/pen.svg'/></div><div className={josefin1.className}>SaberAli</div></div>
            <div className='flex items-center justify-center gap-[1px]'><div><img src='/calendar.svg'/></div><div className={josefin1.className}>21 August,2020</div></div>
        </div>
        <div className='col-start-1 col-end-5 row-end-5 flex justify-baseline items-center font-bold text-[#151875] pb-9' ><p className={josefin1.className}>Top esssential Trends in 2021</p></div>
        <div className='text-[#72718F] col-start-1 col-end-6 row-start-4 row-end-5 flex justify-around items-center w-[297px] h-[60px] pt-[70px]'><p className={lato1.className}>More off this less hello samlande lied much
        over tightly circa horse taped mightly</p></div>
        <div className='row-start-5 row-end-6 col-start-1 col-end-6 pl-3 underline text-[#151875]'><p>Read More</p></div>
    </div>


    </div>
  )
}

export default Latestblog
