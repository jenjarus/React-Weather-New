const WeatherInfoError = () => {
    return (
        <div className="weather-item">
            <div className="weather-item__image">
                <span className="weather-item__error-logo">404</span>
            </div>
            <div className="weather-item__info">
                <div className="weather-item__error-info">Ошибка.<br/> Попробуйте ввести другой город</div>
            </div>
        </div>
    );
};

export default WeatherInfoError;
