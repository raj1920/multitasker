import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import Navbar from '../components/Navbar';
import GlobalStyle from '../globalstyle';

const Home = () => {
    return (
        <>
         <GlobalStyle/>
         <Navbar/>   
         <HeroSection/>
         <Footer/>
        </>
    )
}

export default Home;
