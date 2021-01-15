import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

class FooterNav extends React.Component {

    emailInput = React.createRef()

    state = {
      inscriptionNewsletter:[
        {emailClient:""},
        {feedback:""},
      ],
    }
  
  handleSubmit = (event) => {
    event.preventDefault();


      let lastAtPos = this.state.emailClient.lastIndexOf('@');
      let lastDotPos = this.state.emailClient.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.emailClient.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.emailClient.length - lastDotPos) > 2)) {
        this.setState({feedback: <Alert variant="danger">Désolé, l'adresse <span className="bold">{this.state.emailClient}</span> n'est pas une adresse valide.</Alert>});
       } else {
        this.setState({feedback: <Alert variant="success">
          <p className="no-marge">Votre inscription à notre newsletter a bien été prise en compte. Vous recevrez nos dernières actualités à l'adresse <span className="bold">{this.state.emailClient}</span>. Merci !</p>
        </Alert>});
       }
      

    

  }
  
  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ emailClient: value});
  }

    render() {

        return(
        <footer>
          <div className="footerContainer">
            <Row lg={12} className="firstRow">
            <Col lg={1}></Col>
              <Col lg={5}>
            
                <h2 className="bold">Réseaux sociaux</h2>

                <p className="no-marge">Suivez-nous sur nos réseaux sociaux pour</p>
                <p>vous tenir informé des concerts à venir !</p>
                <div className="iconsContainer">
                <NavLink exact to="/fakePage">                
                    <i className="fab fa-facebook-f"></i>  
                </NavLink>
                <NavLink exact to="/fakePage">
                    <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink exact to="/fakePage">
                    <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink exact to="/fakePage">
                    <i className="fab fa-youtube"></i>
                </NavLink>
                </div>
              </Col>
                <Col lg={5} className="flex-center">
                <h2 className="bold">Newsletter</h2>
                <p className="no-marge">Recevez notre newsletter pour ne manquer</p>
                <p>aucune information.</p>
                <Form>
                  <Row lg={10}>
                    <Col lg={7} className="noRightPadding">
                      <Form.Control type="email" placeholder="E-mail" onChange={this.handleChange}/>
                      </Col>
                      <Col lg={3}>
                  <Button className="newsletterBtn" variant="contained" onClick={this.handleSubmit}>VALIDER</Button>
                  </Col>
                  </Row>
                </Form>
                {this.state.feedback}
                </Col>
            </Row>
            <Row lg={12} className="lastRow">
            <Col lg={1}></Col>
              <Col lg={2}>
              <div className="column-f">
                <h5>PROGRAMMATION</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">Tous les évènements</NavLink></li>
                  <li><NavLink exact to="/fakePage">Aix-en-Provence</NavLink></li>
                  <li><NavLink exact to="/fakePage">Bourges</NavLink></li>
                  <li><NavLink exact to="/fakePage">Cannes</NavLink></li>
                  <li><NavLink exact to="/fakePage">Dunkerque</NavLink></li>
                  <li><NavLink exact to="/fakePage">Echirolles</NavLink></li>
                  <li><NavLink exact to="/fakePage">Comment réserver ?</NavLink></li>
                </ul>
              </div>
              </Col>
              <Col lg={2}>
              <div className="column-f">
                <h5>RESTAURATION</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">Présentation</NavLink></li>
                  <li><NavLink exact to="/fakePage">Réserver</NavLink></li>
                </ul>
                </div>
                <div className="column-f">
                <h5>PARKING</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">Présentation</NavLink></li>
                  <li><NavLink exact to="/fakePage">Réserver</NavLink></li>
                </ul>
                </div>
              </Col>
              <Col lg={2}>
              <div className="column-f">
                <h5>PRIVATISATION</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">Présentation</NavLink></li>
                  <li><NavLink exact to="/fakePage">Réserver</NavLink></li>
                </ul>
                </div>
                <div className="column-f">
                <h5>ACTUALITÉS</h5>
                </div>
              </Col>
              <Col lg={2}>
              <div className="column-f">
                <h5>INFOS PRATIQUES</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">Comment venir ?</NavLink></li>
                  <li><NavLink exact to="/fakePage">FAQ</NavLink></li>
                </ul>
                </div>
                <div className="column-f">
                <h5>CONTACT</h5>
                </div>
              </Col>
              <Col lg={2}>
              <div className="column-f">
                <h5>POLITIQUES</h5>
                <ul>
                  <li><NavLink exact to="/fakePage">CGU</NavLink></li>
                  <li><NavLink exact to="/fakePage">Mentions légales</NavLink></li>
                </ul>
                </div>
              </Col>
              <Col lg={1}></Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <p className="no-marge">© 2021 Symfony Concert - Tous droits réservés</p>
                </Col>
              </Row>
          </div>
            
        </footer>
        )
    };
};


export default FooterNav;