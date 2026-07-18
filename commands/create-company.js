const companies = require("../database/companies");
const accounts = require("../database/accounts");

module.exports = {
  name: "create-company",

  async execute(interaction) {

    const name = interaction.options.getString("name");
    const capital = interaction.options.getInteger("capital");

    const user = accounts.get(interaction.user.id);


    if (user.money < capital) {
      return interaction.reply("❌ لا تملك دينار توبي كافي");
    }


    accounts.removeMoney(
      interaction.user.id,
      capital
    );


    companies.create(
      name,
      interaction.user.id,
      capital
    );


    await interaction.reply(
      `🏢 تم إنشاء شركة **${name}** برأس مال ${capital} دينار توبي`
    );

  }
};
