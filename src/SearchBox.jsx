import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox({updateWeather}) {
    const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '9a3dbaf284d1b383f8df83c561d951c8'
    let [city,setCity] = useState('');
    let [error,setError] = useState(false);

    let getWeatherInfo = async ()=>{
        try{
        let response = await fetch(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.name,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        setError(false)
        return result;
    }
    catch(err){
        throw err;
    }
 }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        let result = await getWeatherInfo();
        updateWeather(result); 
        setCity('');
        }
        catch(err){
            setError(true);
            setCity('');
        }
    }
    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange} required />
                <br></br><br></br>
                <Button variant="outlined" type="submit">Search</Button>
            </form>
            {error && <p style={{color:"red"}}>This city doesn't exist in our list</p>}
        </div>
    )
} 