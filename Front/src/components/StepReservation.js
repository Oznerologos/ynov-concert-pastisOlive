import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMap from './GoogleMap';
import PlanSalle from './PlanSalle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SeatsBookingContext from './SeatsBookingContext';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ConcertContext from './ConcertContext';

const StepReservation = ({method}) => {

  const context = useContext(SeatsBookingContext);
  const contextConcert = useContext(ConcertContext);

  const onChange = (event) => {

    context.setDeliveryPrice(parseFloat(event.currentTarget.value));
    if (parseInt(event.currentTarget.value) === 0) {
      context.setDeliveryMode("E-Ticket");
    } else if (parseInt(event.currentTarget.value) === 8) {
      context.setDeliveryMode("Envoi postal");
    } else {
      context.setDeliveryMode("Retrait au guichet");
    }

  }

  const stepButton = () => {
    localStorage.setItem("reactContext", JSON.stringify(context.seats)); // Persistance sur panier d'achat
    context.setActiveStep(1);
  }
/*
  function dateConvert(date) {
    date = date.toString();
    date = date.split('T');
    date = date[0].split('-');
    for (let i = 0; i < date.length; i++) {
      date[i] = parseInt(date[i]);
    }
    return date;
  }*/
/*
  const concert = () => {
    if (contextConcert.concert != [] && contextConcert.concert != "" && contextConcert.concert != null && contextConcert.concert != undefined) {
      let dateTest = dateConvert(contextConcert.concert["time"]);

      let sub = contextConcert.concert["time"].substring(11, 16);
      sub = sub.split(':');
      contextConcert.concert["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];

      return contextConcert.concert;
    }
  }

  concert();*/

  return (

    <section id="sectionConcertBooking">
      <div className="artistHead">
        <Row lg={12}>
          <Col lg={4} className="verticalCol">
            <h3>{contextConcert.concert ? contextConcert.concert.artist : ""}</h3>
            
            <img src={`affiches/${contextConcert.concert.artistImg}`} alt="affiche-artiste" width="300px" className="afficheConcert" />
          </Col>
          <Col lg={4} className="verticalCol">
            <p>{contextConcert.concert ? method(contextConcert.concert.time) : ""}</p>
            <p>{contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""}</p>
            <p>{contextConcert.concert ? contextConcert.concert.musicType : ""}</p>
          </Col>
          <Col lg={4} className="verticalCol mapContainer">
            <GoogleMap lieu={contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.name : ""} />
          </Col>
        </Row>

      </div>
      <h2 className="stepsT">1. Choisissez vos places sur le plan :</h2>
      <div id="planSalleContainer">
        <div id="scene">
          <h4>scène</h4>
        </div>
        <PlanSalle nbplaces={contextConcert.concert.concertRoom ? contextConcert.concert.concertRoom.placeNumber : 100} maxprice={contextConcert.concert.concertRoom ? contextConcert.concert.maxPrice : 100} selectedPlaces={null} viewonly={0}/>
      </div>

      <div id="ordersRecap">
        <p>Nombre de places choisies:</p>

        {context.seats.map((key, index) => {
          return <div className="resaLine" key={index}>
            <p className="indexRecap">{index + 1}.</p>
            <p className="recap">Place {key.id.slice(1)}, Rang {key.id.slice(0, 1)}</p>
            <p>{key.price}</p>
          </div>
        })
        }
        <p>Vous avez choisi <span className="bold">{context.seats.length}</span> places pour un montant total de <span className="bold">{context.prices} €</span></p>
      </div>

      <h2 className="stepsT">2. Choisissez le mode d'obtention des billets :</h2>
      <div id="obtainingMod">
        <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={onChange}>
          <FormControlLabel
            value="0"
            control={<Radio color="primary" />}
            label="E-Ticket (gratuit)"
            labelPlacement="end"
          />
          <FormControlLabel
            value="1.80"
            control={<Radio color="primary" />}
            label="Retrait au guichet (1,80 €)"
            labelPlacement="end" className="centerBorder"
          />
          <FormControlLabel
            value="8"
            control={<Radio color="primary" />}
            label="Envoi postal (8,00 €)"
            labelPlacement="end"
          />
        </RadioGroup>
        <div id="rightObtCol">
          <div>
            <p>Imprimez vos billets chez vous dès la fin de votre commande et recevez-les également par e-mail en format pdf.</p>
          </div>
          <div className="centerBorder">
            <p>Retirez vos billets auprès de nos guichets (comprend des frais de transaction).</p>
          </div>
          <div>
            <p>Recevez vos billets à votre domicile ou sur votre lieu de travail.</p>
            <p>Envoi suivi avec remise contre signature. Livraison sous 24 à 48h.</p>
          </div>
        </div>
      </div>

      <div id="stepperButtonsCont">
        <NavLink exact to={`/Concert?artist=${contextConcert.concert.artist}`} className="cancelStep">ANNULER</NavLink>
        <Button onClick={stepButton} className="nextStep">VALIDER</Button>
      </div>

    </section >

  );
}

export default StepReservation