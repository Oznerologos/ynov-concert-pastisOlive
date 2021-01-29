import React from 'react';
import PlanSalle from './PlanSalle';

export default React.createContext({
    seats: [],
    setSeats: () =>{},
    prices: '',
    setPrices: () =>{},
    salle:'',
    setSalle: () => {},
});