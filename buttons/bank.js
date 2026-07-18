const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = async (interaction) => {

    const رسالة = new EmbedBuilder()
        .setTitle("🏦 بنك دينار توبي")
        .setDescription(
            `مرحباً بك في البنك المركزي 🏛️\n\n` +
            `اختر الخدمة التي تريدها من الأزرار بالأسفل:\n\n` +
            `💰 الحسابات\n` +
            `💸 التحويلات\n` +
            `📥 الإيداع\n` +
            `📤 السحب\n` +
            `💳 البطاقة البنكية`
        )
        .setFooter({
            text: "نظام بنك دينار توبي"
        });


    const الأزرار = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId("account")
                .setLabel("💰 حسابي")
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId("transfer")
                .setLabel("💸 تحويل")
                .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
                .setCustomId("deposit")
                .setLabel("📥 إيداع")
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId("withdraw")
                .setLabel("📤 سحب")
                .setStyle(ButtonStyle.Danger)

        );


    await interaction.reply({
        embeds: [رسالة],
        components: [الأزرار],
        ephemeral: true
    });

};
