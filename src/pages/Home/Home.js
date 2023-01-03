import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;