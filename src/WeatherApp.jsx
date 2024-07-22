import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city:"",
            feelsLike:0,
            humidity: 0,
            temp: 0,
            tempMax: 0,
            tempMin: 0,
            weather: ""
        }
    )
    let updateWeather = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <h3 style={{marginLeft:680}}>Weather App</h3>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}