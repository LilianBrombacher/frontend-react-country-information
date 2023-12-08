import './App.css';
import axios from "axios";
import world_map from './assets/world_map.png'
import {useState} from "react";

function App() {
    const [countries, setCountries]= useState([]);

    async function fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data);
            setCountries(response.data);
        } catch(e) {
            console.error(e);
            console.log('de statuscode van de fout is:', e.response.status);
        }

    }

    return (
        <>
        <header>
            <img className='header-image' src={world_map} alt="world_map"></img>
        </header>
        <main>
            <button type='button' onClick={fetchCountries}>
                Zoek alle landen
            </button>
            {countries.length > 0 && <ul>
                {countries.map((country) => {
                    return <li key={country}>{country}</li>
                })}
            </ul>}
        </main>
        </>
    )
}

export default App
