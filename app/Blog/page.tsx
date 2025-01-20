import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/page";
import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Blogpt2 from "@/components/Blogpt2/Blogpt2";
const josefin1 = Josefin_Sans({
  subsets: ["latin"],
});
const josefin2 = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"]
});
const lato1 = Lato({
    subsets: ["latin"],
    weight: ['700']
  });
const lato2 = Lato({
    subsets: ["latin"],
    weight: ["400"]
  });

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className=" grid grid-rows-9 grid-cols-7 h-[286px] bg-[#F6F5FF] ">
        <div className="width-[190px]  h-[64px] col-start-2 row-start-4">
          <div className="col-start-1 col-end-3 row-start-3 text-[36px] leading-[42.19px] font-bold text-center text-[#101750] ">
            <h1 className={josefin1.className}>Blog Page</h1>
          </div>
          <div className="col-start-1 col-end-3 row-start-4 flex justify-center">
            <div className="text-[16px] leading-[19.2px] text-center smtext2">
              <p>Home.</p>
            </div>
            <div className="text-[16px] leading-[19.2px] text-center smtext2">
              <p>Pages</p>
            </div>
            <div className="text-[16px] leading-[19.2px] text-center text-[#FB2E86]">
              <p>.Blog Page</p>
            </div>
          </div>
        </div>
      </div>
    <div className="h-[800px] grid grid-cols-12 grid-rows-12 smcenter smpadleft1">
        <img
          src="/blog1.svg"
          alt="blog1"
          className="col-start-2 col-end-10 items-center row-start-2 smhidden"
        />
        <div className="w-[270px] h-[77px] col-start-10 col-end-13 items-center p-4 justify-center ">
          <div className="text-[22px] leading-[25.78px] text-[#151875]">
            <p className={josefin1.className}>Search</p>
          </div>
          <input
            placeholder="Search For Post        🔍"
            className="border-[1px] border-e-gray-300"
          />
        </div>
        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-3">
          <div className="text-[22px] leading-[25.78px] text-[#151875]">
            <h6 className={josefin1.className}>Categories</h6>
          </div>
        </div>
        <div className="col-start-10 col-end-12 items-center p-4 justify-between row-start-4 flex h-[114px] w-[254px]">
          <div>
            <div className={josefin1.className}>
              <p className="bg-[#F939BF] w-[122px] h-[30px] items-center justify-center flex text-white text-[14px] leading-[14px]">
                Hobbies (14)
              </p>
            </div>
            <div className={josefin1.className}>
              <p className=" w-[122px] h-[30px] items-center justify-center flex text-[14px] leading-[14px] text-[#3F509E]">
                Women (21)
              </p>
            </div>
            <div className={josefin1.className}>
              <p className=" w-[122px] h-[30px] items-center justify-center flex text-[14px] leading-[14px] text-[#3F509E]">
                Women (21)
              </p>
            </div>
          </div>

          <div>
            <div className={josefin1.className}>
              <p className=" w-[122px] h-[30px] items-center justify-center flex text-[14px] leading-[14px] text-[#3F509E]">
                Women (21)
              </p>
            </div>
            <div className={josefin1.className}>
              <p className=" w-[122px] h-[30px] items-center justify-center flex text-[14px] leading-[14px] text-[#3F509E]">
                Women (21)
              </p>
            </div>
            <div className={josefin1.className}>
              <p className=" w-[122px] h-[30px] items-center justify-center flex text-[14px] leading-[14px] text-[#3F509E]">
                Women (21)
              </p>
            </div>
          </div>
        </div>

        <div className="h-[23px] w-[360px] col-start-2 row-start-9 flex gap-3 smhidden ">
            <div className="items-center justify-center flex">
                <span><img src="\pen.svg" width='16px' height='16px' /></span>
                <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] "><p className={josefin1.className}>Surf Auxion</p></span>
            </div>
            <div className="items-center justify-center flex">
                <span><img src="\calendar.svg" width='16px' height='16px'/></span>
                <span className="bg-[#FFE7F9] text-[#151875] rounded-md flex justify-center items-center w-[160px] h-[23px] font-semibold"><p className={lato1.className}>Aug 09 2020</p></span>
            </div>


        </div>

        <div className="col-start-10 col-end-13 items-center p-4 justify-center row-start-6">
            <div className="text-[22px] leading-[25.78px] text-[#151875]"><h6 className={josefin1.className}>Recent Post</h6></div>
            <div className="w-[250px] h-[270px]">
                <div className="w-[250px] h-[51px] py-1 flex"><img src="\blog01.svg"/><p className={josefin1.className}>It is a long established fact</p> <p className="text-gray-400">Aug 09 2020</p></div>
                <div className="w-[250px] h-[51px] py-1 flex"><img src="\blog02.svg"/><p className={josefin1.className}>It is a long established fact</p> <p className="text-gray-400">Aug 09 2020</p></div>
                <div className="w-[250px] h-[51px] py-1 flex"><img src="\blog03.svg"/><p className={josefin1.className}>It is a long established fact</p> <p className="text-gray-400">Aug 09 2020</p></div>
                <div className="w-[250px] h-[51px] py-1 flex"><img src="\blog04.svg"/><p className={josefin1.className}>It is a long established fact</p> <p className="text-gray-400">Aug 09 2020</p></div>
            </div>
        </div>

        <div className="col-start-2 items-center justify-center row-start-10 smhidden">
          <div className="w-[852px] h-[140px]">
            <div className="text-[#151875] text-[30px] leading-[30px]"><h5 className={josefin2.className}>Mauris at orci non vulputate diam tincidunt nec.</h5></div>
            <div className="text-[#8A8FB9] text-[16px] leading-[25.6px] pt-4 "><p className={lato2.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p></div>
          </div>
        </div>
        <div className="text-[#151875] text-[18px] leading-[21.6px] col-start-2 row-start-12 row-end-13 justify-center items-center flex smhidden"><p className={lato1.className}>Read More</p></div>


    </div>
    <Blogpt2/>
    </div>
  );
};

export default page;