import React from 'react';
import './App.css';
import countriesJSON from './countries.json';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countriesJSON
    });
  }

  render() {
    return (
      <div className="App">
        <div style={{float: "left", height:"900px", overflow: "scroll"}}>
          <CountriesList countries={this.state.countries} />
        </div>
        <div style={{float: "right", marginRight: "500px"}}>
          <Switch>
            <Route path='/:cca3' component={CountryDetails}></Route>
          </Switch>
        </div>
        
      </div>

    );
  }
}

export default App;
