import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../media/img/logo-2.png';
import SeatsBookingContext from './SeatsBookingContext';

class HeaderNav extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
      }

      static contextType = SeatsBookingContext;
    
      handleOpen = () => {
        this.setState({ isOpen: true })
      }
    
      handleClose = () => {
         this.setState({ isOpen: false })
      }

render() {

    let cart;
        if(this.context.purchases !== null){
            cart = <p>{this.context.purchases}</p>;
        }

    return(

        <Navbar bg="dark" expand="lg" sticky="top">
                    <NavLink to="/" className="navbar-brand-link">
                        <Navbar.Brand>
                            <img src={Logo} width="180px" alt="logo"/>
                        </Navbar.Brand>
                    </NavLink>
                    <div className="linksCont">
                    <div className="navContainer">
                    <NavDropdown to="/fakePage" title="PROGRAMMATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Tous les évènements</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Aix-en-Provence</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Bourges</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Cannes</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Dunkerque</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Echirolles</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Comment réserver ?</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="RESTAURATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/RestaurationPresentation">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/RestaurationReservation">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                <NavDropdown title="PARKING" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                <NavDropdown title="PRIVATISATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/PrivatisationPresentation">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <NavLink exact to="/fakePage" className="majorLink">ACTUALITÉS</NavLink>

                <NavDropdown title="INFOS PRATIQUES" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Comment venir ?</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/FAQ">
                            <NavDropdown.Item>FAQ</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                <NavLink exact to="/Contact" className="majorLink">CONTACT</NavLink>
</div>
                    

    <div className="searchLine">
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2 searchBar w-100" />
      <Button variant="outline-blue"><i className="fas fa-search"></i></Button>
    </Form> 
            </div>
            </div>
            <NavLink exact to="/fakePage" className="accountLink">MON COMPTE</NavLink>
            <NavLink exact to="/fakePage" className="purchase"><i className="fas fa-shopping-basket"></i>{cart}</NavLink>
            </Navbar>

    )
}

}

export default HeaderNav;