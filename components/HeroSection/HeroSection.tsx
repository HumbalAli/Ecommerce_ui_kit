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
    <div className="bg-[#F2F0FF] w-auto h-[650px]">
      <div className="flex justify-center items-center">
       <div className="flex justify-center items-center">
        <div><img src="/lamp.svg" alt="lamp" width={387} height={387} /></div>
        <div className="items-center justify-center content-center">
          <div className="text-[#FB2E86]">
            <p className={lato2.className}>Best Furniture For Your Castle....</p>
          </div>
          <div className="text-[53px] w-[644px] h-[140px] leading-[81.98px]">
            <p className={josefin1.className}>New Furniture Collection Trends in 2020</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
          <div className=" p-7"><div className={josefin1.className}><button className=" w-[83px] h-[17px] bg-[#FB2E86] text-white">Shop Now</button></div></div>
        </div>
    </div>
        <div>
        <div className="h-[689px]"><img src="sofa1.svg" alt="sofa"/></div>
      </div>

      </div>
    </div>
  );
};

export default HeroSection;
