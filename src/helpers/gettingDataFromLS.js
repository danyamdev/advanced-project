const gettingDataFromLS = (items, name) => {
	const data = JSON.parse(localStorage.getItem(name));

	if (data) {
		// dispatch();
	} else {
		localStorage.setItem(name, JSON.stringify(items));
		// dispatch();
	}
};

export default gettingDataFromLS;