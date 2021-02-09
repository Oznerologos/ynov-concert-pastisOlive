import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mask from '../media/img/mask.png';
import { NavLink } from 'react-router-dom';

class CarouselActu extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {

        const data = this.props.data;
        const dateRender = this.props.render;

        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <Carousel interval={null}>
                        {data.map((element, index) => {
                                        return(
                                            <Carousel.Item key={index}>
                                            <div className="flexCont">
                                            
                                                <Carousel.Caption>
                                                    <h3>{element.artist}</h3>
                                                    <p>{dateRender(element.time)} à {element.concertRoom.name}</p>
                                                    <NavLink exact to={"/Concert?artist=" + element.artist} className="carouselActuBtn">INFOS & BILLETS</NavLink>
                                                </Carousel.Caption>
                                                <div className="parallelogram-container">
                                                    <img className="parallelogram" style={{ backgroundImage: `URL(/affiches/${element.artistImg})` }} src={mask} alt="test" />
                                                </div>
            
                                            </div>
                                        </Carousel.Item> 
                                        )
                                    })
                                    }
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    };
}

export default CarouselActu;
