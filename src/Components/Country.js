import React, { Component } from 'react'
import '../index.css'


export default class Country extends Component {
    state = {
        country: ''
    }
    
    async componentDidMount(){
        let { name } = this.props.match.params;
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${name.toLowerCase()}?fullText=true`);
        let country = await response.json();
        this.setState({country});
    }

    render() {
        let { country } = this.state;
            return (
            <div class="home-wrapper">
                {country[0] && Object.entries(country[0]).map(([key, value]) => {
                    console.log(typeof value)
                    if(typeof value == "string" || typeof value == "number")
                    return(<p>{`${key}: ${value}`}</p>)
                })
                }
            </div>
        )
    }
}
