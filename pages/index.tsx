import About from '@/components/landing/About'
import Brands from '@/components/landing/Brands'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Location from '@/components/landing/Location'
import Recipes from '@/components/landing/Recipes'
import React from 'react'

export default function index() {
  return (
    <div className=' flex flex-col'>
      
        <Header />
        <About/>
        <Brands/>
        <Recipes/>
        <Location/>
        <Footer/>
    </div>
  )
}
