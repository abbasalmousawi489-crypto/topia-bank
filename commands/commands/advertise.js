const companies = require("../database/companies");
const accounts = require("../database/accounts");

module.exports = {
  name: "advertise",
  description: "نشر إعلان مدفوع",

  async execute(interaction) {

    const company = interaction.options.getString("company");
    const text = interaction.options.getString("text");
    const price = interaction.options.getInteger("price");


    const user = accounts.get(interaction.user.id);


    if (user.money < price) {
      return interaction.reply(
        "❌ لا تملك دينار توبي كافي"
      );
    }


    accounts.removeMoney(
      interaction.user.id,
      price
    );


    companies.addAd(
      company,
      text,
      price
    );


    await interaction.reply(
      `📢 تم نشر إعلان لشركة **${company}** مقابل ${price} دينار توبي`
    );

  }
};
