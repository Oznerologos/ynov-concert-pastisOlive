import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import affiche from '../media/img/affiche-rammstein.jpg'
import GoogleMap from './GoogleMap';
import PlanSalle from './PlanSalle';
  
  export default function StepReservation() {

  return (
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
    <div id="planSalleContainer">
            <div id="scene">
              <h4>scène</h4>
            </div>
    <PlanSalle nbplaces={132} maxprice={87}/>
    </div>
    </section>
    
  );
}