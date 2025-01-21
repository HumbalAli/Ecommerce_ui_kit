import React from "react";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const josefin1 = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600"],
});


const Navbar = () => {
  return (
    <div className="bg-[#7E33E0] text-[#f1f1f1] w-full h-[44px] ">
      <div className={josefin1.className}>
        <div className="flex justify-around content-center items-center ">

          <div className="flex items-center justify-center gap-4 ">
            <div className="h-[16px] w-[16px] smhidden mdhidden">
              <img src="/Vector.svg" alt="Message"/>
            </div>
            <div className={josefin1.className}>
              <div className="w-[171px] h-[16px] size-4 leading-4">mhhasanul@gmail.com</div>
            </div>
            <div className="flex items-center justify-center pl-[30px]">
              <div className="h-[16px] w-[16px] smhidden mdhidden">
                <img src="/phone.svg" alt="Message"/>
              </div>
              <div className={josefin1.className}>
                <div className="w-[97px] h-[16px] size-4 leading-4">(12345)67890</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3  smhidden">
           
            <div className="flex items-center justify-center gap-1">
             <div className={josefin1.className}>English</div><div/>
              <div><img src="/down.svg" alt="down arrow"/></div>
            </div>
            
           
            <div className="flex items-center justify-center gap-1">
            <div className={josefin1.className}>USD</div>
              <div><img src="/down.svg" alt="down arrow"/></div>
            </div>
            
           
            <div className="flex items-center justify-center gap-1">
            <div className={josefin1.className}><li><Link href="/Account" target="_blank">Login</Link></li></div>
              <div><img src="/person.svg" alt="person"/></div>
            </div>
            
           
            <div className="flex items-center justify-center gap-1">
            <div className={josefin1.className}>Wishlist</div>
              <div><img src="/heart.svg" alt="heart"/></div>
            </div>
            
           
            <div className="flex items-center justify-center pl-2">
              <div><a href="/Cart"><img src="/cart.svg" alt="cart" /></a></div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
