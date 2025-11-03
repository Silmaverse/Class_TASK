import React from 'react'
import fork from "../assets/images/Page 1.png"
import deli from "../assets/images/delivery.png"
import paris from "../assets/images/paris.png"

const Services = () => {
  return (
    <>
    <section className='mt-10 lg:mt-0'>
        <div className="container px-5 lg:px-10">
            <div className="w-full lg:w-[872px] py-6 services shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white">

                <div className="all_services flex-wrap flex justify-center gap-12 items-center">

                    <div className="fork flex gap-4 items-center">
                        <div className="fork_image w-10 lg:w-12">
                            <img src={fork} className='w-full object-contain' alt='err' />

                        </div>
                        <h2 className='w-40 lg:w-[182px]
                        text-[14px] lg:text-base font-light font-martel text-secondary' >delivery in all paris in less than 30 minutes</h2>
                    </div>

                    <div className="delivery flex gap-4 items-center">
                        <div className="delivery_image w-10 lg:w-12">
                            <img src={deli} className='w-full object-contain' alt='err' />

                        </div>
                        <h2 className='w-40 lg:w-[124px]
                        text-[14px] lg:text-base font-light font-martel text-secondary' >Free delivery from 29 euros</h2>
                    </div>

                    <div className="delivery flex gap-4 items-center">
                        <div className="delivery_image w-10 lg:w-12">
                            <img src={paris} className='w-full object-contain' alt='err' />

                        </div>
                        <h2 className='w-40 lg:w-[124px]
                        text-[14px] lg:text-base font-light font-martel text-secondary' >Only fresh and French products</h2>
                    </div>
                </div>

            </div>

        </div>
    </section>
    </>
  )
}

export default Services