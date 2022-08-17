const isStringValid = (str) => {
	if (!str || !str.trim().length) {
		return false;
	}

	return true;
};

const isValidNumber = (num) => {
	return /^[0-9]+$/.test(num);
};

module.exports = {
	isStringValid,
	isValidNumber,
};
