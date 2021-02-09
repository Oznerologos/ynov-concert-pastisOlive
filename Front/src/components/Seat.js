import React from 'react';
import BlueSeat from '../media/img/seatblue.png';
import RedSeat from '../media/img/seat.png';
import GreenSeat from '../media/img/seatGreen.png';
import GreySeat from '../media/img/seatgrey.png';
import Tooltip from '@material-ui/core/Tooltip';
import SeatsBookingContext from './SeatsBookingContext';

class Seat extends React.Component {

    static contextType = SeatsBookingContext;

    constructor(props) {
        super(props);
        this.state = {
            seat: props.seat,
            price: 0,
            id:null,
            selected: props.selected,
        }
    }   

    onHover(f){
    if((this.props.src === RedSeat)&&(this.state.selected === 0/*false*/)){
        this.setState({seat:RedSeat});
        return
    } else if((this.props.src !== RedSeat)&&(this.state.selected === 0/*false*/)){
        this.setState({seat:BlueSeat});
        return
    } else if ((this.state.selected === 1/*true*/) && (this.context.seats.findIndex((el) => el === this.props.id) < 0) && (this.props.viewonly === 1/*true*/)) {
        this.setState({seat: GreySeat})
        this.setState({selected: 0/*false*/});
    } else {
        this.setState({seat:GreenSeat});
        this.setState({selected: 1/*true*/});
    }
        
}

onLeave(f){
        if(this.state.selected === 1/*true*/) {
            this.setState({seat: GreenSeat});
        } else {
            this.setState({seat: this.props.seat})
        }
  
        
}

onClick(){
    if((this.props.className !== "seats Reserved") &&(this.props.viewonly !== 1/*true*/)){
   
    const prices = this.context.prices;
    const purch = this.context.purchases;
    this.state.seat = GreenSeat;

    if(this.state.selected === 0/*false*/) {
        this.context.setSeats([...this.context.seats, {id:this.props.id, price: this.props.price}]);
        this.context.setPrices(prices + parseInt(this.props.price));
        localStorage.setItem("itemsPanier", JSON.stringify(this.context.purchases +1)); // Persistance icone panier d'achat
        this.context.setPurchases(purch + 1); 
        this.setState({selected: 1/*true*/});       
    } else {

    this.context.setSeats(this.context.seats.filter(item=> item.id !== this.props.id))
    if(this.context.purchases === 1) {
        this.context.setPurchases(0);
        localStorage.removeItem("itemsPanier");
    } else {
        localStorage.setItem("itemsPanier", JSON.stringify(this.context.purchases -1));
        this.context.setPurchases(this.context.purchases - 1);   
    }   

    this.context.setPrices(prices - parseInt(this.props.price));
    this.setState({selected: 0/*false*/});
    }
    }
}

    render() {

        return(
                <Tooltip title={this.props.price} placement="top-end" key={`tool-${this.props.seatKey}`} arrow>
                    <img src={this.state.seat ?? this.props.src} onClick={() => this.onClick(this.props.selected)} selected={this.props.selected} onMouseEnter={() => this.onHover(this.props.src)} onMouseLeave={() => this.onLeave(this.props.seat)} price={this.props.price} id={this.props.id} alt={this.props.alt} width={this.props.width} className={this.props.className} viewonly={this.props.viewonly}/>
                </Tooltip>
        )
    };
};


export default Seat;