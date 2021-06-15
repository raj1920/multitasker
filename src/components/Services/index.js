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
            <ServicesH1>Our Services</ServicesH1>
            <ServiceWrapper>
                <ServicesCard>
                    <ServicesIcon src= {Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce fees</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src= {Icon2}/>
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>We help reduce fees</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src= {Icon3}/>
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>Unlock Our Special membership card
                        that returns 5% cash back.
                    </ServicesP>
                </ServicesCard>
            </ServiceWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services;



