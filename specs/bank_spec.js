var Bank = require("../bank");
var Account = require('../account');
var assert = require("assert");

describe("bank", function(){

var bank1;
var account1;


beforeEach(function(){
  bank1 = new Bank("BenjiBank");
  account1 = new Account("Alex", "personal"); 
});


it("bank has name", function() {
  assert.equal("BenjiBank", bank1.name);
});

it("bank has no accounts", function(){
  assert.equal(0, bank1.accounts.length);
});

it("account can be added", function() {
  bank1.addAccount(account1);
  assert.equal(1, bank1.accounts.length);
});

it("find account by name", function(){
  bank1.addAccount(account1);
  assert.equal("Alex", bank1.findAccountByName("Alex").name);
})

});