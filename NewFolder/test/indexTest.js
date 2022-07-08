const index = require('../index');
const assert = require('chai').assert;

let sayHelloResult = index.sayHello();
let addNumbersResult = index.addNumbers(5,10);

describe('Index', function(){
    it('SayHello should return hello', function(){ //it('discription , new func')
        assert.strictEqual(sayHelloResult, 'hello');   //assert - to call | strictEqual = '===' | (func , 'expexted output')
    })
    it('addNumbers should return 15', function(){
        assert.strictEqual(addNumbersResult,15);
    })
    it('addNumbers should be at least 10', function(){
        assert.isAtLeast(addNumbersResult,10);
    })
})