import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import RestoPresentationMain from '../components/RestoPresentationMain';

const RestaurationPresentation = () => {
    return (
        <div>
             <HeaderNav/>              
                <RestoPresentationMain/>
            <FooterNav/>
        </div>
    );
};

export default RestaurationPresentation;