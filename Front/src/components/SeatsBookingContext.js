import React from 'react';

export default React.createContext({
    seats: [],
    setSeats: () => {},
    prices: '',
    setPrices: () => {},
    deliveryPrice:'',
    setDeliveryPrice: () => {},
    deliveryMode:'',
    setDeliveryMode: () => {},
    purchases: '',
    setPurchases: () => {},
    activeStep:'',
    setActiveStep: () => {},
    cityFilter:'',
    setCityFilter: () => {},
});