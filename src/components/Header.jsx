import React, { useState } from 'react'
import { Btn1, Svg13 } from './Icon'
import game from '../images/game.png'

const Header = () => {
  const [data, setdata] = useState(false);
  function show() {
    setdata(!data)
    if (data === false) {
      document.body.classList.add("navhide")
    }
    else {
      document.body.classList.remove("navhide")
    }
  }
  return (
    <header className='bg_image  bg-[#00141B] overflow-hidden'>


      <div className='bg-[#FFFFFF1A]'>
        <div class="flex py-[24px]       justify-between text-center items-center max-w-[1140px] mx-auto ">
          <div class="flex md:pr-[48px]  cursor-pointer gap-[16px] items-center">
            <img src={game} alt="game" />


          </div>
          <div
            className={`${data ? "right-0" : "right-[-100%] "} flex   items-center  justify-between z-[50]   max-lg:fixed  max-lg:bg-[#00141B] max-lg:w-full max-lg:h-full lg:gap-[90px] xl:gap-[161px]  max-lg:top-0 gap-[30px] max-lg:flex-col max-lg:justify-center duration-500`}>

            <ul className='flex items-center max-lg:flex-col gap-[28px] max-lg:gap-[20px]'>
              <a href="#hogar">
                <li className='font-Inter hover:text-white cursor-pointer text-nowrap font-[500] text-[16px] text-[#A5B0B4]'>Hogar</li>
              </a>
              <a href="#mision">  <li className='font-Inter hover:text-white cursor-pointer text-nowrap font-[500] text-[16px] text-[#A5B0B4]'>Misión</li></a>
              <a href="#trag">
                <li className='font-Inter hover:text-white cursor-pointer text-nowrap font-[500] text-[16px] text-[#A5B0B4]'>Tragamonedas</li>
              </a>
              <a href="#por">   <li className='font-Inter hover:text-white cursor-pointer text-nowrap font-[500] text-[16px] text-[#A5B0B4]'>Por qué elegirnos</li></a>
              <a href="#ofert"> <li className='font-Inter hover:text-white cursor-pointer text-nowrap font-[500] text-[16px] text-[#A5B0B4]'>Ofertas</li></a>
            </ul>
            <div className='relative z-40'>
              <div className=' cursor-pointer'>
                <button className='hover: pt-[13px] pb-[13px] pl-[46px] rounded-[41px] bg-transparent pr-[46px] border-white border-[1px]  hover:bg-gradient-to-l hover:from-[#51C8EF] hover:to-[#7AF57A] duration-500  hover:shadow-8xl  text-white'>Acceso</button>
              </div>
              <div className='absolute -z-10 top-[60%] left-[-3%]'>
                <span><Svg13 /></span>

              </div>
            </div>


          </div>

          <div onClick={show} class="lg:hidden max-lg:pr-[20px] black z-50 mt-[4px] ">
            <span className='bar h-[3px] block bg-white w-[25px] duration-500'></span>
            <span className='bar  h-[3px] block  bg-white w-[25px] my-[6px]'></span>
            <span className=' bar h-[3px] block  bg-white w-[25px] my-[6px] duration-500'></span>
          </div>
        </div>
      </div>

      <div className='container mx-auto max-w-[1140px] px-[12px]'>

        <div className='flex justify-center  flex-col items-center  '>
          <h1 className='font-[400] text-center text-[72px] text-white max-w-[505px] max-md:text-[42px] max-md:pt-[75px] font-Anton leading-[86px] pt-[140px]'>
            Exclusive Games. Pasión por ganar
          </h1>
          <p className='font-Inter font-[500] text-[16px] pt-[10px] leading-[25.6px] max-w-[727px] text-[#CCD0D3] text-center'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>

          <div className='relative max-md:mb-[80px] mt-[40px] mb-[222px]'>
            <button
              className='overflow-hidden hover:shadow-8xl font-[700] text-[16px]  pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] font-Inter  rounded-[41px]  text-black hover:text-white border-none text-xl  cursor-pointer relative z-10 group'
            >
              Empezar
              <span
                className='absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right'
              ></span>
              <span
                class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
              ></span>
              <span
                className='absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right'
              ></span>
              <span
                className='group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10'
              >Empezar</span
              >
            </button>
            <div className='absolute top-[60%] left-[-4%]'>
              <span><Btn1 /></span>

            </div>

          </div>


        </div>

      </div>

    </header>
  )
}

export default Header







