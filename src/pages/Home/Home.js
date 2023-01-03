import React from 'react';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Services from './Services/Services';
import OurWorks from './OurWorks/OurWorks';

const Home = () => {
    return (
        <div>
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
        </div>
    );
};

export default Home;