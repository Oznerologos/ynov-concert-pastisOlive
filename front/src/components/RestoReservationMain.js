import React from 'react'  
import { Button } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css/animate.min.css";
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

class RestoReservationMain extends React.Component {  

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

        const salles = this.state.salles.map((salle) => ( <Button variant="contained" size="large" value={salle.ville}>{salle.ville}</Button>));
    
        return(<main className="restoReservation">
            <Row lg={12} className="bg-dark text-white titleCont">
                <Col lg={12}>
                <h1>RESTAURATION - RÉSERVATION</h1>
                </Col>
            </Row>
            <section id="sectionDinerBooking">
                <div id="overlay">
                <div id="sectionContainer">
                <p className="text-light">Réservez dans l'un de nos restaurants et profitez d'un moment de détente.</p>
                <p className="text-light">Les réservations sont uniquement disponibles pour les personnes possédant une référence de réservation de billets de concert.</p>
                <p className="text-light">Remplissez le formulaire ci-dessous pour réserver dans l'un de nos restaurants.</p>
                <form className="restaurant-booking" autoComplete="off">
                    <div id="bookingNumber">
                    <FormControl>
                        <TextField id="referenceReservation" label="N° référence de la réservation du billet" variant="filled"/>
                    </FormControl>
                    </div>
                    <p className="formLabel">Lieu de votre restaurant</p>
                    <div id="restaurantPlace">                   
                    {salles}
                    </div>
                    <p className="formLabel">Heures souhaitées</p>
                    <div id="bookingHour">
                        <Button variant="contained" size="medium" value="18h00">18h00</Button>
                        <Button variant="contained" size="medium" value="18h30">18h30</Button>
                        <Button variant="contained" size="medium" value="19h00">19h00</Button>
                        <Button variant="contained" size="medium" value="19h30">19h30</Button>
                        <Button variant="contained" size="medium" value="20h00">20h00</Button>
                        <Button variant="contained" size="medium" value="20h30">20h30</Button>
                        <Button variant="contained" size="medium" value="21h00">21h00</Button>
                        <Button variant="contained" size="medium" value="21h30">21h30</Button>
                        <Button variant="contained" size="medium" value="22h00">22h00</Button>
                        <Button variant="contained" size="medium" value="22h30">22h30</Button>
                        <Button variant="contained" size="medium" value="23h00">23h00</Button>
                        <Button variant="contained" size="medium" value="23h30">23h30</Button>
                    </div>
                    <p className="formLabel">A propos de vous</p>
                    <div className="inputsBottom">
                        <FormControl>
                            <TextField id="emailClient" label="E-mail" variant="filled"/>
                        </FormControl>
                        <FormControl>
                            <TextField id="nomClient" label="Nom" variant="filled"/>
                        </FormControl>
                        <FormControl>
                            <TextField id="prenomClient" label="Prénom" variant="filled"/>
                        </FormControl>               
                        <FormControl>
                            <TextField id="nombrePersonnes" type="number" label="Nombre de personnes" variant="filled"/>
                        </FormControl>
                        <FormControl>
                            <TextField id="telephoneClient" label="Téléphone" variant="filled"/>
                        </FormControl>
                        <FormControl>
                            <TextField id="messageClient" label="Message (facultatif)" variant="filled" multiline rows={1}/>
                        </FormControl>
                    </div>
                    <Button variant="contained" color="primary" id="bookingValidation" size="large">VALIDER ET RÉSERVER</Button>
                </form>
                </div>
                </div>
            </section>
        </main>);
    }

}  

export default RestoReservationMain;