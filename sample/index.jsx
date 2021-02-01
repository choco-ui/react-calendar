import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from "@qiqzhao/react-calendar";

const App = () => (
	<>
		<div>Hello</div>
		<Calendar date={new Date(999999999999)} />
	</>
);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
