import React from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import LoginInscription  from  '../components/LoginInscription';

const Login = (props) => {

    return (
        <div>
            <HeaderNav/>
            <main>
                <LoginInscription history={props.history}/>
            </main>
            <FooterNav/>
        </div>
    );
};

export default Login;