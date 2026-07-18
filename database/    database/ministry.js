const database = require("./database");

module.exports = {

  ministries: [
    "وزارة المالية",
    "وزارة الدفاع",
    "وزارة الداخلية",
    "وزارة الخارجية",
    "وزارة الإعلام",
    "وزارة العدل"
  ],


  list() {
    return this.ministries;
  }

};
