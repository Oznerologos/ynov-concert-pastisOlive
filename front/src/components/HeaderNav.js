import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../media/img/logo-2.png'

class HeaderNav extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
      }
    
      handleOpen = () => {
        this.setState({ isOpen: true })
      }
    
      handleClose = () => {
         this.setState({ isOpen: false })
      }

render() {

    return(

        <Navbar bg="dark" expand="lg" sticky="top">
                    <NavLink to="/" className="navbar-brand-link">
                        <Navbar.Brand>
                            <img src={Logo} width="180px"/>
                        </Navbar.Brand>
                    </NavLink>
                    <div className="linksCont">
                    <Row className="navContainer" lg={12}>
                <Col lg={2}>
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
                </Col>
                <Col lg={2}>
                    <NavDropdown title="RESTAURATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/RestaurationPresentation">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Col>
                <Col lg={2}>
                <NavDropdown title="PARKING" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Col>
                <Col lg={2}>
                <NavDropdown title="PRIVATISATION" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Présentation</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Réserver</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">ACTUALITÉS</NavLink>
                </Col>
                <Col lg={2}>
                <NavDropdown title="INFOS PRATIQUES" id="nav-dropdown" renderMenuOnMount={true}>
                        <LinkContainer to="/fakePage">
                            <NavDropdown.Item>Comment venir ?</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/FAQ">
                            <NavDropdown.Item>FAQ</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Col>
                <Col lg={1}>
                <NavLink exact to="/Contact">CONTACT</NavLink>
                </Col>
                </Row>
                    

    <Row lg={12} className="searchLine">
        <Col lg={2}></Col>
        <Col lg={8}>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2 searchBar" />
      <Button variant="outline-blue"><i className="fas fa-search"></i></Button>
    </Form> 
    </Col>
        <Col lg={2}></Col>
            </Row>
            </div>
            <NavLink exact to="/fakePage" className="accountLink">MON COMPTE<i className="fas fa-shopping-basket"></i></NavLink>
            </Navbar>

    )
}

}

export default HeaderNav;