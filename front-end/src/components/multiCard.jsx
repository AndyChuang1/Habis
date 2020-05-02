import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import pizza from '../assets/img/pizza.jpg';
import juice from '../assets/img/juice.jpg';
import donot from '../assets/img/donot.jpg';
import truck from '../assets/img/truck.jpg';
import rice from '../assets/img/rice.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 345,
    margin: 'auto',
  },
  Grid: {
    padding: 10,
  },
}));

function Ad_testCard() {
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
  const classes = useStyles();
  return (
    <div id='Ad_testCard' className={classes.root}>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        // removeArrowOnDeviceType={['mobile', 'tablet']}
        className=''
        containerClass='container-with-dots'
        dotListClass=''
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            artialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        howDots={true}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.Grid}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={props.item.alt}
            height='140'
            image={props.item.image}
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.item.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default Ad_testCard;
