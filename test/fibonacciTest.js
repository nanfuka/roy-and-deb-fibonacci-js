
const chai = require('chai');
const { assert } = chai;
const myFunction = require('../fib')
// test if the fibonaci of 1 is one
describe('fibonaci', () => {
    describe(' the fibonaci values', () => {
        it('the fibonacci of 1 should return 1', () => {
            assert.equal(myFunction.fibonacci(1), 1);

        });
    });
});


// test if the fibonacci of 10 returns 89
describe('fibonaci', () => {
    describe(' the fibonaci values', () => {
        it('the fibonacci of 1 should return 1', () => {
            assert.equal(myFunction.fibonacci(10), 89);

        });
    });
});


