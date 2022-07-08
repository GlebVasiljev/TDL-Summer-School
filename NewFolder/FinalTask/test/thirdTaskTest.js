const thirdTask = require('../Task3');
const assert = require('chai').assert;

describe('Third Task', function(){
    it('Result shoud be "MUBASHIR"=>"THE BEST" ',function(){
        assert.strictEqual(thirdTask.ScoreCounter('MUBASHIR'),'"MUBASHIR"=>"THE BEST"');
    })
    it('Result shoud be "YOU"=>"VERY GOOD" ',function(){
        assert.strictEqual(thirdTask.ScoreCounter('YOU'),'"YOU"=>"VERY GOOD"');
    })
    it('Result shoud be "MATT"=>"THE BEST" ',function(){
        assert.strictEqual(thirdTask.ScoreCounter('MATT'),'"MATT"=>"THE BEST"');
    })
    it('Result shoud be "PUBG"=>"NOT TOO GOOD" ',function(){
        assert.strictEqual(thirdTask.ScoreCounter('PUBG'),'"PUBG"=>"NOT TOO GOOD"');
    })
    
})