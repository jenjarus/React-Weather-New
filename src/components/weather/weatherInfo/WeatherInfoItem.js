const WeatherInfoItem = ({data}) => {
    const urlImg = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const date = new Date();
    const dateInfo =  date.toLocaleString("ru",{
        weekday: "long",
        month: "long",
        day: "numeric"
    });
    const temp = (data.main.temp > 0 ? '+' : '') + Number(data.main.temp).toFixed(0);
    const tempMin = (data.main.temp_min > 0 ? '+' : '') + Number(data.main.temp_min).toFixed(0);
    const tempMax = (data.main.temp_max > 0 ? '+' : '') + Number(data.main.temp_max).toFixed(0);

    return (
        <div className="weather-item">
            <div className="weather-item__image">
                <img src={urlImg} alt="img_weather"/>
            </div>
            <div className="weather-item__info">
                <div className="weather-item__time">{dateInfo}</div>
                <div className="weather-item__temp">{temp}°C</div>
                <div className="weather-item__condition">{data.weather[0].description}</div>
                <div className="weather-item__other">
                    <span className="weather-item__other-item">min {tempMin}°C</span>
                    <span className="weather-item__other-item">max {tempMax}°C</span>
                    <span className="weather-item__other-item">Ветер: {data.wind.speed}м/с</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfoItem;
