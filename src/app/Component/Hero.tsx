import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div  className="h-screen flex justify-center items-center  ">
      <div className ='w-1/2 flex flex-col justify-center items-start m-10'>
        <h1
         className=' w-[496px] h-[189px] top-[316px] text-[40px] left-[176px] text-left font-bold font-[libre-bodoni] tracking-[002.5%] leading-[65.8px ]    text-[#000000] absolute'> IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

        <p
         className=" w-[902px] h-[147px] top-[533px] left-[171px]  font-medium font-[libre-bondoni]  text-4xl leading-[49.35px] tracking-[2.5%]  text-[#787054] absolute "> An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
     
     <button className="bg-[#A29875] w-[288px] rounded-[10px] p-[10px] h-[58px] left-[176px] gap-[10px] leading-[37.5px]  top-[730px] absolute    text-[30px]  text-[#FFFFFF] font-[libre-bodoni] text-width-[177px] text-height-[38px]"> Explore Now  </button>
     
      </div>


      <div className="w-1/2 flex justify-center items-center m-10">
        
        <Image  
        src={'Image/figma.svg'}
            alt=" Image Figma "
            width={462}
            height={647} 
            
            className=' w-[442px] h-[611px] top-[198px] left-[1164px]  border-transparent absolute  border-white border-solid-1px  rounded-tl-[150px] rounded-br-[150px]' >

        </Image>
      



      </div>
      



    </div>
  )
}

export default Hero
