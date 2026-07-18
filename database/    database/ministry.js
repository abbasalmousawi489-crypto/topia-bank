const database = require("./database");

module.exports = {
  add(name, minister) {
    const ministry = {
      name: name,
      minister: minister
    };

    database.ministries.push(ministry);
    return ministry;
  },

  list() {
    return database.ministries;
  }
};
