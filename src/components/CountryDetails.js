import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
    state = {
        name: '',
        capital: '',
        area: '',
        borders: [] 
    }

    componentDidMount() {
       this.getCountryDetail();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            //This means that the url changed
            this.getCountryDetail();
        }
    }

    getCountryDetail = () => {
        const countryCCA3 = this.props.match.params.cca3;
        const foundCountry = countriesJSON.find((country) => {
            return country.cca3 === countryCCA3;
        })
        this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital[0],
            area: foundCountry.area,
            borders: foundCountry.borders
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h3>Capital: {this.state.capital}</h3>
                <p>Area: {this.state.area} km<sup>2</sup></p>
                <ul>
                    {this.state.borders.map((border) => {
                        return (
                            <li>
                                <Link exact to={`/${border}`}>
                                    {border}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default CountryDetails;