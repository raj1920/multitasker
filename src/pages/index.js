import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjTwo , homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Index';

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import GlobalStyle from '../globalstyle';

const Home = () => {
    return (
        <>
         <GlobalStyle/>
         <Navbar/>   
         <HeroSection/>
         <Services/>
         <InfoSection {...homeObjOne }/>
         <InfoSection {...homeObjTwo }/>
         <InfoSection {...homeObjThree }/>
         <InfoSection {...homeObjFour }/>
         <Footer/>
        </>
    )
}

export default Home;
