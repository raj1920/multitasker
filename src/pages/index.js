import React from 'react'
import { ObjOne } from '../components/Download/Data';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjTwo , homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Index';
import DownloadSection from '../components/Download/index';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import GlobalStyle from '../globalstyle';

import Cards from '../components/tasks/card';


const Home = () => {
    return (
        <>
         <GlobalStyle/>
         <Navbar/>   
         <HeroSection/>
         <Services/>
         {/* <AutoPlay/> */}
         <Cards />
         <InfoSection {...homeObjOne }/>
         <InfoSection {...homeObjTwo }/>
         <InfoSection {...homeObjThree }/>
         <InfoSection {...homeObjFour }/>
         <DownloadSection {...ObjOne }/>
         
         <Footer/>
        </>
    )
}

export default Home;
