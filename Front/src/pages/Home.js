import React, { useState, useContext } from 'react'
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import CarouselActu from '../components/CarouselActu';
import { NavLink } from 'react-router-dom';
import salleConcert from '../media/img/salle-concert.jpg';
import axios from 'axios';
import SeatsBookingContext from '../components/SeatsBookingContext';

const Home = () => {

    const context = useContext(SeatsBookingContext);

    const [refreshKey] = useState(0);

    const getConcerts = async () => {
        let result = await axios(
            'https://localhost:8000/concert',
        );
        // return the result
        return result;
    };

    const getActus = async () => {
        let result = await axios(
            'https://localhost:8000/news',
        );
        // return the result
        return result;
    };

    const [data, setDataConcerts] = React.useState([]);
    const [dataNews, setDataNews] = React.useState([]);

    React.useEffect(() => {
        getConcerts().then(res => {
            setDataConcerts(res.data)
        })
        getActus().then(res => {
            setDataNews(res.data)
        })
    }, [refreshKey]);

    function dateConvert(date) {
        let dateIntermediaire = date;
        dateIntermediaire = dateIntermediaire.toString();
        dateIntermediaire = dateIntermediaire.split('T');
        dateIntermediaire = dateIntermediaire[0].split('-');

        for (let i = 0; i < dateIntermediaire.length; i++) {
            dateIntermediaire[i] = parseInt(dateIntermediaire[i]);
        }

        let sub = date.substring(11, 16);
        sub = sub.split(':');
        date = "Le " + dateIntermediaire[2] + "/" + dateIntermediaire[1] + "/" + dateIntermediaire[0] + " à " + sub[0] + "H" + sub[1];

        return date;
    }

    const setCityFilt = (i) => {
        const today = new Date();
        context.setCityFilter(i); // Persistance filtre ville  
        context.setCategorie('Toutes');  
        context.setDateDebutFilter(today);
        context.setDateFinFilter(new Date(today.getTime() + 86400000 * 60));  
      }

    return (
        <div id="topAnchor">
            <HeaderNav />
            <main id="homeMain">
                <CarouselActu data={data} render={dateConvert}></CarouselActu>
                <section id="homeSection">
                    <div id="homeSectionCont">
                        <h3>PROCHAINEMENT DANS NOS SALLES</h3>
                        <div id="programmationContainer">
                            {
                                (data) ?
                                    (data.map((element, index) => {
                                        return <NavLink exact to={"/concert?artist=" + element.artist} key={index} className="cardProgrammation">
                                            <div className="programmationHomePicture">
                                                <div style={{ backgroundImage: `URL(/affiches/${element.artistImg})` }}></div>
                                            </div>
                                            <div className="programmationDetail">
                                                <p className="bold">{element.artist}</p>
                                                <p>{dateConvert(element.time)} </p>
                                                <p>{element.concertRoom.name}</p>
                                                <p>{element.musicType}</p>
                                                <p to="/Programmation" className="cardBtn">Réserver</p>
                                            </div>
                                        </NavLink>
                                    })) : (<p>Chargement</p>)
                            }
                        </div>
                        <NavLink exact to="/Programmation" className="sectionBtn" onClick={() => setCityFilt(1)}>VOIR TOUTE LA PROGRAMMATION</NavLink>

                        <h3>ACTUALITÉS</h3>
                        <div id="actualiteContainer">
                            {
                                (dataNews) ?
                                    (dataNews.map((element, index) => {
                                        return <NavLink exact to="/fakePage" key={index} className="cardActu">
                                            <div className="actualitePicture">
                                                <div style={{ backgroundImage: `URL(https://picsum.photos/320/150?img=${index})` }}></div>
                                                {/*<img src={`https://picsum.photos/1000/1000?img=${index}`} height={150} alt="" />*/}
                                            </div>
                                            <div className="actualiteDetail">
                                                <p>{element.title}</p>
                                                <p>{element.content}</p>
                                                <p to="/fakePage" className="cardBtn">En savoir plus</p>
                                            </div>
                                        </NavLink>

                                    })) : (<p>Chargement</p>)
                            }
                        </div>

                        <NavLink exact to="/fakePage" className="sectionBtn">VOIR TOUTES LES ACTUALITÉS</NavLink>

                        <h3>DES SALLES A VOTRE DISPOSITION</h3>
                        <div id="privatisationContainer">
                            <img src={salleConcert} alt="salleconcert" />
                            <div id="privatisationRightCont">
                                <div id="privatisationDescription">
                                    <p>Lorem ipsum dolor sit, amet consectetur ur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.
                </p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ullam illo consectetur cumque sequi nihil autem nisi laudantium sunt libero quo eum architecto dolores, reiciendis id a voluptatum harum porro.</p>
                                </div>
                                <NavLink exact to="/PrivatisationPresentation" className="sectionBtn">PRIVATISER</NavLink>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <FooterNav />
        </div >
    );
};

export default Home;