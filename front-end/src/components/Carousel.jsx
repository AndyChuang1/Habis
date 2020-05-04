import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import '../assets/style/Carousel.scss';

import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@material-ui/core';

import resturent1 from '../assets/img/12a-azure-2019-1024x576.jpeg';
import resturent2 from '../assets/img/the-marine-room-restaurant-in-la-jolla-top11.jpg';
import food1 from '../assets/img/super-foods.jpg';
import food2 from '../assets/img/food2.jpg';
import organic1 from '../assets/img/organic.jpg';
import organic2 from '../assets/img/organic2.jpg';

function Banner(props) {
  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition ? props.contentPosition : 'left';
  const totalItems = props.length ? props.length : 2;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={3} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={9} key={item.Name}>
        {/* <Link href={`/item/${item.Id}`} className="Link"> */}
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
        {/* </Link> */}
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: 'Restaurant',
    Caption: 'recommend restaurant!',
    contentPosition: 'left',
    Items: [
      {
        Name: 'restaurant1',
        Image: resturent1,
      },
    ],
  },
  {
    Name: 'Delicious Food',
    Caption: 'a drool with envy!',
    contentPosition: 'right',
    Items: [
      {
        Name: 'restaurant2',
        Image: resturent2,
      },
    ],
  },
  {
    Name: 'organic',
    Caption: 'Often eat fresh, new banque!',
    contentPosition: 'left',
    Items: [
      {
        Name: 'food2',
        Image: food2,
      },
    ],
  },
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: 'fade',
      indicators: true,
      timeout: 500,
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay,
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators,
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value,
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value,
    });
  }

  render() {
    return (
      <div class="box">
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
        >
          {this.props.AD_storeData.map((item, index) => {
            return <Banner item={item} key={index} contentPosition={item.contentPosition} />;
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerExample;
