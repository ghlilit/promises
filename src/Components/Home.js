import React, { Component } from 'react'
import '../index.css'

export default class Home extends Component {
    state = {
        countries: []
    }

    async componentDidMount(){
        let response = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;flag');
        let countries = await response.json();
        this.setState({countries});
    }
    render() {
        const { countries } = this.state;
        console.log(countries);
        return (
            <div class="home-wrapper">
                {countries.map(country => 
                    <div class="col-lg-4" key={country.name}>
                        <img src={country.flag} class="bd-placeholder-img rounded-circle" width="140" height="140" alt={country.name}/>
                        <h2>{`${country.name}: ${country.capital}`}</h2>
                        <p><a class="btn btn-secondary" href={`/country/${country.name}`} role="button">View details &raquo;</a></p>
                    </div>
                )}
            </div>
        )
    }
}

