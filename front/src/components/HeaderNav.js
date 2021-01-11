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
        <Navbar bg="dark" expand="lg">
            <Row className="navContainer" lg={10}>
                <Col lg={2}>
                    <NavLink to="/Home">
                        <Navbar.Brand>
                            <i className="fas fa-music"></i>
                            <h4>Symfony Concert</h4>
                        </Navbar.Brand>
                    </NavLink>
                </Col>
                <Col lg={1}>
                    <NavDropdown title="PROGRAMMATION" id="nav-dropdown" renderMenuOnMount={true}>
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
                <Col lg={1}>
                    <NavLink exact to="/fakePage">RESTAURATION</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">PARKING</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">PRIVATISATION</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">ACTUALITÉS</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">INFOS PRATIQUES</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">CONTACT</NavLink>
                </Col>
                <Col lg={1}>
                    <NavLink exact to="/fakePage">MON COMPTE/CRÉER UN COMPTE</NavLink>
                </Col>
            
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact to="/fakePage">Home</NavLink>
      <NavLink exact to="/fakePage">Link</NavLink>
      <NavDropdown title="Dropdown" id="nav-dropdown" renderMenuOnMount={true}>
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Dropdown2" id="nav-dropdown" renderMenuOnMount={true}>
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-blue"><i className="fas fa-search"></i></Button>
    </Form>
  </Navbar.Collapse>
            </Row>
            
</Navbar>

    )
}

}

export default HeaderNav;