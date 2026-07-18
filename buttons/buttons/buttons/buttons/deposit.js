const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const database = require("../database/database");

module.exports = async (interaction) => {

    const id = interaction.user.id;

    const مبلغ = 500; // مبلغ الإيداع التجريبي


    database.إضافة_رصيد(id, مبلغ);


    const embed = new EmbedBuilder()
        .setTitle("📥 تم الإيداع")
        .setDescription(
            `✅ تمت إضافة الأموال إلى حسابك\n\n` +
            `💰 المبلغ: ${مبلغ} دينار توبي (TND)\n\n` +
            `🏦 شكراً لاستخدام بنك دينار توبي`
        )
        .setFooter({
            text: "بنك دينار توبي المركزي"
        });


    const زر = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId("account")
                .setLabel("💳 عرض الرصيد")
                .setStyle(ButtonStyle.Primary)

        );


    await interaction.reply({
        embeds: [embed],
        components: [زر],
        ephemeral: true
    });

};
