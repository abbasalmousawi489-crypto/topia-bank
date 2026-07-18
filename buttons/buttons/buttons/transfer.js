const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {


    const embed = new EmbedBuilder()
        .setTitle("💸 تحويل الأموال")
        .setDescription(
            "🔹 نظام التحويل بين الحسابات\n\n" +
            "سيتم إضافة التحويل الكامل لاحقاً."
        )
        .setFooter({
            text: "بنك دينار توبي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });


};
