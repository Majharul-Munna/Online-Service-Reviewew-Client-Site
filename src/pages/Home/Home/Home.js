import React from 'react';
import Header from '../Header/Header';
import TopRated from '../TopRated/TopRated';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Header></Header>
            <TopRated></TopRated>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;