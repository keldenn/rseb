import React from 'react'
import Carousel from './Carousel'
import { Navbar } from '../Navbar/Navbar'
export default function HomePage() {
  return (
    <div 
    className='flex flex-col'> 
        <Navbar></Navbar>
        <Carousel></Carousel>
    </div>
  )
}
