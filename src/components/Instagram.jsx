import React from 'react'
import insta1 from "../assets/images/insta1.png"
import insta2 from "../assets/images/insta2.png"
import insta3 from "../assets/images/insta3.png"
import insta4 from "../assets/images/insta4.png"

const Instagram = () => {
  return (
    <>
     <section id='instagram' className='mt-[72px]'>
        <div className="container px-5 lg:px-10">
            <div className="insta_row">
                <h2 className=' text-[24px] lg:text-[36px] font-popins font-light text-[#313030]'>
                    #YellowKitchens <span className='text-nav'> in instagram</span></h2>
            </div>
            <div className="image_row mt-[21px] flex-wrap gap-5 lg:gap-0 flex justify-between items-center">
                <div className="fimage w-[296px]">
                    <img src={insta1} alt='err' />
                </div>
                <div className="fimage w-[296px]">
                    <img src={insta2} alt='err' />
                </div>
                <div className="fimage w-[296px]">
                    <img src={insta3} alt='err' />
                </div>
                <div className="fimage w-[296px]">
                    <img src={insta4} alt='err' />
                </div>
            </div>

        </div>
     </section>
    </>
  )
}

export default Instagram