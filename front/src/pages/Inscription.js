import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import Inscription from '../components/InscriptionMain';

const Home = () => {

    return (
        <div>
            <HeaderNav/>
            <main>
                <Inscription/>
            </main>
            <FooterNav/>
        </div>
    );
};

export default Home;