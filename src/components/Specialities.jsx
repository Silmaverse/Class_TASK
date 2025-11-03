import React from 'react'
import bagel from "../assets/images/Group.png"
import burger from "../assets/images/burger.png"
import chicken from "../assets/images/chicken.png"
import fish from "../assets/images/fish.png"
import fishnchips from "../assets/images/fishnchips.png"
import vegan from "../assets/images/vegan.png"
import pizza from "../assets/images/pizza.png"
import pasta from "../assets/images/raviolli.png"




const Specialities = () => {
  return (
    <>
    <section className='mt-[72px]'>
        <div className="container px-5 lg:px-10">
            <div className="text flex justify-between items-center">
                <h2 className='text-[24px] lg:text-[36px] font-popins font-light text-secondary'>Specialities</h2>
                <button className='text-[14px] lg:text-base px-6 py-3.5 font-martel font-bold text-nav bg-[#F2F4FA]'>show all</button>
            </div>

            <div className="gallery mt-12 flex-wrap gap-5 flex justify-between lg:gap-0 items-center ">

                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={bagel}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Bagel</p>
                </div>
                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={burger}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Burger</p>
                </div>
                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={chicken}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Chicken</p>
                </div>
                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={fish}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Fish</p>
                </div>
                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full  lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={fishnchips}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Fish’Chips</p>
                </div>



                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={vegan}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Salads</p>
                </div>



                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={pizza}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Pizza</p>
                </div>


                <div className="single_card pt-4 pb-6 flex flex-col items-center justify-center w-full lg:w-[136px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                    <div className="image">
                       <img src={pasta}  alt='error'/>
                    </div>
                    <p className='text-base font-martel font-light mt-4'>Pasta</p>
                </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default Specialities