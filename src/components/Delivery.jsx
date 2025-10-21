import React from 'react'
import { LuMapPin } from "react-icons/lu";


const Delivery = () => {
  return (
    <>
    <section className='mt-[72px] bg-[#F2F4FA]'>
        <div className="container ">
            <div className="delivery_address  py-[80px] flex justify-between items-center">
                <div className="text">
                    <h2 className='text-[36px] font-popins font-light text-secondary'>Your nearest restaurants</h2>
                    <p className='w-[424px] text-base font-martel 
                    font-light text-secondary mt-[24px]'><span  className='block'>Each kitchen works with its own delivery area to</span> deliver food to you as soon as possible</p>

                </div>
                <div className=" input_address w-[336px] h-[72px] flex gap-2 items-center">

                <div className="  bg-white py-[24px] pl-4 flex gap-2 items-center ">
                    <LuMapPin  className='text-[24px] text-[#D4D7E5]'/>

                    <input type='text' placeholder='Enter delivery address' 
                    className='border-none outline-none text-base font-martel font-light text-nav'/>
                  


                </div>
                <button className='text-base font-martel font-bold bg-brand text-[#B79C10] px-[24px] py-[26px]'>send</button>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Delivery