import React from 'react';
import Seat from './Seat';
import GreySeat from '../media/img/seatgrey.png';
import RedSeat from '../media/img/seat.png';


const PlanSalle = ({nbplaces,maxprice}) => {

   {/*

    const [totalPrice, setTotalPrice] = useState(0);

      function returnTotalPrice({price}) {
          console.log(price);
        setTotalPrice(totalPrice + price);
        console.log(totalPrice);
        return
      }*/}

    let planArray = [];
    const nbPlacePerLigne = 12;
    const modulo = nbplaces % nbPlacePerLigne;
    const nbLigne = (nbplaces - modulo) / nbPlacePerLigne;
    
    for (let index = 0; index < nbLigne; index++) {
        planArray[index] = []; 
        for (let k = 0; k < nbPlacePerLigne; k++) {
            planArray[index][k] = [
                String.fromCharCode('A'.charCodeAt() + index)+(k+1), 
                Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'}).format(Math.round(maxprice-(maxprice * (5*index)/100))),
                'Free',

            ]
    }
}

    if(modulo !== 0){
        planArray[nbLigne] = [];
        for (let i = 0; i < modulo;i++){
            planArray[nbLigne][i] = 1;
        }
    }

    const placesReservees = ['A4', 'B8', 'C3', 'D2', 'E11'];
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for(let p = 0; p < placesReservees.length; p++){
        let lettreLigne = placesReservees[p].substring(0,1);
        lettreLigne = alphabet.indexOf(lettreLigne);
        let refSiege = parseInt(placesReservees[p].substring(1),10)-1;

        planArray[lettreLigne][refSiege][2] = "Reserved";
        planArray[lettreLigne][refSiege][1] = "Reservé";
        planArray[lettreLigne][refSiege][3] = RedSeat;
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
                planArray.map((ligne, indexLine)=> {
                    return <div className="ligne" id={`line${indexLine}`} key={`line${indexLine}`} style={Styles[indexLine]}>
                        <p className="lineLetter">
                            {String.fromCharCode('A'.charCodeAt() + indexLine)}
                            </p>
                        {ligne.map((element, index) => {
                            return <Seat src={element[3] ?? GreySeat} id={String.fromCharCode('A'.charCodeAt() + indexLine)+(index+1)} alt={"seat"} width={'60px'} className={`seats ${element[2]}`} price={element[1]} selected={false}/>
                        })}
                    </div>
                })
            }
        </>
    );
}

export default PlanSalle;
