import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/pricing' component={PricingPage} />
        {/* <ProtectedRoute exact path="/home" component={LandingPage} /> */}
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
