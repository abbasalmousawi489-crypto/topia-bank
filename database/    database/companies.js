const database = require("./database");

module.exports = {

  create(name, owner, capital) {

    const company = {
      id: Date.now(),
      name: name,
      owner: owner,
      capital: capital,
      employees: [],
      ads: []
    };

    database.companies.push(company);

    return company;
  },


  get(name) {
    return database.companies.find(
      company => company.name === name
    );
  },


  addEmployee(companyName, userId) {

    const company = this.get(companyName);

    if (!company) return false;

    company.employees.push(userId);

    return true;
  },


  addAd(companyName, text, price) {

    const company = this.get(companyName);

    if (!company) return false;

    company.ads.push({
      text: text,
      price: price
    });

    return true;
  },


  list() {
    return database.companies;
  }

};
