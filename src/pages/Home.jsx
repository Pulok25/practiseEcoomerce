import React from 'react'
import HeroBanner from '../components/Home/HeroBanner';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import FeaturedCategory from '../components/Home/FeaturedCategory';


const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <FeaturedCategory/>
      <FeaturedProducts/>
      
      
    </div>
  )
}

export default Home
