const maxTotal = require('../maxTotal');
const assert = require('chai').assert;

describe('maxTotal', function(){
    it('Result shoud be 48',function(){
        assert.strictEqual(maxTotal.maxTotalFunc([1,1,0,1,8,10,10,10,10,1]),48);
    })
    it('Result shoud be 500',function(){
        assert.strictEqual(maxTotal.maxTotalFunc([0, 0, 0, 0, 0, 0, 0, 0, 0, 500]),500);
    })
    it('Result shoud be 40',function(){
        assert.strictEqual(maxTotal.maxTotalFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),40);
    })
})