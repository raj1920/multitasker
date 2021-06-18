import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
    {
        name: 'photo 1',
        url: ' https://images.unsplash.com/photo-1623982228799-9233a4ada2cd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'photo 2',
        url: 'https://images.unsplash.com/photo-1621570360476-a0c6945ebb79?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'photo 3',
        url: 'https://images.unsplash.com/photo-1623789475649-7018429a4076?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'photo 4',
        url: 'https://images.unsplash.com/photo-1623799948206-9be56bee667f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
]


class AutoPlay extends Component {
  
   render(){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        className: "slides"
      };
       return (
           <div>
               <h1> Auto </h1>
               <Slider {...settings}>
                  {photos.map((photo) =>{

                      return(
                          <div>
                          <img width="100%" src={photo.url} alt="kl"/>
                          </div>
                      )
                  }
                  
                  )}
                  
                   </Slider>
               
           </div>
       )
   }
} 
export default AutoPlay;