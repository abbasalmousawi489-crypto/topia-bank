const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {

    const embed = new EmbedBuilder()
        .setTitle("🏦 القائمة الرئيسية - بنك دينار توبي")
        .setDescription(
            "مرحباً بك في نظام البنك المركزي 🏛️\n\n" +
            "اختر الخدمة المطلوبة:\n\n" +
            "💰 الحساب البنكي\n" +
            "💸 التحويلات المالية\n" +
            "🏢 الشركات\n" +
            "🏛️ الوزارات\n" +
            "💳 البطاقة البنكية"
        )
        .setFooter({
            text: "نظام بنك دينار توبي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
