import React from 'react'
import { LuMapPin } from "react-icons/lu";


const Delivery = () => {
  return (
    <>
    <section className='mt-[72px] bg-[#F2F4FA]'>
        <div className="container px-5 lg:px-10 ">
            <div className="delivery_address  py-20 flex-wrap flex justify-between items-center">
                <div className="text">
                    <h2 className='text-[30px] lg:text-[36px] font-popins font-light text-secondary'>Your nearest restaurants</h2>
                    <p className='w-full lg:w-[424px] text-base font-martel 
                    font-light text-secondary mt-6 '><span  className='lg:block'>Each kitchen works with its own delivery area to</span> deliver food to you as soon as possible</p>

                </div>
                <div className=" input_address mt-10 w-full lg:w-[336px] h-[72px] flex-wrap flex gap-2 items-center">

                <div className="  bg-white py-3 lg:py-6 pl-4 flex gap-2 items-center ">
                    <LuMapPin  className='text-[24px] text-[#D4D7E5]'/>

                    <input type='text' placeholder='Enter delivery address' 
                    className='border-none outline-none text-base font-martel font-light text-nav'/>
                  


                </div>
                <button className='lg:text-base font-martel font-bold bg-brand text-[#B79C10] px-26 lg:px-6 py-3 lg:py-[26px]'>send</button>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Delivery