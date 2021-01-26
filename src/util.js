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

export const getDayText = (line, weekIndex, weekDay, monthDays) => {
	const number = line * 7 + weekIndex - weekDay + 1;
	return number <= 0 || number > monthDays ? '' : number;
};
