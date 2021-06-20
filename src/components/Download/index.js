import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    InfoConatiner,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine ,
    Heading,
    Subtitle,
    ImageWrap,
    Img,
    ImgWrap,
    Icon
} from './taskerElement';
const DownloadSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    alt1,
    img,
    alt,
    icon,
    icon1,
    alt2
    
   }) => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    return ( 
    <> 
      <InfoConatiner  lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText ={lightText}>{headline}</Heading>
                             <Subtitle darkText = {darkText}>{description}</Subtitle>
                            <ImageWrap>
                            <Icon src={icon} alt={alt1}/>  
                            <Icon src={icon1} alt={alt2}/> 
                            </ImageWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                       <ImgWrap data-aos="fade-left">
                         <Img src={img} alt={alt}/>
                      </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
      </InfoConatiner> 
        
    </>
    )
}

export default DownloadSection;