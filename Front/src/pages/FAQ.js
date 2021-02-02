import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import FaqMain from '../components/FaqMain';


const FAQ = () => {
    return (
        <div>
            <HeaderNav/>
                <FaqMain/>
            <FooterNav/>
        </div>
    );
};

export default FAQ;