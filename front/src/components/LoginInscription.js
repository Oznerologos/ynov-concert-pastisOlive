import React from 'react'



class LoginInscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("test");


    }
    render() {
        return (
            <div className='cont_li'>
                <Login></Login>
                <div className="inscription">
                    <h4>Vous avez déjà un compte</h4>
                    <h6>Connectez-vous </h6>
                    <article>
                        Créez votre compte et simplifiez vos réservations.
                        Conservez vos données en toute sécurité et évitez de
                        remplir vos informations à chaque commande.
                        Gérez vos alertes e-mails pour vos artistes ou salles
                        préférées.
                        Téléchargez et imprimez vos E-Tickets et factures
                        d'achat directement depuis votre compte.
                    </article>
                    <a><button className="btn_pre">CRÉER MON COMPTE</button></a>
                </div>
            </div>
        );
    }
}

const Login = () => {
    return(
        <div className="login">
        <h4>Vous avez déjà un compte</h4>
        <h6>Connectez-vous </h6>
        <label>Votre adresse e-mail :</label><br />
        <input type="text" placeholder="E-mail"></input>
        <br />
        <label>Votre mot de passe :</label><br />
        <input type="text" placeholder="Mot de passe"></input>
        <br />
        <a><button className="btn_pre">VALIDER</button></a>
        <br />
        <a>Mot de passe oublié</a>
    </div>
    );
}

export default LoginInscription;