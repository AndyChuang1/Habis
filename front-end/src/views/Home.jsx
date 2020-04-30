import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Carousel from '../components/Carousel';
import FoodCard from '../components/FoodCard';
import CarouselFoodCard from '../components/CarouselFoodCard';
function Home() {
  return (
    <div id='home'>
      <h1>Home page</h1>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/bill'>Bill</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </nav> */}
      <Carousel></Carousel>
      {/* <BottomNav></BottomNav> */}
      <CarouselFoodCard></CarouselFoodCard>
      <FoodCard></FoodCard>
    </div>
  );
}

export default Home;
