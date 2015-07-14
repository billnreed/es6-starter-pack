import {sum} from './sum';

console.log('see me?');

describe('adding something', () => {
    it('works like this', () => {
        expect(sum(5, 2)).toBe(7);
    });
});
