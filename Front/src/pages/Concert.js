import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ConcertMain from '../components/ConcertMain';

const Concert = () => {
    return (
        <div>
             <HeaderNav/>              
                <ConcertMain/>
            <FooterNav/>
        </div>
    );
};

export default Concert;