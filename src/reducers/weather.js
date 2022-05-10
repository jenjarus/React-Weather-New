const initialState = {
    cityName: "Москва",
};

export default function weather (state = initialState, action) {
    switch(action.type) {
        case 'SET_CITY_NAME':
            return {
                ...state,
                cityName: action.cityName,
            };
        default:
            return state;
    }
}
