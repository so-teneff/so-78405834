import { sum } from "./sum"

describe('sum', () => {
    describe.each([
        [1,2,3],
        [4,5,9]
    ])('given %d and %d', (a,b, expected) => {
        it(`should equal ${expected}`, () => {
            expect(sum(a,b)).toEqual(expected);
        })
    })
})