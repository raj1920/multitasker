import React,{useState} from 'react'
import Video from '../../videos/video3.mp4';
import Img from '../../images/BackgroundImage1.jpg';
import { Button } from '../ButtonElement'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroP,
    HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover= () => {
        setHover(!hover)
    }
    return (
        <HeroContainer >
          <HeroBg>
              <VideoBg autoPlay loop muted src= {Video} type='video/mp4'/>
              </HeroBg>
           <HeroContent>
               <HeroH1>Connect With Expert to get Job done!!</HeroH1>
               <HeroP>
                  it's amazing what you can do yourself 
               </HeroP>
               <HeroBtnWrapper>
                 <Button to='signup' onMouseEnter={onHover} 
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'>
                   Get started {hover ?<ArrowForward/> : <ArrowRight/>}
                 </Button>
                </HeroBtnWrapper>
           </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
