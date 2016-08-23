import axios from 'axios';

const API_KEY = "b36b5129372075ebed7f860eaaf6b841";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial` 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};

}