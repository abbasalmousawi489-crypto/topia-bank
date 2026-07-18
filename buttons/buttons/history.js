const { EmbedBuilder } = require("discord.js");
const database = require("../database/database");


module.exports = async (interaction) => {


    const حساب = database.جلب_بيانات_المستخدم(
        interaction.user.id
    );


    let سجل = حساب.العمليات
        .map(x => 
        `📌 ${x.النوع} | ${x.المبلغ} دينار توبي | ${x.التاريخ}`
        )
        .join("\n");


    if (!سجل) {

        سجل = "لا توجد عمليات حالياً";

    }


    const embed = new EmbedBuilder()

        .setTitle("📜 سجل العمليات")

        .setDescription(سجل)

        .setFooter({

            text: "بنك دينار توبي"

        });



    await interaction.reply({

        embeds: [embed],

        ephemeral: true

    });


};
