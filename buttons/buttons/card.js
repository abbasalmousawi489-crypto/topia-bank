const { EmbedBuilder } = require("discord.js");
const database = require("../database/database");


module.exports = async (interaction) => {


    const حساب = database.جلب_بيانات_المستخدم(
        interaction.user.id
    );


    const embed = new EmbedBuilder()

        .setTitle("💳 البطاقة البنكية")

        .setDescription(

            `👤 صاحب البطاقة: ${interaction.user}\n\n` +

            `💳 رقم البطاقة: ${حساب.البطاقة.الرقم}\n\n` +

            `🟢 الحالة: ${حساب.البطاقة.الحالة}\n\n` +

            `🏦 البنك: بنك دينار توبي`

        )

        .setFooter({

            text: "بطاقة دينار توبي"

        });



    await interaction.reply({

        embeds: [embed],

        ephemeral: true

    });


};
