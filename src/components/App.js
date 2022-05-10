import Header from './Header';
import WeatherSearch from './weather/WeatherSearch';
import WeatherBox from './weather/WeatherBox';
import Footer from './Footer';

import '../styles/reset.css';
import '../styles/styles.scss';

const App = () => {
  return (
    <div className="body">
        <Header />
        <main>
            <div className="container">
                <WeatherSearch />
                <WeatherBox />
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default App;
