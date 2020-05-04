import React from 'react';
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      width: 345,
      margin: 'auto'
    },
    Grid:
    {
      padding:10
    }
   
  }));
  
 function Ad_CarouselFoodCard() {
      var items = [
        {
          id: 'card1',
          name: 'pizza',
          description: 'This cheesecake is really yummy. I’m going for another slice.',
          image: pizza,
          alt:'pizza pic',
          title:'Delicious!',
        },
        {
          id: 'card2',
          name: 'juice',
          description: 'This cheesecake is really yummy. I’m going for another slice.',
          image: juice,
          alt:'juice pic',
          title:'Delicious!',
        },
        {
          id: 'card3',
          name: 'donot',
          description: 'This cheesecake is really yummy. I’m going for another slice.',
          image: donot,
          alt:'donot pic',
          title:'Delicious!',
        },
        {
          id: 'card4',
          name: 'truck',
          description: 'This cheesecake is really yummy. I’m going for another slice.',
          image: truck,
          alt:'truck pic',
          title:'Delicious!',
        },
        {
          id: 'card5',
          name: 'rice',
          description: 'This cheesecake is really yummy. I’m going for another slice.',
          image: rice,
          alt:'rice pic',
          title:'Delicious!',
        },
      ];
      const classes = useStyles();

      
        var settings = {
            
            className: "center slider variable-width",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",            
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: true
        };

      return (
        <div id='Ad_CarouselFoodCard' className={classes.root}>

            <Slider {... settings}>    
            {items.map(item => {
              return <Item item={item} />;
            })}     
            </Slider>
          
        </div>
      );
  }
  
  function Item(props) {
      const classes = useStyles();
      return (
                    
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} spacing={3} className={classes.Grid} >
              <Card className={classes.card}>
                  <CardActionArea>
                      <CardMedia
                          component="img"
                          alt= {props.item.alt}
                          height="140"
                          image = {props.item.image}
                          title= {props.item.title}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {props.item.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {props.item.description}
                          </Typography>
                      </CardContent>
                  </CardActionArea>      
              </Card>
          </Grid>      
       
      );
  }
  export default Ad_CarouselFoodCard;