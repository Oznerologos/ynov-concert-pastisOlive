import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ProgrammationMain from '../components/ProgrammationMain';

const Programmation = () => {
    return (
        <div>
             <HeaderNav/>              
                <ProgrammationMain/>
            <FooterNav/>
        </div>
    );
};

export default Programmation;