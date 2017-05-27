import { combineReducers } from "redux";

const originReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_ORIGIN": {
			return action.payload;
		}
		default:
			return state;
	}
};

const destinationsReducer = (state = [], action) => {
	switch (action.type) {
		case "UPDATE_DESTINATIONS": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	origin: originReducer,
	destinations: destinationsReducer
});

export default allReducers;
