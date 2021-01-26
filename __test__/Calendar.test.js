import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from '../src/calendar/Calendar';

describe('Calendar component', () => {
	it('snapshot', () => {
		const constant = renderer.create(<Calendar />);
		expect(constant).toMatchSnapshot();
	});
});
