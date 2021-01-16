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
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
