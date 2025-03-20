import React from 'react'

export default function Recipes() {
  return (
    <div className='bg-orange-50'>
        <div className=' flex flex-col gap-6 justify-center items-center p-5'>
            <div className=' text-amber-900 text-4xl font-sans font-bold'>RECIPES</div>
            <div className=' grid grid-cols-3 gap-4 '>
                <div className='shadow-xl rounded-xl flex flex-col bg-white'>
                    <div className=' overflow-hidden rounded-t-xl '><img className=' overflow-hidden' src="/semo.png" alt="" /></div>
                    <div className=' p-3 text-xl font-bold text-yellow-700'>BLACK SOUP RECIPE</div>
                </div>
                <div className='shadow-xl rounded-xl flex flex-col bg-white'>
                    <div className=' overflow-hidden rounded-t-xl '><img className=' overflow-hidden' src="/semo.png" alt="" /></div>
                    <div className=' p-3 text-xl font-bold text-yellow-700'>MIYAN KUKA RECIPE</div>
                </div>
                <div className='shadow-xl rounded-xl flex flex-col bg-white'>
                    <div className=' overflow-hidden rounded-t-xl '><img className=' overflow-hidden' src="/semo.png" alt="" /></div>
                    <div className=' p-3 text-xl font-bold text-yellow-700'>OGBONO SOUP RECIPE</div>
                </div>
            </div>
            <div className=' p-5 bg-lime-600 rounded-xl text-white text-2xl cursor-pointer flex justify-center items-center'>
                Read More
            </div>
        </div>
    </div>
  )
}
