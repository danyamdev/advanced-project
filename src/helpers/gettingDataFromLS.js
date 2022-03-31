const gettingDataFromLS = (items, name, dispatch, action) => {
	const data = JSON.parse(localStorage.getItem(name));

	if (data) {
		dispatch(action(data));
	} else {
		localStorage.setItem(name, JSON.stringify(items));
		dispatch(action(items));
	}
};

export default gettingDataFromLS;