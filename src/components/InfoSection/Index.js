import React, {useEffect} from 'react';
import { Button } from '../ButtonElement';
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
    BtnWrap,
    Img,
    ImgWrap
} from './InfoElements';
const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
   }) => {
       useEffect(() => {
           Aos.init({duration:2000});
       }, []);
    return ( 
    
    <> 
      <InfoConatiner lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText ={lightText}>{headline}</Heading>
                             <Subtitle darkText = {darkText}>{description}</Subtitle>
                             <BtnWrap>
                                 <Button to='home'
                                 smooth={true}
                                 durtaion={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1: 0}
                                 dark= {dark ? 1: 0}
                                 dark2= {dark2 ? 1 : 0}
                                 
                                 >{buttonLabel}</Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                       <ImgWrap data-aos="fade-up">
                         <Img src={img} alt={alt}/>
                      </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
      </InfoConatiner> 
        
    </>
    )
}

export default InfoSection;