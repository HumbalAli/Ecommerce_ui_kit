import Discount from '@/components/Discount/Discount'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Latestblog from '@/components/LatestBlog/Latestblog'
import Account from '@/app/Account/page'
import Navbar from '@/components/Navbar/page'
import Section2 from '@/components/Section2/Section2'
import Section2pt2 from '@/components/Section2/Section2pt2'
import Section3 from '@/components/Section3/Section3'
import Section4 from '@/components/section4/Section4'
import TopCategory from '@/components/topCategory/TopCategory'
import Treanding from '@/components/TrendingProd/Treanding'

import React from 'react'

const page = () => {
  return (
    <div>
  <Navbar/>
  <br/>
  <Header/>
  <br/>
  <HeroSection/>
  <Section2/>
  <br/>
  <Section2pt2/>
  <Section3/>
  <Treanding/>
  <Discount/>
  <br/>
  <br/>
  <TopCategory/>
  <br/>
  <br/>
  <Section4/>
  <br/>
  <Latestblog/>
<Footer/>
    </div>
  )
}

export default page
