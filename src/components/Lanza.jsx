import React from 'react'
import bg3 from '../images/bg3.png'
import { Btn2 } from './Icon'

function Lanza() {
    return (
        <section className='bg-[#00141B]  relative '>
            <div className='container mx-auto max-w-[1140px] z-20 relative pt-[150px] max-md:pt-[72px] max-md:pb-[72px] pb-[150px]  px-[12px] mt-[-2px]'>
                <div className='max-w-[1140px]   h-[341px] bg_image_5 rounded-[16px] border-[0.5px] flex flex-col  justify-center text-center items-center '>

                    <h1 className='max-w-[593px]  font-Anton font-[400] text-[32px] leading-[41.6px] text-white'>Lanza tu propia plataforma en sólo 2 semanas</h1>
                    <div className='relative  mt-[40px]'>
                        <div>
                            <button className='font-Inter animate-pulse   font-[700]  text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px] relative flex  items-center justify-center overflow-hidden bg-[#5FD7C7]    transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#5FD7C7] shadow-8xl hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                                <span className='relative z-10'>Leer más</span>
                            </button>
                        </div>
                        <div className='absolute top-[57%] left-[-2%]'>
                          <span><Btn2/></span>

                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute left-[11%] top-[24%] '>
                <img src={bg3} alt="bg3" />


            </div>
        </section>
    )
}

export default Lanza