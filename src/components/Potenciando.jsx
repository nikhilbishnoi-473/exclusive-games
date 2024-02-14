import React from 'react'
import jackpot from '../images/Jack.png'
import elips from '../images/elips.png'
import elips2 from '../images/elips2.png'
import ezugi from '../images/ezugi.png'
import betting from '../images/betting.png'
import image8 from '../images/webp/image8.webp'
import elips3 from '../images/elips3.png'
import { Btn25, Btn26, Btn27, Btn28, Btn29, Btn30, Btn31, Svg10, Svg8, Svg9 } from './Icon'
function Potenciando() {
    return (
        <section className='bg_image_2 bg-[#00141B] mt-[-2px]   overflow-x-clip relative'>
            <div className='container z-20  mx-auto max-w-[1140px] px-[12px]'>
                <div className='flex flex-wrap  mx-[-12px] flex-row'>
                    <div className='w-full lg:w-[50%]  max-lg:justify-center flex px-[12px] pt-[90px]'>
                        <img className='z-30' src={jackpot} alt="jackpot" />
                    </div>
                    <div className='w-full lg:w-[50%] px-[12px] pt-[90px] max-lg:justify-center flex lg:justify-end'>
                        <div className='flex flex-col'>
                            <h2 className='max-w-[543px] max-md:text-[37px] text-[#FFFFFF]  font-Anton font-[400] text-[48px]'>
                                Potenciando sus elecciones
                            </h2>
                            <p className='max-w-[343px] font-Inter pt-[16px] font-[500] text-[16px] text-[#CDD0D1]'>Con Exclusive Game lo mejor está de tu lado.</p>
                            <div className='flex gap-[8px] cursor-pointer pt-[24px]'>
                               <span><Btn25/></span>
                                <h4 className='font-Inter font-[500] text-[16px] max-w-[144px] text-[#B3B9BB]'>Versión PC y móvil</h4>
                            </div>
                            <div className='flex gap-[8px] cursor-pointer pt-[12px]'>
                               <span><Btn26/></span>
                                <h4 className='font-Inter font-[500] text-[16px] max-w-[142px] text-nowrap text-[#B3B9BB]'>Tecnología HTML5</h4>
                            </div>
                            <div className='flex gap-[8px] cursor-pointer pt-[12px]'>
                               <span><Btn27/></span>
                                <h4 className='font-Inter font-[500] text-[16px] text-[#B3B9BB] max-w-[371px]'>Control de RTP (controlás qué porcentaje pagar)</h4>
                            </div>
                            <div className='flex gap-[8px] cursor-pointer pt-[12px]'>
                                <span><Btn28/></span>
                                <h4 className='font-Inter font-[500] text-[16px] text-[#B3B9BB] max-w-[380px]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</h4>
                            </div>
                            <div className='flex gap-[8px] cursor-pointer pt-[12px]'>
                                <span><Btn29/></span>
                                <h4 className='font-Inter font-[500] text-[16px] text-[#B3B9BB] max-w-[380px]'>Aplicación para android y windows de regalo.</h4>
                            </div>
                            <h3 className='font-Inter font-[500] text-[16px] text-[#CDD0D1] max-w-[515px] pt-[24px]'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</h3>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center relative max-md:pt-[50px] pt-[150px]'>
                    <div className='border-[0.5px] z-20 max-md:pt-[40px] max-md:pb-[40px] max-md:pl-[70px] max-md:pr-[70px]  pt-[96px] pb-[96px] pl-[261px] pr-[262px] max-w-[1043px] rounded-[16px] border-[#FFFFFF] bg-transparent'>
                        <h3 className='font-Anton font-[400] text-[48px] leading-[57.6px]   text-[#FFFFFF] max-w-[520px] text-center  max-lg:text-[35px] max-md:text-[23px]'>lanza tu propia plataforma en sólo 2 semanas</h3>
                    </div>
                    <div className='absolute z-10 top-[33%]  left-[3%]' >
                        <img className=' bg-opacity-[30%]' src={elips} alt="elips" />

                    </div>
                    <div className='absolute z-10 top-[33%] left-[58%]'>   
                        <img className='bg-opacity-[30%]' src={elips2} alt="elips2" />
                    </div>
                </div>
                <div className='flex justify-center max-md:pt-[50px] pt-[150px]'>
                    <h2 className='font-Anton font-[400] text-[48px] leading-[57.5px] max-w-[291px] text-[#FFFFFF]'>Juegos en vivo</h2>
                </div>

                <div className='flex    flex-wrap  mx-[-12px] flex-row z-30  max-lg:justify-center pt-[60px] pb-[100px]'>
                    <div className='w-full sm:w-[50%] md:w-[33.33%] max-sm:pt-[20px] px-[12px] z-20'>
                        <div className='relative cursor-pointer overflow-hidden group'>
                            <img className='w-full' src={ezugi} alt="ezugi" />
                            <div className='w-full h-full   duration-500 justify-center flex    rounded-[8px] group-hover:left-[0%] ease-in-out left-[-100%] absolute  top-0  bg-black/70 '>
                                <div className='flex justify-center items-center text-center'>
                                    <div className='relative   '>
                                        <div>
                                            <button className='font-Inter   font-[700]   text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px]   animate-pulse overflow-hidden bg-gray-800  shadow-2xl transition-all   hover:bg-transparent hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] '>
                                                <span className=''>Reproducir ahora</span>
                                            </button>

                                        </div>
                                        <div className='absolute top-[53%] left-[-3%]'>
                                         <span><Svg10/></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full cursor-pointer sm:w-[50%] md:w-[33.33%] max-sm:pt-[20px] px-[12px] z-20'>     <div className='relative overflow-hidden group'>
                        <img className='w-full' src={betting} alt="betting" />
                        <div className='w-full h-full  duration-500 justify-center flex    rounded-[8px] group-hover:left-[0%] ease-in-out left-[-100%] absolute  top-0  bg-black/70 '>
                            <div className='flex justify-center items-center text-center'>
                                <div className='relative   '>
                                    <div>
                                        <button className='font-Inter    font-[700]   text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px]   animate-pulse overflow-hidden bg-gray-800  shadow-2xl transition-all   hover:bg-transparent hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] '>
                                            <span className=''>Reproducir ahora</span>
                                        </button>
                                    </div>
                                    <div className='absolute top-[53%] left-[-3%]'>
 <span><Svg9/></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='w-full cursor-pointer sm:w-[50%] md:w-[33.33%] max-md:pt-[20px] px-[12px] z-40'>  <div className='relative overflow-hidden group'>
                        <img className='w-full' src={image8} alt="image8" />
                        <div className='w-full h-full  duration-500 justify-center flex    rounded-[8px] group-hover:left-[0%] ease-in-out left-[-100%] absolute  top-0  bg-black/70 '>
                            <div className='flex justify-center items-center text-center'>
                                <div className='relative   '>
                                    <div>
                                        <button className='font-Inter    font-[700]   text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px]   animate-pulse overflow-hidden bg-gray-800  shadow-2xl transition-all   hover:bg-transparent hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] '>
                                            <span className=''>Reproducir ahora</span>
                                        </button>
                                    </div>
                                    <div className='absolute top-[53%] left-[-3%]'>
                                       <span><Svg8/></span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='absolute top-[36%] z-0 left-[63%]'>
                    <img src={elips3} alt="elips3" />


                </div>

            </div>
            <div className='absolute top-[-34%] max-md:hidden left-[0%]'>
 <span><Btn30/></span>

            </div>
            <div className='absolute top-[17%]  left-[39%] '>
               <span><Btn31/></span>

            </div>
        </section>
    )
}

export default Potenciando