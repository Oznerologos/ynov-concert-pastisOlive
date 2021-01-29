import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import LoginInscription from  '../components/LoginInscription';

const Login = () => {

    return (
        <div>
            <HeaderNav/>
            <main>
                <LoginInscription/>
            </main>
            <FooterNav/>
        </div>
    );
};

export default Login;