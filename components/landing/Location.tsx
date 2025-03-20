import React from 'react'
import { BsSendArrowUpFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";

export default function Location() {
  return (
    <div className=' pt-5 px-5 flex flex-col justify-center items-center gap-8 h-full'>
        <div className=' flex flex-col gap-4'>
            <div className=' font-bold text-2xl text-amber-950 font-sans'>GET ACCESS TO ENDLESS GOLDEN PENNY RECIPES </div>
            <div className=' w-full  flex'>
                <div className=' border w-11/12 p-2'><input className=' outline-none w-full' placeholder='Please Enter your email' type="text" /></div>
                <div className='bg-lime-600 w-1/12 flex items-center justify-center'> <div className=' text-2xl text-white'><BsSendArrowUpFill /></div></div>
            </div>
        </div>
        <div className=' bg-gray-400 flex flex-col gap-2 justify-center items-center p-7 w-full h-full'>
            <div className='font-bold text-xl text-white font-sans'>GET A LOCATION NEARBY</div>
            <div className=' p-2 rounded-lg bg-lime-600 flex gap-2 justify-center items-center font-semibold text-lg text-white'>FIND STORE LOCATIONS <FaHouseChimney /></div>
        </div>
    </div>
  )
}
