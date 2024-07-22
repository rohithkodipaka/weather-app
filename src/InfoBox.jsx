import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'

export default function InfoBox({weatherInfo}) {
    const IMAGE_URL = 'src/assets/misty.jpg';
    let info = {
        city: weatherInfo.city,
        feelsLike: weatherInfo.feelsLike,
        humidity: weatherInfo.humidity,
        temp: weatherInfo.temp,
        tempMax: weatherInfo.tempMax,
        tempMin: weatherInfo.tempMin,
        weather: weatherInfo.weather
    }
    return (
        <div style={{marginLeft:600}}>
            <h3  style={{marginLeft:90}}>Weather Info</h3>
            <div className = "cardContainer">
            <Card sx={{ maxWidth: 450 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={IMAGE_URL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            <h3>{info.city}</h3>
                            <ul>
                                <li>Temparature: {info.temp}K</li>
                                <li>Temperature-Min : {info.tempMin}K</li>
                                <li>Temperature-Max : {info.tempMax}K</li>
                                <li>Humidity: {info.humidity}</li>
                                <li>Weather: <i>{info.weather}</i></li>
                                <li>Feels Like: {info.feelsLike}K</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}