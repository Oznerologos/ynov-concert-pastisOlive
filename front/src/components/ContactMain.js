import React from 'react'  
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import contactTitle from '../media/img/contact2.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelect from './citiesSelect'
import Icon from '@material-ui/core/Icon';

class ContactMain extends React.Component {  

    state = {
        salles:[
          {ville: "Aix-en-Provence"},
          {ville: "Bourges"},
          {ville: "Cannes"},
          {ville: "Dunkerque"},
          {ville: "Echirolles"},     
        ],
        client:[
          {nomClient:""},
          {prenomClient:""},
          {entrepriseClient:""},
          {emailClient:""},
          {telephoneClient:""},
          {messageClient:""},
        ],
      }
    
    handleSubmit = (event) => {
      event.preventDefault();
    
      alert("Message Envoyé. Merci ");
    }
    
    handleChange = (event) => {
      const value = event.currentTarget.value;
      this.setState({ prenomClient: value});
    }

    
    
      render(){
    
        const title = "CONTACT";
        const salles = this.state.salles.map((salle) => (<MenuItem value={salle.ville}>{salle.ville}</MenuItem>))
    
        return(<main className="contact">
                    <img src={contactTitle}/>
          <form className="contact-form" autoComplete="off">
            <Row className="inputsLine" lg={12}>
                <Col lg={4}>
                    <FormControl>
                        <TextField id="nomClient" label="Nom" variant="filled" value={this.state.nomClient} onChange={this.handleChange}/>
                    </FormControl>
                </Col>
                <Col lg={4}>
                    <FormControl>
                        <TextField id="prenomClient" label="Prenom" variant="filled" value={this.state.prenomClient} onChange={this.handleChange}/>
                    </FormControl>
                </Col>
                <Col lg={4}>
                    <FormControl>
                        <TextField id="entrepriseClient" label="Entreprise" variant="filled" value={this.state.entrepriseClient} onChange={this.handleChange}/>
                    </FormControl>
                </Col>
            </Row>
            <Row className="inputsLine" lg={12}>
                <Col lg={4}>
                    <FormControl>
                        <TextField id="emailClient" label="Email" variant="filled" aria-describedby="email-helper"  value={this.state.emailClient} onChange={this.handleChange}/>
                        {/*<FormHelperText id="email-helper">Nous ne partagerons jamais votre email avec des tiers.</FormHelperText> */}
                    </FormControl>
                </Col>
                <Col lg={4}>
                    <FormControl>
                        < TextField id="telephoneClient" label="Téléphone" variant="filled" value={this.state.telephoneClient} onChange={this.handleChange}/>
                    </FormControl>
                </Col>
                <Col lg={4}>
                    <FormControl>
                        <CustomSelect></CustomSelect>
                        {/*
                        <TextField id="selectSalles" label="Salles" value="salles" variant="filled" select>
                            {salles}
                            <MenuItem value="Aix-en-Provence">Aix-en-Provence</MenuItem>
                            <MenuItem value="Bourges">Bourges</MenuItem>
                            <MenuItem value="Cannes">Cannes</MenuItem>
                            <MenuItem value="Dunkerque">Dunkerque</MenuItem>
                            <MenuItem value="Echirolles">Echirolles</MenuItem>
                        </TextField>*/}
                    </FormControl>
                </Col>
            </Row>
            <Row className="inputsLine" lg={12}>
                <Col lg={12}>
                    <FormControl>
                        <TextField id="messageClient" label="Message" variant="filled" multiline rows={4} value={this.state.messageClient} onChange={this.handleChange}/>
                    </FormControl>

                </Col>
            </Row>
            <Button variant="contained" endIcon={<Icon>send</Icon>} onClick={this.handleSubmit} color="primary">ENVOYER</Button>
        </form>
         
        </main>);
    }

}  
  
export default ContactMain;