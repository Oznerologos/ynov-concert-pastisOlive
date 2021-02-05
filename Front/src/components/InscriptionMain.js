import React from "react";
import axios from "axios"; 
import { event } from "jquery";

let loc;


class InscriptionMain extends React.Component {
    clear() {
        
        document.getElementById("myForm").reset();

    }
    handleSubmit = event =>{
        event.preventDefault();
        const email = {
            mail: this.state.email,
          }    
        const pass = {
          password: this.state.password
        }
        const nom = {
            nom: this.state.nom
         } 
         const Prenom = {
            prenom: this.state.prenom
         }
         const Voie = {
          building: this.state.prenom
         }
         const Sexe = {
            gender: this.state.sexe
         }
         const Immeuble = {
            street: this.state.immeuble
         }
         const Etc = {
          address_complement: this.state.etc
         }
         const Cp = {
          postal_code: this.state.cp
         }
         const Ville = {
            ville: this.state.ville
         }
         const Pays = {
          country: this.state.pays
         }
         const Telephone = {
          phone : this.state.telephone
         }
         const Naissance = {
            naissance : this.state.naissance
         }
        console.log(email);
        console.log(pass);
        console.log(nom);
        console.log(Prenom);
        console.log(Voie);
        console.log(Sexe);
        console.log(Immeuble);
        console.log(Cp);
        console.log(Etc);
        console.log(Ville);
        console.log(Pays);
        console.log(Telephone);
        console.log(Naissance);

        axios.post('https://127.0.0.1:8000/user/new', { email ,pass,Sexe,Immeuble, Voie, Etc,Cp,Pays,Telephone}).then(res=>{
            console.log(res);
            console.log(res.data);
            // window.location = "/" 
          })
       
    }
    handleChange = event =>{
        this.setState({ email: event.target.value});
        
      }
    handleChangePass = event =>{
        this.setState({ password: event.target.value});
      }   
    handleChangeNom = event =>{
        this.setState({ nom: event.target.value});
      }
    handleChangePrenom = event =>{
        this.setState({ prenom : event.target.value});
      }
      handleChangeVoie = event =>{
        this.setState({ voie : event.target.value});
      }
      
