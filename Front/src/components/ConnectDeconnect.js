import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthApi from '../services/authApi';
import AuthContext from '../context/AuthContext'

const Menu = ({history}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const handleLogout = () => {
        AuthApi.logout();
        setIsAuth(false);
        history.push('/login');
    }    

    return (
      
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    {!isAuth && (
                        <li>
                            <NavLink className="accountLink" to="/login">login</NavLink >
                        </li>
                    )
                    ||
                    (
                        <li className="nav-item">
                            <a onClick={handleLogout} className="accountLink" href="#">Déconnexion</a>
                        </li>
                    )
                    }
                </ul>
            </div>
    );
}

export default Menu;