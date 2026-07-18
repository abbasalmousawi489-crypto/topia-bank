const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("📤 السحب")
        .setDescription(
            "💸 يمكنك سحب الأموال من حسابك.\n\n" +
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
