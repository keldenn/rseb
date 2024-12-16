import React from 'react'
import Carousel from './Carousel'
import { Navbar } from '../Navbar/Navbar'
import TopStocks from './TopStocks'
import StockOverview from './StockOverview'
export default function HomePage() {
  return (
    <div 
    className='flex flex-col'> 
        <Navbar></Navbar>
        <Carousel></Carousel>
        <StockOverview></StockOverview>
      <TopStocks></TopStocks>
    </div>
  )
}
