import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mask from '../media/img/mask.png';
import affiche from '../media/img/affiche-rammstein.jpg'
import Button from 'react-bootstrap/Button';

class CarouselActu extends React.Component {


    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <Carousel interval={null}>

                            <Carousel.Item>
                                <div className="flexCont">
                                    <Carousel.Caption>
                                        <h3>GROUP TITLE</h3>
                                        <p>Dates and location of the concert</p>
                                        <Button variant="outline-blue">INFOS & BILLETS</Button>
                                    </Carousel.Caption>
                                    <div className="parallelogram-container">
                                        <img className="parallelogram" style={{ backgroundImage: 'URL(https://picsum.photos/1000/1000?img=1)' }} src={mask} alt="test" />
                                    </div>

                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="flexCont">

                                    <div className="parallelogram-container">
                                        <img className="parallelogram" style={{ backgroundImage: 'URL(https://picsum.photos/1000/1000?img=2)' }} src={mask} alt="test" />
                                    </div>
                                    <Carousel.Caption>
                                        <h3>GROUP TITLE</h3>
                                        <p>Dates and location of the concert</p>
                                        <Button variant="outline-blue">INFOS & BILLETS</Button>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="flexCont">
                                    <Carousel.Caption>
                                        <h3>GROUP TITLE</h3>
                                        <p>Dates and location of the concert</p>
                                        <Button variant="outline-blue">INFOS & BILLETS</Button>
                                    </Carousel.Caption>
                                    <div className="parallelogram-container">
                                        <img className="parallelogram" style={{ backgroundImage: 'URL(https://picsum.photos/1000/1000?img=3)' }} src={mask} alt="test" />
                                    </div>

                                </div>
                            </Carousel.Item>


                            <Carousel.Item>
                                <div className="flexCont">

                                    <div className="parallelogram-container">
                                        <img className="parallelogram" style={{ backgroundImage: `url(${affiche})` }} src={mask} alt="test" />
                                    </div>
                                    <Carousel.Caption>
                                        <h3>GROUP TITLE</h3>
                                        <p>Dates and location of the concert</p>
                                        <Button variant="outline-blue">INFOS & BILLETS</Button>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
            </div>
        )
    };
}

export default CarouselActu;
