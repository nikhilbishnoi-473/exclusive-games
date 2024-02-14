import React from 'react'
import logoimage from '../images/logoimage.png'
import { Btn34, Facebook, Footer2, Footersvg, Instagram, Insvg, Svg12 } from './Icon'
function Footer() {
    return (
        <footer className='bg-black relative  overflow-hidden'>
            <div className='container z-20 relative mx-auto max-w-[1140px] px-[12px]'>
                <div className='flex flex-wrap mx-[-12px] flex-row  '>
                    <div className='w-full lg:w-[33.33%] px-[12px] pt-[64px] '>
                        <img src={logoimage} alt="logoimage" />
                        <p className='max-w-[369px] font-Inter pt-[16px] font-[500] text-[16px] leading-[25.6px] text-[#CCCCCC]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para de azar</p>
                        <div className='flex gap-[12px] pt-[24px]'>
                            <div className='w-[32px] z-20 cursor-pointer duration-300 h-[32px] hover:animate-bounce rounded-[16px] bg-[#292A2A] flex justify-center items-center'>
                                <span><Instagram /></span>

                            </div>
                            <div className='w-[32px] z-20 cursor-pointer duration-300 h-[32px] hover:animate-bounce rounded-[16px] bg-[#292A2A] flex justify-center items-center'>
                                <span><Facebook /></span>

                            </div>
                            <div className='w-[32px] z-20 cursor-pointer duration-300 hover:animate-bounce h-[32px] rounded-[16px] bg-[#292A2A] flex justify-center items-center'>
                                <span><Insvg /></span>


                            </div>
                        </div>
                    </div>
                    <div className='md:w-[33.33%]  lg:w-[16.66%] max-md:w-[50%] px-[12px]  max-sm:w-full max-md:pt-[30px] pt-[74px] max-md:pb-0 pb-[40px] flex lg:justify-end'>
                        <ul>
                            <li className='font-Inter font-[700] cursor-pointer text-[16px] leading-[25.6px] text-white  relative after:absolute after:h-[1px] after:w-0 inline-block w-full after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Atención al cliente</li>

                            <li className='font-Inter font-[500] cursor-pointer text-[16px] hover:text-white text-[#CCCCCC] pt-[16px]  hover:animate-pulse '>Hogar</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC]  pt-[12px]   hover:animate-pulse '>Misión</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC] pt-[12px]    hover:animate-pulse'>Tragamonedas</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC] pt-[12px]   hover:animate-pulse'>Por qué elegirnos</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC] pt-[12px]   hover:animate-pulse  '>Ofertas</li>
                        </ul>
                    </div>
                    <div className='md:w-[33.33%]  lg:w-[25%] max-md:w-[50%] px-[12px] max-sm:w-full max-md:pt-[30px] pt-[74px] flex lg:justify-center'>
                        <ul className='flex flex-col'>
                            <li className='font-Inter font-[700] cursor-pointer text-[16px] leading-[25.6px] text-white   hover:animate-pulse '>Atención al cliente</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC] pt-[16px]   hover:animate-pulse'>¿Necesitas ayuda?</li>
                            <li className='font-Inter font-[500] cursor-pointer text-[16px] text-[#CCCCCC]  pt-[12px]  hover:animate-pulse  '>política de privacidad</li>
                            <li className='font-Inter text-nowrap cursor-pointer font-[500] text-[16px] text-[#CCCCCC] pt-[12px]   hover:animate-pulse '>Términos de servicios</li>
                        </ul>
                    </div>
                    <div className='md:w-[33.33%]  lg:w-[25%] max-md:w-[50%] px-[12px] max-sm:w-full max-md:pt-[30px]  pt-[74px] flex lg:justify-end'>
                        <div className='  '>
                            <ul className=''>
                                <li className='font-Inter cursor-pointer font-[700] text-[16px] leading-[25.6px] text-white    hover:animate-pulse'>Ponerse en contacto</li>
                                <div className='flex pt-[16px] cursor-pointer gap-[8px] items-center'>
                                    <span className='hover:animate-bounce'><Footersvg /></span>

                                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target='blank'>
                                    <li className='font-Inter cursor-pointer font-[500] text-[16px] text-[#CCCCCC]    hover:animate-pulse'>juegosexclusivos@gmail.com</li>
                                    </a>
                                </div>
                                <div className='flex pt-[16px] cursor-pointer gap-[8px] items-center'>
                                    <span className='hover:animate-bounce'><Footer2 /></span>


                                   <a href="tel:+4733378901">
                                   <li className='font-Inter font-[500] text-[16px] text-[#CCCCCC]    hover:animate-pulse'>(101)342-7873</li>
                                   </a>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1440px] border-[1px] opacity-[10%] bg-[#191919]'></div>
            <div className='flex  justify-center pt-[20px] pb-[20px] '>
                <p className='font-Inter font-[500] text-[16px] text-[#808080] cursor-pointer max-w-[459px] '>© Juegos exclusivos - Todos los derechos reservados 2023</p>
            </div>
            <div className='absolute top-[32%] z-0 left-[0%]'>
               <span><Svg12/></span>

            </div>
            <div className='absolute top-[-2%] z-0 left-[83%]'>
                <span><Btn34/></span>
            </div>
        </footer>
    )
}

export default Footer