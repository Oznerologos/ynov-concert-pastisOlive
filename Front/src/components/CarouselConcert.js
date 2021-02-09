import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const CarouselConcert = ({dataid}) => { 

    //const [refreshKey, setRefreshKey] = useState(0);
    //const context = useContext(SliderConcertContext);

        const getConcerts = async () => {
            let result = await axios(
                'https://localhost:8000/concert',
            );
            // return the result
            return result;
        };
    
        const [data, setData] = React.useState([])
        //const [subData, setSubData] = React.useState([])
    
        React.useEffect(() => {
    
            getConcerts().then(res => {
                setData(res.data);
                //context.setConcertData(res.data);
            });
        }, []);

        const generateCards = () => {

            if(data[0] !== "undefined"){

                const dataReworked = data.filter( el => el.id !== dataid );

            let resultTab = [];
            let modulo = dataReworked.length % 4;
            let nbArrays = (dataReworked.length - modulo) / 4;

            for(let i = 0; i < nbArrays; i++){
                resultTab.push(dataReworked.slice(i, i+4));
            }
            resultTab.push(dataReworked.slice(nbArrays * 4));
            return resultTab;
        }
        }

        function dateConvert(date) {
            date = date.toString();
            date = date.split('T');
            date = date[0].split('-');
            for (let i = 0; i < date.length; i++) {
                date[i] = parseInt(date[i]);
            }
            return date;
        }

        function convertDate(d) {
            let dateTest = dateConvert(d/*data[i]["date"]*/);
            let sub = d/*data[i]["date"]*/.substring(11, 16);
                    sub = sub.split(':');
                    d/*data[i]["date"]*/ = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];

                    return d;
        }

        const findMinPrice = (maxPrice, nbPlaces) => {
            const nbLigne = ((nbPlaces - (nbPlaces % 12)) / 12) + 1;
            const minPrice = Math.round(maxPrice - (maxPrice * (5 * nbLigne) / 100));
            return minPrice;
        }

        const init = generateCards();
        //context.setConcertDataReworked(init);
/*
        init.map((el, ind) => {
            el.map((element, index) => {console.log(element.name)})
        });*/

        return (
            <Carousel interval={null}>
            {init.map((el, ind) => {
                return <Carousel.Item key={ind}>
                    <div className="carouselItemCont">{
               el.map((element, index) => {
                    return(
                    <div className="ConcertSliderCont" key={index}>
                        <div className="afficheContainer">
                            <div style={{ backgroundImage: `URL(/affiches/${element.artistImg})` }}></div>
                        </div>
                        <div className="detailsConcert">
                            <p className="bold">{element.artist}</p>
                            <p>Tournée {element.name}</p>
                            <p>{convertDate(element.time)}</p>
                            <p>à {element.concertRoom["name"]}</p>
                            <p>Catégorie: {element.musicType}</p>
                            <p>Tarifs: de {findMinPrice(element.maxPrice, element.concertRoom["placeNumber"])}€ à {element.maxPrice}€</p>
                            <NavLink exact to="/FakePage" className="cardBtn">RÉSERVER</NavLink>
                        </div>                
                    </div>               
                )
                })
            }</div>
            </Carousel.Item>
            })}
                </Carousel>
        )
}  

export default CarouselConcert;
