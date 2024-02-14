import React from 'react'
import image9 from '../images/image9.png'
import { Elips3 } from './Icon'

function Aprende() {
  return (
    <section className='lg:bg-[#03141A]   bg_image_3  mt-[-2px] ' id='mision'>
      <div className='container z-20 relative mx-auto max-w-[1140px] px-[12px]'>
        <div className='flex flex-wrap mx-[-12px] flex-row pt-[322px] max-lg:pt-[0px] max-lg:pb-[265px] max-md:pb-[80px] pb-[324px]'>
          <div className='w-full lg:w-[50%] max-lg:flex max-lg:justify-center max-lg:items-center flex-col px-[12px] pt-[79.5px]'>
            <h2 className='font-Anton font-[400] text-[48px] text-[#00141B] leading-[57.6px] max-md:text-[41px]'>Por qué elegirnos</h2>
            <p className='max-w-[526px] font-inter font-[500] text-[16px] text-[#4D5A60] pt-[16px] '>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
            <div className='relative  mt-[24px]'>
              <div>
                <button className='font-Inter mt-[40px]   font-[700] text-nowrap text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px] relative flex  items-center justify-center overflow-hidden bg-gray-800  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#980259] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                  <span className='relative z-20'>Aprende más</span>
                </button>
              </div>
              <div className='absolute max-md:hidden top-[53%] left-[-1%]'>
                <span><Elips3/></span>

              </div>
            </div>
          </div>
          <div className='w-full lg:w-[50%] max-md:hidden flex max-lg:justify-center max-lg:pt-[20px] px-[12px]'>
            <img src={image9} alt="image9" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Aprende