import React from "react";
import Navbar from "../../components/Navbar/page";
import Header from "../../components/Header/Header";
import { Josefin_Sans,Lato } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const josefin1 = Josefin_Sans({
  subsets: ["latin"],
});
const lato1 = Lato({
  subsets:['latin'],
  weight:['700']
})
const lato2 = Lato({
  subsets:['latin'],
  weight:['400']
})
const Account = () => {
  return (
    <div className="h-auto ">
      <Navbar />
      <Header />
      <div className="bg-[#F6F5FF] grid grid-cols-7 grid-rows-7 ">
        <div className="col-start-1 col-end-3 row-start-3 text-[36px] leading-[42.19px] text-center text-[#101750] ">
          <h1 className={josefin1.className}>My Account</h1>
        </div>
        <div className="col-start-1 col-end-3 row-start-4 flex justify-center">
          <div className="text-[16px] leading-[19.2px] text-center smtext2">
            <p>Home.</p>
          </div>
          <div className="text-[16px] leading-[19.2px] text-center smtext2">
            <p>Pages</p>
          </div>
          <div className="text-[16px] leading-[19.2px] text-center text-[#FB2E86]">
            <p>.My Account</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="grid grid-cols-3 grid-rows-12 h-[500px] smpadleft2">
      <div className="col-start-2 col-end-3 row-start-1 w-[544px] h-[474px] border-[1px] border-black justify-center items-center">
        <div className="grid grid-rows-12 items-center justify-center">
        <div className="font-bold text-[32px] leading-[37.5px] row-start-2 justify-center flex items-center "><p className={josefin1.className}>Login</p></div>
        <div className="row-start-3 text-[#9096B2] text-[17px] leading-[20.4px] ">Please login using account detail bellow.</div>
        <div className="row-start-4"><input className="w-[432px] h-[52px] border-[1px] border-[#C2C5E1] " placeholder="Email Adress"/></div>
        <div className="row-start-5 "><input className="w-[432px] h-[52px] border-[1px] border-[#C2C5E1] pt-5 " placeholder="Password"/></div>
        <div className="row-start-6 text-[#9096B2] text-[17px] leading-[20.4px]">Forgot your password?</div>
        <div className="row-start-7 bg-[#FB2E86] w-[432px] h-[47px] text-white items-center justify-center flex "><button className={lato1.className}>Sign in</button></div>
        <div className="row-start-8 text-[#9096B2] text-[17px] leading-[20.4px]">Don’t have an Account?Create account</div>
      </div>
      </div>
      </div>
     <div className="justify-center items-center flex"> <img src="section2.svg" alt="img"/></div>
      <Footer/>
    </div>
  );
};

export default Account;
