import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

class CountriesList extends React.Component {
    state = {
        countriesList: countries
    }

    render() {
        return (
            <div>
                <h2>Countries</h2>
                {this.state.countriesList.map((country, index) => {
                    return(
                        <div key={index}>

                        <Link to={`/countriesList/${country.cca3}`}>
                            <h3>{country.name.common}</h3>
                        </Link>
                        </div>
                    
                            )})}
                        </div>
        )
    }
}

export default CountriesList;