const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("📥 الإيداع")
        .setDescription(
            "💰 يمكنك إضافة أموال إلى حسابك البنكي.\n\n" +
            "عملة البنك: دينار توبي"
        )
        .setFooter({
            text: "بنك دينار توبي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
