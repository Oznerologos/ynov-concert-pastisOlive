import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import CarouselConcert from './CarouselConcert';
import ReactPlayer from 'react-player';

export default function ConcertMain() {
    const [refreshKey] = useState(0);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let paramArtist = "";
    paramArtist = query.get("artist");

    const getConcerts = async () => {
        let result = await axios(
            'https://localhost:8000/concert/artist?artist=' + paramArtist,
        );
        // return the result
        return result;
    };

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        if (paramArtist !== "") {
            getConcerts().then(res => {
                setData(res.data)
            })
        }
    }, [refreshKey]);

    function dateConvert(date) {
        date = date.toString();
        date = date.split('T');
        date = date[0].split('-');
        for (let i = 0; i < date.length; i++) {
            date[i] = parseInt(date[i]);
        }
        return date;
    }

    const findMinPrice = (maxPrice, nbPlaces) => {
        const nbLigne = ((nbPlaces - (nbPlaces % 12)) / 12) + 1;
        const minPrice = Math.round(maxPrice - (maxPrice * (5 * nbLigne) / 100));
        return minPrice;
    }

    const concerts = () => {
        let resultConcerts = [];

        if (data[0] !== undefined) {
            for (let i = 0; i < data.length; i++) {
                let date = dateConvert(data[i]["date"]);

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
    }

    concerts();

    return (
        //<SliderConcertContext.Provider value={contextConcert}>
        <main id="concert">
            <div id="topArtist">
                <img src={data[0] ? `/affiches/${data[0].artistImg}` : ""} alt="affiche-concert" height={300} />
                <ul>
                    <li className="bold">{data[0] ? data[0].artist : ""}</li>
                    <li>{data[0] ? data[0].name : ""}</li>
                    <li>{data[0] ? data[0].date : ""}</li>
                    <li>{data[0] ? data[0].concertRoom.name : ""}</li>
                    <li>{data[0] ? data[0].musicType : ""}</li>
                </ul>
            </div>
            <section>
                <div id="concertsTab">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Date</th>
                                <th colSpan={2}>Lieu</th>
                                <th colSpan={2}>Heure</th>
                                <th colSpan={2}>Ouverture</th>
                                <th colSpan={2}>Catégorie de tarifs</th>
                                <th colSpan={2}>Tarifs</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            data ?
                                (data.map((element, index) => {
                                    return <tbody key={index}>
                                        <tr>
                                            <td colSpan={2}>{element.date}</td>
                                            <td colSpan={2}>{element.concertRoom.name}</td>
                                            <td colSpan={2}>{element.time}</td>
                                            <td colSpan={2}>{element.timeOpen}</td>
                                            <td colSpan={2}>{element.category}</td>
                                            <td colSpan={2}>{element.maxPrice}</td>
                                            <td><NavLink exact to={"/ConcertReservation?id=" + element.id} className="bookingLink">Réserver</NavLink></td>
                                        </tr>
                                    </tbody>
                                })
                                ) : (<tbody><tr><td>Chargement</td></tr></tbody>)
                        }
                    </table>
                </div>

                <div id="artistPresentation">
                    <div id="leftPrez">
                        <h3>Présentation de l'artiste / groupe</h3>
                        <p>{data[0] ? data[0].artistPres : ""}</p>
                    </div>
                    <div id="rightPrez">
                        <ReactPlayer url='https://www.youtube.com/watch?v=vjTQqTGa3dQ' height={200} />
                    </div>
                </div>

                <div id="bookingCards">
                    <div className="bookingCard">
                        <h4>Réserver une place de Parking</h4>
                        <p>Réservez votre place de parking dès à présent et facilitez-vous l'accès à nos salles de concert.</p>
                        <NavLink exact to="/FakePage" className="bookingLink">Réserver</NavLink>
                    </div>
                    <div className="bookingCard">
                        <h4>Réserver au Restaurant</h4>
                        <p>Réservez votre place dans nos restaurants pour profiter de nos mets préparés par nos grands chefs.</p>
                        <NavLink exact to="/FakePage" className="bookingLink">Réserver</NavLink>
                    </div>
                </div>

            </section>

            <div id="sliderContainer">
                <h3>A NE PAS MANQUER</h3>
                <CarouselConcert dataid={data[0] ? data[0].id : ""}/>
            </div>

        </main>)
    //</SliderConcertContext.Provider>;
}
