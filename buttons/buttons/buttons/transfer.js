const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const database = require("../database/database");


module.exports = async (interaction) => {

    const id = interaction.user.id;


    const مبلغ = 100;


    const حساب = database.جلب_بيانات_المستخدم(id);


    if (حساب.الرصيد < مبلغ) {

        return interaction.reply({
            content: "❌ لا يوجد لديك رصيد كافي للتحويل",
            ephemeral: true
        });

    }


    const embed = new EmbedBuilder()
        .setTitle("💸 تحويل دينار توبي")
        .setDescription(
            "🔹 نظام التحويل جاهز\n\n" +
            "حالياً هذا نموذج تجريبي للتحويل.\n" +
            "سيتم إضافة اختيار الشخص والمبلغ لاحقاً."
        )
        .setFooter({
            text: "بنك دينار توبي"
        });


    const زر = new ActionRowBuilder()
        .addComponents(

            new ButtonBuilder()
                .setCustomId("account")
                .setLabel("💳 رجوع للحساب")
                .setStyle(ButtonStyle.Primary)

        );


    await interaction.reply({
        embeds: [embed],
        components: [زر],
        ephemeral: true
    });

};
