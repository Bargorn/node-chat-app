var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = "jen";
        var text = "whats up";
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location message object', ()=>{
        var from = "Admin";
        var url = "https://www.google.com/maps?q=30,40";
        var location = generateLocationMessage(from, 30, 40);
        expect(location.createdAt).toBeA('number');
        expect(location).toInclude({from, url});
    });
        
});