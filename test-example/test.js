var assert = require('assert');

describe('StringSplit',function(){
   it('should return an array', function(){
       assert(Array.isArray('a,b,c'.split(',')));
   }) 
});