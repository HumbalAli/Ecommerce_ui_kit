import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Section4 from "../section4/Section4";
import Footer from "../Footer/Footer";
const josefin1 = Josefin_Sans({
  subsets: ["latin"],
});
const josefin2 = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
const lato1 = Lato({
  subsets: ["latin"],
  weight: ["700"],
});
const lato2 = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const page = () => {
  return (
    <div>
      <div className="h-[800px] grid grid-cols-12 grid-rows-12 smcenter smpadleft1">
        <img
          src="/blog3.svg"
          alt="blog3"
          className="col-start-2 col-end-10 items-center row-start-1 smhidden "
        />
        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-1">
          <div className="text-[22px] leading-[25.78px] text-[#151875] smpadtop2">
            <h6 className={josefin1.className}>Tags</h6>
          </div>
        </div>
        <div className="h-[23px] w-[360px] col-start-2 row-start-8 flex gap-3 smhidden ">
          <div className="items-center justify-center flex">
            <span>
              <img src="\pen.svg" width="16px" height="16px" alt="img" />
            </span>
            <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] ">
              <p className={josefin1.className}>Surf Auxion</p>
            </span>
          </div>
          <div className="items-center justify-center flex">
            <span>
              <img src="\calendar.svg" loading='lazy' width="16px" height="16px"  alt="img"/>
            </span>
            <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] font-semibold">
              <p className={lato1.className}>Aug 09 2020</p>
            </span>
          </div>
        </div>

        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-2 h-[64px] w-[228px] smpadtop2">
          <div className="flex justify-between items-center">
            <div className="underline text-pretty">General</div>
            <div className="underline text-pretty text-[#FB2E86]">Atsanil</div>
            <div className="underline text-pretty">Insas.</div>
          </div>

          <div className="flex gap-6 items-center pt-3">
            <div className="underline text-pretty">Bibsaas</div>
            <div className="underline text-pretty">Nulla</div>
          </div>
        </div>

        <div className="col-start-2 items-center justify-center row-start-9 smhidden ">
          <div className="w-[852px] h-[140px]">
            <div className="text-[#151875] text-[30px] leading-[30px]">
              <h5 className={josefin2.className}>
              Sit nam congue feugiat nisl, mauris amet nisi. 
              </h5>
            </div>
            <div className="text-[#8A8FB9] text-[16px] leading-[25.6px] pt-4 ">
              <p className={lato2.className}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#151875] text-[18px] leading-[21.6px] col-start-2 row-start-11 smhidden">
          <p className={lato1.className}>Read More</p>
        </div>
      </div>
      <Section4/>
      <Footer/>
    </div>
  );
};

export default page;
