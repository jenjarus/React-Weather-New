import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import WeatherInfoItem from './weatherInfo/WeatherInfoItem';
import WeatherInfoLoading from './weatherInfo/WeatherInfoLoading';
import WeatherInfoError from './weatherInfo/WeatherInfoError';

const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherBox = () => {
    const cityName = useSelector((store) => store.weather.cityName);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    const getWeather = async () => {
        setLoading(true);

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`;

            const apiResponse = await fetch(url);
            const data = await apiResponse.json();

            if(data.cod === "404"){
                setError(true);
            }
            else {
                setWeatherData(data);
                setError(false);
            }

            setLoading(false);
        } catch(err) {
            console.log(err);
        }
    };

    const renderBox = () => {
        if (!loading) {
            if (error) {
                return <WeatherInfoError />
            } else {
                return <WeatherInfoItem data={weatherData} />
            }
        } else {
            return <WeatherInfoLoading />
        }
    };

    useEffect(() => {
        getWeather();
    }, [cityName]);

    return (
        <div className="weather-box">
            {renderBox()}
        </div>
    );
};

export default WeatherBox;
