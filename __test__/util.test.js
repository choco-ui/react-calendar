import { formatNumber} from '../src/util';

describe('util test', () => {
	describe('formatNumber', () => {

		it('should return number+1 when more than 9', () => {
			expect('10').toEqual(formatNumber(9));

		});

		it('should return prefix 0 with number+1 when more than 8', () => {
			expect('09').toEqual(formatNumber(8));
		});
	});

});
