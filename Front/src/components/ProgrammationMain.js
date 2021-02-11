import React, { useState, useContext } from 'react'
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SeatsBookingContext from '../components/SeatsBookingContext';

const ProgrammationMain = () => {

    const [cities, setCities] = useState('tous');
    const [refreshKey, setRefreshKey] = useState(0);
    const context = useContext(SeatsBookingContext);

    const getSalles = async () => {
        let result = await axios(
            'https://localhost:8000/concert',
        );
        // return the result
        return result;
    };

    const [data, setData] = React.useState([])

    React.useEffect(() => {

        getSalles().then(res => {
            setData(res.data)
        })
    }, [refreshKey]);

    const [cityButton, setCityButton] = useState([
        {
            id: 1,
            name: "tous",
            label: "TOUS",
        },
        {
            id: 2,
            name: "Aix",
            label: "AIX-EN-PROVENCE",
        },
        {
            id: 3,
            name: "Bourges",
            label: "BOURGES",
        },
        {
            id: 4,
            name: "Cannes",
            label: "CANNES",
        },
        {
            id: 5,
            name: "Dunkerque",
            label: "DUNKERQUE",
        },
        {
            id: 6,
            name: "Echirolles",
            label: "ECHIROLLES",
        }
    ]);

    const cityPersistance = JSON.parse(localStorage.getItem("cityFilter"));
    //console.log("cityPersistance: ",cityPersistance);
    //console.log("context.cityFilter: ",context.cityFilter);
    const stylePersistance = JSON.parse(localStorage.getItem("styleFilter"));
    const dateDebutPersistance = JSON.parse(localStorage.getItem("dateDebutFilter"));
    const dateFinPersistance = JSON.parse(localStorage.getItem("dateFinFilter"));
    const [activeButton, setActiveButton] = useState(cityPersistance ? cityPersistance : context.cityFilter);
    //console.log(activeButton);
    
    //const [activeRadio, setActiveRadio] = useState(parseInt(stylePersistance));

    const today = new Date();
    const inTenDays = new Date(today.getTime() + 86400000 * 60); // Multiplier par le nombre de jours souhaités entre la date de début et la date de fin
    //const [selectedFirstDate, setSelectedFirstDate] = React.useState(today);
    //const [selectedLastDate, setSelectedLastDate] = React.useState(inTenDays);
    const [feedBack, setFeedBack] = useState(null);

    const handleFirstDateChange = (date) => {
        context.setDateDebutFilter(date);
        //setSelectedFirstDate(date);
        setRefreshKey(oldKey => oldKey + 1)
        createCards();
        localStorage.setItem("dateDebutFilter", JSON.stringify(date)); // Persistance filtre date debut
        
    };

    const handleLastDateChange = (date) => {
        context.setDateFinFilter(date);
        //setSelectedLastDate(date);
        setRefreshKey(oldKey => oldKey + 1)
        createCards();
        localStorage.setItem("dateFinFilter", JSON.stringify(date)); // Persistance filtre date fin
        
    };

    const resetDates = () => {
        //setSelectedFirstDate(today);
        context.setDateDebutFilter(today);
        //setSelectedLastDate(inTenDays);
        context.setDateFinFilter(inTenDays);
        setRefreshKey(oldKey => oldKey + 1)
        createCards();
    }

    const handleChange = (event) => {
        context.setCategorie(event.target.value);
        setRefreshKey(oldKey => oldKey + 1);
        localStorage.setItem("styleFilter", JSON.stringify(event.currentTarget.value)); // Persistance filtre ville
        createCards();
        
        //context.setCityFilter(event.currentTarget.value);
    };

    const activeBtn = (event) => {
        setCities(event.currentTarget.name);
        //console.log(cities);
        setActiveButton(event.currentTarget.id.substring(6));
        localStorage.setItem("cityFilter", JSON.stringify(event.currentTarget.id.substring(6))); // Persistance filtre ville
        context.setCityFilter(event.currentTarget.id.substring(6));
        setRefreshKey(oldKey => oldKey + 1)
        createCards();
    }

    if(context.categorie === null) {
        context.setCategorie('Toutes');
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

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = '' + d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        let result = [];
        result.push(parseInt(year));
        result.push(parseInt(month));
        result.push(parseInt(day));
        return result;
    }

    const findMinPrice = (maxPrice, nbPlaces) => {
        const nbLigne = ((nbPlaces - (nbPlaces % 12)) / 12) + 1;
        const minPrice = Math.round(maxPrice - (maxPrice * (5 * nbLigne) / 100));
        return minPrice;
    }

    const createCards = () => {

        //console.log("selectedFirstDate: ", selectedFirstDate);
        //console.log("selectedLastDate: ",selectedLastDate);
        //console.log("categorie: ",categorie);
        //console.log("_______________________");

        let firstD = formatDate(dateDebutPersistance ? dateDebutPersistance : context.dateDebutFilter);//(context.dateDebutFilter ? context.dateDebutFilter : dateDebutPersistance);
        let lastD = formatDate(dateFinPersistance ? dateFinPersistance : context.dateFinFilter);

        var a = new Date(firstD[0], firstD[1] - 1, firstD[2]);
        var b = new Date(lastD[0], lastD[1] - 1, lastD[2]);

        let resultCards = [];

        for (let i = 0; i < data.length; i++) {

            let dateTest = dateConvert(data[i]["time"]);
            const dateCheck = new Date(dateTest[0], dateTest[1] - 1, dateTest[2]);
            let inRange = dateCheck >= a && dateCheck <= b;
            if ((context.categorie !== "Toutes") && (cities !== "tous")) {
                if ((inRange === true) && (context.categorie === data[i]["musicType"]) && (cities === data[i]["concertRoom"]["name"])) {
                    let sub = data[i]["time"].substring(11, 16);
                    sub = sub.split(':');
                    data[i]["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];
                    resultCards.push(data[i]);
                }
            } else if ((context.categorie !== "Toutes") && (cities === "tous")) {
                if ((inRange === true) && (context.categorie === data[i]["musicType"])) {
                    let sub = data[i]["time"].substring(11, 16);
                    sub = sub.split(':');
                    data[i]["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];
                    resultCards.push(data[i]);
                }

            } else if ((context.categorie === "Toutes") && (cities !== "tous")) {
                if ((inRange === true) && (cities === data[i]["concertRoom"]["name"])) {
                    let sub = data[i]["time"].substring(11, 16);
                    sub = sub.split(':');
                    data[i]["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];
                    resultCards.push(data[i]);
                }
            } else {
                if (inRange === true) {
                    let sub = data[i]["time"].substring(11, 16);
                    sub = sub.split(':');
                    data[i]["time"] = "Le " + dateTest[2] + "/" + dateTest[1] + "/" + dateTest[0] + " à " + sub[0] + "H" + sub[1];
                    resultCards.push(data[i]);
                }
            }
        }

        return resultCards;
    }

    const init = createCards();

    return (
        <main id="programmation">
            <div id="topCont">
                <div className="titleCont">
                    <h1>PROGRAMMATION</h1>
                </div>
            </div>
            <div id="filtresContainer">
                <div id="cityContainer">
                    {cityButton.map((element, index) => {
                        return (
                            <Button key={index} id={`button${element.id}`} className={activeButton == element.id ? "cityFilter actif" : "cityFilter"} name={element.name} onClick={activeBtn}>{element.label}</Button>
                        )
                    })}
                </div>
                <div id="categoriesContainer">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Catégorie de musique:</FormLabel>
                        <RadioGroup aria-label="cat" name="category" value={stylePersistance ? stylePersistance : context.categorie} onChange={handleChange} row>
                            <FormControlLabel value="Toutes" control={<Radio />} label="Toutes" />
                            <FormControlLabel value="Pop" control={<Radio />} label="Pop" />
                            <FormControlLabel value="Rock" control={<Radio />} label="Rock" />
                            <FormControlLabel value="Electro" control={<Radio />} label="Electro" />
                            <FormControlLabel value="Rap / Hip-Hop" control={<Radio />} label="Rap / Hip-Hop" />
                            <FormControlLabel value="Soul / Funk" control={<Radio />} label="Soul / Funk" />
                            <FormControlLabel value="Classique" control={<Radio />} label="Classique" />
                            <FormControlLabel value="Dub / Reggae" control={<Radio />} label="Dub / Reggae" />
                            <FormControlLabel value="World" control={<Radio />} label="World" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div id="datesContainer">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-first-date"
                            label="Du"
                            value={dateDebutPersistance ? dateDebutPersistance : context.dateDebutFilter}
                            onChange={handleFirstDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-last-date"
                            label="Au"
                            value={dateFinPersistance ? dateFinPersistance : context.dateFinFilter}
                            onChange={handleLastDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button onClick={() => resetDates()} id="resetDates">Réinitialiser les dates</Button>
                </div>
            </div>

            <div id="concertsContainer">
                {feedBack ? <h3>Désolé, aucun concert trouvé avec ces critères</h3> : init.map((element, index) => {
                    return <div className="concertCard" key={index}>
                        <div className="programmationPicture">
                            <div style={{ backgroundImage: `URL(/affiches/${element.artistImg})` }}></div>
                        </div>
                        <div className="detailConcert">
                            <p className="bold">{element.artist}</p>
                            <p>Tournée {element.name}</p>
                            <p>{element.time}</p>
                            <p>à {element.concertRoom["name"]}</p>
                            <p>Catégorie: {element.musicType}</p>
                            <p>Tarifs: de {findMinPrice(element.maxPrice, element.concertRoom["placeNumber"])}€ à {element.maxPrice}€</p>
                            <NavLink exact to={"/Concert?artist=" + element.artist} className="cardBtn">Réserver</NavLink>
                        </div>
                    </div>
                })}
            </div>

        </main>);
}

export default ProgrammationMain;
