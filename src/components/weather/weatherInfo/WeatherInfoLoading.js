const WeatherInfoLoading = () => {
    const urlImg = 'https://i.gifer.com/VAyR.gif';

    return (
        <div className="weather-item">
            <div className="weather-item__image">
                <span className="weather-item__loading">
                    <img src={urlImg} alt="loading"/>
                </span>
            </div>
        </div>
    );
};

export default WeatherInfoLoading;
