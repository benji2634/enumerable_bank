var Bank = require("../bank");
var assert = require("assert");

describe("bank", function(){

var bank1;

beforeEach(function(){
  bank1 = new Bank("BenjiBank");
});

it("bank has name", function() {
  assert.equal("BenjiBank", bank1.name);
});

it("bank has no accounts", function(){
  assert.equal(0, bank1.accounts.length);
})

});