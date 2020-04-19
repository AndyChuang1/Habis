import Carousel from 'react-material-ui-carousel';
import '../assets/style/Carousel.scss';
import React from 'react';
import { Paper } from '@material-ui/core';
import resturent1 from '../assets/img/12a-azure-2019-1024x576.jpeg';
import resturent2 from '../assets/img/the-marine-room-restaurant-in-la-jolla-top11.jpg';

function Ad_Carousel() {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      image: resturent1,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      image: resturent2,
    },
  ];

  return (
    <div id='Ad_Carousel'>
      <Carousel autoPlay={false}>
        {items.map(item => {
          return <Item item={item} />;
        })}
      </Carousel>
    </div>
  );
}
function Item(props) {
  return (
    <Paper>
      <img src={props.item.image} width='414' height='193'></img>
      <div className='content'>
        <h2 className='title'>{props.item.name}</h2>
        <p className='text'>{props.item.description}</p>
      </div>
    </Paper>
  );
}

export default Ad_Carousel;
