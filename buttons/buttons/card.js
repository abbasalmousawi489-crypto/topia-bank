const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("💳 البطاقة البنكية")
        .setDescription(
            "بطاقتك البنكية الخاصة ببنك دينار توبي.\n\n" +
            "💳 النوع: بطاقة مواطن\n" +
            "🟢 الحالة: فعالة"
        )
        .setFooter({
            text: "بنك دينار توبي"
        });

    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
