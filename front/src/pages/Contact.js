import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ContactMain from '../components/ContactMain';

const Contact = () => {
    return (
        <div>
             <HeaderNav/>              
                <ContactMain/>
            <FooterNav/>
        </div>
    );
};

export default Contact;