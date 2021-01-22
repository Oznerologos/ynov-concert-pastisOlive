import React from 'react';
import Seat from '../media/img/seat.png'
import Tooltip from '@material-ui/core/Tooltip';

const planSalle = ({nbplaces,maxprice}) => {

    let planArray = [];
    const nbPlacePerLigne = 12;
    const modulo = nbplaces % nbPlacePerLigne;
    const nbLigne = (nbplaces - modulo) / nbPlacePerLigne;
    
    for (let index = 0; index < nbLigne; index++) {
        planArray[index] = []; 
        for (let k = 0; k < nbPlacePerLigne; k++) {
            planArray[index][k] = [
                String.fromCharCode('A'.charCodeAt() + index)+(k+1), 
                Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'}).format(Math.round(maxprice-(maxprice * (5*index)/100)))
            ]
    }
}

    if(modulo !== 0){
        planArray[nbLigne] = [];
        for (let i = 0; i < modulo;i++){
            planArray[nbLigne][i] = 1;
        }
    }

    const Styles = [];
    const marginIndex = (nbLigne - (nbLigne % 3)) / 3;

    for(let j = 0; j < nbLigne; j++){
        Styles[j] = {marginBottom:'0'};
    }

    Styles[marginIndex-1] = {marginBottom:'40px'};
    Styles[marginIndex*2] = {marginBottom:'40px'};

    return ( 
        <>
            {
                planArray.map((ligne, index)=> {
                    return <div className="ligne" id={`line${index}`} key={index} style={Styles[index]}>
                        <p className="lineLetter">
                            {String.fromCharCode('A'.charCodeAt() + index)}
                            </p>
                        {ligne.map((element, index) => {
                            return <Tooltip title={element[1]} className="seatContainer" key={index} id={`place ${element[0]}`} maxprice={element[1]} placement="top-end" arrow>
                                <img className="seats" src={Seat} key={index} alt="seat" width="60px"/>
                                </Tooltip>
                        })}
                    </div>
                })
            }
        </>
    );
}

export default planSalle;
