const { EmbedBuilder } = require("discord.js");
const database = require("../database/database");

module.exports = async (interaction) => {

    const id = interaction.user.id;


    const حساب = database.جلب_بيانات_المستخدم(id);


    const embed = new EmbedBuilder()
        .setTitle("💳 الحساب البنكي")
        .setDescription(
            `👤 صاحب الحساب: ${interaction.user}\n\n` +
            `💰 الرصيد: ${حساب.الرصيد} دينار توبي (TND)\n\n` +
            `🏦 حالة الحساب: فعال`
        )
        .setFooter({
            text: "بنك دينار توبي المركزي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
