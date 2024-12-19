import React from 'react'
import Carousel from './Carousel'
import { Navbar } from '../Navbar/Navbar'
import TopStocks from './TopStocks'

import StockOverview from './StockOverview'
import NewsSection from './NewsSection'
import LogoSection from './LogoSection'
export default function HomePage() {
  return (
    <div 
    className='flex flex-col'> 
        <Navbar></Navbar>
        <Carousel></Carousel>
        <StockOverview></StockOverview>
      <TopStocks></TopStocks>
      <NewsSection></NewsSection>
      <LogoSection></LogoSection>
    </div>
  )
}
