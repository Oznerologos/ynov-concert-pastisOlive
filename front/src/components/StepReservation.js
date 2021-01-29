import React, {useState, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import affiche from '../media/img/affiche-rammstein.jpg'
import GoogleMap from './GoogleMap';
import PlanSalle from './PlanSalle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SeatsBookingContext from './SeatsBookingContext';

  
  export default function StepReservation() {

    const [seats, setSeats] = useState([]);
    const [prices, setPrices] = useState(0);
    const [salle, setSalle] = useState(PlanSalle);

    const contextValue = {seats, setSeats, prices, setPrices, salle, setSalle}

  return (
    <SeatsBookingContext.Provider value={contextValue}>
    <section id="sectionConcertBooking">
    <div className="artistHead">
      <Row lg={12}>
        <Col lg={4} className="verticalCol">
          <h3>Nom de l'artiste</h3>
          <img src={affiche} alt="affiche-artiste" width="300px" className="afficheConcert"/>
        </Col>
        <Col lg={4} className="verticalCol">
          <p>Date et heure</p>
          <p>Lieu</p>
          <p>Catégorie de musique</p>
        </Col>
        <Col lg={4} className="verticalCol mapContainer">
        <GoogleMap lieu="Aix"/>       
        </Col>
      </Row>
      
    </div>
    <h2 className="stepsT">1. Choisissez vos places sur le plan :</h2>
    <div id="planSalleContainer">
            <div id="scene">
              <h4>scène</h4>
            </div>
    <PlanSalle nbplaces={132} maxprice={87}/>
    </div>

    <div id="ordersRecap">
      <p>Nombre de places choisies:</p>
    
    {seats.map((key, index) => {
        return <div className="resaLine">
          <p>{index+1}.</p>
          <p>Place {key.id}</p>
          <p>{key.price}</p>
        </div>
    })
  }
  <p>Vous avez choisi <span className="bold">{seats.length}</span> places pour un montant total de <span className="bold">{prices} €</span></p>
    </div>

    <h2 className="stepsT">2. Choisissez le mode d'obtention des billets :</h2>
    <div id="obtainingMod">
    <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="e-ticket"
          control={<Radio color="primary" />}
          label="E-Ticket (gratuit)"
          labelPlacement="end"
        />
        <FormControlLabel
          value="retrait"
          control={<Radio color="primary" />}
          label="Retrait au guichet (1,80 €)"
          labelPlacement="end" className="centerBorder"
        />
        <FormControlLabel
          value="envoi"
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

    </section>
    </SeatsBookingContext.Provider>
  );
}