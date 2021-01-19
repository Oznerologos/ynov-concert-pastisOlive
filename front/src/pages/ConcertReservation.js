import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ConcertReservationMain from '../components/ConcertReservationMain';

const ConcertReservation = () => {
    return (
        <div>
             <HeaderNav/>              
                <ConcertReservationMain/>
            <FooterNav/>
        </div>
    );
};

export default ConcertReservation;