import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import menu from '../media/img/menu.png';
import { Button } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import affiche from '../media/img/affiche-rammstein.jpg'
import GoogleMap from './GoogleMap';
  
  export default function StepReservation() {

  return (
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
        <PlanSalle/>
        
        </Col>
      </Row>

    </div>
  );
}