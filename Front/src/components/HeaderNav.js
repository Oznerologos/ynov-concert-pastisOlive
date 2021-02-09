import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../media/img/logo-2.png';
import SeatsBookingContext from './SeatsBookingContext';
import { HashLink as Link } from 'react-router-hash-link';

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

      setCityFilter(){
        this.context.setCityFilter(this.props.id); // Persistance filtre ville        
      }

render() {

    let cart;
    let linkCart;
    const contArray = this.context.seats;

    const persistantIconeContext = JSON.parse(localStorage.getItem("itemsPanier"));
    if((contArray.length > 0) && (contArray !== null)){
        cart = <p>{contArray.length}</p>;
        linkCart =  <NavLink exact to="/ConcertReservation" onClick={() => this.context.setActiveStep(1)} className="purchase"><i className="fas fa-shopping-basket"></i>{cart}</NavLink>
    } else if(persistantIconeContext !== null){
        cart = <p>{persistantIconeContext}</p>;
        linkCart =  <NavLink exact to="/ConcertReservation" onClick={() => this.context.setActiveStep(1)} className="purchase"><i className="fas fa-shopping-basket"></i>{cart}</NavLink>
    } else {
        linkCart = <NavLink exact to="/Programmation" className="purchase"><i className="fas fa-shopping-basket"></i></NavLink>
    }

    return(

        <Navbar bg="dark" expand="lg" sticky="top">
                    <Link exact to="/#topAnchor" className="navbar-brand-link">
                        <Navbar.Brand>
                            <img src={Logo} width="180px" alt="logo"/>
                        </Navbar.Brand>
                    </Link>
                    <div className="linksCont">
                    <div className="navContainer">
                    {/*<NavLink exact to="/Programmation" className="majorLink">PROGRAMMATION</NavLink>*/}
                    <NavDropdown title="PROGRAMMATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={1} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Tous les évènements</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={2} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Aix-en-Provence</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={3} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Bourges</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={4} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Cannes</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={5} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Dunkerque</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/Programmation#programmationAnchor" id={6} onClick={() => this.setCityFilter()}>
                            <NavDropdown.Item>Echirolles</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/FakePage">
                            <NavDropdown.Item id="">Comment réserver?</NavDropdown.Item>
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
                        <LinkContainer exact to="/fakePage">
                            <NavDropdown.Item>Comment venir ?</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer exact to="/FAQ">
                            <NavDropdown.Item>FAQ</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                <Link exact to="/Contact#contactAnchor" className="majorLink">CONTACT</Link>
</div>
                    

    <div className="searchLine">
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2 searchBar w-100" />
      <Button variant="outline-blue"><i className="fas fa-search"></i></Button>
    </Form> 
            </div>
            </div>
            <NavLink exact to="/fakePage" className="accountLink">MON COMPTE</NavLink>
           {linkCart}
            </Navbar>

    )
}

}

export default HeaderNav;