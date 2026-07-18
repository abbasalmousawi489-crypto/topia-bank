const { EmbedBuilder } = require("discord.js");
const database = require("../database/database");

module.exports = async (interaction) => {

    const id = interaction.user.id;

    const مبلغ = 200;

    const حساب = database.جلب_بيانات_المستخدم(id);


    if (حساب.الرصيد < مبلغ) {

        return interaction.reply({
            content: "❌ لا يوجد لديك رصيد كافي للسحب",
            ephemeral: true
        });

    }


    database.خصم_رصيد(id, مبلغ);


    const embed = new EmbedBuilder()
        .setTitle("📤 تم السحب")
        .setDescription(
            `✅ تم سحب ${مبلغ} دينار توبي من حسابك\n\n` +
            `💰 العملية ناجحة`
        )
        .setFooter({
            text: "بنك دينار توبي"
        });


    await interaction.reply({
        embeds: [embed],
        ephemeral: true
    });

};
