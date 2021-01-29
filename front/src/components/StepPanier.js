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

    const context = useContext(SeatsBookingContext);

  return (

    <section id="sectionConcertBooking">
    {context.PlanSalle}

    </section>

  );
}