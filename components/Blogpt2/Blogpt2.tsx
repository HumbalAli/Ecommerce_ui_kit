import React from "react";
import Blogpt3 from "@/components/Blogpt3/Blogpt3";
import { Josefin_Sans, Lato } from "next/font/google";
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
      <div className="h-[800px] grid grid-cols-12 grid-rows-12 smcenter smpadleft1 ">
        <img
          src="/blog2.svg"
          alt="blog2"
          className="col-start-2 col-end-10 items-center row-start-1 smhidden"
        />
        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-1">
          <div className="text-[22px] leading-[25.78px] text-[#151875]">
            <h6 className={josefin1.className}>Sale Product</h6>
          </div>
        </div>
        <div className="h-[23px] w-[360px] col-start-2 row-start-8 flex gap-3 smhidden ">
          <div className="items-center justify-center flex">
            <span>
              <img src="\pen.svg" width="16px" height="16px" />
            </span>
            <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] ">
              <p className={josefin1.className}>Surf Auxion</p>
            </span>
          </div>
          <div className="items-center justify-center flex">
            <span>
              <img src="\calendar.svg" width="16px" height="16px" />
            </span>
            <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] font-semibold">
              <p className={lato1.className}>Aug 09 2020</p>
            </span>
          </div>
        </div>

        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-2">
          <div className="w-[250px] h-[270px]">
            <div className="w-[250px] h-[51px] py-1 flex">
              <img src="\blog05.svg" />
              <p className={josefin1.className}>
                It is a long established fact
              </p>
              <p className="text-gray-400">Aug 09 2020</p>
            </div>
            <div className="w-[250px] h-[51px] py-1 flex">
              <img src="\blog06.svg" />
              <p className={josefin1.className}>
                It is a long established fact
              </p>
              <p className="text-gray-400">Aug 09 2020</p>
            </div>
            <div className="w-[250px] h-[51px] py-1 flex">
              <img src="\blog07.svg" />
              <p className={josefin1.className}>
                It is a long established fact
              </p>
              <p className="text-gray-400">Aug 09 2020</p>
            </div>
          </div>
        </div>

        <div className="col-start-2 items-center justify-center row-start-9 smhidden">
          <div className="w-[852px] h-[140px]">
            <div className="text-[#151875] text-[30px] leading-[30px]">
              <h5 className={josefin2.className}>
                Aenean vitae in aliquam ultrices lectus. Etiam.
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
        <div className="col-start-10 p-2 col-end-13 row-start-5 smpadtop">
          <div className="text-[22px] leading-[25.78px] text-[#151875] ">
            <h5 className={josefin1.className}>Offer Product</h5>
          </div>
        </div>
        <div className="col-start-10 p-2 col-end-13 row-start-6 smpadtop">
          <div className="w-[267px] h-[282px]">
            <div className="flex gap-2">
              <div className={lato1.className}>
                <img src="blog08.svg" />
                <p className="text-center text-[#151875] leading-[16.8px] text-[14px] pt-2">
                  Duis lectus est.
                </p>
                <p className="text-[12px] leading-[14.4px] text-center text-[#8A8FB9] pt-2">
                  $12.00 - $15.00
                </p>
              </div>
              <div className={lato1.className}>
                <img src="blog09.svg" />
                <p className="text-center text-[#151875] leading-[16.8px] text-[14px] pt-2">
                  Sed placerat.
                </p>
                <p className="text-[12px] leading-[14.4px] text-center text-[#8A8FB9] pt-2">
                  $12.00 - $15.00
                </p>
              </div>
            </div>

            <div className="flex pt-2 gap-2">
              <div className={lato1.className}>
                <img src="blog010.svg" />
                <p className="text-center text-[#151875] leading-[16.8px] text-[14px] pt-2">
                  Netus proin.
                </p>
                <p className="text-[12px] leading-[14.4px] text-center text-[#8A8FB9] pt-2">
                  $12.00 - $15.00
                </p>
              </div>
              <div className={lato1.className}>
                <img src="blog011.svg" />
                <p className="text-center text-[#151875] leading-[16.8px] text-[14px] pt-2">
                  Platea in.
                </p>
                <p className="text-[12px] leading-[14.4px] text-center text-[#8A8FB9] pt-2">
                  $12.00 - $15.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-10 p-2  row-start-10 justify-center w-[126px] h-[78px] smpadtop2">
          <div>
            <div className="text-[#151875] text-[22px] leading-[25.78px]">
              <p className={josefin1.className}>Follow</p>
            </div>
            <div>
              <img src="socialgroup1.svg"/>
            </div>
          </div>
        </div>
      </div>
      <Blogpt3/>
    </div>
  );
};

export default page;
