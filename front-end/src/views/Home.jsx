import React, { useState, useEffect, useMemo } from 'react';
import Carousel from '../components/Carousel';
import AutoScrBnt from '../components/AutoScrollBnt';
import MultiCard from '../components/MultiCard';
import pizza from '../assets/img/pizza.jpg';
import juice from '../assets/img/juice.jpg';
import donot from '../assets/img/donot.jpg';
import truck from '../assets/img/truck.jpg';
import rice from '../assets/img/rice.jpg';

//carousel
import resturent1 from '../assets/img/12a-azure-2019-1024x576.jpeg';
import resturent2 from '../assets/img/the-marine-room-restaurant-in-la-jolla-top11.jpg';
import food1 from '../assets/img/food2.jpg';
var items = [
  {
    id: 'card1',
    name: 'pizza',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: pizza,
    alt: 'pizza pic',
    title: 'Delicious!',
    delivery: true,
    pickUp: true,
    stayIn: true,
  },
  {
    id: 'card2',
    name: 'juice',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: juice,
    alt: 'juice pic',
    title: 'Delicious!',
    delivery: false,
    pickUp: true,
    stayIn: false,
  },
  {
    id: 'card3',
    name: 'donot',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: donot,
    alt: 'donot pic',
    title: 'Delicious!',
    delivery: false,
    pickUp: true,
    stayIn: true,
  },
  {
    id: 'card4',
    name: 'truck',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: truck,
    alt: 'truck pic',
    title: 'Delicious!',
    delivery: false,
    pickUp: false,
    stayIn: true,
  },
  {
    id: 'card5',
    name: 'rice',
    description: 'This cheesecake is really yummy. I’m going for another slice.',
    image: rice,
    alt: 'rice pic',
    title: 'Delicious!',
    delivery: true,
    pickUp: true,
    stayIn: true,
  },
];
const AD_store = [
  {
    Items: [
      {
        Name: 'restaurant1',
        Image: resturent1,
      },
    ],
  },
  {
    Items: [
      {
        Name: 'restaurant2',
        Image: resturent2,
      },
    ],
  },
  {
    Items: [
      {
        Name: 'food1',
        Image: food1,
      },
    ],
  },
];

function Home() {
  const [storeItems, setStoreItems] = useState(items);
  const [tab, setTab] = useState(0);
  // useEffect(() => {

  //   if (tab === 0) {
  //     const filter = storeItems.filter((eachStore) => {
  //       return eachStore.delivery === true;
  //     });
  //     setStoreItems(filter);
  //   }
  //   if (tab === 1) {
  //     const filter = storeItems.filter((eachStore) => {
  //       return eachStore.pickUp === true;
  //     });
  //     setStoreItems(filter);//改變了storeItems 所以之後的改變了storeItems怎麼filter 都不是原本有全部資料的storeItems
  //   }
  //   if (tab === 2) {
  //     const filter = storeItems.filter((eachStore) => {
  //       return eachStore.stayIn === true;
  //     });

  //     setStoreItems(filter);
  //   }

  //   return () => {
  //     // Optional; clean up when `count` changed
  //   };
  // }, [tab]);

  const filterStore = useMemo(() => {
    //把storeItems 拿來算好計算出正確的storeItem 不改變原來的storeItems
    let filter;
    if (tab === 0) {
      filter = storeItems.filter((eachStore) => {
        return eachStore.delivery === true;
      });
    }
    if (tab === 1) {
      filter = storeItems.filter((eachStore) => {
        return eachStore.pickUp === true;
      });
    }
    if (tab === 2) {
      filter = storeItems.filter((eachStore) => {
        return eachStore.stayIn === true;
      });
    }
    return filter;
  }, [tab]); //當tab改變做此運算

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
      <Carousel AD_storeData={AD_store}></Carousel>
      <AutoScrBnt tab={tab} setTab={setTab}></AutoScrBnt>
      {/* <BottomNav></BottomNav> */}
      <MultiCard storeDatas={filterStore}></MultiCard>
    </div>
  );
}

export default Home;
