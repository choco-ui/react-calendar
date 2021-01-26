import { formatNumber, getDayText } from '../src/util';

describe('util test', () => {
	describe('formatNumber', () => {

		it('should return number+1 when more than 9', () => {
			expect('10').toEqual(formatNumber(9));

		});

		it('should return prefix 0 with number+1 when more than 8', () => {
			expect('09').toEqual(formatNumber(8));
		});
	});

	describe('getDayText', () => {
		it('should return empty', () => {
			expect('').toEqual(getDayText(2, 2, 2, 2));
		});

		it('should return ', () => {
			expect(21).toEqual(getDayText(2, 10, 4, 25));
		});
	});

});
