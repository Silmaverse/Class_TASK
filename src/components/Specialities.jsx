import React from 'react'
import bagel from "../assets/images/Group.png"

const Specialities = () => {
  return (
    <>
    <section className='mt-[72px]'>
        <div className="container">
            <div className="text flex justify-between items-center">
                <h2 className='text-[36px] font-popins font-light text-secondary'>Specialities</h2>
                <button className='text-base px-[24px] py-[14px] font-martel font-bold text-nav bg-[#F2F4FA]'>show all</button>
            </div>
            <div className="gallery mt-[48px] flex justify-between items-center ">

                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>
                <div className="single_card pt-[16px] pb-[24px] flex flex-col items-center justify-center  w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-[16px]'>Bagel</p>
                </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default Specialities