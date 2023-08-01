import axios from 'axios'
import { useState } from 'react'


const Country = ({ obj, detailedInfo }) => {
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)
    const [icon, setIcon] = useState(null)

    if (detailedInfo) {

        const lat = obj.latlng[0]
        const lon = obj.latlng[1]
        const api_key = process.env.REACT_APP_API_KEY

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`)
        .then(response => {
            setTemp(response.data.main.temp)
            setWind(response.data.wind.speed)
            setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        })
        .catch(error => {
            setTemp(null)
            setWind(null)
            setIcon('01d')
        }
            )

        return (
            <div>
                <h1>{obj.name.common}</h1>
                <div>capital {obj.capital[0]}</div>
                <div>area {obj.area}</div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(obj.languages).map(language =>
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img src={obj.flags.png} alt={`${obj.name.common} flag`}></img>
                <h2>Weather in {obj.capital[0]}</h2>
                <div>temperature {temp}</div>
                <img src={icon} alt={`${obj.name.common} icon`}></img>
                <div>wind {wind}m/s</div>
            </div>
        )
    }
    return (
        <div>
            {obj.name.common}
        </div>
    )
}

export default Country