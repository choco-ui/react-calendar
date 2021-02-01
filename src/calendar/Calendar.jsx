import React, { useEffect, useState } from 'react';
import { formatNumber, getDateByYearMonth, getWeeksByFirstDay } from '../util.js';
import './Calendar.less';

const WEEK_NAMES = [ '日', '一', '二', '三', '四', '五', '六' ];
const LINES = [ 1, 2, 3, 4, 5, 6 ];
const MONTH_DAYS = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];


const Calendar = () => {

	const [ year, setYear ] = useState(0);
	const [ month, setMonth ] = useState(0);
	const [ currentDate ] = useState(new Date());
	const monthDays = MONTH_DAYS[month];
	const weekDay = getWeeksByFirstDay(year, month);

	const getDayText = (line, weekIndex, weekDay, monthDays) => {
		const number = line * 7 + weekIndex - weekDay + 1;
		return number <= 0 || number > monthDays ? '<span>&nbsp</span>' : number;
	};

	const isToday = (line, weekIndex, weekDay, monthDays) => {
		const day = getDayText(line, weekIndex, weekDay, monthDays);
		const date = new Date();
		const todayYear = date.getFullYear();
		const todayMonth = date.getMonth();
		const todayDay = date.getDate();

		return year === todayYear && month === todayMonth && day === todayDay;
	};

	const setCurrentYearMonth = (date) => {
		setYear(date.getFullYear());
		setMonth(date.getMonth());
	};

	const monthChange = (monthChanged) => {
		const monthAfter = month + monthChanged;
		const date = getDateByYearMonth(year, monthAfter);
		setCurrentYearMonth(date);
	};

	useEffect(() => {
		setCurrentYearMonth(currentDate);
	}, []);

	return (
		<table className="table">
			<caption>
				<div className="caption-header">
					<span className="arrow prev" onClick={ () => monthChange(-1) }>&#60;</span>
					<span>{ year } - { formatNumber(month) }</span>
					<span className="arrow next" onClick={ () => monthChange(1) }>&gt;</span>
				</div>
			</caption>
			<thead>
			<tr>
				{
					WEEK_NAMES.map((week, key) => {
						return <td key={ key }>{ week }</td>;
					})
				}
			</tr>
			</thead>
			<tbody>
			{
				LINES.map((l, key) => {
					return <tr key={ key }>
						{
							WEEK_NAMES.map((week, index) => {
								const fontColor = isToday(key, index, weekDay, monthDays) ? 'red' : '#000';
								return (
									<td key={ index } style={ { 'color': fontColor } }>
										{ getDayText(key, index, weekDay, monthDays) }
									</td>
								);
							})
						}
					</tr>;
				})
			}
			</tbody>
		</table>
	);
};

export default Calendar;