      handleChangeSexe = event =>{
        this.setState({ sexe : event.target.value});
      }
      handleChangeImmeuble = event =>{
        this.setState({ immeuble : event.target.value});
      }
      handleChangeEtc= event =>{
        this.setState({ etc : event.target.value});
      }
      handleChangeCp= event =>{
        this.setState({ cp : event.target.value});
      }
      handleChangeVille= event =>{
        this.setState({ ville : event.target.value});
      }
      handleChangePays= event =>{
        this.setState({ pays : event.target.value});
      }
      handleChangeTelephone= event =>{
        this.setState({ telephone : event.target.value});
      }
      handleChangeNaissance= event =>{
        this.setState({ naissance : event.target.value});
      }
    render() {
     
       loc = (window.location.pathname);
       
        if (loc == "/Inscription/achat") {
            return (
                <div className="contIn">
                <form id="myForm" onSubmit = { this.handleSubmit }>
                    <h1 className="tinsc">Inscription</h1>
                    <div className="contenaireCreate">
    
                  
                        <label className="lc">Adresse e-mai *</label>
                        <input id="clear1" type="mail" name="email" onChange={this.handleChange}/>
                        <br />
                        <label className="lc">Comfirmation e-mai *</label>
                        <input id="clear2" type="mail" name="emailconfirme"  />
                        <br />
                        <label className="lc">Mot de passe *</label>
                        <input id="pas1" type="password" name="password" onChange={this.handleChangePass}/>
                        <br />
                        <label className="lc">Comfirmation mot de passe *</label>
                        <input id="pas2" type="password" name=""  />
                        <br />
    
                        <label>Civilité *</label>
                        <input id="" className="ci" type="radio" name="sexe" id="" value="femme"  onChange={this.handleChangeSexe}/>
                        <label>femme</label>
                        <input id="" className="ci2" type="radio" name="sexe" id="" value="homme"  onChange={this.handleChangeSexe}/>
                        <label>homme</label>
    
                        <br />
                        <label className="lc">Nom *</label>
                        <input id="clear3" type="text" name="nom"  onChange={this.handleChangeNom} />
                        <br />
                        <label className="lc">Prénom *</label>
                        <input id="clear4" type="text"  name="Prénom"  onChange={this.handleChangePrenom} />
                        <br />
                        <label className="lc">N° et libellé de la voie *</label>
                        <input id="clear5" type="number" name="voie"  onChange={this.handleChangeVoie} />
                        <br />
                        <label className="lc">Immeuble, Bâtiment, Résidence</label>
                        <input id="clear6" type="text" name="Immeuble" onChange={this.handleChangeImmeuble} />
                        <br />
                        <label className="lc">Lieu-dit, boîte postale, etc</label>
                        <input id="clear7" type="text"  name="etc" onChange={this.handleChangeEtc} />
                        <br />
                        <label className="lc">Code postal *</label>
                        <input id="clear8" type="number"  name="cp" onChange={this.handleChangeCp}/>
                        <br />
                        <label className="lc">Ville *</label>
                        <input id="clear9" type="text" name="Ville" onChange={this.handleChangeVille} />
                        <br />
                        <label className="lc">Pays *</label>
                        <input id="clear10" type="text" name="Pays" onChange={this.handleChangePays}/>
                        <br />
                        <label className="lc">Téléphone *</label>
                        <input id="clear11" type="number"  name ="Telephone" onChange={this.handleChangeTelephone}/>
                        <br />
                        <label className="lc">Date de naissance * </label>
                        <input id="" type="date" name="" id="" name ="naissance" onChange={this.handleChangeNaissance} />
                        <p>* Champs obligatoire *</p>
                        <br />
                        <button className="btn_pre rouge">ANNULER</button>
                        <button className="btn_pre effa" onClick={this.clear}>EFFACER</button>
                        <button className="btn_pre vert">CRÉER MON COMPTE</button>
                    </div>
                </form>
                </div>
            );
        }
        return (
          <div className="contIn">
          <form id="myForm" onSubmit = { this.handleSubmit }>
              <h1 className="tinsc">Inscription</h1>
              <div className="contenaireCreate">

            
                  <label className="lc">Adresse e-mai *</label>
                  <input id="clear1" type="mail" name="email" onChange={this.handleChange}/>
                  <br />
                  <label className="lc">Comfirmation e-mai *</label>
                  <input id="clear2" type="mail" name="emailconfirme"  />
                  <br />
                  <label className="lc">Mot de passe *</label>
                  <input id="pas1" type="password" name="password" onChange={this.handleChangePass}/>
                  <br />
                  <label className="lc">Comfirmation mot de passe *</label>
                  <input id="pas2" type="password" name=""  />
                  <br />

                  <label>Civilité *</label>
                  <input id="" className="ci" type="radio" name="sexe" id="" value="femme"  onChange={this.handleChangeSexe}/>
                  <label>femme</label>
                  <input id="" className="ci2" type="radio" name="sexe" id="" value="homme"  onChange={this.handleChangeSexe}/>
                  <label>homme</label>

                  <br />
                  <label className="lc">Nom *</label>
                  <input id="clear3" type="text" name="nom"  onChange={this.handleChangeNom} />
                  <br />
                  <label className="lc">Prénom *</label>
                  <input id="clear4" type="text"  name="Prénom"  onChange={this.handleChangePrenom} />
                  <br />
                  <label className="lc">N° et libellé de la voie *</label>
                  <input id="clear5" type="number" name="voie"  onChange={this.handleChangeVoie} />
                  <br />
                  <label className="lc">Immeuble, Bâtiment, Résidence</label>
                  <input id="clear6" type="text" name="Immeuble" onChange={this.handleChangeImmeuble} />
                  <br />
                  <label className="lc">Lieu-dit, boîte postale, etc</label>
                  <input id="clear7" type="text"  name="etc" onChange={this.handleChangeEtc} />
                  <br />
                  <label className="lc">Code postal *</label>
                  <input id="clear8" type="number"  name="cp" onChange={this.handleChangeCp}/>
                  <br />
                  <label className="lc">Ville *</label>
                  <input id="clear9" type="text" name="Ville" onChange={this.handleChangeVille} />
                  <br />
                  <label className="lc">Pays *</label>
                  <input id="clear10" type="text" name="Pays" onChange={this.handleChangePays}/>
                  <br />
                  <label className="lc">Téléphone *</label>
                  <input id="clear11" type="number"  name ="Telephone" onChange={this.handleChangeTelephone}/>
                  <br />
                  <label className="lc">Date de naissance * </label>
                  <input id="" type="date" name="" id="" name ="naissance" onChange={this.handleChangeNaissance} />
                  <p>* Champs obligatoire *</p>
                  <br />
                  <button className="btn_pre effa" onClick={this.clear}>EFFACER</button>
                  <button className="btn_pre vert">CRÉER MON COMPTE</button>
              </div>
          </form>
          </div>
        );
    }

  
}

export default InscriptionMain;