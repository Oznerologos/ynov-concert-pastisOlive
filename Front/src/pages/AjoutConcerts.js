import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import AjoutConcerts from '../components/AjoutConcertsMain';

const Contact = () => {
    return (
        <div>
             <HeaderNav/>              
                <AjoutConcerts/>
            <FooterNav/>
        </div>
    );
};

export default Contact;