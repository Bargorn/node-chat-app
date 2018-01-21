const expect = require("expect");

var {isRealString} = require('./validations');

describe('isRealString', ()=>{
    it('should reject non strings values', ()=>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject only spaces string', ()=>{
        var res = isRealString("   ");
        expect(res).toBe(false);
    });
    it('should allow strings', ()=>{
        var res = isRealString("    Fabiano     ");
        expect(res).toBe(true);
    });
});