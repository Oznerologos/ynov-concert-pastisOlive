import React from 'react'  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css/animate.min.css";
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import StepperConcert from './StepperConcert'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ConcertReservationMain extends React.Component {  

    state = {
        salles:[
            {ville: "Aix-en-Provence"},
            {ville: "Bourges"},
            {ville: "Cannes"},
            {ville: "Dunkerque"},
            {ville: "Echirolles"},     
        ],
        client:[
            {referenceReservation:""},
            {nomClient:""},
            {prenomClient:""},
            {emailClient:""},
            {nombrePersonnes:""},
            {telephoneClient:""},
            {messageClient:""},
            {heureReservation:""},
        ],
    }

    render(){   
    
        return(<main className="concertReservation">

                <StepperConcert/>

            <section id="sectionConcertBooking">

            </section>
        </main>);
    }

}  

export default ConcertReservationMain;