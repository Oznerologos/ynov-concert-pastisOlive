import React, { useState } from 'react'
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import CarouselActu from '../components/CarouselActu';
import { NavLink } from 'react-router-dom';
import salleConcert from '../media/img/salle-concert.jpg';
import axios from 'axios';

const Home = () => {

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
/*
    const findMinPrice = (maxPrice, nbPlaces) => {
        const nbLigne = ((nbPlaces - (nbPlaces % 12)) / 12) + 1;
        const minPrice = Math.round(maxPrice - (maxPrice * (5 * nbLigne) / 100));
        return minPrice;
    }

    const concerts = () => {
        let resultConcerts = [];

        if (data[0] != undefined) {
            for (let i = 0; i < data.length; i++) {
                let dateTest = dateConvert(data[i]["time"]);

                let sub = data[i]["time"].substring(11, 16);
                sub = sub.split(':');
                data[i]["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];
                //resultCards.push(data[i]);

                let subDate = data[i]["date"].substring(11, 16);
                subDate = subDate.split(':');
                data[i]["date"] = date[2] + "/" + date[1] + "/" + date[0];

                let subTime = data[i]["time"].substring(11, 16);
                subTime = subTime.split(':');
                data[i]["time"] = subTime[0] + "H" + subTime[1];

                let subOpen = data[i]["timeOpen"].substring(11, 16);
                subOpen = subOpen.split(':');
                data[i]["timeOpen"] = subOpen[0] + "H" + subOpen[1];
                resultConcerts.push(data[i]);

                let minPrice = findMinPrice(data[i].maxPrice, data[i].concertRoom.placeNumber)

                data[i]["maxPrice"] = "De " + minPrice + "€ à " + data[i].maxPrice + "€";
                resultConcerts.push(data[i]);
            }
            return resultConcerts;
        }
    }*/

   // const info = concerts();

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
                        <NavLink exact to="/Programmation" className="sectionBtn">VOIR TOUTE LA PROGRAMMATION</NavLink>

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