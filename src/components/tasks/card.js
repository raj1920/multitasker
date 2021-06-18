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
    Icon2,
    Content1

} from './cardElement';
import { Contents } from './Data';

import { HiStar } from "react-icons/hi";
class Cards extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            className: "slides"
          };
          const setting = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            className: "slides",
            rtl:true
          };       

 
    return (
        <>
            <h1>Our Works</h1>
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
        </>
    )
} 
}
 

export default Cards;
