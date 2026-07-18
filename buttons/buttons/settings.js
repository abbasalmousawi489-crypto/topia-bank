const { EmbedBuilder } = require("discord.js");


module.exports = async (interaction) => {


    const embed = new EmbedBuilder()
        .setTitle("⚙️ إعدادات الحساب")
        .setDescription(
            "🔐 حماية الحساب\n" +
            "💳 إدارة البطاقة\n" +
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
