const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("💸 تحويل الأموال")
        .setDescription(
            "يمكنك تحويل دينار توبي إلى حسابات أخرى.\n\n" +
            "🔹 نظام التحويل قيد الإعداد."
        )
        .setFooter({
            text: "بنك دينار توبي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
