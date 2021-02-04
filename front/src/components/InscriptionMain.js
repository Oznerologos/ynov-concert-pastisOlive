import React from "react";
import { useLocation } from 'react-router-dom'
let loc;


class InscriptionMain extends React.Component {
    clear() {
        
        document.getElementById("myForm").reset();

    }

    render() {
       loc = (window.location.pathname);
        if (loc == "/Inscription/achat") {
            console.log("nn");
            return (
                
                <form id="myForm">
                    <h1 className="tinsc">Inscription</h1>
                    <div className="contenaireCreate">
    
                  
                        <label className="lc">Adresse e-mai *</label>
                        <input id="clear1" type="mail" />
                        <br />
                        <label className="lc">Comfirmation e-mai *</label>
                        <input id="clear2" type="mail" />
                        <br />
                        <label className="lc">Mot de passe *</label>
                        <input id="pas1" type="password" name="" id="" />
                        <br />
                        <label className="lc">Comfirmation mot de passe *</label>
                        <input id="pas2" type="password" name="" id="" />
                        <br />
    
                        <label>Civilité *</label>
                        <input id="" className="ci" type="radio" name="sexe" id="" value="Madame" />
                        <label>Madame</label>
                        <input id="" className="ci2" type="radio" name="sexe" id="" value="Monsieur" />
                        <label>Monsieur</label>
    
                        <br />
                        <label className="lc">Nom *</label>
                        <input id="clear3" type="text" />
                        <br />
                        <label className="lc">Prénom *</label>
                        <input id="clear4" type="text" />
                        <br />
                        <label className="lc">N° et libellé de la voie *</label>
                        <input id="clear5" type="number" />
                        <br />
                        <label className="lc">Immeuble, Bâtiment, Résidence</label>
                        <input id="clear6" type="text" />
                        <br />
                        <label className="lc">Lieu-dit, boîte postale, etc</label>
                        <input id="clear7" type="text" />
                        <br />
                        <label className="lc">Code postal *</label>
                        <input id="clear8" type="number" />
                        <br />
                        <label className="lc">Ville *</label>
                        <input id="clear9" type="text" />
                        <br />
                        <label className="lc">Pays *</label>
                        <input id="clear10" type="text" />
                        <br />
                        <label className="lc">Téléphone *</label>
                        <input id="clear11" type="number" />
                        <br />
                        <label className="lc">Date de naissance * </label>
                        <input id="" type="date" name="" id="" />
                        <p>* Champs obligatoire *</p>
                        <br />
                        <button className="btn_pre rouge">ANNULER</button>
                        <button className="btn_pre effa" onClick={this.clear}>EFFACER</button>
                        <button className="btn_pre vert">CRÉER MON COMPTE</button>
                    </div>
                </form>
    
            );
        }
        return (
            
            <form id="myForm">
                <h1 className="tinsc">Inscription</h1>
                <div className="contenaireCreate">


                    <label className="lc">Adresse e-mai *</label>
                    <input id="clear1" type="mail" />
                    <br />
                    <label className="lc">Comfirmation e-mai *</label>
                    <input id="clear2" type="mail" />
                    <br />
                    <label className="lc">Mot de passe *</label>
                    <input id="pas1" type="password" name="" id="" />
                    <br />
                    <label className="lc">Comfirmation mot de passe *</label>
                    <input id="pas2" type="password" name="" id="" />
                    <br />

                    <label>Civilité *</label>
                    <input id="" className="ci" type="radio" name="sexe" id="" value="Madame" />
                    <label>Madame</label>
                    <input id="" className="ci2" type="radio" name="sexe" id="" value="Monsieur" />
                    <label>Monsieur</label>

                    <br />
                    <label className="lc">Nom *</label>
                    <input id="clear3" type="text" />
                    <br />
                    <label className="lc">Prénom *</label>
                    <input id="clear4" type="text" />
                    <br />
                    <label className="lc">N° et libellé de la voie *</label>
                    <input id="clear5" type="number" />
                    <br />
                    <label className="lc">Immeuble, Bâtiment, Résidence</label>
                    <input id="clear6" type="text" />
                    <br />
                    <label className="lc">Lieu-dit, boîte postale, etc</label>
                    <input id="clear7" type="text" />
                    <br />
                    <label className="lc">Code postal *</label>
                    <input id="clear8" type="number" />
                    <br />
                    <label className="lc">Ville *</label>
                    <input id="clear9" type="text" />
                    <br />
                    <label className="lc">Pays *</label>
                    <input id="clear10" type="text" />
                    <br />
                    <label className="lc">Téléphone *</label>
                    <input id="clear11" type="number" />
                    <br />
                    <label className="lc">Date de naissance * </label>
                    <input id="" type="date" name="" id="" />
                    <p>* Champs obligatoire *</p>
                    <br />
                    <button className="btn_pre effa" onClick={this.clear}>EFFACER</button>
                    <button className="btn_pre vert">CRÉER MON COMPTE</button>
                </div>
            </form>

        );
    }

  
}

export default InscriptionMain;