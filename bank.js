var Bank = function(name){
  this.name = name;
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findAccountByName: function(name){
    return this.accounts.find(function(account){
      return account.name === name;
    });
  }
};

module.exports = Bank;