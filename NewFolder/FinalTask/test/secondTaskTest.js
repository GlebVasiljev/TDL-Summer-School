const SecondTask = require('../Task2');
const assert = require('chai').assert;

describe('SecondTask', function(){
    it('Result shoud be { id: "cjh4E", type: "album" } ',function(){
        assert.strictEqual(SecondTask.UrlGetter('http://imgur.com/a/cjh4E'),'{id:"cjh4E",type:"album"}');
    })
    it('Result shoud be { id: "59npG", type: "gallery" }',function(){
        assert.strictEqual(SecondTask.UrlGetter('http://imgur.com/gallery/59npG'),'{id:"59npG",type:"gallery"}');
    })
    it('Result shoud be { id: "altd8Ld", type: "directLink" }',function(){
        assert.strictEqual(SecondTask.UrlGetter("http://i.imgur.com/altd8Ld.png"),'{id:"altd8Ld.png",type:"directLink"}');
    })
})