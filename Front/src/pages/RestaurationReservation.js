import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import RestoReservationMain from '../components/RestoReservationMain';

const RestaurationReservation = () => {
    return (
        <div>
             <HeaderNav/>              
                <RestoReservationMain/>
            <FooterNav/>
        </div>
    );
};

export default RestaurationReservation;