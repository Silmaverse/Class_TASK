import React from 'react'
import burger  from "../assets/images/burger_big.png"
import rice from "../assets/images/rice.png"
import salad from "../assets/images/salad.png"
import chicken from "../assets/images/chicken_big.png"

const Restarurant = () => {
  return (
    <>
     <section className='mt-12'>

        <div className="container px-5 lg:px-10">
            <div className="text flex justify-between">
                <h2 className='text-[24px] lg:text-[36px] font-popins font-light'>Restaurants</h2>
                <button className='text-sm lg:text-base px-6 py-2 lg:py-3.5 font-martel font-bold text-nav bg-[#F2F4FA]'>show all</button>
            </div>

            <div className="food_images flex-wrap flex justify-between items-center mt-12">
                <div className="burger w-[296px]">
                    <img src={burger} alt='err' />
                </div>
                <div className="rice w-[296px]">
                    <img src={rice} alt='err' />
                </div>
                <div className="salad w-[296px]">
                    <img src={salad} alt='err' />
                </div>
                <div className="chicken w-[296px]">
                    <img src={chicken} alt='err' />
                </div>
            </div>

        </div>
     </section>

    </>
  )
}

export default Restarurant