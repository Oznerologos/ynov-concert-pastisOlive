import React from 'react'  
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelect from './citiesSelect'
import Icon from '@material-ui/core/Icon';
import Resto2 from '../media/img/resto3.jpg'
import Resto1 from '../media/img/resto1.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

class RestoPresentationMain extends React.Component {  

    render(){   
    
        return(<main className="restoPresentation">
            <Row lg={12} className="bg-dark text-white titleCont">
                <Col lg={12}>
                <h1>RESTAURATION - PRÉSENTATION</h1>
                </Col>
            </Row>
            <section>
                <Row lg={12} className="firstRestaurantRow dinerRow">
                    <Col lg={7}>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo enim, totam autem reiciendis distinctio officia aliquam eligendi quas saepe sed veniam ipsa cupiditate esse architecto harum assumenda ducimus ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                    </Col>
                    <Col lg={5}>
                        <Fade right>
                            <div className="dinerPicture" id="resto1"></div>
                            </Fade>
                    </Col>
                </Row>
                <Row lg={12} className="dinerRow">
                    <Col lg={5}>
                        <Fade left>
                            <div className="dinerPicture" id="resto2"></div>                      
                        </Fade>
                    </Col>
                    <Col lg={7}>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                    </Col>
                </Row>
            </section>
            <div className="btnContainer">
                    <Button variant="contained" className="bg-dark text-white" size="large" href="/fakePage">
                        LA CARTE
                    </Button>
                    <Button variant="contained" id="btn2" size="large" href="/fakePage">
                        RÉSERVER
                    </Button>
                    </div>
        </main>);
    }

}  

export default RestoPresentationMain;