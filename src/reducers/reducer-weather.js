import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
	switch (action.type) {
		case FETCH_WEATHER: 
			//one would think .push but this mutates the array...not what you should do with
			//react and redux
			//return state.concat([ action.payload.data ]);
			return [ action.payload.data, ...state ]; //ES6 way of above both create [city, city, city]
	}
	return state;

}