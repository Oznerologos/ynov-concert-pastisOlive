import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import CarouselActu from '../components/CarouselActu';

const Home = () => {

    return (
        <div>
            <HeaderNav/>
            <main>
            <CarouselActu></CarouselActu>  
            </main>
            <FooterNav/>
        </div>
    );
};

export default Home;