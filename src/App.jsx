import './App.css';
import axios from "axios";
import world_map from './assets/world_map.png'
import {useState} from "react";
import getColorForRegion from "./assets/constants/helpers/getColorForRegion.js";

function App() {
    const [countries, setCountries]= useState([]);
    const [isDataVisible, setIsDataVisible] = useState(true);


    async function fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const sortedCountries = response.data.sort((a, b) => {
                const populationA = a.population || 0;
                const populationB = b.population || 0;
                return populationA - populationB;
            });
            console.log(sortedCountries);

            setCountries(sortedCountries);

        } catch(e) {
            console.error(e);
            console.log('de statuscode van de fout is:', e.response.status);
        }

    }
    const toggleDataVisibility = () => {
        setIsDataVisible(!isDataVisible);
    };


    return (
        <>
        <header>
            <img className='header-image' src={world_map} alt="world_map"></img>
        </header>
        <main>
            <button type='button' onClick={fetchCountries}>
                Zoek alle landen
            </button>
            <button type='button' onClick={toggleDataVisibility}>
                {isDataVisible ? 'Verberg landen' : 'Toon landen'}
            </button>


            {isDataVisible && countries.length > 0 && (
                <ul>
                {countries.map((country, index) => {
                    const countryName = country.name.common || 'Unknown';
                    const countryPopulation = country.population || 'Unknown';
                    const countryFlag = country.flags.png ;
                    //const color =getColorForRegion(region);
                    return<li key={index} >
                        <img src={countryFlag} alt={`flag of ${countryName}`}/>
                        {countryFlag}
                        <br />
                        {countryName}
                        <br />
                        has a population of {countryPopulation} people
                    </li>
                })}
            </ul>
            )}
        </main>
        </>
    )
}

export default App
