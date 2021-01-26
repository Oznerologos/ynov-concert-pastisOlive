import React from 'react';
import BlueSeat from '../media/img/seatblue.png';
import RedSeat from '../media/img/seat.png';

class Seat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          seat: props.seat
        };
      }
  
      onHover(e){
    if(this.props.src === RedSeat){
        this.setState({seat:RedSeat});
        return
    }
    this.setState({seat:BlueSeat});
}

    render() {

        return(
            <img src={this.state.seat ?? this.props.src} onMouseEnter={() => this.onHover(this.props.src)} onMouseLeave={() => this.setState({ seat: this.props.seat})}  key={this.props.key} alt={this.props.alt} width={this.props.width} className={this.props.className}/>
        )
    };
};


export default Seat;