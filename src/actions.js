import store from "./store";

export const addDestination = newDestination => dispatch => {
	const oldDestinations = store.getState().destinations;
	const newDestinations = [...oldDestinations, newDestination];
	dispatch({
		type: "UPDATE_DESTINATIONS",
		payload: newDestinations
	});
};

export const updateOrigin = origin => ({
	type: "UPDATE_ORIGIN",
	payload: origin
});
