import React from 'react';
import Header from '../components/Header';
import CurrencyExchanger from '../components/CurrencyExchanger';

const Home = () => {
    // console.log(getData());
    return (
        <div className="home">
            <Header />
            <CurrencyExchanger />
        </div>
    );
};

export default Home;
