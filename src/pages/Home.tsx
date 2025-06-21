import React from 'react';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import FeaturedServices from '../components/FeaturedServices';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <>
            <Hero />
            <PopularCategories />
            <FeaturedServices />
            <HowItWorks />
        </>
    );
};

export default Home;
