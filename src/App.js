import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import { Switch, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/CountriesList" component={CountriesList} />
        <Route path="/CountriesList/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}


export default App;
