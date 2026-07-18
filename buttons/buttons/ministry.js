const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("🏛️ خدمات الوزارات")
        .setDescription(
            "يمكنك إدارة الحسابات الخاصة بالوزارات.\n\n" +
            "📑 متابعة الميزانية\n" +
            "💰 إدارة الأموال الحكومية\n" +
            "🏦 الخدمات المصرفية للوزارة"
        )
        .setFooter({
            text: "بنك دينار توبي"
        });

    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
