import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Carousel from '../components/Carousel';
import FoodCard from '../components/FoodCard';
import Card from '../components/MultiCard';
import MultiCard from '../components/MultiCard';
import pizza from '../assets/img/pizza.jpg';
import juice from '../assets/img/juice.jpg';
import donot from '../assets/img/donot.jpg';
import truck from '../assets/img/truck.jpg';
import rice from '../assets/img/rice.jpg';
var items = [
  {
    id: 'card1',
    name: 'pizza',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: pizza,
    alt: 'pizza pic',
    title: 'Delicious!',
  },
  {
    id: 'card2',
    name: 'juice',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: juice,
    alt: 'juice pic',
    title: 'Delicious!',
  },
  {
    id: 'card3',
    name: 'donot',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: donot,
    alt: 'donot pic',
    title: 'Delicious!',
  },
  {
    id: 'card4',
    name: 'truck',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: truck,
    alt: 'truck pic',
    title: 'Delicious!',
  },
  {
    id: 'card5',
    name: 'rice',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: rice,
    alt: 'rice pic',
    title: 'Delicious!',
  },
];
function Home() {
  const [storeItems, setStoreItems] = useState(items);
  return (
    <div id="home">
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
      <MultiCard storeDatas={storeItems}></MultiCard>
    </div>
  );
}

export default Home;
