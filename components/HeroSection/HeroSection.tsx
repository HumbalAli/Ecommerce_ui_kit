import React from "react";
import { Josefin_Sans, Lato} from "next/font/google";
const lato2 = Lato({
  subsets: ["latin"],
  weight: ["700"],
});
const josefin1 = Josefin_Sans({
    subsets:['latin'],
    weight:['700']
})

const HeroSection = () => {
  return (
    <div className="bg-[#F2F0FF] w-auto h-[650px] smbg1 ">
      <div className="flex justify-center items-center smpadright1">
       <div className="flex justify-center items-center ">
        <div><img src="/lamp.svg" alt="lamp" loading='lazy' width={387} height={387} className="smhidden mdhidden" /></div>
        <div className="items-center justify-center content-center">
          <div className="text-[#FB2E86] pl-3">
            <p className={lato2.className}>Best Furniture For Your Castle....</p>
          </div>
          <div className="text-[53px] smtext w-[644px] h-[140px] leading-[81.98px] pl-3">
            <p className={josefin1.className}>New Furniture Collection Trends in 2020</p>
          </div>
          <div>
            <p className="pl-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
          <div className=" p-7"><div className={josefin1.className}><button className=" w-[90px] h-[20px] bg-[#FB2E86] text-white text-center">Shop Now</button></div></div>
        </div>
    </div>
        <div>
        <div className="h-[689px]"><img src="sofa1.svg" alt="sofa" className="smhidden"/></div>
      </div>

      </div>
    </div>
  );
};

export default HeroSection;
