import React from 'react'
import bg from "../assets/images/total.png"

const Totalcount = () => {
  return (
    <>
      <section id='totalcount'className='mt-18  h-[800px] lg:h-[284px]' style={{backgroundImage:`url(${bg})`,backgroundPosition:'center' ,
      backgroundSize:"cover" ,backgroundRepeat:'no-repeat'}} >

        <div className="container px-5 lg:px-10">
            <div className="row relative">
             
                <div className="overlayimages absolute top-[79px] left-1/2 -translate-x-1/2 flex-wrap flex gap-[53px] items-center">
                    <div className="kitchencount w-[126px] h-[126px] rounded-full bg-brand relative " >
                        <div className="kitchencount w-[126px] h-[126px] rounded-full border
                         border-[#B79C10] absolute -top-[23px] flex justify-center items-center" >
                               <h2 className="font-opensans font-bold text-[58px]">1</h2>
                        </div>
                          
                      <div className=" absolute top-[120px] left-1/2 -translate-x-1/2">
                        <h2 className='text-center'>kitchen</h2>
                      </div>
                      
                    </div>

                    <div className="specialties w-[126px] h-[126px] rounded-full bg-brand relative " >
                        <div className="kitchencount w-[126px] h-[126px] rounded-full border border-[#B79C10]
                         absolute -top-[23px] flex justify-center items-center" >
                                <h2 className="font-opensans font-bold text-[58px]">11</h2>
                          </div>

                           <div className=" absolute top-[120px] left-1/2 -translate-x-1/2">
                        <h2 className='text-center'>specialties</h2>
                      </div>

                    </div>

                    <div className="restaurants w-[126px] h-[126px] rounded-full bg-brand relative" >
                        <div className="kitchencount w-[126px] h-[126px] rounded-full border border-[#B79C10]
                         absolute -top-[23px] flex justify-center items-center" >
                                <h2 className="font-opensans font-bold text-[58px]">11</h2>
                          </div>

                           <div className=" absolute top-[120px] left-1/2 -translate-x-1/2">
                        <h2 className='text-center'>restaurants</h2>
                      </div>

                    </div>


                    <div className="transport costs w-[126px] h-[126px] rounded-full bg-brand relative" >
                        <div className="kitchencount w-[126px] h-[126px] rounded-full border border-[#B79C10]
                         absolute -top-[23px] flex justify-center items-center" >
                                <h2 className="font-opensans font-bold text-[58px]">1</h2>
                          </div>

                           <div className="w-[225px] absolute top-[120px] left-1/2 -translate-x-1/2">
                        <h2 className='text-center'>transport costs</h2>
                      </div>

                    </div>

                </div>
            </div>

        </div>

      </section>
    </>
  )
}

export default Totalcount