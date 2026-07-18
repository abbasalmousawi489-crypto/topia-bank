const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("⚙️ إعدادات الحساب")
        .setDescription(
            "يمكنك التحكم بإعدادات حسابك البنكي.\n\n" +
            "🔐 حماية الحساب\n" +
            "💳 إعدادات البطاقة\n" +
            "📜 سجل العمليات"
        )
        .setFooter({
            text: "بنك دينار توبي"
        });

    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
