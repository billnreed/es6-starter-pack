import {sum} from './sum';

describe('am i running', () => {
    it('who knows', () => {
        expect(sum(5, 2)).toBe(7);
    });

    it('another one', () => {
        expect(sum(1, 1)).toBe(2);
    })
});
