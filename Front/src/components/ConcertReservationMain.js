import React from 'react'
import "animate.css/animate.min.css";
import StepperConcert from './StepperConcert';

class ConcertReservationMain extends React.Component {

    state = {
        salles: [
            { ville: "Aix-en-Provence" },
            { ville: "Bourges" },
            { ville: "Cannes" },
            { ville: "Dunkerque" },
            { ville: "Echirolles" },
        ],
        client: [
            { referenceReservation: "" },
            { nomClient: "" },
            { prenomClient: "" },
            { emailClient: "" },
            { nombrePersonnes: "" },
            { telephoneClient: "" },
            { messageClient: "" },
            { heureReservation: "" },
        ],
    }

    render() {

        return (<main className="concertReservation">
            <StepperConcert />
        </main>);
    }

}

export default ConcertReservationMain;