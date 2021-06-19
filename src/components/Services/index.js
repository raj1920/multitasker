import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-1.svg";
import Icon3 from "../../images/svg-1.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServiceWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services
 = () => {
    return (
        <>
        <ServicesContainer id ="catogeries">
            <ServicesH1>What Do you need done?</ServicesH1>
            <ServiceWrapper className= 'bg-red-500'>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                </ServicesCard>
                <ServicesH2>Home & Gardening</ServicesH2>
                </ServicesP>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon2}/>
                </ServicesCard>
                <ServicesH2>Full House Removals</ServicesH2>
                </ServicesP>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                </ServicesCard>
                <ServicesH2>Few Items Removals</ServicesH2>
                </ServicesP>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon3}/>
                </ServicesCard>
                <ServicesH2>Furniture Assembly</ServicesH2>
                </ServicesP>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                </ServicesCard>
                <ServicesH2>Handyperson</ServicesH2>
                </ServicesP>
                
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon3}/>
                </ServicesCard>
                <ServicesH2>Marketing</ServicesH2>
                </ServicesP>
                <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                </ServicesCard>
                <ServicesH2>Home Cleaning</ServicesH2>
                </ServicesP>
                {/* <ServicesCard>
                    <ServicesIcon src= {Icon2}/>
                    <ServicesH2>Electrician</ServicesH2>
                    <ServicesP>We help reduce fees</ServicesP>
                </ServicesCard> */}
                 <ServicesP>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                </ServicesCard>
                <ServicesH2>Anything</ServicesH2>
                </ServicesP>
            </ServiceWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services;



