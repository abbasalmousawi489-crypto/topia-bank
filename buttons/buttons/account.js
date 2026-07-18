const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const الحسابات = require("../database/accounts");

module.exports = async (interaction) => {

    const id = interaction.user.id;

    let حساب = الحسابات[id];

    if (!حساب) {
        حسابات[id] = {
            الرصيد: 1000,
            العملة: "دينار توبي"
        };

        حساب = حسابات[id];
    }


    const رسالة = new EmbedBuilder()
        .setTitle("💳 الحساب البنكي")
        .setDescription(
            `👤 صاحب الحساب: ${interaction.user}\n\n` +
            `💰 الرصيد: ${حساب.الرصيد} ${حساب.العملة}\n\n` +
            `🏦 حالة الحساب: نشط`
        )
        .setFooter({
            text: "بنك دينار توبي المركزي"
        });


    const زر = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("card")
                .setLabel("💳 البطاقة البنكية")
                .setStyle(ButtonStyle.Primary)
        );


    await interaction.reply({
        embeds: [رسالة],
        components: [زر],
        ephemeral: true
    });

};
