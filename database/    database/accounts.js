const database = require("./database");

module.exports = {
  create(userId) {
    const account = {
      id: userId,
      money: 0,
      card: false
    };

    database.accounts.push(account);
    return account;
  },

  get(userId) {
    return database.accounts.find(
      acc => acc.id === userId
    );
  }
};
