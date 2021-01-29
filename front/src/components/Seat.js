import React, { useContext } from 'react';
import BlueSeat from '../media/img/seatblue.png';
import RedSeat from '../media/img/seat.png';
import GreenSeat from '../media/img/seatGreen.png';
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
            selected: false,
        }
        {/*const {seats, setSeats} = this.contextType;*/}
    }

    

    onHover(f){
    if((this.props.src === RedSeat)&&(this.state.selected === false)){
        this.setState({seat:RedSeat});
        return
    }else if((this.props.src !== RedSeat)&&(this.state.selected === false)){
        this.setState({seat:BlueSeat});
        return
    }else {
        this.setState({seat:GreenSeat});
    }
        
}

onLeave(f){
    if(this.state.selected === true) {
        this.setState({seat: GreenSeat});
    } else {
        this.setState({seat: this.props.seat})
    }
    
        
}

onClick(){
    if(this.props.className !== "seats Reserved"){

    
    const prices = this.context.prices;
    this.state.seat = GreenSeat;

if(this.state.selected === false) {
    this.context.setSeats([...this.context.seats, {id:this.props.id, price: this.props.price}]);
    this.context.setPrices(prices + parseInt(this.props.price));
    this.setState({selected: true});
} else {

    this.context.setSeats(this.context.seats.filter(item=> item.id !== this.props.id))


    this.context.setPrices(prices - parseInt(this.props.price));
    this.setState({selected: false});
}
}
    
{/* 
    const initialValue = this.state.price;
    let newValue = null
    this.setState({id: this.props.id})
    this.setState({price: newValue})

    if(this.state.selected === false){
        this.setState({selected:true});
        newValue = parseInt(initialValue) + parseInt(this.props.price)
        this.setState({id: this.props.id})
        this.setState({price: newValue})
        return
    }
    this.setState({selected:false});
    newValue = parseInt(initialValue) - parseInt(this.props.price)
    this.setState({id: this.props.id})
    this.setState({price: newValue})

    
    this.context.setSeats([{
        id: this.state.id,
        price:this.state.price,
        selected:this.state.selected,
}])
console.log(this.context);
*/}
}

    render() {

        return(
                <Tooltip title={this.props.price} placement="top-end" key={`tool-${this.props.seatKey}`} arrow>
                    <img src={this.state.seat ?? this.props.src} onClick={() => this.onClick(this.props.selected)} selected={this.state.selected} onMouseEnter={() => this.onHover(this.props.src)} onMouseLeave={() => this.onLeave(this.props.seat)} price={this.props.price} id={this.props.id} alt={this.props.alt} width={this.props.width} className={this.props.className}/>
                </Tooltip>
        )
    };
};


export default Seat;