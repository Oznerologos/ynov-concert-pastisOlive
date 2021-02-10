import React, { useContext } from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ProgrammationMain from '../components/ProgrammationMain';
import SeatsBookingContext from '../components/SeatsBookingContext';

const Programmation = () => {

    const context = useContext(SeatsBookingContext);

localStorage.setItem("cityFilter", JSON.stringify(context.cityFilter ? context.cityFilter : JSON.parse(localStorage.getItem("cityFilter")))); // Persistance filtre ville
localStorage.setItem("styleFilter", JSON.stringify(context.categorie ? context.categorie : JSON.parse(localStorage.getItem("styleFilter")))); // Persistance filtre style
localStorage.setItem("dateDebutFilter", JSON.stringify(context.dateDebutFilter ? context.dateDebutFilter : JSON.parse(localStorage.getItem("dateDebutFilter")))); // Persistance filtre date debut
localStorage.setItem("dateFinFilter", JSON.stringify(context.dateFinFilter ? context.dateFinFilter : JSON.parse(localStorage.getItem("dateFinFilter")))); // Persistance filtre date fin

    return (
        <div id="programmationAnchor">
             <HeaderNav/>              
                <ProgrammationMain city={context.cityFilter} style={context.styleFilter} datedebut={context.dateDebutFilter} datefin={context.dateFinFilter}/>
            <FooterNav/>
        </div>
    );
};

export default Programmation;