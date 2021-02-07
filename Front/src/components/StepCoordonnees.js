import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import SeatsBookingContext from './SeatsBookingContext';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { NavLink } from 'react-router-dom';
  
  export default function StepCoordonnees() {

    const [hideStep, setHideStep] = useState(0);

        {/*
    const [value, setValue] = React.useState('female');


    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-01T21:11:54'));
    
    const handleDateChange = (date) => {
    setSelectedDate(date);
  };


    const handleChange = (event) => {
      setValue(event.target.value);
    };*/}

    const context = useContext(SeatsBookingContext);

    const [personnalData, setPersonnalData] = useState({
      email:'',
      gender:'',
      nom:'',
      prenom:'',
      voie:'',
      batiment:'',
      BP:'',
      codePostal:'',
      ville:'',
      pays:'',
      telephone:'',
      birthDate:'',
    })

    const [registrationData, setRegistrationData] = useState({
      email:'',
      emailConfirmation:'',
      password:'',
      passwordConfirmation:'',
      gender:'female',
      nom:'',
      prenom:'',
      voie:'',
      batiment:'',
      BP:'',
      codePostal:'',
      ville:'',
      pays:'',
      telephone:'',
      birthDate:'',
    })

    const personnalDataChange = (event) => {
      setPersonnalData({ ...personnalData, [event.target.id]: event.target.value });
      console.log(personnalData);
    }

    const registrationDataChange = (event) => {
      setRegistrationData({ ...registrationData, [event.target.id]: event.target.value });
      console.log(registrationData);
    }

    const resetForm = () => {
      setRegistrationData({
        email:'',
        emailConfirmation:'',
        password:'',
        passwordConfirmation:'',
        gender:'',
        nom:'',
        prenom:'',
        voie:'',
        batiment:'',
        BP:'',
        codePostal:'',
        ville:'',
        pays:'',
        telephone:'',
        birthDate:'',
      });
      console.log(registrationData);
    }

    const hiddenStep = () => {

      if(hideStep === 0) {
        return (<section id="sectionStepCoordonnees">

        <div id="login">
          <h3>Vous avez déjà un compte</h3>
          <p className="subTitle">Connectez-vous</p>
          <form className="login-form" autoComplete="off">
          <FormControl>
            <TextField id="email" label="Email" variant="filled"/>
          </FormControl>
          <FormControl>
          <TextField id="password" label="Mot de passe" variant="filled"/>
          </FormControl>
          </form>
          <Button className="nextStep" onClick={() => setHideStep(1)}>VALIDER</Button>
          <a href="#">Mot de passe oublié</a>
        </div>
  
        <div id="registration">
          <h3>Vous n'avez pas de compte</h3>
          <p className="subTitle">Créez votre compte</p>
          <p>Créez votre compte et simplifiez vos réservations.</p>
          <p>Conservez vos données en toute sécurité et évitez de
            remplir vos informations à chaque commande.</p>
          <p>Gérez vos alertes e-mails pour vos artistes ou salles
              préférées.</p>
          <p>Téléchargez et imprimez vos E-Tickets et factures
          d'achat directement depuis votre compte.</p>
  
          <Button className="nextStep" onClick={() => setHideStep(2)}>CRÉER MON COMPTE</Button>
          
        </div>
      
      </section>)
      } else if(hideStep === 1) {
        return (
          <section id="sectionVerifs">
            <h3>VÉRIFIEZ VOS INFORMATIONS PERSONNELLES</h3>
            <form id="verifs">
            <FormControl>
            <TextField id="email" label="Adresse email *" variant="filled" value={personnalData.email} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Civilité *</FormLabel>
              <RadioGroup aria-label="gender" id="gender" name="gender" value={personnalData.gender} onChange={personnalDataChange} className="radioGrp">
                <FormControlLabel value="female" control={<Radio />} label="Madame" />
                <FormControlLabel value="male" control={<Radio />} label="Monsieur" />
                <FormControlLabel value="other" control={<Radio />} label="Autre" />
              </RadioGroup>
          </FormControl>
          <FormControl>
            <TextField id="nom" label="Nom *" variant="filled" value={personnalData.nom} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="prenom" label="Prénom *" variant="filled" value={personnalData.prenom} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="voie" label="N° et libéllé de la voie *" variant="filled" value={personnalData.voie} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="batiment" label="Immeuble, Bâtiment, Résidence *" variant="filled" value={personnalData.batiment} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="BP" label="Lieu-dit, Boîte-postale, etc" variant="filled" value={personnalData.BP} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="codePostal" label="Code Postal *" variant="filled" value={personnalData.codePostal} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="ville" label="Ville *" variant="filled" value={personnalData.ville} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="pays" label="Pays *" variant="filled" value={personnalData.pays} onChange={personnalDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="telephone" label="Téléphone *" variant="filled" value={personnalData.telephone} onChange={personnalDataChange}/>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          margin="normal"
          id="birthDate"
          label="Date de naissance"
          locale='fr'
          format="MM/dd/yyyy"
          value={personnalData.birthDate}
          onChange={personnalDataChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
          <p>* Champs obligatoires</p>
            </form>

          <div id="stepperButtonsCont">
            <Button onClick={() => context.setActiveStep(1)} className="cancelStep">ANNULER</Button>
            <Button onClick={() => context.setActiveStep(3)} className="nextStep">VALIDER</Button>
          </div>

          </section>
        )
      } else {
        return (
          <section id="sectionVerifs">
            <h3>CRÉATION DE VOTRE COMPTE</h3>
            <form id="verifs">
            <FormControl>
            <TextField id="email" label="Adresse email *" variant="filled" value={registrationData.email} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="emailConfirmation" label="Confirmation email *" variant="filled" value={registrationData.emailConfirmation} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="password" label="Mot de passe *" variant="filled" helperText="Votre mot de passe doit comprendre au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre (0-9)." value={registrationData.password} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="passwordConfirmation" label="Confirmation mot de passe *" variant="filled" value={registrationData.passwordConfirmation} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Civilité *</FormLabel>
              <RadioGroup aria-label="gender" id="gender" name="gender" value={registrationData.gender} onChange={registrationDataChange} className="radioGrp">
                <FormControlLabel value="female" control={<Radio />} label="Madame" />
                <FormControlLabel value="male" control={<Radio />} label="Monsieur" />
              </RadioGroup>
          </FormControl>
          <FormControl>
            <TextField id="nom" label="Nom *" variant="filled" value={registrationData.nom} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="prenom" label="Prénom *" variant="filled" value={registrationData.prenom} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="voie" label="N° et libéllé de la voie *" variant="filled" value={registrationData.voie} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="batiment" label="Immeuble, Bâtiment, Résidence *" variant="filled" value={registrationData.batiment} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="BP" label="Lieu-dit, Boîte-postale, etc" variant="filled" value={registrationData.BP} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="codePostal" label="Code Postal *" variant="filled" value={registrationData.codePostal} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="ville" label="Ville *" variant="filled" value={registrationData.ville} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="pays" label="Pays *" variant="filled" value={registrationData.pays} onChange={registrationDataChange}/>
          </FormControl>
          <FormControl>
            <TextField id="telephone" label="Téléphone *" variant="filled" value={registrationData.telephone} onChange={registrationDataChange}/>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          margin="normal"
          id="birthDate"
          label="Date de naissance"
          locale='fr'
          format="MM/dd/yyyy"
          value={registrationData.birthDate}
          onChange={registrationDataChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
          <p>* Champs obligatoires</p>
          </form>

          <div id="stepperButtonsCont">
            <Button onClick={() => context.setActiveStep(1)} className="cancelStep">ANNULER</Button>
            <Button onClick={resetForm} className="otherCommand">EFFACER</Button>
            <Button onClick={() => context.setActiveStep(3)} className="nextStep">VALIDER</Button>
          </div>

          </section>
        )
      }

    }

  return (

    hiddenStep()

  );
}