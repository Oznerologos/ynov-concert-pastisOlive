import React, { useState, useContext } from 'react';
import SeatsBookingContext from './SeatsBookingContext';
import Button from 'react-bootstrap/Button';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Loader from './ProgressCircle';
import ConcertContext from './ConcertContext';
import UserContext from './UserContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from "react-alert";

const StepPaiement = ({ method }) => {

  const context = useContext(SeatsBookingContext);
  const contextConcert = useContext(ConcertContext);
  const contextUser = useContext(UserContext);

  const [refreshKey] = useState(0);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let in_voiceDate = new Date().toLocaleDateString();
  let reference = Math.floor(Math.random() * (
    999999 - 100000) + 100000);
  let query = useQuery();
  let paramId = "";
  paramId = query.get("id");

  const [dataInVoice, setDataInVoice] = React.useState([])
  const [dataReservation, setDataReservation] = React.useState([])

  contextUser.setReservation(dataReservation);

  let in_voice = { user: contextUser.user[0].id, date: in_voiceDate };
  let reservation = "";

  const newInVoice = async () => {
    let result = await axios
      .post("https://localhost:8000/invoice/new", in_voice
      );
    // return the result
    return result;
  };

  const newReservation = async () => {
    reservation = { concert: paramId, invoice: JSON.stringify(dataInVoice), reference: reference, totalPrice: (parseInt(context.prices) + parseFloat(context.deliveryPrice)), ticketType: context.deliveryMode, seats: JSON.stringify(context.seats) };
    let result2 = await axios.post("https://localhost:8000/reservation/new", reservation);
    return result2;
  }

  React.useEffect(() => {
    newInVoice().then(res => {
      setDataInVoice(res.data)
    });
  }, [refreshKey]);

  const alert = useAlert();

  const [loader, setLoader] = useState(false);

  const load = () => {
    newReservation().then(res => {
      setDataReservation(res.data)
    });
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      context.setActiveStep(4);
    }, 2000);
    // Réinitialisation panier d'achat
    context.setPurchases(0);
    localStorage.removeItem("itemsPanier");
    localStorage.removeItem("reactContext");
  };

  return (

    <section id="sectionStepPanier">

      <div id="panierRecap">
        <h2>BONJOUR {contextUser.user[0].name}</h2>
        <h3>Récapitulatif de votre panier</h3>
        <div id="tableContainer">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>N°</th>
                <th colSpan={2}>Nombre de places</th>
                <th colSpan={2}>Artiste / Groupe</th>
                <th colSpan={2}>Lieu</th>
                <th colSpan={2}>Date et heure</th>
                <th colSpan={2}>Catégorie de tarifs</th>
                <th colSpan={2}>Tarif</th>
              </tr>
            </thead>
            <tbody>
              {context.seats.map((key, index) => {
                return <tr key={index}>
                  <td colSpan={2}>{index + 1}</td>
                  <td colSpan={2}>1 place</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.artist : ""}</td>
                  <td colSpan={2}>{contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? method(contextConcert.concert.time) : ""}</td>
                  <td colSpan={2}>{contextConcert.concert ? contextConcert.concert.category : ""}</td>
                  <td colSpan={2}>{key.price}</td>
                </tr>
              })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div id="obtentionRecap">
        <p>Obtention des billets:</p>
        <p>{contextConcert.concert ? contextConcert.concert.artist : ""}</p>
        <p>{context.deliveryMode}</p>
        <p>{parseFloat(context.deliveryPrice).toFixed(2)} €</p>
      </div>
      <div id="totalPanierPaiement">
        <div className="cont">
          <h4>MONTANT TOTAL DU PANIER</h4>
          <h4 id="totalWithDelivery">{(parseInt(context.prices) + parseFloat(context.deliveryPrice)).toFixed(2)} €</h4>
        </div>
      </div>

      <h3 id="paiementTitle">Votre paiement</h3>
      <div id="paiementCont">
        <div id="paiement">

          <p>Veuillez saisir les informations de votre paiement:</p>
          <form id="billing">
            <div id="creditCardsContainer">
              <FormControl component="fieldset">
                <RadioGroup aria-label="bankCard" name="bankCard">
                  <FormControlLabel value="visa" control={<Radio />} label={<i className="fab fa-cc-visa"></i>} />
                  <FormControlLabel value="mastercard" control={<Radio />} label={<i className="fab fa-cc-mastercard"></i>} />
                  <FormControlLabel value="americanexpress" control={<Radio />} label={<i className="fab fa-cc-amex"></i>} />
                </RadioGroup>
              </FormControl>
            </div>
            <FormControl>
              <TextField id="email" label="Numéro de carte" type="number" variant="filled" />
            </FormControl>
            <div id="expiration">
              <p>Date d'expiration:</p>
              <FormControl>
                <TextField id="expirationMonth" label="Mois" type="number" variant="filled" InputProps={{
                  inputProps: {
                    max: 12, min: 1
                  }
                }} />
              </FormControl>
              <FormControl>
                <TextField id="expirationYear" label="Année" type="number" variant="filled" InputProps={{
                  inputProps: {
                    max: 2025, min: 2021
                  }
                }} />
              </FormControl>
            </div>
            <FormControl>
              <TextField id="cryptogram" label="Cryptogramme visuel" type="number" variant="filled" InputProps={{
                inputProps: {
                  maxLength: 3
                }
              }} />
            </FormControl>

          </form>

        </div>
        <div id="stepperButtonsCont">

          <Button onClick={() => {
            alert.show("Êtes-vous sur(e) de vouloir annuler ?", {
              title: "ATTENTION",
              closeCopy: "NON",
              actions: [
                {
                  copy: "OUI",
                  onClick: () => { context.setActiveStep(1) }
                },
              ]
            });
          }} className="cancelStep">ANNULER</Button>
          <Button onClick={() => load()} className="nextStep">VALIDER ET PAYER</Button>
        </div>
      </div>
      {
        loader ?

          <Loader></Loader>

          :

          <div></div>
      }

    </section>

  );
}

export default StepPaiement