import About from '@/components/About'
import Brands from '@/components/Brands'
import Header from '@/components/Header'
import React from 'react'

export default function index() {
  return (
    <div className=' flex flex-col'>
      
        <Header />
        <About/>
        <Brands/>
      
      <div className=' h-48 bg-black'></div>
     
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
