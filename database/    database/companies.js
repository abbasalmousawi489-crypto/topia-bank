const database = require("./database");

module.exports = {
  add(name, owner) {
    const company = {
      name: name,
      owner: owner
    };

    database.companies.push(company);
    return company;
  },

  list() {
    return database.companies;
  }
};
