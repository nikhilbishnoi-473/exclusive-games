import React from 'react'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image2 from '../images/webp/image-2.webp'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import { Btn3, Btn4, Btn5, Btn6, Btn7, Btn8, Svg11, Svg14, Svg4, Svg5, Svg6 } from './Icon'
function Nuestros() {
   return (
      <section className='lg:bg-[#00141B] max-lg:bg-white overflow-hidden  relative  bg_image_1 mt-[-2px]   '>
         <div className='container z-20 relative mx-auto max-w-[1140px]  px-[12px] '>
            <div className='flex justify-center max-md:pt-[0px]  pt-[270px]'>
               <h2 className='font-Anton font-[400] text-[48px] max-w-[552px]   max-md:pt-[100px] max-md:text-[35px]'>Nuestros Atributos de Marca</h2>
            </div>
            <div className='flex flex-wrap mx-[-12px]   flex-row justify-center'>
               <div className='w-full sm:w-[50%] md:w-[33.33%] px-[12px]'>
                  <div className='flex flex-col justify-center text-center items-center '>

                     <div className='mt-[60px] cursor-pointer w-[100px] duration-500 hover:bg-[#00141B] h-[100px] bg-[#F5FFF5] rounded-[73px]  flex justify-center items-center text-center'>
                       <span><Btn3/></span>

                     </div>
                     <h3 className='font-Anton font-[400] text-[20px] pt-[16px] text-[#00141B] max-md:text-[25px]'>Inteligencia</h3>
                     <p className='max-w-[263px] font-Inter font-[500] text-[16px] text-[#334349] pt-[10px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>


                  </div>
               </div>
               <div className='w-full sm:w-[50%] md:w-[33.33%] px-[12px]'>
                  <div className='flex flex-col justify-center text-center items-center '>

                     <div className='mt-[60px] cursor-pointer w-[100px] duration-500 hover:bg-[#00141B] h-[100px] bg-[#F5FFF5] rounded-[73px]  flex justify-center items-center text-center'>
                      <span><Btn4/></span>


                     </div>
                     <h3 className='font-Anton font-[400] text-[20px] pt-[16px] text-[#00141B]  max-md:text-[25px]'>Proactividad</h3>
                     <p className='max-w-[263px] font-Inter font-[500] text-[16px] text-[#334349] pt-[10px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>


                  </div>
               </div>
               <div className='w-full sm:w-[50%] md:w-[33.33%] px-[12px]'>
                  <div className='flex flex-col justify-center text-center items-center '>

                     <div className='mt-[60px] cursor-pointer w-[100px] duration-500 hover:bg-[#00141B] h-[100px] bg-[#F5FFF5] rounded-[73px]  flex justify-center items-center text-center'>
                     <span><Svg11/></span>
                     </div>
                     <h3 className='font-Anton font-[400] text-[20px] pt-[16px] text-[#00141B]  max-md:text-[25px]'>Innovación</h3>
                     <p className='max-w-[263px] font-Inter font-[500] text-[16px] text-[#334349] pt-[10px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>


                  </div>
               </div>

            </div>
            <div className='absolute max-lg:hidden top-[20%] left-[22%]'>
              <span><Btn5/></span>

            </div>
            <div className='absolute max-lg:hidden top-[26%] left-[55%]'>
               <span><Btn6/></span>

            </div >
            <div className='flex flex-col text-center items-center justify-center pt-[150px] max-md:pt-[70px] '>
               <h2 className='font-Anton font-[400] text-[48px] text-[#00141B] '>Slots</h2>
               <p className='max-w-[904px] font-Inter font-[500] text-[#334349] text-[16px] pt-[16px] max-md:text-[15px]'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
            </div>
            <div className='flex flex-wrap z-20 mx-[-12px] flex-row'>
               <div className='w-full md:w-[33.33%]  pt-[60px]  px-[12px]'>
                  <div className='relative cursor-pointer  group overflow-hidden'>
                     <img className='w-full ' src={image3} alt="image3" />
                     <div className='  h-full     rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                        <div className='  flex   relative    '>
                           <button className='font-Inter max-sm:pr-[28px] max-sm:pl-[38px]   font-[700] text-[16px] leading-[25px] relative pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px]  flex   items-center justify-center overflow-hidden  hover:shadow-8xl  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E]  hover:text-white before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
                              <span className='relative z-10'>Jugar</span>
                           </button>
                           <span><Svg14/></span>



                        </div>
                     </div>
                  </div>
                  <div className='relative cursor-pointer mt-[24px] z-30 group overflow-hidden'>
                     <img className='w-full ' src={image4} alt="image4" />
                     <div className='  h-full     rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                        <div className='  flex   relative'>
                           <button className='font-Inter   max-sm:pr-[28px] max-sm:pl-[38px] font-[700] text-[16px] leading-[25px]   pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px] relative flex     items-center justify-center overflow-hidden  hover:shadow-8xl  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                              <span className='relative z-10'>Jugar</span>
                           </button>
                          <span><Svg14/></span>


                        </div>
                     </div>
                  </div>
               </div>

               <div className=' w-full md:w-[33.33%] px-[12px] max-md:pt-[24px] pt-[60px]'>
                  <div className='relative  cursor-pointer group overflow-hidden'>
                     <img className='w-full ' src={image2} alt="image2" />
                     <div className='  h-full     rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                        <div className='  flex  relative '>
                           <button className='font-Inter max-sm:pr-[28px] max-sm:pl-[38px]   font-[700] text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px] relative flex  items-center justify-center overflow-hidden  hover:shadow-8xl  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                              <span className='relative z-10'>Jugar</span>
                           </button>
                          <div  className='absolute top-[51%] left-[-3%]'>
                        <span><Svg5/></span>
 
                          </div>


                        </div>
                     </div>
                  </div>
                  <div className='relative cursor-pointer  mt-[24px] group overflow-hidden'>
                     <img className='w-full ' src={image5} alt="image5" />
                     <div className='  h-full     rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                        <div className='  flex   relative'>
                           <button className='font-Inter  max-sm:pr-[28px] max-sm:pl-[38px]  font-[700] text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px] relative flex  items-center justify-center overflow-hidden  hover:shadow-8xl  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                              <span className='relative z-10'>Jugar</span>
                           </button>
                          <div  className='absolute top-[51%] left-[-3%]' >
                       <span><Svg6/></span>
                          </div>



                        </div>
                     </div>
                  </div>
               </div>
               <div className='w-full md:w-[33.33%]    px-[12px] max-sm:pt-[24px] sm:pt-[60px]'>
                   
                     <div className='relative cursor-pointer group overflow-hidden'>
                        <img className='w-full ' src={image6} alt="image6" />
                        <div className='  h-full     rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                           <div className='  flex  relative '>
                              <button className='font-Inter   max-sm:pr-[28px] max-sm:pl-[38px] font-[700] text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px] relative flex  items-center justify-center overflow-hidden   hover:shadow-8xl shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                                 <span className='relative z-10'>Jugar</span>
                              </button>
                             <div className='absolute top-[51%] left-[-3%]'>
                            <span><Btn7/></span>

                             </div>


                           </div>
                        </div>
                     </div>
                     <div className='relative cursor-pointer mt-[24px] max-md:pt-[24px] group overflow-hidden'>
                        <img className='w-full ' src={image7} alt="image7" />
                        <div className='  h-full    rounded-[8px] group-hover:left-0 left-[-100%] duration-500 ease-in-out justify-center text-center items-center flex w-full absolute top-0 bg-black/80  '>
                           <div className='  flex  relative '>
                              <button className='font-Inter  max-sm:pr-[28px] max-sm:pl-[38px]  font-[700] text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-transparent border-[2px] border-white text-[#FFFFFF] rounded-[41px] relative flex  items-center justify-center overflow-hidden   hover:shadow-8xl shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#6DE79E] hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                                 <span className='relative z-10'>Jugar</span>
                              </button>
                            <div className='absolute top-[51%] left-[-3%]'>
                          <span><Btn8/></span>
                            </div>

 
                        </div>
                     </div>
                  </div>      </div>
            </div>
            <div className='flex justify-center'>
               <div className='relative flex mb-[222px] max-md:mb-[50px] mt-[40px]'>

                  <button className='font-Inter    font-[700] text-nowrap text-[16px] leading-[25px] pt-[10px] pr-[46px] pb-[13px] pl-[46px] bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-[#00141B] rounded-[41px] relative flex  items-center justify-center overflow-hidden bg-gray-800   transition-all before:absolute hover:shadow-8xl before:h-0 before:w-0 before:rounded-full before:bg-liner-gradiant hover:from-[#74EE8C] hover:to-[#5DD6CC] duration-500 hover:text-white before:duration-500 before:ease-out hover:shadow-[#63DCBA] hover:before:h-56 hover:before:w-56'>
                     <span className='relative z-10'>Mostrar más</span>
                  </button>

                  <div className='absolute top-[60%] left-[-3%]'>
                   <span><Svg4/></span>

                  </div>

               </div>
            </div>

         </div>
        




      </section>
   )
}

export default Nuestros