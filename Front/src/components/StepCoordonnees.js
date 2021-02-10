import React, { useState, useContext } from 'react';
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
import AuthContext from '../context/AuthContext';
import UserContext from './UserContext';
import AuthApi from '../services/authApi';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default function StepCoordonnees() {

  const [hideStep, setHideStep] = useState(0);

  /*
const [value, setValue] = React.useState('female');


const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-01T21:11:54'));
 
const handleDateChange = (date) => {
setSelectedDate(date);
};


const handleChange = (event) => {
setValue(event.target.value);
};*/

  const context = useContext(SeatsBookingContext);
  const contextUser = useContext(UserContext);

  const [refreshKey, setRefreshKey] = useState(0);

  const decrypt = async () => {
    const token = window.localStorage.getItem('authToken');

    let result = '';

    if (token) {
      const jwtData = jwtDecode(token);

      result = await axios
        .get("https://localhost:8000/user/" + jwtData.username);
    }
    contextUser.setUser(result.data);
    return result;
  }

  React.useEffect(() => {
    decrypt().then(res => {
      if (window.localStorage.getItem('authToken')) {
        setPersonnalData({
          mail: res.data[0].mail,
          gender: res.data[0].gender,
          name: res.data[0].name,
          firstname: res.data[0].firstname,
          street: res.data[0].street,
          building: res.data[0].building,
          addressComplement: res.data[0].addressComplement,
          postalCode: res.data[0].postalCode,
          city: res.data[0].city,
          country: res.data[0].country,
          phone: res.data[0].phone,
          birthday: res.data[0].birthday,
        })
      }
    })
  }, [refreshKey]
  );


  const [personnalData, setPersonnalData] = useState({
    mail: '',
    gender: '',
    name: '',
    firstname: '',
    street: '',
    building: '',
    addressComplement: '',
    postalCode: '',
    city: '',
    country: '',
    phone: '',
    birthday: '',
  })

  const [registrationData, setRegistrationData] = useState({
    email: '',
    emailConfirmation: '',
    password: '',
    passwordConfirmation: '',
    gender: 'female',
    nom: '',
    prenom: '',
    voie: '',
    batiment: '',
    BP: '',
    codePostal: '',
    ville: '',
    pays: '',
    telephone: '',
    birthDate: '',
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
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
      gender: '',
      nom: '',
      prenom: '',
      voie: '',
      batiment: '',
      BP: '',
      codePostal: '',
      ville: '',
      pays: '',
      telephone: '',
      birthDate: '',
    });
    console.log(registrationData);
  }

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
      setRefreshKey(1);
    } catch (errorRequest) {
      setError('error de login');
      console.log(errorRequest);
    }
    decrypt();
    setHideStep(1);
  }

  const hiddenStep = () => {

    if (hideStep === 0) {
      return (<section id="sectionStepCoordonnees">

        <div id="login">
          <h3>Vous avez déjà un compte</h3>
          <p className="subTitle">Connectez-vous</p>
          <form className="login-form" autoComplete="off">
            <FormControl>
              <TextField id="email" label="Email" variant="filled" name="username" value={credentials.username} onChange={handleChange} className={(error && " is-invalid")} />
              {error && <p className="invalid-feedback">{error}</p>}
            </FormControl>
            <FormControl>
              <TextField id="password" label="Mot de passe" variant="filled" name="password" value={credentials.password} onChange={handleChange} type="password" />
            </FormControl>
            <Button type="button" className="nextStep" onClick={handleSubmit}>VALIDER</Button>
          </form>
          <a href="/FakePage">Mot de passe oublié</a>
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
    } else if (hideStep === 1) {
      return (
        <section id="sectionVerifs">
          <h3>VÉRIFIEZ VOS INFORMATIONS PERSONNELLES</h3>
          <form id="verifs">
            <FormControl>
              <TextField id="mail" label="Adresse email *" variant="filled" defaultValue={personnalData.mail} onChange={personnalDataChange} />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Civilité *</FormLabel>
              <RadioGroup aria-label="gender" id="gender" name="gender" defaultValue={personnalData.gender} onChange={personnalDataChange} className="radioGrp">
                <FormControlLabel value="female" control={<Radio />} label="Madame" />
                <FormControlLabel value="male" control={<Radio />} label="Monsieur" />
                <FormControlLabel value="other" control={<Radio />} label="Autre" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <TextField id="name" label="Nom *" variant="filled" defaultValue={personnalData.name} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="firstname" label="Prénom *" variant="filled" defaultValue={personnalData.firstname} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="street" label="N° et libéllé de la voie *" variant="filled" defaultValue={personnalData.street} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="building" label="Immeuble, Bâtiment, Résidence *" variant="filled" defaultValue={personnalData.building} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="addressComplement" label="Lieu-dit, Boîte-postale, etc" variant="filled" defaultValue={personnalData.addressComplement} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="postalCode" label="Code Postal *" variant="filled" defaultValue={personnalData.postalCode} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="city" label="Ville *" variant="filled" defaultValue={personnalData.city} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="country" label="Pays *" variant="filled" defaultValue={personnalData.country} onChange={personnalDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="phone" label="Téléphone *" variant="filled" defaultValue={personnalData.phone} onChange={personnalDataChange} />
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="birthday"
                label="Date de naissance"
                locale='fr'
                format="MM/dd/yyyy"
                defaultValue={personnalData.birthday}
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
              <TextField id="email" label="Adresse email *" variant="filled" value={registrationData.email} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="emailConfirmation" label="Confirmation email *" variant="filled" value={registrationData.emailConfirmation} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="password" label="Mot de passe *" variant="filled" helperText="Votre mot de passe doit comprendre au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre (0-9)." value={registrationData.password} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="passwordConfirmation" label="Confirmation mot de passe *" variant="filled" value={registrationData.passwordConfirmation} onChange={registrationDataChange} />
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Civilité *</FormLabel>
              <RadioGroup aria-label="gender" id="gender" name="gender" value={registrationData.gender} onChange={registrationDataChange} className="radioGrp">
                <FormControlLabel value="female" control={<Radio />} label="Madame" />
                <FormControlLabel value="male" control={<Radio />} label="Monsieur" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <TextField id="nom" label="Nom *" variant="filled" value={registrationData.nom} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="prenom" label="Prénom *" variant="filled" value={registrationData.prenom} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="voie" label="N° et libéllé de la voie *" variant="filled" value={registrationData.voie} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="batiment" label="Immeuble, Bâtiment, Résidence *" variant="filled" value={registrationData.batiment} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="BP" label="Lieu-dit, Boîte-postale, etc" variant="filled" value={registrationData.BP} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="codePostal" label="Code Postal *" variant="filled" value={registrationData.codePostal} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="ville" label="Ville *" variant="filled" value={registrationData.ville} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="pays" label="Pays *" variant="filled" value={registrationData.pays} onChange={registrationDataChange} />
            </FormControl>
            <FormControl>
              <TextField id="telephone" label="Téléphone *" variant="filled" value={registrationData.telephone} onChange={registrationDataChange} />
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