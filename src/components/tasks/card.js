import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { 
    CardWrapper,
    Card,
    HeadingH1,
    IconWrapper,
    Icon,
    Content,
    Price,
    Rating,
    Container,
    Content1,
    CardH1

} from './cardElement';
import { Contents } from './Data';

import { HiStar } from "react-icons/hi";
class Cards extends Component {
    render(){
        const settings = {
            dots: false,
            
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 1500,
            cssEase: "linear",
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
          const setting = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 1500,
            cssEase: "linear",
            pauseOnHover: true,
            className: "slides",
            rtl:true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };       

 
    return (
        <>  
        <Container id = 'task'>
            <CardH1>See what others are getting done </CardH1>
            <Slider {...settings}>

              {Contents.map((details) =>{
                  return(
                    <CardWrapper>
                    <Card>
                        <HeadingH1>{details.H1}</HeadingH1>
                        <IconWrapper>
                            <Icon src={details.icon} alt={details.alt}/>
                            <Content>{details.content}</Content>
                            <Price>{details.price}</Price>
                        </IconWrapper>
                        <Rating>
                         <HiStar/>
                            {/* <Icon2 src={details.icon2} alt={details.alt2}/> */}
                            <Content1>{details.content1}</Content1>
                        </Rating>
    
                    </Card>
                </CardWrapper>
                  )
              }
              )} 
           </Slider>
           <Slider {...setting}>

              {Contents.map((details) =>{
                  return(
                    <CardWrapper>
                    <Card>
                        <HeadingH1>{details.H1}</HeadingH1>
                        <IconWrapper>
                            <Icon src={details.icon} alt={details.alt}/>
                            <Content>{details.content}</Content>
                            <Price>{details.price}</Price>
                        </IconWrapper>
                        <Rating>
                         <HiStar/>
                            {/* <Icon2 src={details.icon2} alt={details.alt2}/> */}
                            <Content1>{details.content1}</Content1>
                        </Rating>
    
                    </Card>
                </CardWrapper>
                  )
              }
              )} 
           </Slider>
        </Container>
        </>
    )
} 
}
 

export default Cards;
