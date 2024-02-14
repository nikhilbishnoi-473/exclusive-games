import React from 'react'
import rectangle from '../images/Rectangle12.png'
import rect12 from '../images/rect12.png'
import { Elips1, Elips2, Svg } from './Icon'
function Aviator() {
  return (

    <section className='bg-[#00141B] mt-[-2px] relative overflow-x-clip'>
      <div className='container mx-auto max-w-[1140px] px-[12px]'>
        <div className='flex flex-wrap mx-[-12px] flex-row '>
          <div className='w-full  md:w-[50%] px-[12px] pt-[74px] mb-[100px] z-20 max-md:mb-[20px]'>
            <img className='w-full z-20 cursor-pointer' src={rectangle} alt="rectangle" />
            <h1 className='font-Anton font-[400] text-[48px] text-[#FFFFFF] pt-[60px]'>Nuestra Visión</h1>
            <p className='max-w-[444px] font-Inter font-[500] text-[16px] text-[#BFC5C6] pt-[16px]'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
            <div className='flex items-center  pt-[24px] '>
              <h3 className='font-Inter font-[700] text-[16px] cursor-pointer text-[#7AF57A] '>Aprende más</h3>
            <span><Svg/></span>


            </div>
          </div>
          <div className='w-full md:w-[50%] px-[12px]  pt-[74px] max-md:pt-0 flex flex-col z-10 max-md:pb-[34px] pb-[100px] lg:justify-end'>
            <div className='order-2 md:order-1'>
              <h1 className='font-Anton font-[400] text-[48px] text-[#FFFFFF] max-md:pt-[20px]'>Nuestra Visión</h1>
              <p className='max-w-[444px] font-Inter font-[500] text-[16px] text-[#BFC5C6] pt-[16px] '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
              <div className='flex items-center cursor-pointer  pt-[24px]'>
                <h3 className='font-Inter font-[700] text-[16px] text-[#7AF57A] '>Aprende más</h3>
                <span><Svg/></span>
              </div>
            </div>
              <img className='pt-[60px] max-md:pt-0 w-full z-10 order-1 md:order-2 cursor-pointer' src={rect12} alt="rect12" />
          </div>
        </div>
        
      </div>
      <div className='absolute top-[-41%] z-0 left-[0%]'>
      <span><Elips1/></span>

      </div>
      <div className='absolute top-[34%] left-[39%] z-0'>
       <span><Elips2/></span>

      </div>
      
      
      <div className='w-[484px] h-[484px] opacity-50 max-md:hidden rounded-[50%] absolute bottom-[-16%] right-0 elips'></div>
    </section>
  )
}

export default Aviator