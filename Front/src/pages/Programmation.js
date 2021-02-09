import React, { useContext } from 'react';
import FooterNav from '../components/FooterNav';
import HeaderNav from '../components/HeaderNav';
import ProgrammationMain from '../components/ProgrammationMain';
import SeatsBookingContext from '../components/SeatsBookingContext';

const Programmation = () => {

    const context = useContext(SeatsBookingContext);

localStorage.setItem("cityFilter", JSON.stringify(context.cityFilter)); // Persistance filtre ville
localStorage.setItem("styleFilter", JSON.stringify(1)); // Persistance filtre style

    return (
        <div id="programmationAnchor">
             <HeaderNav/>              
                <ProgrammationMain city={context.cityFilter} style={context.styleFilter} datedebut={context.dateDebutFilter} datefin={context.dateFinFilter}/>
            <FooterNav/>
        </div>
    );
};

export default Programmation;