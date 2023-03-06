import React from 'react'
import FeaturedBlogs from '../../components/FeaturedBlogs/FeaturedBlogs';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <FeaturedBlogs />
    </div>
  )
}

export default Home