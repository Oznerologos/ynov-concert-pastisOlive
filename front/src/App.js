import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import RestaurationPresentation from './pages/RestaurationPresentation';
import RestaurationReservation from './pages/RestaurationReservation';
import ConcertReservation from './pages/ConcertReservation';
import P_presentation from './pages/P_presentation';
import From_re from './pages/From_Pre_Re';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/RestaurationPresentation" component={RestaurationPresentation}/>
          <Route path="/RestaurationReservation" component={RestaurationReservation}/>
          <Route path="/ConcertReservation" component={ConcertReservation}/>
          <Route path="/P_presentation" component={P_presentation}/>
          <Route path="/From_re" component={From_re}/>
          <Route path="/Login" component={Login}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
