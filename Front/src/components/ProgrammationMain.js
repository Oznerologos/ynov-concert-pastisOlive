import React, {useState, useContext} from 'react'  
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import contactTitle from '../media/img/contact2.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelect from './citiesSelect'
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import affiche from '../media/img/affiche-rammstein.jpg';
  import { NavLink } from 'react-router-dom';

export default function ProgrammationMain() {

    const [categories, setCategories] = useState({
        toutes: true,
        pop: true,
        rock: true,
        electro: true,
        rapHiphop: true,
        soulFunk: true,
        classique: true,
        dubReggae: true,
        world: true,
    });

    const [cities, setCities] = useState({
        all: true,
        aix: true,
        bourges: true,
        cannes: true,
        dunkerque: true,
        echirolles: true,
    })

    const handleChange = (event) => {
        setCategories({ ...categories, [event.target.name]: event.target.checked });
    };

    const today = new Date;
    const inTenDays = new Date(today.getTime() + 86400000*10);
    const [selectedFirstDate, setSelectedFirstDate] = React.useState(today);
    const [selectedLastDate, setSelectedLastDate] = React.useState(inTenDays);

    const handleFirstDateChange = (date) => {
        setSelectedFirstDate(date);
    };

    const handleLastDateChange = (date) => {
        setSelectedLastDate(date);
    };

    const resetDates = () => {
        setSelectedFirstDate(today);
        setSelectedLastDate(inTenDays);
    }

    const activeBtn = (event) => {
        if([event.target.name] == "all"){
        console.log("!!!!");
        }
        setCities({...cities, [event.target.name]: !cities[event.target.name]});
        console.log(cities);
        event.target.className = "cityFilter actif";
    }
/*
    function checkDate(dateToCheck) { 
        const D_1 = selectedFirstDate.split("/"); 
        const D_2 = selectedLastDate.split("/"); 
        const D_3 = dateToCheck.split("/"); 
          
        var d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]); 
        var d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]); 
        var d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]); 
          
        if (d3 > d1 && d3 < d2) { 
           return true;
        } else { 
            return false; 
        } 
    } */

    const tabConcerts = [
        {date:'2021/06/01', type: 'rap'},
        {date:'02/06/2021', type: 'classique'},
        {date:'03/06/2021', type: 'rock'},
        {date:'04/06/2021', type: 'pop'},
        {date:'05/06/2021', type: 'soul'},
    ];

    let dateTest = "05/02/2021";


    let dateConcert = tabConcerts[0]["date"];
    dateConcert = Date.parse(dateConcert);
    console.log(dateConcert);
   // dateConcert = new Intl.DateTimeFormat(['ban', 'id']).format(dateConcert);
/*
    if((dateConcert.getTime() <= setSelectedLastDate.getTime() && dateConcert.getTime() >= selectedFirstDate.getTime())){
        console.log(true);
    }*/


    const createCards = (tabConcerts) => {
        for(let i = 0; i < tabConcerts.length; i++) {

            let dateConcert = tabConcerts[i]['date'].format('YYYY-MM-dd');
            if((dateConcert.getTime() <= setSelectedLastDate.getTime() && dateConcert.getTime() >= selectedFirstDate.getTime())){
                console.log(true);
            }


        }

    }

        return(
        <main id="programmation">
            <div id="topCont">
            <div className="titleCont">
                <h1>PROGRAMMATION</h1>
            </div>
            </div>
            <div id="filtresContainer">
                <div id="cityContainer">
                    <div className="cityFilter" name="all" onClick={activeBtn}>TOUS</div>
                    <div className="cityFilter" name="aix" onClick={activeBtn}>AIX-EN-PROVENCE</div>
                    <div className="cityFilter" name="bourges" onClick={activeBtn}>BOURGES</div>
                    <div className="cityFilter" name="cannes" onClick={activeBtn}>CANNES</div>
                    <div className="cityFilter" name="dunkerque" onClick={activeBtn}>DUNKERQUE</div>
                    <div className="cityFilter" name="echirolles" onClick={activeBtn}>ECHIROLLES</div>
                </div>
                <div id="categoriesContainer">
                    <p>Catégorie de musique:</p>
                    <FormGroup row>
                    <FormControlLabel control={<Checkbox checked={categories.toutes} onChange={handleChange} name="toutes" color="primary"/>} label="Toutes"/>
                    <FormControlLabel control={<Checkbox checked={categories.pop} onChange={handleChange} name="pop" color="primary"/>} label="Pop"/>
                    <FormControlLabel control={<Checkbox checked={categories.rock} onChange={handleChange} name="rock" color="primary"/>} label="Rock"/>
                    <FormControlLabel control={<Checkbox checked={categories.electro} onChange={handleChange} name="electro" color="primary"/>} label="Electro"/>
                    <FormControlLabel control={<Checkbox checked={categories.rapHiphop} onChange={handleChange} name="rapHiphop" color="primary"/>} label="Rap / Hip-Hop"/>
                    <FormControlLabel control={<Checkbox checked={categories.soulFunk} onChange={handleChange} name="soulFunk" color="primary"/>} label="Soul / Funk"/>
                    <FormControlLabel control={<Checkbox checked={categories.classique} onChange={handleChange} name="classique" color="primary"/>} label="Classique"/>
                    <FormControlLabel control={<Checkbox checked={categories.dubReggae} onChange={handleChange} name="dubReggae" color="primary"/>} label="Dub / Reggae"/>
                    <FormControlLabel control={<Checkbox checked={categories.world} onChange={handleChange} name="world" color="primary"/>} label="World"/>
                    </FormGroup>
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
          value={selectedFirstDate}
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
          value={selectedLastDate}
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

                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>
                <div className="concertCard">
                <div className="programmationPicture">
                    <img src={affiche} height={150}/>
                    </div>
                    <div className="detailConcert">
                        <p>Nom de l'artiste</p>
                        <p>Nom de la tournée</p>
                        <p>Date et heure</p>
                        <p>Lieu</p>
                        <p>Catégorie de musique</p>
                        <p>Tarifs: de ..€ à ..€</p>
                        <NavLink exact to="/fakePage" className="cardBtn">Réserver</NavLink>
                    </div>
                </div>

            </div>

        </main>);
    }
