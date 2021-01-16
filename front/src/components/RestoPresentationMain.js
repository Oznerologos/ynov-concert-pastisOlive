import React from 'react'  
import { Button } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import Modal from '@material-ui/core/Modal';
import menu from '../media/img/menu.png';
import ModalResto from './SimpleModal';

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
                    <Fade left>  
                        <p className="text-justify text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo enim, totam autem reiciendis distinctio officia aliquam eligendi quas saepe sed veniam ipsa cupiditate esse architecto harum assumenda ducimus ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maximeollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>                      
                        </Fade>
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
                        <Fade right>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                        <p className="text-justify text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nostrum molestiae? Reprehenderit nobis sed mollitia sint totam! Laudantium, repudiandae rerum, accusamus cupiditate sit hic, quasi blanditiis laboriosam explicabo et ullam!</p>
                        </Fade>
                    </Col>
                </Row>
            </section>
            <div className="btnContainer">
                    <ModalResto/>
                    <Button variant="contained" id="btn2" size="large" href="/RestaurationReservation">
                        RÉSERVER
                    </Button>
                    </div>
        </main>);
    }

}  

export default RestoPresentationMain;