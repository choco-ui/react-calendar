export const formatNumber = (num) => {
	const _num = num + 1;
	return _num < 10 ? `0${ _num }` : `${ _num }`;
};

export const getDateByYearMonth = (year, month, day = 1) => {
	const date = new Date();
	date.setFullYear(year);
	date.setMonth(month, day);
	return date;
};

export const getWeeksByFirstDay = (year, month) => {
	return getDateByYearMonth(year, month).getDay();
};

