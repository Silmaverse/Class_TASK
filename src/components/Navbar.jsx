import React from 'react'
import logo from "../assets/images/Logo.jpg"
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";





const Navbar = () => {
  return (
    <>
     <nav id='navbar' className='border-b border-b-[#D4D7E5]'>
        <div className="container px-5 lg:px-10">
            <div id='food_row' className="py-6 flex  justify-between">
                <div className="logo w-[100px]">
                    <img src={logo} className='w-full object-contain' alt='error' />
                </div>

                <div className="menu_item flex gap-4 lg:gap-12  items-center">
                    <div className="user_profile flex gap-0.5 items-start">
                       <FaRegUser className='text-base lg:text-2xl text-nav' />
                       <h2 className='text-[12px] lg:text-base font-bold font-martel text-nav'>Log in</h2>

                    </div>
                    <div className="cart flex gap-0.5 items-center">
                        <HiOutlineShoppingCart className='text-xl lg:text-2xl text-nav' />
                         <h2 className='text-[12px] lg:text-base font-bold font-martel text-nav'>0</h2>

                    </div>
                    <div className="bars bg-white rounded-[25px]">
                        <HiBars3  className='text-xl lg:text-5xl text-nav'/>

                    </div>

                </div>



            </div>
        </div>

     </nav>

    </>
  )
}

export default Navbar