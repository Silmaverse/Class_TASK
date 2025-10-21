import React from 'react'
import burger  from "../assets/images/burger.png"
import rice from "../assets/images/rice.png"
import salad from "../assets/images/salad.png"
import chicken from "../assets/images/chicken.png"

const Restarurant = () => {
  return (
    <>
     <section className='mt-[48px]'>

        <div className="container">
            <div className="text flex justify-between">
                <h2 className='text-[36px] font-popins font-light'>Restaurants</h2>
                <button className='text-base px-[24px] py-[14px] font-martel font-bold text-nav bg-[#F2F4FA]'>show all</button>
            </div>

            <div className="food_images flex justify-between items-center mt-[48px]">
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