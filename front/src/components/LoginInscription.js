import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import AuthApi from '../services/authApi';





const LoginPage = ({ history }) => {

    const { setIsAuth } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AuthApi.auth(credentials);
            setError("");
            setIsAuth(true);
            history.replace('/')
        } catch (errorRequest) {
            setError('error de login')
        }


        console.log(credentials);
    }
    return (
        <>
            <div className="cont_li">
                <div className="login">
                    <h4 >Vous avez déjà un compte</h4>
                    <h6>Connectez-vous</h6>
                    <form onSubmit={handleSubmit} >
                        <label>Email</label>
                        <input
                            value={credentials.username}
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            name="username"
                            id="username"
                            className={(error && " is-invalid")}
                        />
                        {error && <p className="invalid-feedback">{error}</p>}
                        <label>Mot de passe</label>
                        <input
                            value={credentials.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="mot de passe"
                            name="password"
                            id="password"
                        />
                        <div className="btn-f">
                            <button type="submit" className="btn_pre">Connexion</button>
                        </div>
                    </form>
                </div>
                <div className="inscription">
                    <h4>Vous n'avez pas de compte</h4>
                    <h6>Créez votre compte</h6>
                    <article>
                        Créez votre compte et simplifiez vos réservations.
                        Conservez vos données en toute sécurité et évitez de
                        remplir vos informations à chaque commande.
                        Gérez vos alertes e-mails pour vos artistes ou salles
                        préférées.
                        Téléchargez et imprimez vos E-Tickets et factures
                        d'achat directement depuis votre compte.

                    </article>
                   <a href="/Inscription"><button type="submit" className="btn_pre">CRÉER MON COMPTE</button></a>
                </div>
            </div>
            <div>
                <div className="test"></div>
            </div>
        </>
    );
}

export default LoginPage;