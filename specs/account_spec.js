var Account = require('../account');
var assert = require('assert');

describe( "account", function() {

  var account1;

  beforeEach(function() {
  account1 = new Account("Alex", "personal"); 
  });

  it("account has name", function() {
    assert.equal("Alex", account1.name);
  });

  it("account has a type", function() {
    assert.equal("personal", account1.type);
  });

});