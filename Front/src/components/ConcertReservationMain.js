import React from 'react'
import "animate.css/animate.min.css";
import StepperConcert from './StepperConcert';

class ConcertReservationMain extends React.Component {

    render() {

        return (<main className="concertReservation">
            <StepperConcert />
        </main>);
    }

}

export default ConcertReservationMain;