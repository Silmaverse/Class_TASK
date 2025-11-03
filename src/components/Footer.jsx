import React from "react";
import logo from "../assets/images/Logo.jpg";
import appimage1 from "../assets/images/app-img1-1.png";
import appimage2 from "../assets/images/app-img2-2.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <>
      <footer className="bg-secondary py-12 mt-18">
        <div className="container px-5 lg:px-10">
          <div className="footer_row flex-wrap flex justify-between">
          <div className="left_part">
            <div className="log w-[150px]">
              <img src={logo} className="w-full" alt="error" />
            </div>

            <div className="download mt-[97px] flex gap-[9px]">
              <div className="image1 w-[80px]">
                <img src={appimage1} className="w-full" alt="error" />
              </div>
              <div className="image2 w-[80px]">
                <img src={appimage2} className="w-full" alt="error" />
              </div>
            </div>
          </div>
          <div className="right_part mt-10 lg:mt-0 flex-wrap flex items-center gap-[83px]">
            <div className="first_col">
              <h2 className="font-popins font-semibold text-base lg:text-[24px] text-white">
                About us
              </h2>
              <ul className="mt-12 flex flex-col gap-4">
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Concept
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Franchise
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Business
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Restaurant signup
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  For Investors
                </li>
              </ul>
            </div>

            <div className="second_col ">
              <h2 className="font-popins font-semibold text-base lg:text-[24px] text-white">
                Get help
              </h2>
              <ul className="mt-12 flex flex-col gap-4">
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Read FAQs
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Restaurants
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Specialities
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Sign up to deliver
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5] flex hap-2 items-center">
                  English <IoIosArrowDown />
                </li>
              </ul>
            </div>

            <div className="thrid_col">
              <h2 className="font-popins font-semibold text-base lg:text-[24px] text-white">
                Contact us
              </h2>
              <ul className="mt-12 flex flex-col gap-4">
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Yellow kitchen Paris 11
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  69 avenue de la Republique 75011 Paris
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  0800 111 126
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5]">
                  Sign up to deliver
                </li>
                <li className="text-sm lg:text-base font-martel font-bold text-[#D4D7E5] flex hap-2 items-center">
                  contact@yellowkitchens.com
                </li>
              </ul>
            </div>
          </div>
           </div>

           <div className="btm_row flex-wrap flex justify-between mt-[97px]">
            <div className="icons flex gap-6 items-center">
              <AiOutlineInstagram  className="text-base lg:text-2xl text-[#D4D7E5]"/>
                <FaTwitter  className="text-base lg:text-2xl text-[#D4D7E5]"/>

              <BsFacebook  className="text-base lg:text-2xl text-[#D4D7E5]"/>

            </div>
             <ul className="mt-5 lg:mt-0 flex gap-3 items-center lg:gap-15">
              <li className="text-[10px] lg:text-[12px] font-martel font-extrabold text-white">Privacy Policy</li>
              <li className="text-[10px] lg:text-[12px] font-martel font-extrabold text-white">Terms</li>
              <li className="text-[10px] lg:text-[12px] font-martel font-extrabold text-white">© 2020 Yellow kitchen</li>
             </ul>

           </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
