import { createStore, combineReducers } from 'redux';
import weather from './weather';

const reducers = combineReducers({
    weather: weather,
});

const store = createStore(reducers);

export default store;
