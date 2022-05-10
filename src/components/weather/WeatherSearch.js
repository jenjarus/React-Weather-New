import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCityName} from '../../actions/weather';

const WeatherSearch = () => {
    const dispatch = useDispatch();
    const cityName = useSelector((store) => store.weather.cityName);
    const [city, setCity] = useState(cityName);

    const handleInput = (e) => {
        setCity(e.target.value.trim());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city) {
            dispatch(setCityName(city));
        }
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={handleInput}
                    placeholder="Введите город"
                    className="search-form__input"
                />
                <button
                    type="submit"
                    className="btn"
                >Применить</button>
            </form>
        </div>
    );
};

export default WeatherSearch;
