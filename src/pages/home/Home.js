import React, { useState } from 'react';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import HowWork from './HowWork/HowWork';

const Home = () => {


    return (
        <div>
            <Banner />
            <Categories />
            <Advertised />
            <HowWork />
        </div>
    );
};

export default Home;