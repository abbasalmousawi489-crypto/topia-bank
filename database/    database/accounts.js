const database = require("./database");

module.exports = {

  create(userId) {

    const account = {
      id: userId,
      money: 10000,
      currency: "دينار توبي",
      card: true
    };

    database.accounts.push(account);

    return account;
  },


  get(userId) {

    let account = database.accounts.find(
      acc => acc.id === userId
    );

    if (!account) {
      account = this.create(userId);
    }

    return account;
  },


  addMoney(userId, amount) {

    const account = this.get(userId);

    account.money += amount;

    return account.money;
  },


  removeMoney(userId, amount) {

    const account = this.get(userId);

    if (account.money < amount) {
      return false;
    }

    account.money -= amount;

    return true;
  },


  transfer(from, to, amount) {

    const sender = this.get(from);
    const receiver = this.get(to);


    if (sender.money < amount) {
      return false;
    }


    sender.money -= amount;
    receiver.money += amount;


    return true;
  }

};
