import React from 'react'
import plate from "../assets/images/photo.png"

export const Banner = () => {
  return (
    <>
    <section id='banner'>
        <div className="container pt-[25px] px-5 lg:px-10">
            <div className="banner_row flex flex-wrap justify-between items-center">

                {/* left part */}
                <div className="text ">
                    <h2 className='w-[280px] lg:w-[534px] text-[32px] lg:text-[58px] font-light font-popins text-secondary'> 
                     <span className='block'>Your Food court</span> at home</h2>

                    <div className="buttons flex gap-12 items-center mt-[30px] lg:mt-[88px]">
                        <button className='text-sm lg:text-base font-bold font-martel text-secondary border border-brand
                         py-2.5 lg:py-[19px] px-6'> Delivery 
                         <span className='text-[10px] lg:text-[12px] block  font-normal '> Order in</span> 
                          </button>


                          <button className='text-sm lg:text-base font-bold font-martel text-secondary border
                           border-brand py-2.5 lg:py-[19px] px-6'> Takeout 
                         <span className='text-[10px] lg:text-[12px] block  font-normal '> Grab and go</span> 
                          </button>

                    </div>

                </div>

                {/* right part */}
                <div className="images">
                    <div className="big-image mt-8 lg:mt-0">
                        <img src={plate} alt='err'/>
                    </div>

                </div>


            </div>
        </div>

    </section>
    </>
  )
}
