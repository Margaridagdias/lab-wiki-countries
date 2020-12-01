import React from 'react';
import { Link } from 'react-router-dom';
function CountriesList(props) {
    return props.countries 
        ? (
        <div>
            <ul>
                {props.countries.map((country) => {
                    return (
                        <li>
                           <Link exact to={`/${country.cca3}`}>{country.name.common}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) 
    : null
}

export default CountriesList;