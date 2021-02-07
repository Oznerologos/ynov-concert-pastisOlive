import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import RestaurationPresentation from './pages/RestaurationPresentation';
import RestaurationReservation from './pages/RestaurationReservation';
import Programmation from './pages/Programmation';
import ConcertReservation from './pages/ConcertReservation';
import P_presentation from './pages/P_presentation';
import From_re from './pages/From_Pre_Re';
import Inscription from './pages/Inscription';
import Login from './pages/Login';
import AuthApi from './services/authApi';
import AuthContext from './context/AuthContext';
import FakePage from './pages/FakePage';
import AjoutConcerts from './pages/AjoutConcerts';
import Concert from './pages/Concert';
import CGU from './pages/CGU';
import SeatsBookingContext from './components/SeatsBookingContext';
import MentionsLegales from './pages/MentionsLegales';

AuthApi.init();

const App = () => {
  const[isAuth, setIsAuth] = useState(AuthApi.isAuth());

  const [seats, setSeats] = useState([]);
  const [prices, setPrices] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [deliveryMode, setDeliveryMode] = useState('');
  const [purchases, setPurchases] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    bookings:[]
  })

  const contextVal = {seats, setSeats, prices, setPrices, deliveryPrice, setDeliveryPrice, deliveryMode, setDeliveryMode, purchases, setPurchases, activeStep, setActiveStep, bookingDetails, setBookingDetails}

  const contextValue = {
      isAuth,
      setIsAuth
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <SeatsBookingContext.Provider value={contextVal}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/MentionsLegales" component={MentionsLegales}/>
          <Route path="/RestaurationPresentation" component={RestaurationPresentation}/>
          <Route path="/RestaurationReservation" component={RestaurationReservation}/>
          <Route path="/ConcertReservation" component={ConcertReservation}/>
          <Route path="/Programmation" component={Programmation}/>
          <Route path="/PrivatisationPresentation" component={P_presentation}/>
          <Route path="/From_re" component={From_re}/>
          <Route path="/Concert" component={Concert}/>
          <Route path="/CGU" component={CGU}/>
          <Route path="/Login" component={Login}/>
          <Route path="/FakePage" component={FakePage}/>
          <Route path="/Inscription" component={Inscription}/>
          <Route path="/AjoutConcerts" component={AjoutConcerts}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      </SeatsBookingContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
