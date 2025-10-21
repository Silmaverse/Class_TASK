import React from 'react'
import logo from "../assets/images/Logo.jpg"
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";





const Navbar = () => {
  return (
    <>
     <nav id='navbar' className='border-b border-b-[#D4D7E5]'>
        <div className="container">
            <div id='food_row' className="py-6 flex justify-between">
                <div className="logo">
                    <img src={logo} alt='error' />
                </div>

                <div className="menu_item flex gap-[48px]  items-center">
                    <div className="user_profile flex gap-[2px] items-start">
                       <FaRegUser className='text-2xl text-nav' />
                       <h2 className='text-base font-bold font-martel text-nav'>Log in</h2>

                    </div>
                    <div className="cart flex gap-[2px] items-center">
                        <HiOutlineShoppingCart className='text-2xl text-nav' />
                         <h2 className='text-base font-bold font-martel text-nav'>0</h2>

                    </div>
                    <div className="bars bg-white rounded-[25px]">
                        <HiBars3  className='text-5xl text-nav'/>

                    </div>

                </div>



            </div>
        </div>

     </nav>

    </>
  )
}

export default Navbar