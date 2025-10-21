import React from 'react'
import fork from "../assets/images/Page 1.png"
import deli from "../assets/images/delivery.png"
import paris from "../assets/images/paris.png"

const Services = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="w-[872px] py-[24px] services shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white">

                <div className="all_services  flex justify-center gap-[48px] items-center">

                    <div className="fork flex gap-4 items-center">
                        <div className="fork_image w-[48px]">
                            <img src={fork} alt='err' />

                        </div>
                        <h2 className=' w-[182px]
                        text-base font-light font-martel text-secondary' >delivery in all paris in less than 30 minutes</h2>
                    </div>

                    <div className="delivery flex gap-4 items-center">
                        <div className="delivery_image w-[48px]">
                            <img src={deli} alt='err' />

                        </div>
                        <h2 className=' w-[124px]
                        text-base font-light font-martel text-secondary' >Free delivery from 29 euros</h2>
                    </div>

                    <div className="delivery flex gap-4 items-center">
                        <div className="delivery_image w-[48px]">
                            <img src={paris} alt='err' />

                        </div>
                        <h2 className=' w-[124px]
                        text-base font-light font-martel text-secondary' >Only fresh and French products</h2>
                    </div>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Services